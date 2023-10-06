//Comando para establecer la conexin


var socket = io();


var label = $('#lblNuevoTicket');


socket.on('connect', function() {
    console.log('Conectado al server');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el server');
});

//  Siguiente Ticket
//  Recibir el click del cliente por jquery y mandar por sockets al servidor y ejecutar el callback para traer un dato
$('button').on('click', function() {
    //console.log('click');

    socket.emit('variableN', null, function(siguienteTicket) {

        label.text(siguienteTicket);
    })
});

//  Ticket Actual
socket.on('estadoActual', function(resp) {
    console.log(resp);
    label.text(resp.actual);
});