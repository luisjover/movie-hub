import { FC } from 'react'

import './profileChart.css'

export interface ProfileChartPropTypes {
    imageUrl: string | undefined,
    userName: string | undefined,
}


export const ProfileChart: FC<ProfileChartPropTypes> = ({ imageUrl, userName }) => {
    return (
        <div className='profile-chart-container'>

            <p className='profile-username'>{userName}</p>
            <div className='profile-img-container'><img className='pcc-profile-image' src={imageUrl} alt="Profile-picture" /></div>
            <div className='profile-data-container'>


            </div>

            {/* <div className='pcc-bottom'>
                <button>Edit</button>
            </div> */}
        </div>
    )
}

