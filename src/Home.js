


//import React from 'react'
//import './Home.css'


//const Home = () => {
  //return (
    //<div>
      //<div id='navbar'>
        //<div id='nav1'>
          //<img src='bike1.js ' id='logo'/>
            //<h1 className='welcome'>Unique Bikes</h1>
        //</div>
        //<div id='nav2'>
          //<p>Home</p>
          //<p>Account</p>
          //<button>Heyy</button>
        //</div>
      //</div>
    //<div id='cards'>
      //<div className='card'>
      //<img src='Bikeee3.jpg'/>
      //<h1>Royal Enfield</h1>
      //<p>Top Speed </p>
      //<div id='colors'>
        //  <div className='colors1'></div>
          //<div className='colors2'></div>
          //<div className='colors3'></div>
      //</div>
      //</div>

      //<div className='card'>
      //<img src='Bikeeee1.webp'/>
      //<h1>Royal Enfield</h1>
      //<p>Top Speed </p>
      //<div id='colors'>
        //  <div className='colors1'></div>
          //<div className='colors2'></div>
          //<div className='colors3'></div>
      //</div>
      //</div>

      //<div className='card'>
      //<img src='Bikeeee2.webp'/>
      //<h1>Royal Enfield</h1>
      //<p>Top Speed </p>
      //<div id='colors'>
        //  <div className='colors1'></div>
          //<div className='colors2'></div>
          //<div className='colors3'></div>
      //</div>

      //</div>
      //<div className='card'>
      //<img src=' bikee4.jpg'/>
      //<h1>Royal Enfield</h1>
      //<p>Top Speed </p>
      //<div id='colors'>
        //  <div className='colors1'></div>
          //<div className='colors2'></div>
          //<div className='colors3'></div>
      //</div>
      //</div>
      //</div>
    //</div>
  //)
//}

//export default Home




//login page
import React from 'react'
const Login =()=>{
  function signup(){
    window.location.replace("/home");

  }
  return(
    <div>
      <input id="userName"/>
      <input id="passcode"/>
      <button onClick={signup} className="">Login</button>

    </div>
  )
}
export default Login