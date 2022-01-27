import React from 'react';
import { NavLink } from 'react-router-dom';

import { Icon } from '@iconify/react';

const links = [
  { url: '/search', text: 'All', icon: 'ph:folder-open-light' },
  { url: '/news', text: 'News', icon: 'ph:newspaper-light' },
  { url: '/images', text: 'Images', icon: 'clarity:image-line' },
  { url: '/videos', text: 'Videos', icon: 'uil:video' },
];

export const Links = () => (
  <div className="flex sm:justify-around justify-between items-center mt-4">
    {links.map(({ url, text, icon }) => (
      <NavLink to={url} activeClassName="text-blue-500 border-b-2 dark:text-blue-300 border-blue-500 pb-2" className="flex">
        {text}
        <Icon icon={icon} className="ml-2 mt-1" />
      </NavLink>
    ))}
  </div>
);
