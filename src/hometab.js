import image1 from './assets/homeTabSushi.jpg'

const openHome = () => {
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
    const homeArea = document.createElement('div');
    homeArea.id = 'homeArea';
    const tabTitle = document.createElement('h2');
    const tabContent = document.createElement('p');
    tabTitle.innerHTML = "Welcome to Tengoku Sushi!"
    tabContent.innerHTML = "Tengoku Sushi is a family-owned restaurant that has been in business since April 2021. \
    We offer some of the best Japanese and Korean dishes you can find; rivaling the best restaurants around the world.\
    Our suppliers provide us with fresh and high quality fish, straight from the fish market. We welcome you to come join\
    us for a night of great memories."

    const homeSushiPic = document.createElement('img');
    homeSushiPic.id = "homeSushiPic";
    homeSushiPic.src = image1;


    homeArea.appendChild(tabTitle);
    homeArea.appendChild(tabContent);
    homeArea.appendChild(homeSushiPic);
    mainArea.appendChild(homeArea);
};

export {openHome}