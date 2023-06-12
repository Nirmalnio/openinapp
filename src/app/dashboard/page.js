"use client";
import React,{useState,useEffect} from 'react'
import style from "./dashboard.module.css"
import Sidebar from '@/component/dashboard/sidebar'
import Dashboardheader from '@/component/dashboard/header/dashboardheader';
function Dashboard() {
  return (
    <div className={style.DashboardDiv}>
           <div className={style.Dashboardinside}>
           <Sidebar/>
           <div>
             <Dashboardheader/>            
           </div>
                       
           </div>
    </div>
  )
}

export default Dashboard