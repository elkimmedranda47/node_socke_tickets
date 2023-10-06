const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control');
const ticketControl = new TicketControl();

io.on('connection', (client) => {

    console.log('Usuario conectado');


    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //  Siguiente Ticket
    client.on('variableN', (data, callback) => {
        //console.log(data.ok);

        let siguiente = ticketControl.siguiente();

        console.log(siguiente);
        callback(siguiente);


    });
    //ticket actual

    client.emit('estadoActual', {

        actual: ticketControl.getUltimoTicket(),
        ultimos4: ticketControl.getUltimos4(),

    });





    //atenderTicket
    client.on('atenderTicket', (data, callback) => {

        if (!data.escritorio) {
            return callback({
                err: true,
                mensaje: 'El escritorio es necesario'
            })
        }

        let atenderTicket = ticketControl.atenderticket(data.escritorio);

        callback(atenderTicket)


        // emitir evento para actualizar pantalla al cliente, en este caso  socket.publica.js, este pinta pulico.html / notificar cambios en los ultimos 4
        //client.broadcast.emit(); servidor,  envia datos a todos los clientes en este caso un objeto.
        //emite este evento pintarNuevos4EnPantallaPublica a todos los clientes que lo esten escuchando

        client.broadcast.emit('pintarNuevos4EnPantallaPublica', {

            ultimos4: ticketControl.getUltimos4(),

        });


    });




});