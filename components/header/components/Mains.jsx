import React from 'react';
import Searchbar from './Searchbar';


const Mains = () => {
   
  return (
    <>
    <div
              className="flex"
              x-data="usePopper({placement:'bottom-end',offset:12})"
            >
            <Searchbar/>
            
          
            </div>
    </>
  )
}

export default Mains