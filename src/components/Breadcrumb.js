import React from 'react'
import { useLocation } from 'react-router-dom'
import '../scss/breadcrumb.scss'

export const Breadcrumb = () => {
    const location = useLocation();
    return (
        <div className='breadcrumb'>
            <span>{location.pathname}</span>
            <hr />
        </div>
    )
}

