// This Project is build by Aditya Kumar
// Github - https://github.com/adityakumar-in
// Repository Link - https://github.com/adityakumar-in/Toder
// LinkedIn - https://www.linkedin.com/in/aditya-kumar-609909259/


// Importing all the usefull tags with their respective ID's
let all = document.getElementById("all");
let active = document.getElementById("active");
let completed = document.getElementById("completed");
let radioGreen = document.getElementById("outerGreen");
let radioBlue = document.getElementById("outerBlue");
let radioRed = document.getElementById("outerRed");
let radioPink = document.getElementById("outerPink");
let addTask = document.getElementById("addTask");
let inputTitle = document.getElementById("title");
let inputDate = document.getElementById("date");
let inputTask = document.getElementById("description");

// Loads the Todo Card According to the Selected Sorting Buttons, i.e., 'All', 'Active', & 'Completed'
let runByDefault = () => {
    let allColor;
    let activeColor;
    let completedColor;

    // Getting 'All Button' info
    let element = document.querySelector('#all');
    // Check if the element exists
    if (element) {
        // Extract the text color
        let computedStyle = window.getComputedStyle(element);
        allColor = computedStyle.color;
    } else {
        console.log('Element not found');
    }
    
    // Getting 'Active Button' info
    element = document.querySelector('#active');
    // Check if the element exists
    if (element) {
        // Extract the text color
        let computedStyle = window.getComputedStyle(element);
        activeColor = computedStyle.color;
    } else {
        console.log('Element not found');
    }
    
    // Getting 'Completed Button' info
    element = document.querySelector('#completed');
    // Check if the element exists
    if (element) {
        // Extract the text color
        let computedStyle = window.getComputedStyle(element);
        completedColor = computedStyle.color;
    } else {
        console.log('Element not found');
    }
    
    // Select the parent element with class "cards center"
    const parentDiv = document.querySelector('.cards.center');
    parentDiv.innerHTML = '';
    
    // Filtering the Todos Accordingly
    if(allColor==="rgb(210, 230, 245)") {
        generateCards();
    }
    
    if(activeColor==="rgb(255, 224, 224)") {
        generateCards("active");
    }
    
    if(completedColor==="rgb(182, 228, 191)") {
        generateCards("completed");
    }
}

// It defines the working of '+ Add' Submit Button
let addButton = ()=>{
    let color;

    // Getting status of Color Pickers 
    const getBlueStyle = getComputedStyle(radioBlue);
    const blueBorderColor = getBlueStyle.getPropertyValue('border-color');
    const getGreenStyle = getComputedStyle(radioGreen);
    const greenBorderColor = getGreenStyle.getPropertyValue('border-color');
    const getRedStyle = getComputedStyle(radioRed);
    const redBorderColor = getRedStyle.getPropertyValue('border-color');

    // Checking which Color Picker is Selected 
    if(blueBorderColor==="rgb(59, 54, 138)")
        color = "blue";
    else if(greenBorderColor==="rgb(62, 148, 94)")
        color = "green";
    else if(redBorderColor!="rgb(244, 247, 250)")
        color = "red";
    else
        color = "pink";

    // Select the parent element with class "cards center"
    const parentDiv = document.querySelector('.cards.center');
    parentDiv.innerHTML = '';

    // Runs when either 'Title' or 'Task Details' is Inputted by User, here 'Date' input is mandatory
    if((inputTitle.value!=='' || inputTask.value!=='') && inputDate.value!=='')
        fillDetails(inputTitle.value.trim(), inputDate.value, inputTask.value.trim(), "active", color, "yes", "yes");
    
    // Loads the Todos according to the selected Filter
    runByDefault();
}

// Converts 'Numeric Month' to 'String Month' and returns it, Eg - '1' -> 'January'
let getMonth = (month) => {
    if(month===1)
    return "January";
    else if(month===2)
    return "February"
    else if(month===3)
    return "March"
    else if(month===4)
    return "April"
    else if(month===5)
    return "May"
    else if(month===6)
    return "June"
    else if(month===7)
    return "July"
    else if(month===8)
    return "August"
    else if(month===9)
    return "September"
    else if(month===10)
    return "October"
    else if(month===11)
    return "November"
    else
    return "December"
}

// Converts 'String Month' to 'Numeric Month' and returns it, Eg - 'January' -> '1'
let getSimpleMonth = (month) => {
    if(month==="January")
    return "01";
    else if(month==="February")
    return "02"
    else if(month==="March")
    return "03"
    else if(month==="April")
    return "04"
    else if(month==="May")
    return "05"
    else if(month==="June")
    return "06"
    else if(month==="July")
    return "07"
    else if(month==="August")
    return "08"
    else if(month==="September")
    return "09"
    else if(month==="October")
    return "10"
    else if(month==="November")
    return "11"
    else
    return "12"
}

// Converts 'String Month' to 'Numeric Month' and returns it, Eg - 'January' -> '1'
let getSimpleDay = (day) => {
    if(day==="1,")
        return "01";
    else if(day==="2,")
        return "02"
    else if(day==="3,")
        return "03"
    else if(day==="4,")
        return "04"
    else if(day==="5,")
        return "05"
    else if(day==="6,")
        return "06"
    else if(day==="7,")
        return "07"
    else if(day==="8,")
        return "08"
    else if(day==="9,")
        return "09"
    else if(day==="10,")
        return "10"
    else if(day==="11,")
        return "11"
    else if(day==="12,")
        return "12"
    else if(day==="13,")
        return "13"
    else if(day==="14,")
        return "14"
    else if(day==="15,")
        return "15"
    else if(day==="16,")
        return "16"
    else if(day==="17=,")
        return "17="
    else if(day==="18,")
        return "18"
    else if(day==="19,")
        return "19"
    else if(day==="20,")
        return "20"
    else if(day==="21,")
        return "21"
    else if(day==="22,")
        return "22"
    else if(day==="23,")
        return "23"
    else if(day==="24,")
        return "24"
    else if(day==="25,")
        return "25"
    else if(day==="26,")
        return "26"
    else if(day==="27,")
        return "27"
    else if(day==="28,")
        return "28"
    else if(day==="29,")
        return "29"
    else if(day==="30,")
        return "30"
    else if(day==="31,")
        return "31"
    else
        return ""
}

// Beautify Dates, Eg - '2023-12-15' [YYYY-MM-DD] -> 'December 15, 2023'
let generateDate = (date) => {
    let dateArray = date.split('-').map(Number);
    let month = getMonth(dateArray[1]);
    
    return `${month} ${dateArray[2]}, ${dateArray[0]}`;
}

// Simplify Dates, Eg - 'December 15, 2023' -> '2023-12-15' [YYYY-MM-DD]
let simplifyDate = (date) => {
    let dateArray = date.split(' ');
    let month = getSimpleMonth(dateArray[0]);
    let day = getSimpleDay(dateArray[1]);

    return `${dateArray[2]}-${month}-${day}`;
}

// Template for Generating 'Todo Cards'
let makeCard = (title, date, task, color, edit, done) => {
    // Create the <div> element with class "card" and id "cardColor"
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.id = 'cardColor';

    // Create the <div> element with class "card-buttons" inside the cardDiv
    const cardButtonsDiv = document.createElement('div');
    cardButtonsDiv.className = 'card-buttons';

    // Create the first <img> element for "done" button
    const doneImg = document.createElement('img');
    doneImg.src = 'Images/done.svg';
    doneImg.alt = 'editText Button';
    doneImg.id = 'done';
    doneImg.style.width = '29px';

    // Create the second <img> element for "edit" button
    const editImg = document.createElement('img');
    editImg.src = 'Images/edit.svg';
    editImg.alt = 'editText Button';
    editImg.id = 'edit';
    editImg.style.width = '22px';

    // Create the third <img> element for "close" button
    const closeImg = document.createElement('img');
    closeImg.src = 'Images/close.svg';
    closeImg.alt = 'deleteCard Button';
    closeImg.id = 'close';
    closeImg.style.width = '25px';

    // Append the <img> elements to the cardButtonsDiv
    if(done==="yes") // Append when 'done' status is true[yes]
        cardButtonsDiv.appendChild(doneImg);

    if(edit==="yes") // Append when 'done' status is true[yes]
        cardButtonsDiv.appendChild(editImg);

    cardButtonsDiv.appendChild(closeImg);
    
    // Create the <h2> element with id "cardTitle"
    const cardTitleH2 = document.createElement('h2');
    cardTitleH2.id = 'cardTitle';
    cardTitleH2.textContent = title;
    
    
    // OnClick EventListener of 'Done' Button
    doneImg.addEventListener('click', function() {
        const card = JSON.parse(localStorage.getItem(cardTitleH2.textContent));
        
        card.status = "completed"; // Changing Status from 'active' to 'completed'
        
        // Disable 'Done' & 'Edit' button
        card.done = "no" 
        card.edit = "no"
        
        // Reflecting the changes made
        localStorage.setItem(cardTitleH2.textContent, JSON.stringify(card));
        
        // Refreshing the card from the DOM
        const parentDi = document.querySelector('.cards.center');
        parentDi.innerHTML = '';
        runByDefault();
    });
    
    // OnClick EventListener of 'Edit' Button
    editImg.addEventListener('click', function() {
        // Get the title of the card to identify it in local storage
        const cardTitle = cardTitleH2.textContent;
        const card = JSON.parse(localStorage.getItem(cardTitleH2.textContent));
        let date = simplifyDate(card.date);

        // Putting Todo Values in 'Input tags' to Start Editing the Todo
        inputTitle.value = card.title;
        inputDate.value = date;
        inputTask.value = card.task;
        
        // Remove the card from local storage
        localStorage.removeItem(cardTitle);
        
        // Refreshing the card from the DOM
        const parentDi = document.querySelector('.cards.center');
        parentDi.innerHTML = '';
        runByDefault();
    });

    // OnClick EventListener of 'Close' Button
    closeImg.addEventListener('click', function() {
        // Get the title of the card to identify it in local storage
        const cardTitle = cardTitleH2.textContent;
        
        // Remove the card from local storage
        localStorage.removeItem(cardTitle);
        
        // Refreshing the card from the DOM
        const parentDi = document.querySelector('.cards.center');
        parentDi.innerHTML = '';
        runByDefault();
    });

    // Create the <p> element with id "cardDate"
    const cardDateP = document.createElement('p');
    cardDateP.id = 'cardDate';
    cardDateP.textContent = date;

    // Create the <p> element with id "cardTask"
    const cardTaskP = document.createElement('p');
    cardTaskP.id = 'cardTask';
    cardTaskP.textContent = task;

    // Append the child elements to the cardDiv
    cardDiv.appendChild(cardButtonsDiv);
    cardDiv.appendChild(cardTitleH2);
    cardDiv.appendChild(cardDateP);
    cardDiv.appendChild(cardTaskP);

    // Changing the card Color Accordingly
    if(color==="blue") {
        cardDiv.style.backgroundColor = "rgb(201, 201, 238)";
        cardTitleH2.style.color = "rgb(14, 11, 54)";
        cardTaskP.style.color = "rgb(14, 11, 54)";
        cardDateP.style.color = "rgb(110, 110, 165)";
    }
    else if(color==="green") {
        cardDiv.style.backgroundColor = "rgb(185, 230, 185)";
        cardTitleH2.style.color = "rgb(11, 54, 11)";
        cardTaskP.style.color = "rgb(11, 54, 11)";
        cardDateP.style.color = "rgb(77, 134, 77)";
    }
    else if(color==="red") {
        cardDiv.style.backgroundColor = "rgb(242, 200, 200)";
        cardTitleH2.style.color = "rgb(54, 11, 11)";
        cardTaskP.style.color = "rgb(54, 11, 11)";
        cardDateP.style.color = "rgb(165, 110, 110)";
    }
    else {
        cardDiv.style.backgroundColor = "rgb(237, 196, 231)";
        cardTitleH2.style.color = "rgb(54, 11, 48)";
        cardTaskP.style.color = "rgb(54, 11, 48)";
        cardDateP.style.color = "rgb(165, 110, 160)";
    }

    // Select the parent element with class "cards center"
    const parentDiv = document.querySelector('.cards.center');

    // Append the cardDiv to the document body or any desired parent element
    parentDiv.appendChild(cardDiv);
}

// Generate 'Todo Cards' according to the Filter Selected
let generateCards = (query="all") => {
    // Looping through the each element of 'Local-Storage'
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let card = JSON.parse(localStorage.getItem(key)); // Getting Card Details

        if(query==="all") // Executes when 'All' Button is Selected
            makeCard(card.title, card.date, card.task, card.color, card.edit, card.done);

        else if(query==="active") { // Executes when 'Active' Button is Selected
            // Filtering the Active Todo
            if(card.status==="active") {
                makeCard(card.title, card.date, card.task, card.color, card.edit, card.done);
            }
        }

        else { // Executes when 'Completed' Button is Selected
            // Filtering the Completed Todo
            if(card.status==="completed") {
                makeCard(card.title, card.date, card.task, card.color, card.edit, card.done);
            }
        }
    }
      
}

// Gets the 'Todo Card' details and Store it in 'Local-Storage'
let fillDetails = (title, date, task, status, colorCode, edit, done) => {
    date = generateDate(date); // Beautify Date

    // Filling Details in Js Object
    const details = {
        title: title,
        date: date,
        task: task,
        status: status,
        color: colorCode,
        edit: edit,
        done: done
    }

    // Convert the object to a string
    const detailsInString = JSON.stringify(details);

    // Store the string in local storage
    localStorage.setItem(title, detailsInString);

    // Loads the Todos according to the selected Filter
    runByDefault();
}

// Toggle Radio button functions
let greenClicked = () => {
    radioBlue.style.border = "3px solid rgb(244, 247, 250)";
    radioPink.style.border = "3px solid rgb(244, 247, 250)";
    radioRed.style.border = "3px solid rgb(244, 247, 250)";
    radioGreen.style.border = "3px solid rgb(62, 148, 94)";
}
let blueClicked = () => {
    radioGreen.style.border = "3px solid rgb(244, 247, 250)";
    radioPink.style.border = "3px solid rgb(244, 247, 250)";
    radioRed.style.border = "3px solid rgb(244, 247, 250)";
    radioBlue.style.border = "3px solid rgb(59, 54, 138)";
}
let redClicked = () => {
    radioBlue.style.border = "3px solid rgb(244, 247, 250)";
    radioPink.style.border = "3px solid rgb(244, 247, 250)";
    radioGreen.style.border = "3px solid rgb(244, 247, 250)";
    radioRed.style.border = "3px solid rgb(128, 57, 57)";
}
let pinkClicked = () => {
    radioBlue.style.border = "3px solid rgb(244, 247, 250)";
    radioGreen.style.border = "3px solid rgb(244, 247, 250)";
    radioRed.style.border = "3px solid rgb(244, 247, 250)";
    radioPink.style.border = "3px solid rgb(148, 75, 135)";
}

// Toggle button functions
let allClicked = () => {
    all.style.color = "rgb(210, 230, 245)";
    all.style.background = "linear-gradient(135deg, #2764ffbe, #1b0955f0)";

    active.style.color = "#420404f0";
    active.style.background = "linear-gradient(135deg, #fedadabe, #e3c4c4f0)";

    completed.style.color = "#022d08f0";
    completed.style.background = "linear-gradient(135deg, #e9ffe6be, #b9d8bcf0)";

    // Select the parent element with class "cards center"
    const parentDiv = document.querySelector('.cards.center');
    parentDiv.innerHTML = '';

    generateCards(); // Generate Cards with 'default' query
}
let activeClicked = () => {
    active.style.color = "rgb(255, 224, 224)";
    active.style.background = "linear-gradient(135deg, #ff2727be, #420404f0)";

    all.style.color = "#1b0955f0";
    all.style.background = "linear-gradient(135deg, #dde5f7be, #bdbadaf0)";

    completed.style.color = "#022d08f0";
    completed.style.background = "linear-gradient(135deg, #e9ffe6be, #b9d8bcf0)";

    // Select the parent element with class "cards center"
    const parentDiv = document.querySelector('.cards.center');
    parentDiv.innerHTML = '';

    generateCards("active"); // Generate Cards with 'active' query
}
let completedClicked = () => {
    completed.style.color = "rgb(182, 228, 191)";
    completed.style.background = "linear-gradient(135deg, #349d2bbe, #022d08f0)";

    all.style.color = "#1b0955f0";
    all.style.background = "linear-gradient(135deg, #dde5f7be, #bdbadaf0)";

    active.style.color = "#420404f0";
    active.style.background = "linear-gradient(135deg, #fedadabe, #e3c4c4f0)";

    // Select the parent element with class "cards center"
    const parentDiv = document.querySelector('.cards.center');
    parentDiv.innerHTML = '';

    generateCards("completed"); // Generate Cards with 'completed' query
}

// Runs on 'Website StartUp' & 'Website Reloading'
runByDefault();
