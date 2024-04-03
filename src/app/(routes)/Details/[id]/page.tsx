import Playground from '@/app/custom/compnentdata/Playground';
import React from 'react'

interface IPARAMS {
    params: string
}

const page = ({ params }: IPARAMS) => {
    console.log(params);



    return (
        <div>
            <Playground param={params} />
        </div>
    )
}

export default page
