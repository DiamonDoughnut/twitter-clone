import React from "react";
import { useRouter } from "next/navigation";

interface SidebarLinkProps {
  text: string;
  Icon: React.ComponentType<{ className?: string }>;
  linkEnabled?: boolean
}

const SidebarLink = ({ text, Icon, linkEnabled }: SidebarLinkProps) => {
  const router = useRouter()
  const handleRouting = () => {
    if (linkEnabled) {
      router.push('/')
    }
  }
  return (
    <li onClick={handleRouting} className='flex items-center text-xl mb-3 hoverAnimation justify-center xl:justify-start'>
      <Icon className='h-7' />
      <span className='hidden xl:inline'>{text}</span>
    </li>
  );
};

export default SidebarLink;
