import Link from 'next/link'
import React, { use } from 'react'
import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
    auth
} from "@clerk/nextjs";
import CheckAuth from './CheckAuth';

type Data = {
    userId: string | null
}

const Navbar = () => {
    return (
        <div className='text-white bg-black flex items-center justify-center '>
            <p className='text-2xl text-white p-4 bg-black flex items-center justify-center'>
                This Website is built to solve DSA problem
            </p>
            <p>


            </p>
        </div>
    )
}

export default Navbar
