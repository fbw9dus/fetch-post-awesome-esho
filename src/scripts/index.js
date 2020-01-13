// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
import "babel-polyfill";


// \/ All of your javascript should go here \/

let submitButton = document.querySelector('.btn')
let form = document.querySelector('#submit-form')
let name = document.querySelector('#name')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let message = document.querySelector('#message')
let checkbox = document.querySelector('#checkbox')

submitButton.addEventListener('click',myFunction)

 async function  myFunction(e){
    try{
    e.preventDefault()
    

    if(name.value.length <= 0){
           name.style.borderColor = "red";
          return alert('Write a name')
    }else{
        name = name.value
    }

    if(password.value.length < 8){
        password.style.borderColor = "red"
        return alert('Your Password is to short')
    }else{
        password = password.value
    }
    
    alert('Thank you for submiting your details')

    let url = 'https://jsonplaceholder.typicode.com/posts'

    let data = await fetch(url,{
        method: 'POST',
        body: JSON.stringify({
            name:name.value,
            email:email.value,
            password:password,
            message:message.value,
            checkbox:checkbox.checked,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
    })
    let request = await data.json()

    let string = JSON.stringify(request)
    
    return console.log(string)}

    catch(error){
        alert('ERROR: DU HAST SCHEIßE GEBAUT')
    }

    

}

 
