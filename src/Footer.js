import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4 style={{fontSize: "16px", marginTop: "1%", marginLeft: "27%"}}>ABOUT</h4>
              <ul style={{marginTop: "-8%"}}>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Flipkart Stories</a></li>
                <li><a href="#">Press</a></li>
                <li style={{width: "150px"}}><a href="#">Flipkart Wholesale</a></li>
                <li style={{width: "160px"}}><a href="#">Corporate Information</a></li>
              </ul>
            </div>

            <div className="footer-col1">
              <h4 style={{fontSize: "16px", marginTop: "1%", marginLeft: "27%"}}>HELP</h4>
              <ul style={{marginTop: "8%"}}>
                <li><a href="#">Payments</a></li>
                <li><a href="#">Shipping</a></li>
                <li><a href="#">Cancellation & Returns</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Report Infringement</a></li>
              </ul>
            </div>

            <div className="footer-col2">
              <h4 style={{fontSize: "16px", marginTop: "1%", marginLeft: "27%"}}>POLICY</h4>
              <ul style={{margintop: "8%"}}>
                <li><a href="#">Return Policy</a></li>
                <li><a href="#">Terms Of Use</a></li>
                <li><a href="#">Security</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Sitemap</a></li>
                <li><a href="#">EPR Compliance</a></li>
              </ul>
            </div>

            <div className="footer-col3">
              <h4 style={{fontSize: "16px", marginTop: "1%", marginLeft: "25%"}}>SOCIAL</h4>
              <ul style={{marginTop: "8%"}}>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">YouTube</a></li>

              </ul>
            </div>

            <div className="v-line" style={{width: "1px", height: "130px", backgroundColor: "gray", display: "block"}}></div>

            <div className="footer-col4">
              <h4 style={{fontSize: "16px", marginTop: "1%", marginLeft: "27%"}}>Mail Us:</h4>
              <ul style={{marginTop: "8%"}}>
                <li style={{width: "226px"}}><a href="#">Flipkart Internet Private Limited,

                  Buildings Alyssa, Begonia &

                  Clove Embassy Tech Village,

                  Outer Ring Road, Devarabeesanahalli Village,

                  Bengaluru, 560103,

                  Karnataka, India</a></li>


              </ul>
            </div>

            <div className="footer-col5">
              <h4 className="roa" style={{fontSize: "16px", width: "200px", marginTop: "1%", marginLeft: "27%"}}>Registered Office Address:</h4>
              <ul style={{marginTop: "8%"}}>
                <li className="roa1" style={{width: "226px"}}><a href="#">Flipkart Internet Private Limited,

                  Buildings Alyssa, Begonia &

                  Clove Embassy Tech Village,

                  Outer Ring Road, Devarabeesanahalli Village,

                  Bengaluru, 560103,

                  Karnataka, India

                  CIN : U51109KA2012PTC066107

                  Telephone: 1800 202 9898</a></li>


              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer;