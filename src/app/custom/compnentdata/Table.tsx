"use client"
import React, { useEffect } from 'react';
import useProblemData from '../Hooks/useProblemData';
import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';

type Problem = {
    title: string;
    description: string;
    difficulty: string;
}

const Table = () => {

    const { data, getDataCallback } = useProblemData();

    console.log(data);


    useEffect(() => {
        getDataCallback();
    }, []);


    return (
        <div className='bg-black h-screen space-y-48  flex items-center justify-center flex-col  '>
            <div className='  text-white flex justify-center  '>
                <div className='flex flex-col   '>
                    {data.map((problem, index) => (
                        <Link key={index} href={` Details/${problem.id}`} >
                            <div className="flex h-16 border-b  w-[63rem]   items-center justify-around">
                                <p>{problem.Title}</p>
                                <p>{problem.Difficulty}</p>
                                <p>Solved</p>
                                <p className='bg-gray-300 p-1 rounded-xl text-black'>
                                    <Link href={problem.link}>
                                        Link
                                    </Link>
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Table;
