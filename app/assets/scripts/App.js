
import '../css/styles.css';


//js modules

import subNav from '../scripts/subNav';
import mobileNav from '../scripts/header';

const subnav=subNav();
const mobileNavigation=mobileNav();



 //React Related Code Goes Herec
 import React from 'react';
 import ReactDOM from 'react-dom';


//  ReactDOM.render(<Component1/>,document.querySelector("#react"));


if (module.hot){
    module.hot.accept();
}
