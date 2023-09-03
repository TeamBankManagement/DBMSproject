import React from "react";

import Example from "./Example";

const Sidebar = () => {
  return (
    <>  
        <div className="sidebar print:hidden">        
          <Example/>       
        </div>     
     
     
    </>
  );
};

export default Sidebar;
