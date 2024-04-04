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

const Navbar = ({ userId }: Data) => {
    return (
        <div className='text-white bg-black flex items-center justify-center '>
            <p className='text-2xl text-white p-4 bg-black flex items-center justify-center'>
                This Website is built to solve DSA problem
            </p>
            <p>

                {
                    userId ? <UserButton afterSignOutUrl="/" /> : (
                        <div className='space-x-2'>
                            <Link href="/sign-in" className='bg-white py-2 text-black px-1 rounded-lg' >
                                Sign In
                            </Link>

                            <Link href="/sign-up" className='bg-white py-2 text-black px-1 rounded-lg' >
                                Sign Up
                            </Link>
                        </div>
                    )
                }
            </p>
        </div>
    )
}

export default Navbar
