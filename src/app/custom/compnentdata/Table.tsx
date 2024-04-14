"use client"
import React, { useEffect } from 'react';
import useProblemData from '../Hooks/useProblemData';
import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';
import {
    Table as table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

type Problem = {
    title: string;
    description: string;
    difficulty: string;
}

const Table = () => {

    const { data, getDataCallback, loading } = useProblemData();


    useEffect(() => {
        getDataCallback();
    }, []);

    return (
        <div className='bg-black h-screen space-y-48  flex items-center justify-center flex-col  '>
            {

                loading ? (<p className='text-white'>Loading...</p>) : (<>
                    <table>
                        <TableCaption>A list of All Problem</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[400px]">Title</TableHead>
                                <TableHead className="w-[400px]">Difficulty</TableHead>
                                <TableHead>Method</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className='text-white'>
                            {data.map((problem, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">
                                        {problem.Title}
                                    </TableCell>
                                    <TableCell>{problem.Difficulty}</TableCell>
                                    <TableCell>
                                        <a href={`/Details/${problem.id}`}>
                                            Solve
                                        </a>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </table>
                </>)
            }

            <Footer />
        </div>
    );
}

export default Table;
