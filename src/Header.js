import React from 'react';
import './Header.css';
//import { BrowserRouter, Link } from 'react-router-dom';
//import Routing from './Routing';



const Header = () => {
    return(
        <>
         <header>
         <button style={{marginTop: "1%", marginLeft: "1%", position: "absolute"}} onClick="changemode()">Change Mode</button>
        

        <h2>Flipkart</h2>
        <h5 style={{marginLeft: "15.5%", position: "absolute", marginTop: "-0.6%", fontSize: "12px", color: "#ffffff"}}>Explore Plus <img src="https://i.ibb.co/nbhhfYb/flipkart-plus-icon.png" alt="" /></h5>
        <div className="cont" >
          <ul className="nav navbar-nav navbar-right">
            <li><a className="ln" href="">Log in</a></li>
            <li><a className="ln" href="">More</a></li>
            <li><a className="ln" href=""><span className="glyphicon glyphicon-shopping-cart"></span> Cart</a></li>
          </ul>
        </div>





        <form action="" className="navbar-form">
          <div className="form-group has-feedback">
            <input  style={{width: "550px", marginLeft: "0.7%", marginTop: "2%"}} type="text" placeholder="Search for products, brands and more" className="form-control" />
            <span className="glyphicon glyphicon-search form-control-feedback"></span>
          </div>
        </form>
        <div/>
        <div/>







      </header>
        
   
   </>
         
         )

    }



    
export default Header;