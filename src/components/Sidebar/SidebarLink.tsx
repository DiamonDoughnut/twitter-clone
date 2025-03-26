import React from "react";

interface SidebarLinkProps {
  text: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const SidebarLink = ({ text, Icon }: SidebarLinkProps) => {
  return (
    <li className='flex items-center text-xl mb-3 hoverAnimation justify-center xl:justify-start'>
      <Icon className='h-7' />
      <span className='hidden xl:inline'>{text}</span>
    </li>
  );
};

export default SidebarLink;
