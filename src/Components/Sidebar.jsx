import React, { useState } from 'react';
import { assets } from '../assets/assets'; // Import your assets

const Sidebar = () => {

    const [extended,setExtended]=useState(false)
    
  return (
    <div className="sidebar min-h-screen inline-flex flex-col justify-between bg-black text-gray-200">
        <div className="top flex flex-col items-center py-3">
            <img className='w-10 h-10 cursor-pointer' onClick={()=>setExtended(prev=>!prev)} src={assets.menu} alt="Menu" />
            <div className="mt-20 flex items-center gap-3 px-5 py-1.5 bg-gray-700 rounded-full text-sm cursor-pointer hover:bg-gray-600 hover:text-white transition-colors duration-300">
                <img className='w-5 h-5' src={assets.plus} alt="New Chat" />
                {extended?<p>New Chat</p>:null}
            </div>
            {extended?
              <div className="mt-8 w-full">
              <p className="text-sm text-gray-400 px-4">Recent</p>
              <div className="recent-entry flex items-center gap-3 p-2 pl-4 rounded-md text-gray-400 cursor-pointer hover:bg-gray-700 hover:text-white transition-colors duration-300">
                  <img className='w-6 h-6' src={assets.message} alt="Recent Chat" />
                  <p>What is React...</p>
              </div>
          </div>:
          null
            
        
        
        
        }
          
        </div>

        <div className="bottom mt-6">
            <div className="bottom-item flex items-center gap-3 px-4 py-3 hover:bg-gray-700 hover:text-white cursor-pointer transition-colors duration-300">
                <img className='w-8 h-8' src={assets.question} alt="Help" />
                {extended?<p>Help</p>:null}
            </div>
            <div className="bottom-item flex items-center gap-3 px-4 py-3 hover:bg-gray-700 hover:text-white cursor-pointer transition-colors duration-300">
                <img className='w-8 h-8' src={assets.history} alt="Activity" />
                {extended?<p>Activity</p>:null}
            </div>
            <div className="bottom-item flex items-center gap-3 px-4 py-3 hover:bg-gray-700 hover:text-white cursor-pointer transition-colors duration-300">
                <img className='w-8 h-8' src={assets.setting} alt="Settings" />
                {extended?<p>Settings</p>:null}
            </div>
        </div>
    </div>
  );
}

export default Sidebar;
