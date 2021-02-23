import React from 'react'

export default function Memtor({ avatar, position, title, website, content }) {
    return (
        <div className="teaches">
            <div className="teacher">
                <div className="avatar">
                    <img src={avatar} alt="" />
                </div>
                <div className="info">
                    <div className="name">{title}</div>
                    <div className="title">{position}</div>
                    <p className="intro">
                        {content}
                    </p>
                    <p><strong>Website:</strong> <a href={website}>{website}</a></p>
                </div>
            </div>
        </div>
    )
}
