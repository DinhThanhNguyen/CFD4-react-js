import React from 'react'

export default function Accordion(props) {
    return (
        <div className="accordion">
        <div className="accordion__title">
          <div className="date">{props.date}</div>
          <h3>{props.intro}</h3>
        </div>
        <div className="content">
          I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that offers
          some tangible benefits over alternatives like VueJS for simple page interactions.
        </div>
      </div>
    )
}
