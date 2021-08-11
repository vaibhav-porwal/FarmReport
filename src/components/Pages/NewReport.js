import React from 'react'
import FromReport from './FromReport';
import './Cards.css';
import Weather from './weather';

import Card from './CardItem';
const NewReport = () => {
    return (
     <>
     
    <div className='cards'>
      <h1>Service Provided TO User</h1>
      <div className='cards__container'>
        <Card/>
        <Weather/>
      </div>
    </div>



     </>
    )
}

export default NewReport
