import React from 'react';

function SkeletonLoader() {
  const numberOfRows = 10; // Number of rows to render

  return (
    
      <tbody>
        {Array.from({ length: numberOfRows }, (_, index) => (
          <tr
            key={index}
            className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500 hover:bg-slate-200 dark:hover:bg-navy-400"
          >
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
              <div className="h-4 w-8 bg-gray-400 dark:bg-gray-700 animate-pulse"></div>
            </td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
              <div className="h-4 w-36 bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
            </td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
              <div className="h-4 w-28 bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
            </td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
              <div className="h-4 w-40 bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
            </td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
              <div className="h-4 w-16 bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
            </td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
              <div className="h-4 w-16 bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
            </td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
              <div className="h-4 w-20 bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
            </td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
              <div className="h-8 w-8 rounded-full bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
            </td>
          </tr>
        ))}
      </tbody>
  );
}

export default SkeletonLoader;
