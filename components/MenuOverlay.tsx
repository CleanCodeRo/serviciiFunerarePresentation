import React from 'react';
import NavLink from './NavLink';

interface LinkItem {
  path: string;
  title: string;
}

interface MenuOverlayProps {
  links: LinkItem[];
  setNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links, setNavbarOpen }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index} className='my-8'>
          <NavLink href={link.path} title={link.title} setNavbarOpen={setNavbarOpen}/>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
