import React from 'react';
import { Link } from 'react-router-dom';

import { Search } from './Search';

import { Icon } from '@iconify/react';

export const Navbar = ({ setDarkTheme, darkTheme }) => (
  <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200 ">
    <div className="flex justify-between items-center space-x-5 w-screen ">
      <Link to="/">
        <p className="flex text-2xl font-bold text-gray-500 py-1 px-2 rounded dark:text-white">
          Google <Icon icon="la:search" className="mt-1 ml-2" />
        </p>
      </Link>
      <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-xl dark:text-gray-900 px-2 py-1">
        {darkTheme ?
          <Icon icon="vaadin:moon-o" color="white" rotate={3} /> :
          <Icon icon="clarity:sun-line" color="black" />
        }
      </button>
    </div>
    <Search />
  </div>
);
