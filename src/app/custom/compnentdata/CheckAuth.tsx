import { auth, UserButton, } from '@clerk/nextjs'
import React from 'react'
import Navbar from './Navbar';

const CheckAuth = () => {
    const { userId } = auth()
    console.log(userId);

    return (
        <div className='bg-black'>
            <Navbar userId={userId} />
        </div>
    )
}

export default CheckAuth
