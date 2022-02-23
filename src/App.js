import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
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
      max: 30
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
      text: 'Độ ẩm trong ngày',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 100
    }
  },
  type: 'line',
  aspectRatio: 2.25

};

const labels = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

const dataTemperature = {
  labels,
  datasets: [
    {
      data: [10, 11, 13, 14, 14, 13, 12],
      borderColor: 'rgb(99, 132, 255)',
      backgroundColor: 'rgba(99, 132, 255, 0.3)',
      tension: 0.2,
      fill: true
    },
  ],
};

const dataHumidity = {
  labels,
  datasets: [
    {
      data: [67, 66, 67, 68, 70, 67, 69],
      borderColor: 'rgb(99, 132, 255)',
      backgroundColor: 'rgba(99, 132, 255, 0.3)',
      tension: 0.2,
      fill: true
    },
  ],
};




function App() {

  const [humidity, setHumidity] = useState(0)
  const [temperature, setTemperature] = useState(0)

  useEffect(() => {
    fetch('/data/?fbclid=IwAR1msJ54ico_UEiIUZBRyv46jLBn7-nOQe6FBq-hnzju4mdIZM614s38Cb0',
      {
        method: 'GET'
      })
      .then(result => result.json())
      .then(data => {
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
    console.log(temperature)
  })


  return (
    <div className="App">
      <div className='title-container' style={{}}>
        Hệ thống theo dõi môi trường trong gia đình
      </div>
      <div className='content-container' >
        <div className='infomation-section'>
          <div className='section'>
            <div className='section-content'>
              <div className='section-label'>
                Nhiệt độ
              </div>
              <div className='section-comment'>
                Nhiệt độ thấp, rét đậm rét hại, nên bật máy sưởi trong nhà và mặc nhiều quần áo ấm khi ra ngoài
              </div>
            </div>
            <div className='section-value'>
              {temperature}°C
            </div>

          </div>
          <div className='section'>
            <div className='section-content'>
              <div className='section-label'>
                Độ ẩm
              </div>
              <div className='section-comment'>
                Bạn không nên để độ ẩm trong nhà tăng quá cao vượt mức 70% vì sẽ tạo điều kiện thuận lợi cho vi khuẩn có hại và nấm mốc phát triển
              </div>
            </div>
            <div className='section-value'>
              {humidity}%
            </div>

          </div>
          <div className='section'>
            <div className='section-content'>
              <div className='section-label'>
                PPM
              </div>
              <div className='section-comment'>
                Bạn không nên để độ ẩm trong nhà tăng quá cao vượt mức 70% vì sẽ tạo điều kiện thuận lợi cho vi khuẩn có hại và nấm mốc phát triển
              </div>
            </div>
            <div className='section-value'>
              38.6
            </div>
          </div>
          <div className='section'>
            <div className='section-content'>
              <div className='section-label'>
                Ánh sáng
              </div>
            </div>
            <div className='section-value'>
              Tối
            </div>
          </div>
        </div>
        <div className='chart-section'>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            flexBasis: "30%"
          }} >

            <Line options={options1} data={dataTemperature} />
          </div>
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '10px',
             
            }}>
            <Line
            options={options2} data={dataHumidity}
            />
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
