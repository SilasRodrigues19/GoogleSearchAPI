import React from 'react';

export const Footer = () => (
  <div className='w-full fixed bottom-0 text-center p-10 mt-10 border-t dark:border-gray-700 border-gray-200 '>
    {`Copyright © 2022 - ${new Date().getFullYear()} - Google Search API, Inc.`}
  </div>
);
