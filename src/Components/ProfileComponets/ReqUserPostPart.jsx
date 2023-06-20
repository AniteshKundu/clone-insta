import React, { useState } from 'react'
import { AiOutlineTable, AiOutlineUser } from 'react-icons/ai'
import { BiBookmark } from "react-icons/bi"
import { RiVideoAddLine } from 'react-icons/ri'

const ReqUserPostPart = () => {
    const [activeTab,setActiveTab]=useState()
    const tabs=[
        {
            tab: "Post",
            icon:<AiOutlineTable></AiOutlineTable>,
            activeTab:""
        },
        {
            tab: "Reels",
            icon:<RiVideoAddLine/>
        },
        {
            tab: "Saved",
            icon:<BiBookmark/>,
        },
        {
            tab: "Tagged",
            icon:<AiOutlineUser/>
        }
    ] 

  return (
    <div>
        <div className='flex space-x-14 border-t relative '>
            {tabs.map((items)=>  <div onClick={()=>setActiveTab(items.tab)} ClassName={'${activeTab===items.tab?"border-t border-black":"opacity-60"} flex items-center cursor-pointer py-2 text-sm'}>
                <p> {items.icon}</p>
                <p className='ml-1'> {items.tab}</p>
            </div>
            )}
        </div>
    </div>
  )
}

export default ReqUserPostPart