const elForm = document.querySelector('#form');
const inputEmail = document.querySelector('.input__email');
const inputPassword = document.querySelector('.input__password');


elForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    const emailValue = inputEmail.value.trim();
    const passwordValue = inputPassword.value.trim();
    
    async function fetchLogin(){
        const response = await fetch('https://reqres.in/api/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: emailValue,
            password: passwordValue
        })
    })
    const data = await response.json()
    window.localStorage.setItem('auth_token', JSON.stringify(data));
    window.location.replace('index.html');
}
fetchLogin()
})