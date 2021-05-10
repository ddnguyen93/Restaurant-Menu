
const baseLayout = () => {
    const idContent = document.getElementById('content');
    const HeaderArea = document.createElement('div');
    HeaderArea.id = 'Header'
    const restaurantName = document.createElement('h1');
    restaurantName.innerHTML = 'Tengoku Sushi'
    HeaderArea.appendChild(restaurantName);
    idContent.appendChild(HeaderArea);

    const tabSelection = document.createElement('div');
    tabSelection.classList.add('tabs');
    HeaderArea.appendChild(tabSelection);

    const homeTab = document.createElement('button');
    homeTab.innerHTML = 'Home';
    const menuTab = document.createElement('button');
    menuTab.innerHTML = 'Menu';
    const contactTab = document.createElement('button');
    contactTab.innerHTML = 'Contact';

    tabSelection.appendChild(homeTab);
    tabSelection.appendChild(menuTab);
    tabSelection.appendChild(contactTab);

    const buttonList = document.querySelectorAll("button");

    const addButtonProperties = (() => {
        for (let eachButton of buttonList) {
            eachButton.classList.add('tabLinks');
            eachButton.id = eachButton.innerHTML + 'Tab';
        }
    })();

    const mainArea = document.createElement('div');
    mainArea.id = 'Main';
    idContent.appendChild(mainArea);
}

export {baseLayout}
