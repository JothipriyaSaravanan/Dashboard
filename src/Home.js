import React, { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import {FaGlobe,FaCity,FaToolbox,FaBook} from 'react-icons/fa';

function Home({ selectedSector }) {
  const [cardValues, setCardValues] = useState({
    TOPIC: 0,
    COUNTRY: 0,
    CITY: 0,
    PESTEL: 0,
  });

    const [chartData, setChartData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:8081/data/getChartData`);
          const apiData = await response.json();
          setChartData(apiData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

  useEffect(() => {
    
    const fetchData = async () => {
      try {

        const response = await fetch(
          `http://localhost:8081/data/findBySector?sector=${selectedSector}`
        );
        const apiData = await response.json(); 
        setCardValues({
          TOPIC: apiData[0],
          COUNTRY: apiData[1],
          CITY: apiData[2],
          PESTEL: apiData[3],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the API and update card values
    fetchData();
  }, [selectedSector]);

  return (
    <main className='main-container'>
      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>TOPIC</h3>
            <FaBook className='card_icon' />
          </div>
          <h1>{cardValues.TOPIC}</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>COUNTRY</h3>
            <FaGlobe className='card_icon' />
          </div>
          <h1>{cardValues.COUNTRY}</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>CITY</h3>
            <FaCity className='card_icon' />
          </div>
          <h1>{cardValues.CITY}</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>PESTEL</h3>
            <FaToolbox className='card_icon' />
          </div>
          <h1>{cardValues.PESTEL}</h1>
        </div>
      </div>
      
      <div className='charts'>
            <ResponsiveContainer width="305%" height={400}>
            <BarChart
            data={chartData}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <XAxis dataKey="name" tick={{ fill: 'black' }}/>
                <YAxis tick={{ fill: 'black' }}/>
      
                <Tooltip
    content={({ payload }) => {
      if (payload && payload.length > 0) {
        const data = payload[0].payload;
        return (
          <div className="custom-tooltip">
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Likelihood:</strong> {data.liklihood}</p>
            <p><strong>Intensity:</strong> {data.intensity}</p>
          </div>
        );
      }
      return null;
    }}
  />
                <Legend />
                <Bar dataKey="liklihood" fill=" #0091D5" />
                <Bar dataKey="intensity" fill="#1C4E80" />
                </BarChart>
            </ResponsiveContainer>


        </div>
    </main>

  );
}

export default Home;
