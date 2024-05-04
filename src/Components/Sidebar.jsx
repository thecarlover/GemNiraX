import React from 'react'
import { assets } from '../assets/assets'


const Sidebar = () => {
  return (
    <div className="sidebar min-h-screen inline-flex flex-col justify-between bg-slate-100">
        <div className="top">
            <img className='w-7 h-7' src={assets.menu} alt="" />
            <div className="new-chat">
                <img className='w-7 h-7' src={assets.plus} alt="" />
                <p>New Chat</p>
            </div>
            <div className="recent">
                <p className="recent-title">
                    Recent
                </p>
                <div className="recent-entry">
                    <img className='w-7 h-7' src={assets.message} alt="" />
                    <p>What is React...</p>
                </div>
            </div>

        </div>

        <div className="bottom">
            <div className="bottom-item">
                <img className='w-8 h-8' src={assets.question} alt="" />
                <p>Help</p>
            </div>
            <div className="bottom-item">
                <img className='w-8 h-8' src={assets.history} alt="" />
                <p>Activity</p>
            </div>
            <div className="bottom-item">
                <img className='w-8 h-8' src={assets.setting} alt="" />
                <p>Setting</p>
            </div>

        </div>
    </div>
    
  )
}

export default Sidebar