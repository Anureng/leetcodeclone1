"use client"
import React, { useEffect } from 'react';
import useProblemData from '../Hooks/useProblemData';
import Link from 'next/link';

type Problem = {
    title: string;
    description: string;
    difficulty: string; // Corrected the casing of 'difficulty'
}

const Table = () => {

    const { data, getDataCallback } = useProblemData();

    console.log(data);


    useEffect(() => {
        getDataCallback();
    }, []);


    return (
        <div>
            <div className='bg-black w-screen h-screen text-white flex justify-center '>
                <div className='flex flex-col  '>
                    {data.map((problem, index) => (
                        <Link key={index} href={` Details/${problem.id}`} >
                            <div className="flex h-16 border w-96  bg-red-900  items-center justify-around">
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
        </div>
    );
}

export default Table;
