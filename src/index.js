import _ from 'lodash';
import './main.css';
import {baseLayout} from './initializePage'
import {openHome} from './hometab'
import {openMenu} from './menutab'
import {openContact} from './contacttab'

baseLayout();

document.getElementById("HomeTab").addEventListener("click", openHome);
document.getElementById("MenuTab").addEventListener("click", openMenu);
document.getElementById("ContactTab").addEventListener("click", openContact);

openHome();




