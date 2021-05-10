import SeaweedSaladImg from './assets/SeaweedSalad.jpg'
import CalamariImg from './assets/Calamari.jpg'
import ShrimpTempuraImg from './assets/ShrimpTempura.jpg'
import GyozaImg from './assets/Gyoza.jpg'

import RamenImg from './assets/Ramen.jpg'
import BentoBoxImg from './assets/Bento-Box.jpg'
import SmallPlatterImg from './assets/Platter40Piece.jpg'
import LargePlatterImg from './assets/SushiBoat.jpg'

import IceCreamImg from './assets/GreenTeaIceCream.jpg'
import CheesecakeImg from './assets/JapaneseCheesecake.jpg'
import ShavedIceImg from './assets/MangoShavedIce.jpg'
import TiramisuImg from './assets/SushiBoat.jpg'

const openMenu = () => {
    if (document.getElementById('homeArea') != undefined ) {
        document.getElementById('homeArea').remove();
    };
    if (document.getElementById('menuArea') != undefined ) {
        document.getElementById('menuArea').remove();
    };
    if (document.getElementById('contactArea') != undefined ) {
        document.getElementById('contactArea').remove();
    };

    const mainArea = document.getElementById('Main');
    const menuArea = document.createElement('div');
    menuArea.id = "menuArea";
    mainArea.appendChild(menuArea);

    createDishTypeArea('Appetizers');
    createDishTypeArea('Entrées');
    createDishTypeArea('Desserts');
    createDivision('Appetizers');
    createDivision('Entrées');
    createDivision('Desserts');
    addDivisionTitle('Appetizers', 0);
    addDivisionTitle('Entrées', 1);
    addDivisionTitle('Desserts', 2);

    //Appetizer-----------------------------------------------------------
    let SeaweedSaladDesc = 'Fresh seaweed seasoned with seasme oil, soy sauce, sugar, vinegar and salt.'
    addDish(SeaweedSaladImg, '1. Seaweed Salad', '$2.99', SeaweedSaladDesc, 'Appetizers1');

    let CalamariDesc = 'Squid fried in tempura batter. Served with special sauce.'
    addDish(CalamariImg, '2. Calamari', '$5.99', CalamariDesc, 'Appetizers2');

    let ShrimpTempuraDesc = 'Shrimp fried in tempura batter. Served with special sauce.'
    addDish(ShrimpTempuraImg, '3. Shrimp Tempura', '$5.99', ShrimpTempuraDesc, 'Appetizers3');

    let GyozaDesc = 'Panfried japanese dumplings filled with pork, chives, garlic, ginger and onions.'
    addDish(GyozaImg, '4. Gyoza', '$4.99', GyozaDesc, 'Appetizers4');
    //Entree-----------------------------------------------------------
    let RamenDesc = 'Ramen noodles with pork and chicken broth. Served with slices of pork and ajitsuke tamago (boil egg).'
    addDish(RamenImg, '5. Ramen', '$10.99', RamenDesc, 'Entrées1');

    let BentoBoxDesc = 'Beef teriyaki served with rice, salad, spring roll and fried dumpling.'
    addDish(BentoBoxImg, '6. Bento Box', '$12.99', BentoBoxDesc, 'Entrées2');

    let SmallPlatterDesc = 'Sushi platter with 6 sashimi, 6 nigiri and 28 maki roll pieces.'
    addDish(SmallPlatterImg, '7. 40 Piece Sushi Platter', '$49.99', SmallPlatterDesc, 'Entrées3');

    let LargePlatterDesc = 'Sushi platter with 50 sashimi, 24 nigiri and 24 maki roll pieces.'
    addDish(LargePlatterImg, '8. 98 Piece Sushi Platter', '$89.99', LargePlatterDesc, 'Entrées4');

    //Dessert--------------------------------------------------------------
    let IceCreamDesc = 'One scoop of green tea ice cream.'
    addDish(IceCreamImg, '9. Green Tea Ice Cream', '$2.99', IceCreamDesc, 'Desserts1');

    let CheesecakeDesc = 'A slice of Japanese Cheesecake.'
    addDish(CheesecakeImg, '10. Japanese Cheesecake', '$6.99', CheesecakeDesc, 'Desserts2');

    let ShavedIceDesc = 'Shaved ice topped with mangos, condense milk and ice cream.'
    addDish(ShavedIceImg, '11. Mango Shaved Ice Cream', '$9.99', ShavedIceDesc, 'Desserts3');

    let TiramisuDesc = 'Coffee flavoured dessert.'
    addDish(TiramisuImg, '12. Tiramisu', '$4.99', TiramisuDesc, 'Desserts4');    
};

const createDishTypeArea = (dishType) => {
    const areaType = document.createElement('div');
    areaType.id = dishType;
    areaType.classList.add('dishType');
    menuArea.appendChild(areaType);
}

const createDivision = (dishType) => {
    const selectDishType = document.getElementById(dishType);
    const areaTitle = document.createElement('div');
    areaTitle.classList.add('areaTitle');
    selectDishType.appendChild(areaTitle);
    for (let i = 1; i <= 4; i++) {
        createItemSlot(selectDishType, dishType, i);
    }

}

const createItemSlot = (dishCategory, dishType, i) => {
    const newItemslot = document.createElement('div')
    dishCategory.appendChild(newItemslot);
    newItemslot.classList.add('dishBox')
    newItemslot.id = dishType + `${i}`;
}

const addDivisionTitle = (dishCategory, positionNum) =>{
    const areaTitle = document.getElementsByClassName('areaTitle');
    areaTitle[positionNum].innerHTML = dishCategory;
}   

const addDish = (imageLink, dishName, dishPrice, dishDescription, dishLocation) => {
    const location = document.getElementById(dishLocation);
    const addDishPic = document.createElement('img');
    addDishPic.src = imageLink;
    addDishPic.classList.add('dishImages')

    const addDishName = document.createElement('h3');
    addDishName.innerHTML = dishName;
    addDishName.classList.add('dishName');
    
    const addDishPrice = document.createElement('h3');
    addDishPrice.innerHTML = dishPrice;
    addDishPrice.classList.add('dishPrice');
    
    const addDishDescription = document.createElement('h3');
    addDishDescription.innerHTML = dishDescription
    addDishDescription.classList.add('dishDescription');

    location.appendChild(addDishPic);
    location.appendChild(addDishName);
    location.appendChild(addDishPrice);
    location.appendChild(addDishDescription);
}


export {openMenu}