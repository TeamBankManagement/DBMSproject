'use client'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit,faImage,faLeaf,faProjectDiagram,faHistory , faInfo, faCalendar } from '@fortawesome/free-solid-svg-icons';

const tabAll =[
    {
      "icon": faUserEdit,
      "iconColor": "text-secondary",
      "iconBackgroundColor": "bg-secondary/10 dark:bg-secondary-light/15",
      "title": "User Photo Changed",
      "description": "John Doe changed his avatar photo"
    },
    {
      "icon": faCalendar,
      "iconColor": "text-info",
      "iconBackgroundColor": "bg-info/10 dark:bg-info/15",
      "title": "Mon, June 14, 2021",
      "description": "08:00 - 09:00 | Frontend Conf"
    },
    {
      "icon": faImage,
      "iconColor": "text-primary",
      "iconBackgroundColor": "bg-primary/10 dark:bg-accent-light/15",
      "title": "Images Added",
      "description": "Mores Clarke added new image gallery"
    },
    {
      "icon": faLeaf,
      "iconColor": "text-success",
      "iconBackgroundColor": "bg-success/10 dark:bg-success/15",
      "title": "Design Completed",
      "description": "Robert Nolan completed the design of the CRM application"
    },
    {
      "icon": faInfo,
      "iconColor": "text-info",
      "iconBackgroundColor": "bg-info/10 dark:bg-info/15",
      "title": "Wed, June 21, 2021",
      "description": "16:00 - 20:00 | UI/UX Conf"
    },
    {
      "icon": faProjectDiagram,
      "iconColor": "text-warning",
      "iconBackgroundColor": "bg-warning/10 dark:bg-warning/15",
      "title": "ER Diagram",
      "description": "Team completed the ER diagram app"
    },
    {
      "icon": faCalendar,
      "iconColor":"text-info",
      "iconBackgroundColor": "bg-info/10 dark:bg-info/15",
      "title": "THU, May 11, 2021",
      "description": "10:00 - 11:30 | Interview, Konnor Guzman"
    },
    {
      "icon": faHistory,
      "iconColor": "text-error",
      "iconBackgroundColor": "bg-error/10 dark:bg-error/15",
      "title": "Weekly Report",
      "description": "The weekly report was uploaded"
    }
  ]
const tabAlerts =[
   
    {
      "icon": faImage,
      "iconColor": "text-primary",
      "iconBackgroundColor": "bg-primary/10 dark:bg-accent-light/15",
      "title": "Images Added",
      "description": "Mores Clarke added new image gallery"
    },
    {
      "icon": faLeaf,
      "iconColor": "text-success",
      "iconBackgroundColor": "bg-success/10 dark:bg-success/15",
      "title": "Design Completed",
      "description": "Robert Nolan completed the design of the CRM application"
    },
    {
      "icon": faInfo,
      "iconColor": "text-info",
      "iconBackgroundColor": "bg-info/10 dark:bg-info/15",
      "title": "Wed, June 21, 2021",
      "description": "16:00 - 20:00 | UI/UX Conf"
    },
    {
      "icon": faProjectDiagram,
      "iconColor": "text-warning",
      "iconBackgroundColor": "bg-warning/10 dark:bg-warning/15",
      "title": "ER Diagram",
      "description": "Team completed the ER diagram app"
    },
    {
      "icon": faCalendar,
      "iconColor":"text-info",
      "iconBackgroundColor": "bg-info/10 dark:bg-info/15",
      "title": "THU, May 11, 2021",
      "description": "10:00 - 11:30 | Interview, Konnor Guzman"
    },
    {
      "icon": faHistory,
      "iconColor": "text-error",
      "iconBackgroundColor": "bg-error/10 dark:bg-error/15",
      "title": "Weekly Report",
      "description": "The weekly report was uploaded"
    }
  ]
  

const ExampleComponent = ({activeTab}) => {
   
    let items = [];
  if (activeTab === 'tabAll') {
    items = [...tabAll];
  } else if (activeTab === 'tabAlerts') {
    // Add code to handle other tabs or define other tab-specific data
    items = [...tabAlerts];
  }
  return (
    <div className={`space-y-4 overflow-y-auto px-4 py-4 ${activeTab === 'tabAll' ? 'is-scrollbar-hidden' : ''}`} style={{ transition: 'all 300ms ease-in-out', opacity: 1, transform: 'translate3d(0,0,0)' }}>
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-3">
          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${item.iconBackgroundColor}`}>
            <FontAwesomeIcon icon={item.icon} className={`h-4 w-4 ${item.iconColor} `} />
          </div>
          <div>
            <p className="font-medium text-slate-600 dark:text-navy-100">{item.title}</p>
            <div className="mt-1 line-clamp-1 text-xs text-slate-400 dark:text-navy-300">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExampleComponent;
