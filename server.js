
const {instrument} = require('@socket.io/admin-ui')


const io = require('socket.io')( `https://messagepro.netlify.app`,{
    cors: {
        origin:['http://localhost:8080',"https://admin.socket.io",'https://n5lpn5fn-8080.inc1.devtunnels.ms/',"http://localhost:8081","https://messagepro.netlify.app"],
        Credentials:true
    }
})

io.on('connection', socket =>{
    console.log(socket.id)
    socket.on('send-message',(message)=>{
        socket.broadcast.emit('receive-message',message)
    })
})

instrument(io,{auth:false,
mode:'development'
})