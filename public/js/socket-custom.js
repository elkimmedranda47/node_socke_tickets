// io es = a la variable io del server deben de tener el mismo nombre

var socket = io();
socket.on('connect', function() {
    console.log('Conectado al server');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el server');
});
//enviar informacion
/*
socket.emit('enviarMensaje', {
    usuario: 'fernando',
    mensaje: 'hola mundo'
}, function(resp) {
    console.log('resouesta server', resp);
});
*/

//Escuchar servidor
socket.on('mensajeSever', (mensaje) => {
    console.log(mensaje);
});