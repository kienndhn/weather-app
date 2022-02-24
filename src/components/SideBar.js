import React from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
    
    return (
        <div className='side-bar'>
            <div className='title-container'>Dashboard</div>
            <Link to={'/'} style={{ textDecoration: 'none' }}>
                <div className='side-bar-button'>
                    Home
                </div>
            </Link>
            <Link to={'/analysis'} style={{ textDecoration: 'none' }}>
                <div className='side-bar-button'>
                    Analysis
                </div>
            </Link>
            <Link to={'/aboutus'} style={{ textDecoration: 'none' }}>
                <div className='side-bar-button'>
                    About us
                </div>
            </Link>
        </div>
    )
}

export default SideBar