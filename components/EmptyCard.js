import { useState } from 'react'

export default function Card({ data, width }) {

    return (
        <div>
            {width < 768 &&<></>}
            {width > 768 &&<></>}
            <h1>{data}</h1>
        </div>
    )
}