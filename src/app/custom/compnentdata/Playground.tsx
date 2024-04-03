"use client"
import { javascript } from '@codemirror/lang-javascript'
import { vscodeDark } from '@uiw/codemirror-theme-vscode'
import ReactCodeMirror from '@uiw/react-codemirror'
import assert from 'assert'
import React, { useCallback, useEffect, useState } from 'react'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../../../firebaseConfig';
import RightPlayground from './RightPlayground';
import RightDown from './RightDown';
import ConfettiComponent from './Confetti';



export interface IPARAMS {
    param: any
}


const Playground = ({ param }: IPARAMS) => {


    const [starterCode, setStarterCode] = useState<string>("")
    const [getData, setGetData] = useState(starterCode)
    const [showConfetti, setShowConfetti] = useState(false);

    const updateData = useCallback((val: string) => {
        // GetData(val)
        setGetData(val)
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            const docRef = doc(db, "Problem", param.id);
            const docSnap = await getDoc(docRef);
            setStarterCode(docSnap.data()?.initialValue)
            console.log(starterCode);
        };
        fetchData();
    }, [param.id]);



    const singleDataFirebase = async () => {
        try {
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
            }
            else {
                alert("Noob")
            }
        } catch (error) {
            console.error("Error during code execution:", error);
            alert("noob")
            return false
        }
    }



    return (
        <div className='flex  justify-between'>
            <div className='w-50% '>
                <RightPlayground param={param} />
            </div>

            <div className='w-50%'>
                <ReactCodeMirror
                    value={getData}
                    theme={vscodeDark}
                    extensions={[javascript()]}
                    onChange={updateData}
                    height="400px"
                    width='700px'
                />
                <button className='bg-gray-600 p-1 rounded-xl mt-2 text-white' onClick={singleDataFirebase}>Submit Code</button>
                <RightDown param={param} />
                {showConfetti && <ConfettiComponent width={1400} height={600} />}
            </div>
        </div>
    )
}

export default Playground;


