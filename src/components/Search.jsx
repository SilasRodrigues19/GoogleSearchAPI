import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

import { useStateContext } from '../contexts/StateContextProvider';
import { Links } from './Links';

import { Icon } from '@iconify/react';

export const Search = () => {
  const { setSearchTerm } = useStateContext();
  const [text, setText] = useState('');
  const [debouncedValue] = useDebounce(text, 1000);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input
        value={text}
        type="text"
        className="sm:w-96 w-80 h-10 bg-transparent dark:bg-transparent border rounded-full shadow-sm outline-none p-6 text-black dark:text-white hover:shadow-lg"
        placeholder="Search Google or type URL"
        onChange={(e) => setText(e.target.value)}
      />
      {text !== '' && (
        <button type="button" className="absolute top-1.5 right-4 text-2xl text-gray-500 " onClick={() => setText('')}>
          <Icon icon="jam:close" className="mt-2 mr-3" />
        </button>
      )}
      <Links />
    </div>
  );
};
