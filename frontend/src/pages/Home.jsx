import React from 'react';
import LatestProd from '../components/Homepage/LatestProd';
import Sales from '../components/Homepage/Sales';
import Slick from '../components/Homepage/Slick';

const Home = () => {
  return (
    <div>
        <Slick />
        <Sales />
        <LatestProd />
    </div>
  )
}

export default Home