import React from 'react'
import './Home.css'


const Home = () => {
  return (
    <div>
      <div id='navbar'>
        <div id='nav1'>
          <img src='bike1.js ' id='logo'/>
            <h1 className='welcome'>Unique Bikes</h1>
        </div>
        <div id='nav2'>
          <p>Home</p>
          <p>Account</p>
          <button>Heyy</button>
        </div>
      </div>
    <div id='cards'>
      <div className='card'>
      <img src='Bikeee3.jpg'/>
      <h1>Royal Enfield</h1>
      <p>Top Speed </p>
      <p>Price 1,48,000</p>
      <div id='colors'>
         <div className='colors1'></div>
          <div className='colors2'></div>
          <div className='colors3'></div>
      </div>
      </div>

      <div className='card'>
      <img src='Bikeeee1.webp'/>
      <h1>Royal Enfield</h1>
      <p>Top Speed </p>
      <p>Price 2,00,290</p>
      <div id='colors'>
         <div className='colors1'></div>
          <div className='colors2'></div>
          <div className='colors3'></div>
      </div>
      </div>

      <div className='card'>
      <img src='Bikeeee2.webp'/>
      <h1>Royal Enfield</h1>
      <p>Top Speed </p>
      <p>Price 3,50,400</p>
      <div id='colors'>
         <div className='colors1'></div>
          <div className='colors2'></div>
          <div className='colors3'></div>
      </div>

      </div>
      <div className='card'>
      <img src=' bikee4.jpg'/>
      <h1>Royal Enfield</h1>
      <p>Top Speed </p>
      <p>Price 2,80,600</p>
      <div id='colors'>
         <div className='colors1'></div>
          <div className='colors2'></div>
          <div className='colors3'></div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Home




