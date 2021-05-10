const openContact = () => {
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
    const contactArea = document.createElement('div');
    contactArea.id = 'contactArea';
    const leftContactArea = document.createElement('div');
    leftContactArea.id = 'leftSide';
    const rightContactArea = document.createElement('div');
    rightContactArea.id = 'rightSide';

    const tabTitle = document.createElement('h2');
    const addressPart1 = document.createElement('p');
    const addressPart2 = document.createElement('p');
    const phoneNum = document.createElement('p');
    const emailAddress = document.createElement('p');
    
    const mondayHours = document.createElement('p');
    const tuesdayHours = document.createElement('p');
    const wednesdayHours = document.createElement('p');
    const thursdayHours = document.createElement('p');
    const fridayHours = document.createElement('p');
    const saturdayHours = document.createElement('p');
    const sundayHours = document.createElement('p');

    tabTitle.innerHTML = "Contact Page";
    
    addressPart1.innerHTML = "123 King St. W - Unit 7";
    addressPart2.innerHTML = "Toronto, ON L8Z 5B2";
    phoneNum.innerHTML = "(416) 123-4567"
    emailAddress.innerHTML = "Tengokusushi@gmail.com"

    mondayHours.innerHTML = "Monday: 11am - 9pm";
    tuesdayHours.innerHTML = "Tuesday: Closed";
    wednesdayHours.innerHTML = "Wednesday: 11am - 9pm";
    thursdayHours.innerHTML = "Thursday: 11am - 9pm";
    fridayHours.innerHTML = "Friday: 11am - 9pm";
    saturdayHours.innerHTML = "Saturday: 11am - 11pm";
    sundayHours.innerHTML = "Sunday: 11am - 11pm";

    leftContactArea.appendChild(addressPart1);
    leftContactArea.appendChild(addressPart2);
    leftContactArea.appendChild(phoneNum);
    leftContactArea.appendChild(emailAddress);
    
    rightContactArea.appendChild(mondayHours);
    rightContactArea.appendChild(tuesdayHours);
    rightContactArea.appendChild(wednesdayHours);
    rightContactArea.appendChild(thursdayHours);
    rightContactArea.appendChild(fridayHours);
    rightContactArea.appendChild(saturdayHours);
    rightContactArea.appendChild(sundayHours);


    contactArea.appendChild(tabTitle);
    contactArea.appendChild(leftContactArea);
    contactArea.appendChild(rightContactArea);
    
    mainArea.appendChild(contactArea);

};

export {openContact}