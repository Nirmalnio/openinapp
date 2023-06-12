"use client";
import React,{useState,useEffect} from 'react'
import style from "./dashboard.module.css"
import Sidebar from '@/component/dashboard/sidebar'
import { TransctionIcon, peopleicon, revenueicon, successicon } from '@/Assets/commonsvg';
import Topcard from '@/component/dashboard/cards/Topcard';
function Dashboard() {



  const cardarr = [
     {
      svg : revenueicon,
      title  : "Total Revenues",
      amount : "$2,129,430",
      bg : "#DDEFE0"

     },
     {
      svg : TransctionIcon,
      title  : "Total Transactions",
      amount : "1,520",
      bg : "#F4ECDD"
     },
     {
      svg : successicon,
      title  : "Total Likes",
      amount : "9,721",
      bg : "#EFDADA"
     },
     {
      svg : peopleicon,
      title  : "Total Users",
      amount : "892",
      bg : "#DEE0EF"

     },
  ]

  return (
    <div className={style.DashboardDiv}>
           <div className={style.Dashboardinside}>
           <Sidebar/>
            <div>
              
              <div className={style.cardssecDiv}>
                      {cardarr?.map((item,id)=>{
                        return(
                          <Topcard item={item}/>
                          )
                      })}
              </div>

              <div>
                
              </div>

            </div>
           </div>
    </div>
  )
}

export default Dashboard