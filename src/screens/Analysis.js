import React from 'react'
import { AnalysisWeather } from '../AnalysisWeather'

function Analysis() {
    return (
        <div className='content-container' style={{justifyContent:'center'}} >
            <div className="infomation-section" style={{ padding: "10px" }}>
                <div className='title-container'>
                    Lời khuyên
                </div>

                <div className='section-comment' style={{ textAlign: 'center' }}>
                    {AnalysisWeather(20, 20, 20, 50)}
                </div>

            </div>
        </div>
    )
}

export default Analysis