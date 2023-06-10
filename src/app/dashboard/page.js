"use client";
import React,{useState,useEffect} from 'react'
import style from "./dashboard.module.css"
import Sidebar from '@/component/dashboard/sidebar'
function Dashboard() {
  return (
    <div className={style.DashboardDiv}>
           <div className={style.Dashboardinside}>
           <Sidebar/>
              
           </div>
    </div>
  )
}

export default Dashboard