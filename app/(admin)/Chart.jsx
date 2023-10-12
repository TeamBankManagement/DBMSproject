'use client'

import React, { useEffect, useRef, useState } from 'react';
import ApexCharts from 'apexcharts';

const Chart = (props) => {
  const { chartData } = props;
    const popperRef = useRef(null);
    const popperRootRef = useRef(null);
    const [isShowPopper, setIsShowPopper] = useState(false);
 
    useEffect(() => {
    
      const chart = new ApexCharts(popperRootRef.current, chartData);
      chart.render();
  
      return () => {
        chart.destroy();
      };
    }, []);
  
    return (
        <div>
        <div ref={popperRootRef}></div>
      </div>
    );
  };
  
  export default Chart;
  