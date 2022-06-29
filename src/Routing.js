import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
//import { Link, useParams } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer';
//import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Mobiles from './component/Mobiles/Mobiles';
import Fashion from './component/Fashion/Fashion';
//import realme9 from './component/Mobiles/realme9'
import realme9sunburstgold128gbid62b457001d72ad46bd5efd24 from './component/Mobiles/realme9sunburstgold128gbid62b457001d72ad46bd5efd24'
import SAMSUNGGalaxyA735Gid62b457001d72ad46bd5efd27 from './component/Mobiles/SAMSUNGGalaxyA735Gid62b457001d72ad46bd5efd27';
import realmeC31LightSilverid62b457001d72ad46bd5efd2d from './component/Mobiles/realmeC31LightSilverid62b457001d72ad46bd5efd2d'
import REDMINote10SFrostWhiteid62b457001d72ad46bd5efd2c from './component/Mobiles/REDMINote10SFrostWhiteid62b457001d72ad46bd5efd2c'
import OPPOA31MysteryBlackid62b457001d72ad46bd5efd2a from './component/Mobiles/OPPOA31MysteryBlackid62b457001d72ad46bd5efd2a'
import OnePlus95GAstralBlackid62b457001d72ad46bd5efd28 from './component/Mobiles/OnePlus95GAstralBlackid62b457001d72ad46bd5efd28'
import Login from './component/login/login';
import Register from './component/login/register';
import JACKJONESid62b457001d72ad46bd5efd28 from './component/Fashion/JACKJONESid62b457001d72ad46bd5efd28'
import AllenSollyid62bb3bc613d1bd065322fc7a from './component/Fashion/AllenSollyid62bb3bc613d1bd065322fc7a'
import Roadsterid62bb3bc613d1bd065322fc7c from './component/Fashion/Roadsterid62bb3bc613d1bd065322fc7c'
import JACKJONESid62b457001d72ad46bd5efd38 from './component/Fashion/JACKJONESid62b457001d72ad46bd5efd38'
import AllenSollyid62bb3bc613d1bd065322fc5a from './component/Fashion/AllenSollyid62bb3bc613d1bd065322fc5a'
import Roadsterid62bb3bc613d1bd065322fc5c from './component/Fashion/Roadsterid62bb3bc613d1bd065322fc5c'
import HeraDawnid62bb3bc613d1bd065322fc79 from './component/Fashion/HeraDawnid62bb3bc613d1bd065322fc79'
import FrenchConnectionid62bb3bc613d1bd065322fc7e from './component/Fashion/FrenchConnectionid62bb3bc613d1bd065322fc7e'
import ADRENEXid62bb3bc613d1bd065322fc7f from './component/Fashion/ADRENEXid62bb3bc613d1bd065322fc7f'
import HeraDawnid62bb3bc613d1bd065322fc80 from './component/Fashion/HeraDawnid62bb3bc613d1bd065322fc80'

//let id = this.match.props.params.id



const Routing = () => {
    return(
        <>
            <BrowserRouter>
            <Header/>
           
                <Route exact path="/" component={Home}/>
                <Route exact path="/Fashion" component={Fashion}/>
                {/*<Route path="/listing/:id" component={Listing}/>*/}
                <Route path="/Mobiles" component={Mobiles}/>
                <Route path="/realme9sunburstgold128gbid62b457001d72ad46bd5efd24" component={realme9sunburstgold128gbid62b457001d72ad46bd5efd24}/>
                <Route path="/SAMSUNGGalaxyA735Gid62b457001d72ad46bd5efd27" component={SAMSUNGGalaxyA735Gid62b457001d72ad46bd5efd27}/>
                <Route path="/realmeC31LightSilverid62b457001d72ad46bd5efd2d" component={realmeC31LightSilverid62b457001d72ad46bd5efd2d}/>
                <Route path="/REDMINote10SFrostWhiteid62b457001d72ad46bd5efd2c" component={REDMINote10SFrostWhiteid62b457001d72ad46bd5efd2c}/>
                <Route path="/OPPOA31MysteryBlackid62b457001d72ad46bd5efd2a" component={OPPOA31MysteryBlackid62b457001d72ad46bd5efd2a}/>
                <Route path="/OnePlus95GAstralBlackid62b457001d72ad46bd5efd28" component={OnePlus95GAstralBlackid62b457001d72ad46bd5efd28}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/JACKJONESid62b457001d72ad46bd5efd28" component={JACKJONESid62b457001d72ad46bd5efd28}/>
                <Route path="/AllenSollyid62bb3bc613d1bd065322fc7a" component={AllenSollyid62bb3bc613d1bd065322fc7a}/>
                <Route path="/Roadsterid62bb3bc613d1bd065322fc7c" component={Roadsterid62bb3bc613d1bd065322fc7c}/>
                <Route path="/JACKJONESid62b457001d72ad46bd5efd38" component={JACKJONESid62b457001d72ad46bd5efd38}/>
                <Route path="/AllenSollyid62bb3bc613d1bd065322fc5a" component={AllenSollyid62bb3bc613d1bd065322fc5a}/>
                <Route path="/Roadsterid62bb3bc613d1bd065322fc5c" component={Roadsterid62bb3bc613d1bd065322fc5c}/>
                <Route path="/HeraDawnid62bb3bc613d1bd065322fc79" component={HeraDawnid62bb3bc613d1bd065322fc79}/>
                <Route path="/FrenchConnectionid62bb3bc613d1bd065322fc7e" component={FrenchConnectionid62bb3bc613d1bd065322fc7e}/>
                <Route path="/ADRENEXid62bb3bc613d1bd065322fc7f" component={ADRENEXid62bb3bc613d1bd065322fc7f}/>
                <Route path="/HeraDawnid62bb3bc613d1bd065322fc80" component={HeraDawnid62bb3bc613d1bd065322fc80}/>




                {/*<Route path='/listing/:id' render={(props) => <itemData {...props}/>}/>*/}
                 {/*<Route path={`/listing/${id}`} component={Listing}/>*/}
               
                 
                
            <Footer/>
            </BrowserRouter>
            </>
    )
}

export default Routing
