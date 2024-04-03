"use client"
import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../../../firebaseConfig'
import { ChevronRight, CircleCheckBig, Minus } from 'lucide-react'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"



interface IPARAMS {
    param: any
}
const RightDown = ({ param }: IPARAMS) => {
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
        <div className='flex flex-col  space-x-4 mt-10  p-1 h-64 ml-4 space-y-4'>

            <div className='flex items-center space-x-4'>
                <div className='flex items-center'>
                    <CircleCheckBig size={16} className='text-green-600' />
                    Test Case
                </div>

                <div className='flex  items-center'>
                    <div className='flex'>
                        <ChevronRight size={16} className='text-green-600' />
                        <Minus size={16} className='text-green-600' />
                    </div>
                    Test Result
                </div>
            </div>
            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList className="">
                    <TabsTrigger value="account" >
                        <p >
                            Test Case 1
                        </p>
                    </TabsTrigger>
                    <TabsTrigger value="password">
                        <p >
                            Test Case 2
                        </p>
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    <div className='flex space-y-5 flex-col'>
                        <div className='flex space-x-3 tracking-wide' >
                            {
                                data?.Inputs ? (
                                    <>
                                        <p>Test Case :- </p>
                                        {
                                            data?.Inputs
                                        }
                                    </>
                                ) : ""
                            }
                        </div>
                        <div>
                            {
                                data?.Target ? (
                                    <>
                                        <p>Target :-  {data?.Target}</p>
                                    </>
                                ) : ""
                            }
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="password">
                    <div className='flex space-y-5 flex-col'>

                        <div className='flex space-x-3 tracking-wide' >
                            {
                                data?.Inputs ? (
                                    <>
                                        <p>Test Case :-</p>
                                        <p>324</p>
                                    </>
                                ) : ""
                            }
                        </div>
                        <div>
                            {
                                data?.Target ? (
                                    <>
                                        <p>Target :-  6</p>
                                    </>
                                ) : ""
                            }
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default RightDown
