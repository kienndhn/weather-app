import { useEffect, useState } from 'react';
import React from 'react'
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
);

const options1 = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Nhiệt độ trong ngày',
        },
    },
    scales: {
        y: {
            beginAtZero: true,
            // max: 30
        }
    },
    type: 'line',
    aspectRatio: 2.5
};

const options2 = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Độ ẩm trong nhà',
        },
    },
    scales: {
        x: {
            grid: {
                drawOnChartArea: false
            }
        },
        y1: {
            id: 'temperature',
            position: 'left',
            display: true,
            grid: {
                drawOnChartArea: false,
            },
        },
        y2: {
            id: 'humidity',
            position: 'right',
            display: true,
            grid: {
                drawOnChartArea: false,
            },
        }
    }
};

const labels = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

const dataIndoor = {
    labels,
    datasets: [
        {
            data: [10, 11, 13, 14, 14, 13, 12],
            borderColor: 'rgb(99, 132, 255)',
            backgroundColor: 'rgba(99, 132, 255, 0.3)',
            tension: 0.2,
            fill: true,
            type: 'line',
            yAxisID: 'y1',
            label: 'Nhiệt độ'
        },
        {
            data: [67, 66, 67, 68, 70, 67, 69],
            borderColor: 'rgb(99, 255, 132)',
            // backgroundColor: 'rgba(99, 132, 255, 0.3)',
            tension: 0.2,
            fill: true,
            type: 'bar',
            label: 'Độ ẩm',
            yAxisID: 'y2'
        }
    ],
};

const dataOutdoor = {
    labels,
    datasets: [
        {
            data: [10, 11, 13, 14, 14, 13, 12],
            borderColor: 'rgb(99, 132, 255)',
            backgroundColor: 'rgba(99, 132, 255, 0.3)',
            tension: 0.2,
            fill: true,
            type: 'line',
            yAxisID: 'y1',
            label: 'Nhiệt độ'
        },
        {
            data: [67, 66, 67, 68, 70, 67, 69],
            borderColor: 'rgb(99, 255, 132)',
            // backgroundColor: 'rgba(99, 132, 255, 0.3)',
            tension: 0.2,
            fill: true,
            type: 'bar',
            label: 'Độ ẩm',
            yAxisID: 'y2'
        }
    ],
};

const Home = () => {

    const [humidity, setHumidity] = useState(0)
    const [temperature, setTemperature] = useState(0)
    const [human, setHuman] = useState(0)
    //call api
    useEffect(() => {
        fetch('/data/?fbclid=IwAR1msJ54ico_UEiIUZBRyv46jLBn7-nOQe6FBq-hnzju4mdIZM614s38Cb0',
            {
                method: 'GET'
            })
            .then(result => result.json())
            .then(data => {
                // console.log(data);
                setHuman(data.person)
                for (let i = temperature; i <= data.temperature; i++) {
                    setTimeout(
                        ((i) => {
                            return () => {
                                setTemperature(i)
                            };
                        })(i), ((i) => {
                            return i * 30
                        })(i)
                    );
                }
                for (let i = humidity; i <= data.humidity; i++) {
                    setTimeout(
                        ((i) => {
                            return () => {
                                setHumidity(i)
                            };
                        })(i), ((i) => {
                            return i * 10
                        })(i)
                    );
                }
            }
            )
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        // console.log(temperature)
    })


    return (
        <>
            <div className='content-container' >
                <div className='infomation-section'>
                    <div className='title-container'>
                        Trong nhà
                    </div>
                    <div className='section'>
                        <div className='section-content'>
                            <div className='section-label'>
                                Số người trong phòng
                            </div>
                            <div className='section-value'>
                                {human}
                            </div>
                        </div>
                        <div className='section-content'>
                            <div className='section-label'>
                                Nhiệt độ
                            </div>
                            <div className='section-value'>
                                {temperature}°C
                            </div>
                        </div>
                        <div className='section-content'>
                            <div className='section-label'>
                                Độ ẩm
                            </div>
                            <div className='section-value'>
                                {humidity}%
                            </div>
                        </div>
                    </div>

                    <div className='section'
                    // style={{ backgroundColor: 'white' }}
                    >
                        {/* <Chart />  */}
                        <Chart style={{ backgroundColor: 'white', borderRadius: '10px' }} type='bar' data={dataIndoor} options={options2} />
                    </div>

                </div>
                <div className='infomation-section'>
                    <div className='title-container'>
                        Ngoài trời
                    </div>
                    <div className='section'>
                        <div className='section-content'>
                            <div className='section-label'>
                                Nhiệt độ
                            </div>
                            <div className='section-value'>
                                {temperature}°C
                            </div>
                        </div>
                        <div className='section-content'>
                            <div className='section-label'>
                                Độ ẩm
                            </div>
                            <div className='section-value'>
                                {humidity}%
                            </div>
                        </div>
                    </div>
                    <div className='section'
                    // style={{ backgroundColor: 'white' }}
                    >
                        {/* <Chart />  */}
                        <Chart style={{ backgroundColor: 'white', borderRadius: '10px' }} type='bar' data={dataOutdoor} options={options2} />
                    </div>

                </div>

            </div>

        </>
    );
}

export default Home