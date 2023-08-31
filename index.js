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
                34,35,36,37,38,39,40,41,42,43,44,45,46,47,48]
let allButtons = [ ]
let firstBtnValue
let secondBtnValue
let thirdBtnValue
let fourthBtnValue
let fifthBtnValue
let sixthBtnValue
let animalInfo

const animals = [{
    "cName": "狗",
    "pinyin": "Gǒu",
    "eName": "Dog",
    "aniImage": "img/dog.jpg" 
},
{
    "cName": "猫",
    "pinyin": "Māo",
    "eName": "Cat",
    "aniImage": "img/cat.jpg"
},
{
    "cName": "鸟",
    "pinyin": "Niǎo",
    "eName": "Bird",
    "aniImage": "img/bird.jpg"
},
{
    "cName": "鱼",
    "pinyin": "Yú",
    "eName": "Fish",
    "aniImage": "img/fish.jpg"
},
{
    "cName": "猪",
    "pinyin": "Zhū",
    "eName": "Pig",
    "aniImage": "img/pig.jpg"
},
{
    "cName": "蝙蝠",
    "pinyin": "Biān fú",
    "eName": "Bat",
    "aniImage": "img/bat.jpg" 
},
{
    "cName": "熊",
    "pinyin": "Xióng",
    "eName": "Bear",
    "aniImage": "img/bear.jpg"
},
{
    "cName": "蜜蜂",
    "pinyin": "Mì fēng",
    "eName": "Bee",
    "aniImage": "img/bee.jpg"
},
{
    "cName": "鸡",
    "pinyin": "Jī",
    "eName": "Chicken",
    "aniImage": "img/chicken.jpg"
},
{
    "cName": "公牛",
    "pinyin": "Gōng niú",
    "eName": "Bull",
    "aniImage": "img/bull.jpg"
},
{
    "cName": "奶牛",
    "pinyin": "Nǎi niú",
    "eName": "Cow",
    "aniImage": "img/cow.jpg"
},
{
    "cName": "螃蟹",
    "pinyin": "Páng xiè",
    "eName": "Crab",
    "aniImage": "img/crab.jpg"
},
{
    "cName": "鹿",
    "pinyin": "Lù",
    "eName": "Deer",
    "aniImage": "img/deer.jpg"
},
{
    "cName": "鸽子",
    "pinyin": "Gē zi",
    "eName": "Dove",
    "aniImage": "img/dove.jpg"
},
{
    "cName": "鸭子",
    "pinyin": "Yā zi",
    "eName": "Duck",
    "aniImage": "img/duck.jpg"
},
{
    "cName": "大象",
    "pinyin": "Dà xiàng",
    "eName": "Elephant",
    "aniImage": "img/elephant.jpg"
},
{
    "cName": "鹅",
    "pinyin": "É",
    "eName": "Goose",
    "aniImage": "img/goose.jpg"
},
{
    "cName": "马",
    "pinyin": "Mǎ",
    "eName": "Horse",
    "aniImage": "img/horse.jpg"
},
{
    "cName": "狮子",
    "pinyin": "Shī zi",
    "eName": "Lion",
    "aniImage": "img/lion.jpg"
},
{
    "cName": "蜥蜴",
    "pinyin": "Xī yì",
    "eName": "Lizard",
    "aniImage": "img/lizard.jpg"
},
{
    "cName": "美洲驼",
    "pinyin": "Měi zhōu tuó",
    "eName": "Llama",
    "aniImage": "img/llama.jpg"
},
{
    "cName": "鸵鸟",
    "pinyin": "Tuó niǎo",
    "eName": "Ostrich",
    "aniImage": "img/ostrich.jpg"
},
{
    "cName": "牛",
    "pinyin": "Niú",
    "eName": "Ox",
    "aniImage": "img/ox.jpg"
},
{
    "cName": "兔子",
    "pinyin": "Tù zi",
    "eName": "Rabbit",
    "aniImage": "img/rabbit.jpg"
},
{
    "cName": "驯鹿",
    "pinyin": "Xùn lù ",
    "eName": "Reindeer",
    "aniImage": "img/reindeer.jpg"
},
{
    "cName": "绵羊",
    "pinyin": "Mián yáng",
    "eName": "Sheep",
    "aniImage": "img/sheep.jpg"
},
{
    "cName": "虾",
    "pinyin": "Xiā",
    "eName": "Shrimp",
    "aniImage": "img/shrimp.jpg"
},
{
    "cName": "火鸡",
    "pinyin": "Huǒ jī",
    "eName": "Turkey",
    "aniImage": "img/turkey.jpg"
},
{
    "cName": "狼",
    "pinyin": "Láng",
    "eName": "Wolf",
    "aniImage": "img/wolf.jpg"
},
{
    "cName": "老虎",
    "pinyin": "Lǎo hǔ",
    "eName": "Tiger",
    "aniImage": "img/tiger.jpg"
},
{
    "cName": "老鼠",
    "pinyin": "Lǎo shǔ",
    "eName": "Rat",
    "aniImage": "img/rat.jpg"
},
{
    "cName": "熊猫",
    "pinyin": "Xióng māo",
    "eName": "Panda",
    "aniImage": "img/panda.jpg"
},
{
    "cName": "猴子",
    "pinyin": "Hóu zi",
    "eName": "Monkey",
    "aniImage": "img/monkey.jpg"
},
{
    "cName": "猫头鹰",
    "pinyin": "Māo tóu yīng",
    "eName": "Owl",
    "aniImage": "img/owl.jpg"
},
{
    "cName": "青蛙",
    "pinyin": "Qīng wā",
    "eName": "Frog",
    "aniImage": "img/frog.jpg" 
},
{
    "cName": "豹",
    "pinyin": "Bào",
    "eName": "Leopard",
    "aniImage": "img/leopard.jpg" 
},
{
    "cName": "猎豹",
    "pinyin": "Liè bào",
    "eName": "Cheetah",
    "aniImage": "img/cheetah.jpg" 
},
{
    "cName": "北极熊",
    "pinyin": "Běi jí xióng",
    "eName": "Polar bear",
    "aniImage": "img/polarbear.jpg" 
},
{
    "cName": "鳄鱼",
    "pinyin": "È yú",
    "eName": "Crocodile",
    "aniImage": "img/crocodile.jpg" 
},
{
    "cName": "豪猪",
    "pinyin": "Háo zhū",
    "eName": "Porcupine",
    "aniImage": "img/porcupine.jpg" 
},
{
    "cName": "鹰",
    "pinyin": "Yīng",
    "eName": "Eagle",
    "aniImage": "img/eagle.jpg" 
},
{
    "cName": "鲸鱼",
    "pinyin": "Jīng yú",
    "eName": "Whale",
    "aniImage": "img/whale.jpg" 
},
{
    "cName": "短吻鳄",
    "pinyin": "Duǎn wěn è",
    "eName": "Alligator",
    "aniImage": "img/alligator.jpg" 
},
{
    "cName": "鳗鱼",
    "pinyin": "Mán yú",
    "eName": "Eel",
    "aniImage": "img/eel.jpg" 
},
{
    "cName": "大猩猩",
    "pinyin": "Dà xīng xīng",
    "eName": "Gorilla",
    "aniImage": "img/Gorilla.jpg" 
},
{
    "cName": "水母",
    "pinyin": "Shuǐ mǔ",
    "eName": "Jellyfish",
    "aniImage": "img/jellyfish.jpg" 
},
{
    "cName": "犀牛",
    "pinyin": "Xī niú",
    "eName": "Rhinoceros",
    "aniImage": "img/rhinoceros.jpg" 
},
{
    "cName": "蛇",
    "pinyin": "Shé",
    "eName": "Snake",
    "aniImage": "img/snake.jpg" 
},
{
    "cName": "斑马",
    "pinyin": "Bān mǎ",
    "eName": "Zebra",
    "aniImage": "img/zebra.jpg" 
} ]

const animalsES = [{
    "cName": "狗",
    "pinyin": "Gǒu",
    "eName": "Perro",
    "aniImage": "img/dog.jpg" 
},
{
    "cName": "猫",
    "pinyin": "Māo",
    "eName": "Gato",
    "aniImage": "img/cat.jpg"
},
{
    "cName": "鸟",
    "pinyin": "Niǎo",
    "eName": "Pájaro",
    "aniImage": "img/bird.jpg"
},
{
    "cName": "鱼",
    "pinyin": "Yú",
    "eName": "Pez",
    "aniImage": "img/fish.jpg"
},
{
    "cName": "猪",
    "pinyin": "Zhū",
    "eName": "Cerdo",
    "aniImage": "img/pig.jpg"
},
{
    "cName": "蝙蝠",
    "pinyin": "Biān fú",
    "eName": "Murciélago",
    "aniImage": "img/bat.jpg" 
},
{
    "cName": "熊",
    "pinyin": "Xióng",
    "eName": "Oso",
    "aniImage": "img/bear.jpg"
},
{
    "cName": "蜜蜂",
    "pinyin": "Mì fēng",
    "eName": "Abeja",
    "aniImage": "img/bee.jpg"
},
{
    "cName": "鸡",
    "pinyin": "Jī",
    "eName": "Gallina",
    "aniImage": "img/chicken.jpg"
},
{
    "cName": "公牛",
    "pinyin": "Gōng niú",
    "eName": "Toro",
    "aniImage": "img/bull.jpg"
},
{
    "cName": "奶牛",
    "pinyin": "Nǎi niú",
    "eName": "Vaca",
    "aniImage": "img/cow.jpg"
},
{
    "cName": "螃蟹",
    "pinyin": "Páng xiè",
    "eName": "Cangrejo",
    "aniImage": "img/crab.jpg"
},
{
    "cName": "鹿",
    "pinyin": "Lù",
    "eName": "Ciervo",
    "aniImage": "img/deer.jpg"
},
{
    "cName": "鸽子",
    "pinyin": "Gē zi",
    "eName": "Paloma",
    "aniImage": "img/dove.jpg"
},
{
    "cName": "鸭子",
    "pinyin": "Yā zi",
    "eName": "Pato",
    "aniImage": "img/duck.jpg"
},
{
    "cName": "大象",
    "pinyin": "Dà xiàng",
    "eName": "Elefante",
    "aniImage": "img/elephant.jpg"
},
{
    "cName": "鹅",
    "pinyin": "É",
    "eName": "Ganso",
    "aniImage": "img/goose.jpg"
},
{
    "cName": "马",
    "pinyin": "Mǎ",
    "eName": "Caballo",
    "aniImage": "img/horse.jpg"
},
{
    "cName": "狮子",
    "pinyin": "Shī zi",
    "eName": "León",
    "aniImage": "img/lion.jpg"
},
{
    "cName": "蜥蜴",
    "pinyin": "Xī yì",
    "eName": "Lagartija",
    "aniImage": "img/lizard.jpg"
},
{
    "cName": "美洲驼",
    "pinyin": "Měi zhōu tuó",
    "eName": "Llama",
    "aniImage": "img/llama.jpg"
},
{
    "cName": "鸵鸟",
    "pinyin": "Tuó niǎo",
    "eName": "Avestruz",
    "aniImage": "img/ostrich.jpg"
},
{
    "cName": "牛",
    "pinyin": "Niú",
    "eName": "Buey",
    "aniImage": "img/ox.jpg"
},
{
    "cName": "兔子",
    "pinyin": "Tù zi",
    "eName": "Conejo",
    "aniImage": "img/rabbit.jpg"
},
{
    "cName": "驯鹿",
    "pinyin": "Xùn lù ",
    "eName": "Reno",
    "aniImage": "img/reindeer.jpg"
},
{
    "cName": "绵羊",
    "pinyin": "Mián yáng",
    "eName": "Oveja",
    "aniImage": "img/sheep.jpg"
},
{
    "cName": "虾",
    "pinyin": "Xiā",
    "eName": "Camarón",
    "aniImage": "img/shrimp.jpg"
},
{
    "cName": "火鸡",
    "pinyin": "Huǒ jī",
    "eName": "Pavo",
    "aniImage": "img/turkey.jpg"
},
{
    "cName": "狼",
    "pinyin": "Láng",
    "eName": "Lobo",
    "aniImage": "img/wolf.jpg"
},
{
    "cName": "老虎",
    "pinyin": "Lǎo hǔ",
    "eName": "Tigre",
    "aniImage": "img/tiger.jpg"
},
{
    "cName": "老鼠",
    "pinyin": "Lǎo shǔ",
    "eName": "Rata",
    "aniImage": "img/rat.jpg"
},
{
    "cName": "熊猫",
    "pinyin": "Xión gmāo",
    "eName": "Panda",
    "aniImage": "img/panda.jpg"
},
{
    "cName": "猴子",
    "pinyin": "Hóu zi",
    "eName": "Mono",
    "aniImage": "img/monkey.jpg"
},
{
    "cName": "猫头鹰",
    "pinyin": "Māo tóu yīng",
    "eName": "Búho",
    "aniImage": "img/owl.jpg"
},
{
    "cName": "青蛙",
    "pinyin": "Qīng wā",
    "eName": "Rana",
    "aniImage": "img/frog.jpg" 
},
{
    "cName": "豹",
    "pinyin": "Bào",
    "eName": "Leopardo",
    "aniImage": "img/leopard.jpg" 
},
{
    "cName": "猎豹",
    "pinyin": "Liè bào",
    "eName": "Guepardo",
    "aniImage": "img/cheetah.jpg" 
},
{
    "cName": "北极熊",
    "pinyin": "Běi jí xióng",
    "eName": "Oso polar",
    "aniImage": "img/polarbear.jpg" 
},
{
    "cName": "鳄鱼",
    "pinyin": "È yú",
    "eName": "Cocodrilo",
    "aniImage": "img/crocodile.jpg" 
},
{
    "cName": "豪猪",
    "pinyin": "Háo zhū",
    "eName": "Puercoespín",
    "aniImage": "img/porcupine.jpg" 
},
{
    "cName": "鹰",
    "pinyin": "Yīng",
    "eName": "Águila",
    "aniImage": "img/eagle.jpg" 
},
{
    "cName": "鲸鱼",
    "pinyin": "Jīng yú",
    "eName": "Ballena",
    "aniImage": "img/whale.jpg" 
},
{
    "cName": "短吻鳄",
    "pinyin": "Duǎn wěn è",
    "eName": "Caimán",
    "aniImage": "img/alligator.jpg" 
},
{
    "cName": "鳗鱼",
    "pinyin": "Mán yú",
    "eName": "Anguila",
    "aniImage": "img/eel.jpg" 
},
{
    "cName": "大猩猩",
    "pinyin": "Dà xīng xīng",
    "eName": "Gorila",
    "aniImage": "img/Gorilla.jpg" 
},
{
    "cName": "水母",
    "pinyin": "Shuǐ mǔ",
    "eName": "Medusa",
    "aniImage": "img/jellyfish.jpg" 
},
{
    "cName": "犀牛",
    "pinyin": "Xī niú",
    "eName": "Rinoceronte",
    "aniImage": "img/rhinoceros.jpg" 
},
{
    "cName": "蛇",
    "pinyin": "Shé",
    "eName": "Serpiente",
    "aniImage": "img/snake.jpg" 
},
{
    "cName": "斑马",
    "pinyin": "Bān mǎ",
    "eName": "Cebra",
    "aniImage": "img/zebra.jpg" 
}  ]

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
 
     //Checks if none of the buttons is equal to the animals on display
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
        startApp(animalsES)
    } else {
        startApp(animals)
    }
})

espButton.addEventListener("click", function(){
    espButton.className = "active"
    engButton.className = ""
    if (espButton.className === "active") {
        startApp(animalsES)
    } else {
        startApp(animals)
    }
})

engButton.addEventListener("click", function(){
    engButton.className = "active"
    espButton.className = ""
    if (espButton.className === "active") {
        startApp(animalsES)
    } else {
        startApp(animals)
    }
})

startApp(animals)

