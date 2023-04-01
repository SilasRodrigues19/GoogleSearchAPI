import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useStateContext } from '../contexts/StateContextProvider';
import { Loading } from './Loading';

export const Results = () => {
  const { results, loading, getResults, searchTerm } = useStateContext();
  const location = useLocation();

  const limitResultsPerPage = 20;

  useEffect(() => {
    if (searchTerm !== '') {
      if (location.pathname === '/videos') {
        getResults(`/search?query=${searchTerm} videos`);
      } else if (location.pathname === '/images') {
        getResults(`/imagesearch?query=${searchTerm}`);
      } else {
        getResults(
          `${location.pathname}?query=${searchTerm}&num=${limitResultsPerPage}`
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, location.pathname]);

  if (loading) return <Loading />;

  switch (location.pathname) {
    case '/search':
      return (
        <>
          {results?.estimatedResultCount && (
            <div className='my-4'>
              <p>
                Total results: {results.estimatedResultCount.toLocaleString()}
              </p>
              <p>Limit result per page: {limitResultsPerPage}</p>
            </div>
          )}
          <div className='sm:px-56 flex flex-wrap justify-between space-y-6'>
            {results?.items?.map((item, index) => (
              <div key={index} className='md:w-2/5 w-full'>
                <a
                  className='text-sm'
                  href={item.link}
                  target='_blank'
                  rel='noreferrer'
                >
                  {item.title}
                </a>
                <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                  {item.snippet}
                </p>
              </div>
            ))}
          </div>
        </>
      );

    case '/images':
      return (
        <div className='flex flex-wrap justify-center items-center'>
          {results?.items?.map(
            ({ thumbnailImageUrl, contextLink, title }, index) => (
              <div className='sm:flex flex-1 w-110' key={index}>
                <a
                  href={contextLink}
                  target='_blank'
                  rel='noreferrer'
                  className='sm:p-3 p-5'
                >
                  <img
                    src={thumbnailImageUrl}
                    alt={title}
                    loading='lazy'
                    className='sm:w-150'
                  />
                  <p className='sm:w-36 w-36 break-words text-sm mt-2'>
                    {title}
                  </p>
                </a>
              </div>
            )
          )}
        </div>
      );
    case '/news':
      return (
        <div className='sm:px-56 flex flex-wrap justify-between items-center space-y-6'>
          {results?.articles?.map(({ link, source, title }, index) => (
            <div key={index} className='md:w-2/5 w-full'>
              <a
                href={link}
                target='_blank'
                rel='noreferrer'
                className='hover:underline'
              >
                <p className='text-lg dark:text-blue-300 text-blue-700'>
                  {title}
                </p>
              </a>
              <div className='flex gap-4'>
                <a
                  href={source?.url}
                  target='_blank'
                  rel='noreferrer'
                  className='hover:underline hover:text-blue-300'
                >
                  {' '}
                  {source?.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      );
    case '/videos':
      return (
        <div className='flex flex-wrap'>
          {results?.videos?.map(({ id, title, link }, index) => (
            <div key={id} className='p-2'>
              <a href={link} target='_blank' rel='noreferrer'>
                <img
                  src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
                  alt={title}
                  loading='lazy'
                />
                <p className='sm:w-36 w-36 break-words text-sm mt-2'>{title}</p>
              </a>
            </div>
          ))}
        </div>
      );
    default:
      return 'Error...';
  }

};
