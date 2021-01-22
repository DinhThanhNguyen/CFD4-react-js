import React from 'react'
import ReactDOM from 'react-dom'

export default function Loading() {
    return ReactDOM.createPortal (
        <div className="pageLoading">
            <div className="Loading"></div>
        </div>,
        document.getElementById('root2')
    )
}
