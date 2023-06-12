"use client";
import React,{useState,useEffect} from 'react'
import style from "./dashboard.module.css"
import Sidebar from '@/component/dashboard/sidebar'
import Dashboardheader from '@/component/dashboard/header/dashboardheader';
import Chart from '@/component/dashboard/charts/Charts';
import Circlechart from '@/component/dashboard/charts/CircleChart';
import Schedulecard from '@/component/dashboard/Schedule/Schedulecard';
function Dashboard() {
  return (
    <div className={style.DashboardDiv}>
           <div className={style.Dashboardinside}>
           <Sidebar/>
          <div>
             <Dashboardheader/>  
             <Chart/>
             <div className={style.btmsecDiv}> 
                        <Circlechart/>
                        <Schedulecard/>
             </div>
          </div>
                       
           </div>
    </div>
  )
}

export default Dashboard