"use client"
import { useCallback, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../firebaseConfig';


const useProblemData = () => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true)

    const getDataCallback = useCallback(async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "Problem"));
            const store: any = [];
            querySnapshot.forEach((doc) => {
                store.push(doc.data());
            });
            setData(store);
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }, []);

    return { data, getDataCallback, loading };
};

export default useProblemData;
