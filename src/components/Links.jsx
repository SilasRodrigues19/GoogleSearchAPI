import React from 'react';
import { NavLink } from 'react-router-dom';

import { Icon } from '@iconify/react';

const links = [
  { url: '/search', text: 'All', icon: 'material-symbols:border-all-rounded' },
  { url: '/images', text: 'Images', icon: 'solar:gallery-bold' },
  {
    url: '/news',
    text: 'News',
    icon: 'material-symbols:breaking-news-alt-1',
    disabled: true,
  },
  {
    url: '/videos',
    text: 'Videos',
    icon: 'ph:monitor-play-bold',
    disabled: true,
  },
];

export const Links = () => (
  <div className='flex sm:justify-around justify-between items-center mt-4'>
    {links.map(({ url, text, icon, disabled }, index) => (
      <NavLink
        key={index}
        to={url}
        activeClassName='text-blue-500 border-b-2 dark:text-blue-300 border-blue-500'
        className={`flex py-2 ${
          disabled ? 'disabled cursor-not-allowed text-gray-400' : ''
        }`}
        title={disabled ? 'This link is disabled' : ''}
        onClick={(e) => disabled && e.preventDefault()}
      >
        {text}
        <Icon icon={icon} className='ml-2 mt-1' />
      </NavLink>
    ))}
  </div>
);
