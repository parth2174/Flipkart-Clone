//import React,{Component} from 'react';
import React from 'react';
//import axios from 'axios';
import './Mobiles.css';
import Footer from '../../Footer'
import { Link, useParams } from 'react-router-dom';
//import { Router, Route, browserHistory, IndexRoute} from 'react-router';
//import {syncHistoryWithStore, routerReducer} from 'react-router-redux';

//import React, { useEffect, useState } from 'react';



const Mobiles = () => {
  

  

 
    return(
       
          
        
  
      <>
      
      <div>
      
      {/*<div id="myslider" className="carousel slide" data-ride="carousel" style={{marginTop: "7%", position: "absolute"}}>

<ol className="carousel-indicators">
  <li data-target="#myslider" data-slide-to="0" className="active"></li>

</ol>
<div className="carousel-inner">

  

  <div className="item active">
    <img src="https://i.ibb.co/0sf042t/Electronics-sale-slider.jpg" alt=""/>
  </div>
 

</div>

    </div>*/}

<div id= 'moblisting'>
    <h2>Mobiles</h2>
</div>

<Link style={{textDecoration: "none"}} to='/realme9sunburstgold128gbid62b457001d72ad46bd5efd24'><div className='moblist'>
    <img src='https://i.ibb.co/jL0xK6L/realme-9-Sunburst-Gold-128-GB.webp' style={{width: "130px", height: "270px", marginLeft: "3%", marginTop: "2%"}} alt=''/>
    <h3 style={{marginLeft: "25%", marginTop: "-20.5%", color: "black"}}>realme 9 (Sunburst Gold, 128 GB)</h3>
    <h3 style={{marginLeft: "85%", marginTop: "-2.6%", position: "absolute", color: "black"}}>₹17,999</h3>
    <div className='pro0'>
    <p style={{color: "#ffffff", marginLeft: "11%"}}>4.5</p><span class="glyphicon glyphicon-star" style={{fontSize: "10px", marginLeft: "66%", color: "#ffffff", position: "absolute", marginTop: "12%"}}></span>
    </div>
    <h5 style={{fontSize: "15px", marginLeft: "25%", marginTop: "4%", color: "black"}}>6 GB RAM | 128 GB ROM | Expandable Upto 256 GB</h5>
    <h5 style={{fontSize: "15px", marginLeft: "25%", color: "black"}}>16.26 cm (6.4 inch) Full HD+ AMOLED Display</h5>
    <h5 style={{fontSize: "15px", marginLeft: "25%", color: "black"}}>108MP + 8MP + 2MP | 16MP Front Camera</h5>
    <h5 style={{fontSize: "15px", marginLeft: "25%", color: "black"}}>5000 mAh Lithium lon Battery </h5>
    <h5 style={{fontSize: "15px", marginLeft: "25%", color: "black"}}>Qualcomm Snapdragon 680 Processor</h5>
    <h5 style={{fontSize: "15px", marginLeft: "25%", color: "black"}}>1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In-Box Accessories</h5>
  
</div>
</Link>


<Link style={{textDecoration: "none"}} to='/SAMSUNGGalaxyA735Gid62b457001d72ad46bd5efd27'><div className='moblist1'>
    <img src='https://i.ibb.co/gdSDzTf/SAMSUNG-Galaxy-A73-5-G-Awesome-Mint-256-GB-8-GB-RAM.webp' style={{width: "200px", height: "270px", marginLeft: "3%", marginTop: "2%"}} alt=''/>
    <h3 style={{marginLeft: "25%", marginTop: "-20.5%", color: "black"}}>SAMSUNG Galaxy A73 5G (Awesome Mint, 256 GB)  (8 GB RAM)</h3>
    <h3 style={{marginLeft: "85%", marginTop: "-2.6%", position: "absolute", color: "black"}}>₹44,999</h3>
    <div className='pro1'>
    <p style={{color: "#ffffff", marginLeft: "11%"}}>4.5</p><span class="glyphicon glyphicon-star" style={{fontSize: "10px", marginLeft: "66%", color: "#ffffff", position: "absolute", marginTop: "12%"}}></span>
    </div>
    <h5 style={{fontSize: "15px", marginLeft: "25%", marginTop: "4%", color: "black"}}>8 GB RAM | 256 GB ROM | Expandable Upto 1 TB</h5>
    <h5 style={{fontSize: "15px", marginLeft: "25%", color: "black"}}>17.02 cm (6.7 inch) Full HD+ Display</h5>
    <h5 style={{fontSize: "15px", marginLeft: "25%", color: "black"}}>108MP + 12MP + 5MP + 5MP | 32MP Front Camera</h5>
    <h5 style={{fontSize: "15px", marginLeft: "25%", color: "black"}}>5000 mAh Li-ion Battery </h5>
    <h5 style={{fontSize: "15px", marginLeft: "25%", color: "black"}}>Qualcomm Snapdragon 778G Processor</h5>
    <h5 style={{fontSize: "15px", marginLeft: "25%", color: "black"}}>1 Year Manufacturer Warranty for phone and 6 Months Warranty for In-Box Accessories</h5>
</div>
</Link>

<Link style={{textDecoration: "none"}} to='/realmeC31LightSilverid62b457001d72ad46bd5efd2d'><div className='moblist2'>
    <img src='https://i.ibb.co/fxQGLFs/realme-C31-Light-Silver-32-GB-3-GB-RAM.webp' style={{width: "130px", height: "270px", marginLeft: "3%", marginTop: "2%"}} alt=''/>
    <h3 style={{marginLeft: "25%", marginTop: "-20.5%", color: "black"}}>realme C31 (Light Silver, 32 GB)  (3 GB RAM)</h3>
    <h3 style={{marginLeft: "85%", marginTop: "-2.6%", position: "absolute", color: "black"}}>₹12,659</h3>
    <div className='pro2'>
    <p style={{color: "#ffffff", marginLeft: "11%"}}>4.5</p><span class="glyphicon glyphicon-star" style={{fontSize: "10px", marginLeft: "66%", color: "#ffffff", position: "absolute", marginTop: "12%"}}></span>
    </div>
    <h5 style={{fontSize: "15px", marginLeft: "25%", marginTop: "4%", color: "black"}}>3 GB RAM | 32 GB ROM | Expandable Upto 1 TB</h5>
    <h5 style={{fontSize: "15px", marginLeft: "25%", color: "black"}}>16.56 cm (6.52 inch) HD Display</h5>
    <h5 style={{fontSize: "15px", marginLeft: "25%", color: "black"}}>13MP + 2MP + 0.3MP | 5MP Front Camera</h5>
    <h5 style={{fontSize: "15px", marginLeft: "25%", color: "black"}}>5000 mAh Battery</h5>
    <h5 style={{fontSize: "15px", marginLeft: "25%", color: "black"}}>Unisoc T612 Processor</h5>
    <h5 style={{fontSize: "15px", marginLeft: "25%", color: "black"}}>1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In-Box Accessories</h5>
</div>
</Link>

{/*<Link style={{textDecoration: "none"}} to='/REDMINote10SFrostWhiteid62b457001d72ad46bd5efd2c'><div className='moblist3'>
    <img src='https://i.ibb.co/CP1yG40/REDMI-Note-10-S-Frost-White-128-GB-6-GB-RAM.webp' style={{width: "200px", height: "270px", marginLeft: "3%", marginTop: "2%"}} alt=''/>
    <h3 style={{marginLeft: "25%", marginTop: "-20.5%", color: "black"}}>REDMI Note 10S (Frost White, 128 GB)  (6 GB RAM)</h3>
    <h3 style={{marginLeft: "85%", marginTop: "-2.6%", position: "absolute", color: "black"}}>₹14,999</h3>
    <div className='pro3'>
    <p style={{color: "#ffffff", marginLeft: "11%"}}>4.4</p><span class="glyphicon glyphicon-star" style={{fontSize: "10px", marginLeft: "66%", color: "#ffffff", position: "absolute", marginTop: "12%"}}></span>
    </div>
    <h5 style={{fontSize: "15px", marginLeft: "25%", marginTop: "4%", color: "black"}}>6 GB RAM | 128 GB ROM | Expandable Upto 512 GB</h5>
    <h5 style={{fontSize: "15px", marginLeft: "25%", color: "black"}}>16.33 cm (6.43 inch) Full HD+ Super AMOLED Display</h5>
    <h5 style={{fontSize: "15px", marginLeft: "25%", color: "black"}}>64MP + 8MP + 2MP + 2MP | 13MP Front Camera</h5>
    <h5 style={{fontSize: "15px", marginLeft: "25%", color: "black"}}>5000 mAh Lithium-Ploymer Battery </h5>
    <h5 style={{fontSize: "15px", marginLeft: "25%", color: "black"}}>Mediatek Helio G95 Processor</h5>
    <h5 style={{fontSize: "15px", marginLeft: "25%", color: "black"}}>1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In-Box Accessories</h5>
</div>
</Link>

<Link style={{textDecoration: "none"}} to='/OPPOA31MysteryBlackid62b457001d72ad46bd5efd2a'><div className='moblist4'>
    <img src='https://i.ibb.co/3M39ZS2/OPPO-A31-Mystery-Black-128-GB-6-GB-RAM.webp' style={{width: "130px", height: "270px", marginLeft: "3%", marginTop: "2%"}} alt=''/>
    <h3 style={{marginLeft: "25%", marginTop: "-20.5%", color: "black"}}>OPPO A31 (Mystery Black, 128 GB)  (6 GB RAM)</h3>
    <h3 style={{marginLeft: "85%", marginTop: "-2.6%", position: "absolute", color: "black"}}>₹12,659</h3>
    <div className='pro4'>
    <p style={{color: "#ffffff", marginLeft: "11%"}}>4.3</p><span class="glyphicon glyphicon-star" style={{fontSize: "10px", marginLeft: "66%", color: "#ffffff", position: "absolute", marginTop: "12%"}}></span>
    </div>
    <h5 style={{fontSize: "15px", marginLeft: "25%", marginTop: "4%", color: "black"}}>6 GB RAM | 128 GB ROM | Expandable Upto 256 GB</h5>
    <h5 style={{fontSize: "15px", marginLeft: "25%", color: "black"}}>16.51 cm (6.5 inch) HD+ Display</h5>
    <h5 style={{fontSize: "15px", marginLeft: "25%", color: "black"}}>12MP + 2MP + 2MP | 8MP Front Camera</h5>
    <h5 style={{fontSize: "15px", marginLeft: "25%", color: "black"}}>4230 mAh Battery</h5>
    <h5 style={{fontSize: "15px", marginLeft: "25%", color: "black"}}>MediaTek Helio P35 Octa Core Processor</h5>
    <h5 style={{fontSize: "15px", marginLeft: "25%", color: "black"}}>1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In-Box Accessories</h5>
</div>
</Link>*/}

<Link style={{textDecoration: "none"}} to='/OnePlus95GAstralBlackid62b457001d72ad46bd5efd28'><div className='moblist5'>
    <img src='https://i.ibb.co/n8CyQgw/One-Plus-9-5-G-Astral-Black-128-GB-8-GB-RAM.webp' style={{width: "130px", height: "270px", marginLeft: "3%", marginTop: "2%"}} alt=''/>
    <h3 style={{marginLeft: "25%", marginTop: "-20.5%", color: "black"}}>OnePlus 9 5G (Astral Black, 128 GB)  (8 GB RAM)</h3>
    <h3 style={{marginLeft: "85%", marginTop: "-2.6%", position: "absolute", color: "black"}}>₹37,469</h3>
    <div className='pro5'>
    <p style={{color: "#ffffff", marginLeft: "11%"}}>4.3</p><span class="glyphicon glyphicon-star" style={{fontSize: "10px", marginLeft: "66%", color: "#ffffff", position: "absolute", marginTop: "12%"}}></span>
    </div>
    <h5 style={{fontSize: "15px", marginLeft: "25%", marginTop: "4%", color: "black"}}>8 GB RAM | 128 GB ROM</h5>
    <h5 style={{fontSize: "15px", marginLeft: "25%", color: "black"}}>16.64 cm (6.55 inch) Display</h5>
    <h5 style={{fontSize: "15px", marginLeft: "25%", color: "black"}}>48MP Rear Camera</h5>
    <h5 style={{fontSize: "15px", marginLeft: "25%", color: "black"}}>4500 mAh Battery </h5>
    <h5 style={{fontSize: "15px", marginLeft: "25%", color: "black"}}>12 months</h5>
</div>
</Link>


         
       </div>
        </>

)
}
<Footer/>



export default Mobiles;







