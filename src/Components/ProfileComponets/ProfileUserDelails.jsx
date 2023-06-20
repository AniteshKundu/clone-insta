import React from 'react'
import {TbCircleDashed} from 'react-icons/tb'

const ProfileUserDelails = () => {
  return (
    <div className="py-10 w-full border">
      <div className="flex items-center">
        <div className='w-[15%]'>
            <img className='w-32 h-32 rounded-full' src="https://cdn.pixabay.com/photo/2023/03/05/16/20/sea-7831815_640.jpg" alt=""/>
        </div>

        <div className='space-y-5 '> 
            <div className="flex space-x-10 items-center">
            <p>Username</p>
            <button>Edite Profile</button>
            <TbCircleDashed></TbCircleDashed>
            </div>
            <div className="flex space-x-10">
                <div>
                    <span className="front-semibold mr-2">10</span>
                    <span>Posts</span>
                </div>
                <div>
                    <span className="front-semibold mr-2">5</span>
                    <span>Follower</span>
                </div>
                <div>
                    <span className="front-semibold mr-2">7</span>
                    <span>Following</span>
                </div>
            </div>
            <div>
                <p className="font-Semibold">Full Name</p>
                <p className="font-thin text-sm">Fitness is my passion 💪🏼 Proud supporter of the Indian Army 🇮🇳 Jai Hind, Jai Bharat 🙏🏼</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileUserDelails
