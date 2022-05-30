import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './Header'
import Footer from './Footer';
import Home from './component/Home/Home';
import Fashion from './component/Fashion/Fashion';


const Routing = () => {
    return(
        <BrowserRouter>
           <Header/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/Fashion" component={Fashion}/>
                
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing
