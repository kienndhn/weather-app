import React, { useEffect } from 'react'
import { AnalysisWeather } from '../AnalysisWeather'

function Analysis() {

    const [indoorHumidity, setIndoorHumidity] = useState(0)
    const [indoorTemperature, setIndoorTemperature] = useState(0)

    const [outdoorHumidity, setOutdoorHumidity] = useState(0)
    const [outdoorTemperature, setOutdoorTemperature] = useState(0)

    //call api to get indoor infomation
    useEffect(() => {
        fetch('/data/?fbclid=IwAR1msJ54ico_UEiIUZBRyv46jLBn7-nOQe6FBq-hnzju4mdIZM614s38Cb0', { method: 'GET' })
            .then(result => result.json())
            .then(data => {
                // console.log(data);
                setIndoorTemperature(data.temperature)
                setIndoorHumidity(data.humidity)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div className='content-container' style={{ justifyContent: 'center' }} >
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