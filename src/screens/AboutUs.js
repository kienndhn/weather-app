import React from 'react'
import { AnalysisWeather } from '../AnalysisWeather'

function AboutUs() {
    return (
        <div className='content-container' style={{justifyContent:'center'}} >
            <div className="infomation-section" style={{ padding: "10px" }}>
                <div className='title-container'>
                    Nhóm ...
                </div>

                <div className='section-comment' style={{ textAlign: 'center' }}>
                    Sinh viên 1
                </div>
                <div className='section-comment' style={{ textAlign: 'center' }}>
                    Sinh viên 2
                </div>
            </div>
        </div>
    )
}

export default AboutUs