import React, { useEffect, useState } from 'react'
import List from './component/List'
export default function Course() {

    let [stage, setStage] = useState();
    useEffect(() => {
        fetch('http://cfd-reactjs.herokuapp.com/elearning/v4/courses')
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setStage(res)
            })
    }, [])
    if (!stage) return <div style={{ height: 500, display: 'flex' }}><div style={{ margin: 'auto' }}>...Loaing</div></div>
    return (
        <main className="homepage" id="main">
            <List list={stage.offline} />
        </main>
    )
}
