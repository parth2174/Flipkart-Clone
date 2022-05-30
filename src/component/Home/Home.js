import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

//import { BrowserRouter,Route} from 'react-router-dom';


//const url = "https://second-project-api.herokuapp.com/products"


const Home = () => {

 
  return(

    <>
    
    
       
       
      <div>

      






     
     

      


     

      <div className="categories">
        <ul className="list">
          <li className="items">
            <img src="https://i.ibb.co/3dbFdr2/Top.png" alt="" width="70px" height="70px" />
            <h5>Top Offers</h5>
          </li>
          <li className="items">
            <img src="https://i.ibb.co/k0tQBmg/Grocery.png" alt="" width="70px" height="70px" />
            <h5 style={{marginLeft: "12%"}}>Grocery</h5>
        </li>
        <li className="items">
          <img src="https://i.ibb.co/7tHxHG2/Mobiles.png" alt="" width="70px" height="70px" />
          <h5 style={{marginLeft: "15%"}}>Mobiles</h5>
        </li>
        <li className="items">
          <img src="https://i.ibb.co/dQKzX99/Fashion.png" alt="" width="70px" height="70px" />
          <Link style={{textDecoration: "none"}} to='/Fashion'><h5 style={{marginLeft: "12%", color: "black"}}>Fashion</h5></Link>
        </li>
        <li className="items">
          <img src="https://i.ibb.co/McySGxD/Electronics.png" alt="" width="70px" height="70px" />
          <h5>Electronics</h5>
        </li>
        <li className="items">
          <img src="https://i.ibb.co/rfhrk0Y/Home.jpg" alt="" width="70px" height="70px" />
          <h5 style={{marginLeft: "27%"}}>Home</h5>
        </li>
        <li className="items">
          <img src="https://i.ibb.co/txgJVfR/Appliances.png"alt="" width="70px" height="70px" />
          <h5>Appliances</h5>
        </li>
        <li className="items">
          <img src="https://i.ibb.co/p1hdWqb/Travel.png" alt="" width="70px" height="70px" />
          <h5 style={{marginLeft: "20%"}}>Travel</h5>
        </li>
        <li className="items">
          <img src="https://i.ibb.co/HGqvGyD/Beauty-Toys-More.png" alt="" width="70px" height="70px" />
          <h5 style={{width: "130px", marginLeft: "-3%", position: "absolute"}}>Beauty, Toys & More</h5>
        </li>
      </ul>
    </div>
    

    <div id="myslider" className="carousel slide" data-ride="carousel">

        <ol className="carousel-indicators">
          <li data-target="#myslider" data-slide-to="0" className="active"></li>
          <li data-target="#myslider" data-slide-to="1" className="active"></li>
          <li data-target="#myslider" data-slide-to="2" className="active"></li>
        </ol>
        <div className="carousel-inner">

          <div className="item active">
            <img src="https://i.ibb.co/Fsth6Cz/sale-slider.jpg" alt="" />
          </div>

          <div className="item">
            <img src="https://i.ibb.co/0sf042t/Electronics-sale-slider.jpg" alt="" />
          </div>

          <div className="item">
            <img src="https://i.ibb.co/7vQDsVL/Realme-9-pro-slider.jpg" alt="" />
          </div>
         

        </div>

      </div>


    
    
      

      
      <div className="deals">
        <h3 style={{fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}>Deals of the Day</h3>

        <button  style={{color: "#ffffff", border: "none", backgroundColor: "#2874f0", position: "absolute", marginTop: "30%", marginLeft: "73%", height: "35px", width: "100px"}}><h5>VIEW ALL</h5></button>

      </div>
      
      <div className="categories1">

        <ul className="list1">
          <li className="items1" style={{marginLeft: "-1%"}}>
            <img src="https://i.ibb.co/pLRNmKj/T-shirt.jpg" height="155px" alt="" />
            <h5 style={{marginLeft: "15%", width: "190px", fontSize: "14px", fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}>Mens Clothing</h5>
            <h5 style={{marginLeft: "22%"}}>From ₹299</h5>

          </li>

          <li className="items1" style={{marginLeft: '-1%'}}>
            <img src="https://i.ibb.co/1zqHnyD/bag.jpg" height="155px" alt="" />
            <h5 style={{marginLeft: "-5%", width: "190px", fontSize: "14px", fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}>Safari, Skybags, Wrogn</h5>
            <h5 style={{marginLeft: "-3.5%"}}>Upto 70%+Extra 10% Off</h5>

          </li>

          <li className="items1" style={{marginLeft: "-1%"}}>
            <img src="https://i.ibb.co/XLGVN5t/Dress.jpg" height="155px" alt="" />
            <h5 style={{marginLeft: "5%", width: "190px", fontSize: "14px", fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}>Sarees, Kurtas & more</h5>
            <h5 style={{marginLeft: "21%"}}>Up to 70% Off</h5>

          </li>

          <li className="items1" style={{marginLeft: "-1%"}}>
            <img src="https://i.ibb.co/D57WsVY/shoes.jpg" height="155px" alt="" />
            <h5 style={{marginLeft: "15%", width: "190px", fontSize: "14px", fontFamily:"'Lucida Sans', 'Lucida Sans Regular', Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}>Mens Footwear</h5>
            <h5 style={{marginLeft: "21%"}}>From ₹16190</h5>

          </li>

          <li className="items1" style={{marginLeft: "-1%"}}>
            <img src="https://i.ibb.co/7pHZNyX/sarees.jpg" height="155px" alt="" />
            <h5 style={{marginLeft: "15%", width: "190px", fontSize: "14px", fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}>Trendy Sarees</h5>
            <h5 style={{marginLeft: "21%"}}>Under ₹299</h5>

          </li>



          <li className="items1" style={{marginLeft: "-7%"}}>
            <img src="https://i.ibb.co/hgHR3RK/wallet.jpg" height="155px" alt="" style={{marginLeft: "35%"}} />
            <h5 style={{marginLeft: "52%", width: "190px", fontSize: "14px", fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}>Wallets & Belts</h5>
            <h5 style={{marginLeft: "60%"}}>From ₹199</h5>

          </li>

          <li className="items1" style={{marginLeft: "4.5%"}}>
            <img src="https://i.ibb.co/PFbR153/Trackpants.jpg" alt="" height="155px" />
            <h5 style={{marginLeft: "2%", width: "190px", fontSize: "14px", fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}>Tracksuits, Trackpants</h5>
            <h5 style={{marginLeft: "25%"}}>50-80% Off</h5>

          </li>

          <li className="items1" style={{position: "absolute"}}>
            <img src="https://i.ibb.co/d2ckH2Z/Flipkart-Refurbished.jpg" alt="" height="300px" style={{boxshadow: "10px 20px 10px gray", marginTop: "-45%", marginLeft: "635%"}} />
          </li>
        </ul>

      </div>
      <div className="deals">
        <h3 style={{fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif", marginTop: "53.5%"}}>Best of Electronics</h3>

        <button style={{color: "#ffffff", border: "none", backgroundColor: "#2874f0", position: "absolute", marginTop: "52.5%", marginLeft: "90%", height: "35px", width: "100px"}}><h5>VIEW ALL</h5></button>

      </div>
      <div className="categories2" style={{marginTop: "58%"}}>
        <ul className="list2">
          <li className="items2" style={{marginLeft: "1%"}}>
            <img src="https://i.ibb.co/Lt5L9jR/Powerbank.jpg" height="155px" alt="" />
            <h5 style={{marginLeft: "-2%", width: "190px", fontSize: "14px", fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}>Top Selling Powerbanks</h5>
            <h5 style={{marginLeft: "22"}}>From ₹449</h5>

          </li>

          <li className="items2" style={{marginLeft: "-1%"}}>
            <img src="https://i.ibb.co/GMrqCDQ/Gaming-Headset.jpg" height="155px" alt="" />
            <h5 style={{marginLeft: "15%", width: "190px", fontSize: "14px", fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}>Gaming Headset</h5>
            <h5 style={{marginLeft: "25%"}}>Just ₹1,899</h5>

          </li>

          <li className="items2" style={{marginLeft: "-1%"}}>
            <img src="https://i.ibb.co/3d8QG7N/smart-watches.jpg" height="155px" alt="" />
            <h5 style={{marginLeft: "29%", width: "190px", fontSize: "14px", fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}>Smart Watches</h5>
            <h5 style={{marginLeft: "34%"}}>Under ₹1,000</h5>

          </li>

          <li className="items2" style={{marginLeft: "-1%"}}>
            <img src="https://i.ibb.co/PCcTwML/ASUS-Monitors.jpg" height="155px" alt="" />
            <h5 style={{marginLeft: "42%", width: "190px",fontsize: "14px", fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}>ASUS Monitors</h5>
            <h5 style={{marginLeft: "47%"}}>From ₹16190</h5>

          </li>

          <li className="items2" style={{marginLeft: "0.5%"}}>
            <img src="https://i.ibb.co/chbb5Z4/Laptops.jpg" height="155px" alt="" />
            <h5 style={{marginLeft: "29%", width: "190px", fontSize: "14px", fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}>Biggest Deals on Laptops</h5>
            <h5 style={{marginLeft: "50%"}}>Upto 40% Off</h5>


          </li>

          <li className="items2" style={{marginLeft: "0.5%"}}>
            <img src="https://i.ibb.co/mTJSV5B/Earbuds.jpg" height="155px" alt="" style={{marginLeft: "40%"}} />
            <h5 style={{marginLeft: "35%", width: "190px", fontSize: "14px", fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}>True Wireless Earbuds</h5>
            <h5 style={{marginLeft: "60%"}}>From ₹799</h5>

          </li>

          <li className="items2" style={{marginLeft: "-1%"}}>
            <img src="https://i.ibb.co/hD3ftFX/Dolby-Enabled.jpg" height="155px" alt="" style={{marginLeft: "33%"}} />
            <h5 style={{marginLeft: "54%", width: "190px", fontSize: "14px", fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}>Dolby Enabled</h5>
            <h5 style={{marginLeft: "58%"}}>Upto 50% Off</h5>

          </li>
        </ul>
      </div>
      
      <div className="deals">
        <h3 style={{fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif", marginTop: "75%"}}>Best of Appliances</h3>

        <button style={{color: "#ffffff", border: "none", backgroundColor: "#2874f0", position: "absolute", marginTop: "75%", marginLeft: "90%", height: "35px", width: "100px"}}><h5>VIEW ALL</h5></button>

      </div>
      
      <div className="categories3" style={{marginTop: "80.5%"}}>
        <ul className="list3">
          <li className="items3" style={{marginLeft: "1%"}}>
            <img src="https://i.ibb.co/YQJRhSw/Bajaj-Mixer-Grinders.jpg" alt="" height="155px" />
            <h5 style={{marginLeft: "-5%", width: "190px", fontSize: "14px", fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}>Bajaj Mixer Grinders</h5>
            <h5 style={{marginLeft: "7%"}}>Upto 40% Off</h5>

          </li>

          <li className="items3" style={{marginLeft: "-2.5%"}}>
            <img src="https://i.ibb.co/hd6wVhW/Garment-Steam-Irons.jpg" alt="" height="155px" />
            <h5 style={{marginLeft: "12%", width: "190px", fontSize: "14px", fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}>Garment Steam Irons</h5>
            <h5 style={{marginLeft: "25%"}}>Upto 50% Off</h5>

          </li>

          <li className="items3" style={{marginLeft: "-1%"}}>
            <img src="https://i.ibb.co/j83qRrv/Induction-Cooktops.jpg" alt="" height="155px" style={{marginLeft: "18%"}}/>
            <h5 style={{marginLeft: "29%", width: "190px", fontSize: "14px", fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}>Induction Cooktops</h5>
            <h5 style={{marginLeft: "41%"}}>Upto 60% Off</h5>

          </li>

          <li className="items3" style={{marginLeft: "1%"}}>
            <img src="https://i.ibb.co/gZZCn1g/Electric-Kettles.jpg" alt="" height="155px" style={{marginLeft: "35%"}} />
            <h5 style={{marginLeft: "42%", width: "190px", fontSize: "14px", fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}>Electric Kettles</h5>
            <h5 style={{marginLeft: "50%"}}>From ₹375</h5>

          </li>

          <li className="items3" style={{marginLeft: "3.5%"}}>
            <img src="https://i.ibb.co/rdhcMN1/Sandwich-Makers.jpg" alt="" height="155px" />
            <h5 style={{marginLeft: "20%", width: "190px", fontSize: "14px", fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}>Sandwich Makers</h5>
            <h5 style={{marginLeft: "30%"}}>Upto 80% Off</h5>

          </li>

          <li className="items3" style={{marginLeft: "-3%"}}>
            <img src="https://i.ibb.co/JKdwRzX/Prestige-Mixer-Grinder.jpg" alt="" height="155px" style={{marginLeft: "40%"}} />
            <h5 style={{marginLeft: "45%", width: "190px", fontSize: "14px", fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}>Prestige Mixer Grinder</h5>
            <h5 style={{marginLeft: "65%"}}>From ₹999</h5>

          </li>

          <li className="items3" style={{marginLeft: "3.5%"}}>
            <img src="https://i.ibb.co/RQTrsRh/Electric-Cookers.jpg" alt="" height="155px" style={{marginLeft: "33%"}} />
            <h5 style={{marginLeft: "50%", width: "190px", fontSize: "14px", fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}>Electric Cookers</h5>
            <h5 style={{marginLeft: "62%"}}>From ₹649</h5>

          </li>
        </ul>
      </div>



        
        </div>

        </>
)
}


export default Home;
