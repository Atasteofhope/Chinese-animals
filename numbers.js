const hamEl = document.getElementById('hamburger-icon')
const navEl = document.getElementById('nav-ul')
const aniOutput = document.getElementById('animals-output')
const titleElFace = document.getElementById('animal-title-face')
const titleElBack = document.getElementById('animal-title-back')
const pinyinEl = document.getElementById('pinyin-title')
const eNameEl = document.getElementById('english-name')
const imageEl = document.getElementById('image-container')
const firstBtn = document.getElementById('first-button')
const secondBtn = document.getElementById('second-button')
const thirdBtn = document.getElementById('third-button')
const fourthBtn = document.getElementById('fourth-button')
const fifthBtn = document.getElementById('fifth-button')
const sixthBtn = document.getElementById('sixth-button')
const okButton = document.getElementById('ok-button')
const continueBtn = document.getElementById('continue-button')
const buttonsEl = document.getElementById('buttons-element')
const correctEl = document.getElementById('correct-element')
const incorrectEl = document.getElementById('incorrect-element')
const alertEl = document.getElementById('alert-element')
const languageBtn = document.getElementById('language-icon')
const langUl = document.getElementById('lang-ul')
const espButton = document.getElementById('esp-button')
const engButton = document.getElementById('eng-button')
let randNum
let ranArray
let numbersArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,
                18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,
                34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]
let allButtons = [ ]
let firstBtnValue
let secondBtnValue
let thirdBtnValue
let fourthBtnValue
let fifthBtnValue
let sixthBtnValue
let animalInfo

const numbers = [{
    "cName": "零",
    "pinyin": "Líng",
    "eName": "0",
    "aniImage": "img/number0.jpg"
},
{
    "cName": "一",
    "pinyin": "Yī",
    "eName": "1",
    "aniImage": "img/number1.jpg"
},
{
    "cName": "二",
    "pinyin": "Èr",
    "eName": "2",
    "aniImage": "img/number2.jpg"
},
{
    "cName": "三",
    "pinyin": "Sān",
    "eName": "3",
    "aniImage": "img/number3.jpg"
},
{
    "cName": "四",
    "pinyin": "Sì",
    "eName": "4",
    "aniImage": "img/number4.jpg"
},
{
    "cName": "五",
    "pinyin": "Wǔ",
    "eName": "5",
    "aniImage": "img/number5.jpg" 
},
{
    "cName": "六",
    "pinyin": "Liù",
    "eName": "6",
    "aniImage": "img/number6.jpg"
},
{
    "cName": "七",
    "pinyin": "Qī",
    "eName": "7",
    "aniImage": "img/number7.jpg"
},
{
    "cName": "八",
    "pinyin": "Bā",
    "eName": "8",
    "aniImage": "img/number8.jpg"
},
{
    "cName": "九",
    "pinyin": "Jiǔ",
    "eName": "9",
    "aniImage": "img/number9.jpg"
},
{
    "cName": "十",
    "pinyin": "Shí",
    "eName": "10",
    "aniImage": "img/number10.jpg"
},
{
    "cName": "十一",
    "pinyin": "Shí yī",
    "eName": "11",
    "aniImage": "img/number11.jpg"
},
{
    "cName": "十二",
    "pinyin": "Shí èr",
    "eName": "12",
    "aniImage": "img/number12.jpg"
},
{
    "cName": "十三",
    "pinyin": "Shí sān",
    "eName": "13",
    "aniImage": "img/number13.jpg"
},
{
    "cName": "十四",
    "pinyin": "Shí sì",
    "eName": "14",
    "aniImage": "img/number14.jpg"
},
{
    "cName": "十五",
    "pinyin": "Shí wǔ",
    "eName": "15",
    "aniImage": "img/number15.jpg"
},
{
    "cName": "十六",
    "pinyin": "Shí liù",
    "eName": "16",
    "aniImage": "img/number16.jpg"
},
{
    "cName": "十七",
    "pinyin": "Shí qī",
    "eName": "17",
    "aniImage": "img/number17.jpg"
},
{
    "cName": "十八",
    "pinyin": "Shí bā",
    "eName": "18",
    "aniImage": "img/number18.jpg"
},
{
    "cName": "十九",
    "pinyin": "Shí jiǔ",
    "eName": "19",
    "aniImage": "img/number19.jpg"
},
{
    "cName": "二十",
    "pinyin": "Èr shí",
    "eName": "20",
    "aniImage": "img/number20.jpg"
},
{
    "cName": "二十一",
    "pinyin": "Èr shí yī",
    "eName": "21",
    "aniImage": "img/number21.jpg"
},
{
    "cName": "二十二",
    "pinyin": "Èr shí èr",
    "eName": "22",
    "aniImage": "img/number22.jpg"
},
{
    "cName": "二十三",
    "pinyin": "Èr shí sān",
    "eName": "23",
    "aniImage": "img/number23.jpg"
},
{
    "cName": "二十四",
    "pinyin": "Èr shí sì",
    "eName": "24",
    "aniImage": "img/number24.jpg"
},
{
    "cName": "二十五",
    "pinyin": "Èr shí wǔ",
    "eName": "25",
    "aniImage": "img/number25.jpg"
},
{
    "cName": "二十六",
    "pinyin": "Èr shí liù",
    "eName": "26",
    "aniImage": "img/number26.jpg"
},
{
    "cName": "二十七",
    "pinyin": "Èr shí qī",
    "eName": "27",
    "aniImage": "img/number27.jpg"
},
{
    "cName": "二十八",
    "pinyin": "Èr shí bā",
    "eName": "28",
    "aniImage": "img/number28.jpg"
},
{
    "cName": "二十九",
    "pinyin": "Èr shí jiǔ",
    "eName": "29",
    "aniImage": "img/number29.jpg"
},
{
    "cName": "三十",
    "pinyin": "Sān shí",
    "eName": "30",
    "aniImage": "img/number30.jpg"
},
{
    "cName": "一百",
    "pinyin": "Yì  bǎi",
    "eName": "100",
    "aniImage": "img/number100.jpg"
},
{
    "cName": "二百",
    "pinyin": "Èr bǎi",
    "eName": "200",
    "aniImage": "img/number200.jpg"
},
{
    "cName": "三百",
    "pinyin": "Sān bǎi",
    "eName": "300",
    "aniImage": "img/number300.jpg"
},
{
    "cName": "四百",
    "pinyin": "Sì bǎi",
    "eName": "400",
    "aniImage": "img/number400.jpg" 
},
{
    "cName": "五百",
    "pinyin": "Wǔ bǎi",
    "eName": "500",
    "aniImage": "img/number500.jpg" 
},
{
    "cName": "六百",
    "pinyin": "Liù bǎi",
    "eName": "600",
    "aniImage": "img/number600.jpg" 
},
{
    "cName": "七百",
    "pinyin": "Qī bǎi",
    "eName": "700",
    "aniImage": "img/number700.jpg" 
},
{
    "cName": "八百",
    "pinyin": "Bā bǎi",
    "eName": "800",
    "aniImage": "img/number800.jpg" 
},
{
    "cName": "九百",
    "pinyin": "Jiǔ bǎi",
    "eName": "900",
    "aniImage": "img/number900.jpg" 
},
{
    "cName": "一千",
    "pinyin": "Yī qiān",
    "eName": "1,000",
    "aniImage": "img/number1000.jpg" 
},
{
    "cName": "两千",
    "pinyin": "Liǎng qiān",
    "eName": "2,000",
    "aniImage": "img/number2000.jpg" 
},
{
    "cName": "三千",
    "pinyin": "Sān qiān",
    "eName": "3,000",
    "aniImage": "img/number3000.jpg" 
},
{
    "cName": "四千",
    "pinyin": "Sì qiān",
    "eName": "4,000",
    "aniImage": "img/number4000.jpg" 
},
{
    "cName": "五千",
    "pinyin": "Wǔ qiān",
    "eName": "5,000",
    "aniImage": "img/number5000.jpg" 
},
{
    "cName": "六千",
    "pinyin": "Liù qiān",
    "eName": "6,000",
    "aniImage": "img/number6000.jpg" 
},
{
    "cName": "七千",
    "pinyin": "Qī qiān",
    "eName": "7,000",
    "aniImage": "img/number7000.jpg" 
},
{
    "cName": "八千",
    "pinyin": "Bā qiān",
    "eName": "8,000",
    "aniImage": "img/number8000.jpg" 
},
{
    "cName": "九千",
    "pinyin": "Jiǔ qiān",
    "eName": "9,000",
    "aniImage": "img/number9000.jpg" 
},
{
    "cName": "一万",
    "pinyin": "Yī wàn",
    "eName": "10,000",
    "aniImage": "img/number10000.jpg" 
},
{
    "cName": "十万",
    "pinyin": "Shí wàn",
    "eName": "100,000",
    "aniImage": "img/number100000.jpg" 
},
{
    "cName": "一百万",
    "pinyin": "Yī bǎi wàn",
    "eName": "1,000,000",
    "aniImage": "img/number1000000.jpg" 
}, ]

const numbersES = [{
    "cName": "零",
    "pinyin": "Líng",
    "eName": "0",
    "aniImage": "img/number0.jpg"
},
{
    "cName": "一",
    "pinyin": "Yī",
    "eName": "1",
    "aniImage": "img/number1.jpg"
},
{
    "cName": "二",
    "pinyin": "Èr",
    "eName": "2",
    "aniImage": "img/number2.jpg"
},
{
    "cName": "三",
    "pinyin": "Sān",
    "eName": "3",
    "aniImage": "img/number3.jpg"
},
{
    "cName": "四",
    "pinyin": "Sì",
    "eName": "4",
    "aniImage": "img/number4.jpg"
},
{
    "cName": "五",
    "pinyin": "Wǔ",
    "eName": "5",
    "aniImage": "img/number5.jpg" 
},
{
    "cName": "六",
    "pinyin": "Liù",
    "eName": "6",
    "aniImage": "img/number6.jpg"
},
{
    "cName": "七",
    "pinyin": "Qī",
    "eName": "7",
    "aniImage": "img/number7.jpg"
},
{
    "cName": "八",
    "pinyin": "Bā",
    "eName": "8",
    "aniImage": "img/number8.jpg"
},
{
    "cName": "九",
    "pinyin": "Jiǔ",
    "eName": "9",
    "aniImage": "img/number9.jpg"
},
{
    "cName": "十",
    "pinyin": "Shí",
    "eName": "10",
    "aniImage": "img/number10.jpg"
},
{
    "cName": "十一",
    "pinyin": "Shí yī",
    "eName": "11",
    "aniImage": "img/number11.jpg"
},
{
    "cName": "十二",
    "pinyin": "Shí èr",
    "eName": "12",
    "aniImage": "img/number12.jpg"
},
{
    "cName": "十三",
    "pinyin": "Shí sān",
    "eName": "13",
    "aniImage": "img/number13.jpg"
},
{
    "cName": "十四",
    "pinyin": "Shí sì",
    "eName": "14",
    "aniImage": "img/number14.jpg"
},
{
    "cName": "十五",
    "pinyin": "Shí wǔ",
    "eName": "15",
    "aniImage": "img/number15.jpg"
},
{
    "cName": "十六",
    "pinyin": "Shí liù",
    "eName": "16",
    "aniImage": "img/number16.jpg"
},
{
    "cName": "十七",
    "pinyin": "Shí qī",
    "eName": "17",
    "aniImage": "img/number17.jpg"
},
{
    "cName": "十八",
    "pinyin": "Shí bā",
    "eName": "18",
    "aniImage": "img/number18.jpg"
},
{
    "cName": "十九",
    "pinyin": "Shí jiǔ",
    "eName": "19",
    "aniImage": "img/number19.jpg"
},
{
    "cName": "二十",
    "pinyin": "Èr shí",
    "eName": "20",
    "aniImage": "img/number20.jpg"
},
{
    "cName": "二十一",
    "pinyin": "Èr shí yī",
    "eName": "21",
    "aniImage": "img/number21.jpg"
},
{
    "cName": "二十二",
    "pinyin": "Èr shí èr",
    "eName": "22",
    "aniImage": "img/number22.jpg"
},
{
    "cName": "二十三",
    "pinyin": "Èr shí sān",
    "eName": "23",
    "aniImage": "img/number23.jpg"
},
{
    "cName": "二十四",
    "pinyin": "Èr shí sì",
    "eName": "24",
    "aniImage": "img/number24.jpg"
},
{
    "cName": "二十五",
    "pinyin": "Èr shí wǔ",
    "eName": "25",
    "aniImage": "img/number25.jpg"
},
{
    "cName": "二十六",
    "pinyin": "Èr shí liù",
    "eName": "26",
    "aniImage": "img/number26.jpg"
},
{
    "cName": "二十七",
    "pinyin": "Èr shí qī",
    "eName": "27",
    "aniImage": "img/number27.jpg"
},
{
    "cName": "二十八",
    "pinyin": "Èr shí bā",
    "eName": "28",
    "aniImage": "img/number28.jpg"
},
{
    "cName": "二十九",
    "pinyin": "Èr shí jiǔ",
    "eName": "29",
    "aniImage": "img/number29.jpg"
},
{
    "cName": "三十",
    "pinyin": "Sān shí",
    "eName": "30",
    "aniImage": "img/number30.jpg"
},
{
    "cName": "一百",
    "pinyin": "Yì  bǎi",
    "eName": "100",
    "aniImage": "img/number100.jpg"
},
{
    "cName": "二百",
    "pinyin": "Èr bǎi",
    "eName": "200",
    "aniImage": "img/number200.jpg"
},
{
    "cName": "三百",
    "pinyin": "Sān bǎi",
    "eName": "300",
    "aniImage": "img/number300.jpg"
},
{
    "cName": "四百",
    "pinyin": "Sì bǎi",
    "eName": "400",
    "aniImage": "img/number400.jpg" 
},
{
    "cName": "五百",
    "pinyin": "Wǔ bǎi",
    "eName": "500",
    "aniImage": "img/number500.jpg" 
},
{
    "cName": "六百",
    "pinyin": "Liù bǎi",
    "eName": "600",
    "aniImage": "img/number600.jpg" 
},
{
    "cName": "七百",
    "pinyin": "Qī bǎi",
    "eName": "700",
    "aniImage": "img/number700.jpg" 
},
{
    "cName": "八百",
    "pinyin": "Bā bǎi",
    "eName": "800",
    "aniImage": "img/number800.jpg" 
},
{
    "cName": "九百",
    "pinyin": "Jiǔ bǎi",
    "eName": "900",
    "aniImage": "img/number900.jpg" 
},
{
    "cName": "一千",
    "pinyin": "Yī qiān",
    "eName": "1,000",
    "aniImage": "img/number1000.jpg" 
},
{
    "cName": "两千",
    "pinyin": "Liǎng qiān",
    "eName": "2,000",
    "aniImage": "img/number2000.jpg" 
},
{
    "cName": "三千",
    "pinyin": "Sān qiān",
    "eName": "3,000",
    "aniImage": "img/number3000.jpg" 
},
{
    "cName": "四千",
    "pinyin": "Sì qiān",
    "eName": "4,000",
    "aniImage": "img/number4000.jpg" 
},
{
    "cName": "五千",
    "pinyin": "Wǔ qiān",
    "eName": "5,000",
    "aniImage": "img/number5000.jpg" 
},
{
    "cName": "六千",
    "pinyin": "Liù qiān",
    "eName": "6,000",
    "aniImage": "img/number6000.jpg" 
},
{
    "cName": "七千",
    "pinyin": "Qī qiān",
    "eName": "7,000",
    "aniImage": "img/number7000.jpg" 
},
{
    "cName": "八千",
    "pinyin": "Bā qiān",
    "eName": "8,000",
    "aniImage": "img/number8000.jpg" 
},
{
    "cName": "九千",
    "pinyin": "Jiǔ qiān",
    "eName": "9,000",
    "aniImage": "img/number9000.jpg" 
},
{
    "cName": "一万",
    "pinyin": "Yī wàn",
    "eName": "10,000",
    "aniImage": "img/number10000.jpg" 
},
{
    "cName": "十万",
    "pinyin": "Shí wàn",
    "eName": "100,000",
    "aniImage": "img/number100000.jpg" 
},
{
    "cName": "一百万",
    "pinyin": "Yī bǎi wàn",
    "eName": "1,000,000",
    "aniImage": "img/number1000000.jpg" 
}]

hamEl.addEventListener("click", function(){
    if (navEl.style.display === "flex") {
        navEl.style.display = "none"
    } else {
        navEl.style.display = "flex"
    }
})

languageBtn.addEventListener("click", function(){
    if (langUl.style.display === "flex") {
        langUl.style.display = "none"
    } else {
        langUl.style.display = "flex"
    }
})
//Takes an array and gets a random number out of its length
function singleRandomNum(arr){
    randNum = Math.floor(Math.random() * arr.length)
    return randNum
}

//Takes an array of any amount of numbers
//Generates a new random array with those same numbers
//No number appears twice in the new array
function longRandomArray(array) {
    let i = array.length, j = 0, temp;
    while (i--) {
    j = Math.floor(Math.random() * (i+1));
    // swap randomly chosen element with current element
    temp = array[i];
    array[i] = array[j];
      array[j] = temp;
        }
        return array;
      }

//Takes arr and pushes the first 6 values inside arr2
function pushButtons(arr, arr2){
    for (i = 0; i < 6; i++) {
        arr.push(arr2[i])
        
    }
}

let okButtonValue 
function storeButtons(arr, value){
     //Store the value from allButtons array on variables
     firstBtnValue = allButtons[0]
     secondBtnValue = allButtons[1]
     thirdBtnValue = allButtons[2]
     fourthBtnValue = allButtons[3]
     fifthBtnValue = allButtons[4]
     sixthBtnValue = allButtons[5]
     
     //Edits the dom to place the value from these variables inside the buttons
     firstBtn.textContent = arr[firstBtnValue].eName
     secondBtn.textContent = arr[secondBtnValue].eName
     thirdBtn.textContent = arr[thirdBtnValue].eName
     fourthBtn.textContent = arr[fourthBtnValue].eName
     fifthBtn.textContent = arr[fifthBtnValue].eName
     sixthBtn.textContent = arr[sixthBtnValue].eName
 
     //Checks if none of the buttons is equal to the numbers on display
     //If not then runs the function to generate a random number
     //Store random number on a variable
     if (firstBtnValue != value &&
          secondBtnValue != value &&
           thirdBtnValue != value &&
           fourthBtnValue != value &&
           fifthBtnValue != value &&
           sixthBtnValue != value) {
        let randSix = singleRandomNum([0, 1, 2, 3, 4, 5])
         
     //In case no button is equal to animal on display
     //Edit one of them to be equal to it
         if (randSix === 0) {
             firstBtn.textContent = arr[value].eName
             firstBtnValue = value
         } else if (randSix === 1) {
             secondBtn.textContent = arr[value].eName
             secondBtnValue = value
         } else if (randSix === 2) {
             thirdBtn.textContent = arr[value].eName
             thirdBtnValue = value
         } else if (randSix === 3) {
             fourthBtn.textContent = arr[value].eName
             fourthBtnValue = value
         } else if (randSix === 4) {
             fifthBtn.textContent = arr[value].eName
             fifthBtnValue = value
         } else {
             sixthBtn.textContent = arr[value].eName
             sixthBtnValue = value
         }
           }
}
  
function getButton(value) {
    return value
}

function assingOkBtnValue(value) {
    okButtonValue = getButton(value)
    return okButtonValue
}

//Function that renders the animal info and the buttons in place
function startApp(arr){
    animalInfo = singleRandomNum(arr)
    ranArray = longRandomArray(numbersArr);
    //Edits dom randomly choosing an animal to display on the app
    titleElBack.textContent = arr[animalInfo].cName
    titleElFace.textContent = arr[animalInfo].cName
    pinyinEl.textContent = arr[animalInfo].pinyin
    eNameEl.textContent = arr[animalInfo].eName
    let imgText = `<img src="${arr[animalInfo].aniImage}" alt="" id="image" class="animal-image">`
    imageEl.innerHTML = imgText
    okButton.textContent = "OK"
    continueBtn.textContent = "CONTINUE"
    
    //Push the first 6 numbers from ranArray array inside allButtons array
    pushButtons(allButtons, ranArray)

    //Calls a function that arranges the buttons on display
    storeButtons(arr, animalInfo)
      
       
}

 //Passes the value from the clicked button to remember the user's choice
 firstBtn.addEventListener("click", function(){
    assingOkBtnValue(firstBtnValue)
    return
   }) 

secondBtn.addEventListener("click", function(){
    assingOkBtnValue(secondBtnValue)
    return
})

thirdBtn.addEventListener("click", function(){
    assingOkBtnValue(thirdBtnValue)
    return
})

fourthBtn.addEventListener("click", function(){
    assingOkBtnValue(fourthBtnValue)
    return
})

fifthBtn.addEventListener("click", function(){
    assingOkBtnValue(fifthBtnValue)
    return
})

sixthBtn.addEventListener("click", function(){
    assingOkBtnValue(sixthBtnValue)
    return
})

//Compare user's input to check if their answer is correct
okButton.addEventListener("click", function(){
//Display a correct message
    if (okButtonValue === animalInfo) {
        titleElFace.style.display = "none"
        aniOutput.style.display = "flex"
        okButton.style.display = "none"
        buttonsEl.className = "global-buttons-fixed"
        continueBtn.style.display = "flex"
        correctEl.style.display = "flex"
        setTimeout(() => {
          
            // hides element after 2 seconds
            correctEl.style.display = 'none';
          }, 2000);
        
//If user did not select an element display an alert message
    } else if (okButtonValue === undefined) {
        alertEl.style.display = "flex"
        setTimeout(() => {
          
            // hides element after 2 seconds
            alertEl.style.display = 'none';
          }, 1000);
//Display an incorrect message
    } else {
        titleElFace.style.display = "none"
        aniOutput.style.display = "flex"
        okButton.style.display = "none"
        buttonsEl.className = "global-buttons-fixed"
        continueBtn.style.display = "flex"
        incorrectEl.style.display = "flex"
        setTimeout(() => {
          
            // hides element after 2 seconds
            incorrectEl.style.display = 'none';
          }, 2000);
    } 
    return
   })

continueBtn.addEventListener("click", function(){
    okButtonValue = undefined
    titleElFace.style.display = "flex"
    aniOutput.style.display = "none"
    okButton.style.display = "flex"
    buttonsEl.className = "global-buttons"
    continueBtn.style.display = "none"
    correctEl.style.display = "none"
    incorrectEl.style.display = "none"
    allButtons = [ ]
    if (espButton.className === "active") {
        startApp(numbersES)
    } else {
        startApp(numbers)
    }
})

espButton.addEventListener("click", function(){
    espButton.className = "active"
    engButton.className = ""
    if (espButton.className === "active") {
        startApp(numbersES)
    } else {
        startApp(numbers)
    }
})

engButton.addEventListener("click", function(){
    engButton.className = "active"
    espButton.className = ""
    if (espButton.className === "active") {
        startApp(numbersES)
    } else {
        startApp(numbers)
    }
})

startApp(numbers)

