const io = require('socket.io-client')

let message = document.querySelector('#message').value;


const socket = io('https://messagepro.netlify.app')

socket.on('connect',()=>{
    displayMessage('You connected to the server with id '+ socket.id)
})



socket.on('receive-message',(message)=>{
    displayRecievedMessage(message)
})



document.querySelector('form').onsubmit= (e) =>{
    let message = document.querySelector('#message').value;
    e.preventDefault()
    displayMessage(message)
    socket.emit('send-message',message)
    document.querySelector('#message').value ='';
    
}


function displayMessage(message){
    let div = document.createElement('div')
    div.classList.add('right')
    div.innerHTML=message;
    document.querySelector('.container').appendChild(div);
}

