'use client'
import React from 'react';
import Link from 'next/link'
import { Dashboard, Apps, Componen, Element, Settings, Forms, Pages } from './svg/index';

const AllLink = () => {
  const Data = [
    {
      "linkname": "/",
      "icon": "Dashboard"
    },
    {
      "linkname": "/",
      "icon": "Apps"
    },
    {
      "linkname": "/",
      "icon": "Pages"
    },
    {
      "linkname": "/",
      "icon": "Forms"
    },
    {
      "linkname": "/",
      "icon": "Componen"
    },
    {
      "linkname": "/",
      "icon": "Element"
    },
  ];

  const iconComponents = {
    Dashboard: Dashboard,
    Apps: Apps,
    Pages: Pages,
    Forms: Forms,
    Componen: Componen,
    Element: Element
  };
 
  return (
    <>
      {Data.map((item, index) => {
        const IconComponent = iconComponents[item.icon];
        return (
          <Link
            key={index}
            href={item.linkname}
            className="flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
          >
            {IconComponent && <IconComponent />}
          </Link>
        );
      })}
    </>
  );
};

export default AllLink;
