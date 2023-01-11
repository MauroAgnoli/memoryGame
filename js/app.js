const cardArray = [
    {
        name: 'fries',
        img: './images/fries.png'
    },
    {
        name: 'cheeseburguer',
        img: './images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: './images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: './images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: './images/milkshake.png'
    },
    {
        name: 'pizza',
        img: './images/pizza.png'
    },
    {
        name: 'fries',
        img: './images/fries.png'
    },
    {
        name: 'cheeseburguer',
        img: './images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: './images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: './images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: './images/milkshake.png'
    },
    {
        name: 'pizza',
        img: './images/pizza.png'
    }
];
// sorting randomly the objects array
cardArray.sort(()=> 0.5 - Math.random());


const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#resultDisplay');
let cardsChosen = [];
let cardsChosenIds = [];
const cardswon = [];

//creating the board
function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', './images/blank.png');
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card);
    }
};
createBoard();

function checkMatch(){
    const cards = document.querySelectorAll('#grid > img')
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src','./images/blank.png');
        cards[optionTwoId].setAttribute('src','./images/blank.png');
        alert('You have clicked the same image');
    }

    if(cardsChosen[0] == cardsChosen[1]){
        alert('You found a match');
        cards[optionOneId].setAttribute('src','./images/white.png');
        cards[optionTwoId].setAttribute('src','./images/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardswon.push(cardsChosen);
        resultDisplay.textContent = cardswon.length;
    }else{
        cards[optionOneId].setAttribute('src','./images/blank.png');
        cards[optionTwoId].setAttribute('src','./images/blank.png');
        alert('Sorry, try again!')
    }
    cardsChosen = [];
    cardsChosenIds = [];
    if(cardswon.length == cardArray.length/2){
        resultDisplay.textContent = 'Congratulations, you found all!'
    }
}

function flipCard(){
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if(cardsChosen.length === 2){
        setTimeout(checkMatch, 500)
    }
    
}

