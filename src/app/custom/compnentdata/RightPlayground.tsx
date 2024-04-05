"use client"
import React, { useEffect, useState } from 'react'
// import GetSingleData from '../Hooks/GetSingleData'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../../../firebaseConfig'
import { Lightbulb, Lock, Tag } from 'lucide-react'
import Link from 'next/link'


interface IPARAMS {
    param: any
}

const RightPlayground = ({ param }: IPARAMS) => {

    const [data, setData] = useState<any>()


    useEffect(() => {
        const fetchData = async () => {
            const docRef = doc(db, "Problem", param.id);
            const docSnap = await getDoc(docRef);
            console.log("Document data:", docSnap.data());
            setData(docSnap.data())
        };
        fetchData();
    }, []);

    return (
        <div className='space-y-12 p-2 mt-12'>
            <div className='space-y-2'>
                <div className='flex font-medium items-center text-2xl'>
                    <div>1.</div>
                    <div className=''>
                        {
                            data?.Title
                        }
                    </div>
                </div>


                <div className='flex items-center space-x-2'>
                    <div className='text-[#1CC5D5] text-xs bg-gray-100 w-fit rounded-xl p-1'>
                        {
                            data?.Difficulty
                        }
                    </div>
                    <div className=' flex items-center text-xs bg-gray-100 w-fit rounded-xl p-1'>
                        <Tag size={16} />
                        Topics
                    </div>

                    <div className='flex items-center space-x-1 text-xs bg-gray-100 w-fit rounded-xl p-1'>
                        <Lock size={16} />
                        Companies
                    </div>

                    <div className='flex items-center text-xs bg-gray-100 w-fit rounded-xl p-1'>
                        <Lightbulb size={20} />
                        Hint
                    </div>
                </div>

            </div>

            <div className='font-light text-lg' style={{ whiteSpace: 'pre-line' }}>
                {
                    data?.Description
                }
            </div>
            <div >
                <p className='font-bold'>Constraints</p>
                <div>
                    {
                        data?.Constraints && data?.Constraints.map((el: string, i: string) => (
                            <li className='list-none font-light' key={i}>{el}</li>
                        ))
                    }
                </div>
            </div>

            <div className='flex items-center space-x-3'>
                <p>Link of the project</p>
                <Link href={String(data?.link)} className='bg-gray-300 p-1 w-fit rounded-xl text-black'>
                    Link
                </Link>
            </div>
            <div className='mt-24 space-y-1'>
                <div className='flex space-x-1 text-lg font-semibold'>
                    <p>
                        You can write code in code editor and it only support
                    </p>

                    <p className='bg-gray-500 px-1 rounded-lg text-white'>JAVA SCRIPT</p>
                </div>
                <p className='text-xl font-semibold'>This  website is help to solve dsa Problem </p>
                <p>
                    This website is build by Anurag Sidhu .
                </p>
            </div>

        </div>
    )
}

export default RightPlayground
