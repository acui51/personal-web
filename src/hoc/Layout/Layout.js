import React from 'react'
import "./Layout.module.css"

export default function Layout(props) {
    return (
        <div>
            {props.children}
        </div>
    )
}
