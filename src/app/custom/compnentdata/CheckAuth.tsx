import { auth, UserButton, } from '@clerk/nextjs'
import React, { useState } from 'react'
import Navbar from './Navbar';

const CheckAuth = () => {


    return (
        <div className='bg-black'>
            <Navbar />
        </div>
    )
}

export default CheckAuth
