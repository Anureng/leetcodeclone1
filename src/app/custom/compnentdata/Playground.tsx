"use client"
import { javascript } from '@codemirror/lang-javascript'
import { vscodeDark } from '@uiw/codemirror-theme-vscode'
import ReactCodeMirror from '@uiw/react-codemirror'
import { useToast } from "@/components/ui/use-toast"
import React, { useCallback, useEffect, useState } from 'react'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../../../firebaseConfig';
import RightPlayground from './RightPlayground';
import RightDown from './RightDown';
import ConfettiComponent from './Confetti';
import { Button } from '@/components/ui/button'
import Split from 'react-split'




export interface IPARAMS {
    param: any
}


const Playground = ({ param }: IPARAMS) => {


    const [starterCode, setStarterCode] = useState<string>("")
    const [buttonLoading, setButtonLoading] = useState<boolean>(false)
    const [getData, setGetData] = useState("")
    const [showConfetti, setShowConfetti] = useState(false);

    const updateData = useCallback((val: string) => {
        // GetData(val)
        setGetData(val)
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            const docRef = doc(db, "Problem", param.id);
            const docSnap = await getDoc(docRef);
            setGetData(docSnap.data()?.initialValue)
            console.log(docSnap.data()?.initialValue);
            console.log(starterCode);

        };
        fetchData();
    }, [param.id]);

    const { toast } = useToast()



    const singleDataFirebase = async () => {
        try {
            setButtonLoading(true)
            let startIndex = getData.indexOf("{");
            let slicedData = getData.slice(startIndex);

            const docRef = doc(db, "Problem", param.id);

            const docSnap = await getDoc(docRef);
            const fn = new Function(docSnap.data()?.argument, slicedData)

            console.log("Document data:", docSnap.data()?.argument);

            const target = docSnap.data()?.Inputs1

            const inputData = docSnap.data()?.Inputs

            let solvedData;

            if (docSnap.data()?.argumentlength === 1) {
                solvedData = fn(inputData)
                console.log(solvedData);
            }
            else {
                solvedData = fn(inputData, target)
                console.log(solvedData);
            }


            if (JSON.stringify(solvedData) == JSON.stringify(docSnap.data()?.output)) {
                setShowConfetti(true);
                setTimeout(() => {
                    setShowConfetti(false);
                }, 5000);
                setButtonLoading(false)
            }
            else {
                alert("Write again code")
                setButtonLoading(false)
            }
        } catch (error) {
            console.error("Error during code execution:", error);
            return false
        }
    }

    return (
        <div className='flex h-screen  justify-between w-screen overflow-hidden'>
            <Split
                className="split"
            >
                <div className='w-50% '>
                    <RightPlayground param={param} />
                </div>


                <div className='w-50% h-96 '>

                    <div>
                        <ReactCodeMirror
                            value={getData}
                            theme={vscodeDark}
                            extensions={[javascript()]}
                            onChange={updateData}
                            height="400px"
                            width='100vw'
                        />
                        <Button className={` p-1 rounded-xl mt-2   `} disabled={buttonLoading} onClick={singleDataFirebase}>{buttonLoading ? 'Loading...' : 'Submit Code'}</Button>
                    </div>
                    <RightDown param={param} />

                    {showConfetti && <ConfettiComponent width={1400} height={600} />}
                </div>
            </Split>
        </div>
    )
}

export default Playground;


