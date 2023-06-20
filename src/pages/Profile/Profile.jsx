import React from 'react'
import ProfileUserDelails from '../../Components/ProfileComponets/ProfileUserDelails'
import ReqUserPostPart from '../../Components/ProfileComponets/ReqUserPostPart'

const Profile = () => {
  return (
    <div className='px-20'>
      <div className=''>
        <ProfileUserDelails/>
      </div>
        <div>
            <ReqUserPostPart/>
        </div>
    </div>
  )
}

export default Profile
