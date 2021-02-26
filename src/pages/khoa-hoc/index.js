import React, { useEffect, useState } from 'react'
import pageApi from '../../api/pageApi';
import List from './component/List'
export default function Course() {

    let [stage, setStage] = useState();
    useEffect(() => {
        pageApi.courses()
            .then(res => {
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
