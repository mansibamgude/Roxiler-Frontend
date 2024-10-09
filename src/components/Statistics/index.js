import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './index.css'; // Make sure this path points to your CSS file

const Statistics = (props) => {
  const [statistics, setStatistics] = useState({});
  const { selectedMonth } = props;

  useEffect(() => {
    const getStatistics = async () => {
      try {
        const statistics = await axios.get(
          `http://localhost:3000/statistics?month=${selectedMonth}`
        );
        setStatistics(statistics.data);
      } catch (error) {
        console.error("Error fetching statistics:", error);
      }
    };

    getStatistics();
  }, [selectedMonth]);

  return (
    <div className="statistics-main-container">
      <h2>Statistics - {selectedMonth}</h2>
      <div className="statitics-container">
        <div className="element">
          <span>Total Sale</span> <span>{statistics.totalSaleAmount}</span>
        </div>
        <div className="element">
          <span>Total sold item</span> <span>{statistics.totalSoldItems}</span>
        </div>
        <div className="element">
          <span>Total not sold item</span> <span>{statistics.totalNotSoldItems}</span>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
