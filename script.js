const logOutBtn = document.querySelector('#logout');
const token = JSON.parse(window.localStorage.getItem('auth_token'));
const cardsMenu = document.querySelector('.cards__menu');
const elTemplate = document.querySelector('#template').content;


if(!token?.token){
    window.location.replace('login.html')
}
logOutBtn.addEventListener('click', () =>{
    window.localStorage.removeItem('auth_token');
    location.reload();
})

function renderCards(cards, element){
    cards.forEach((card)=>{
        const cloneTemplate = elTemplate.cloneNode(true);
        
        cloneTemplate.querySelector('.cards__img').src = card.avatar;
        cloneTemplate.querySelector('.first__name').textContent = card.first_name;
        cloneTemplate.querySelector('.last__name').textContent = card.last_name;
        cloneTemplate.querySelector('.cards__email').textContent = card.email;
        
        element.appendChild(cloneTemplate);
    })
}

let cardArr = [];
async function fetchCards(){
    const response = await fetch('https://reqres.in/api/users?page=2');
    cardArr = await response.json();
    console.log(cardArr.data);
    renderCards(cardArr.data, cardsMenu);
}
fetchCards();