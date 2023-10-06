var socket = io();

var lblTicket1 = $('#lblTicket1');
var lblTicket2 = $('#lblTicket2');
var lblTicket3 = $('#lblTicket3');
var lblTicket4 = $('#lblTicket4');

var lblEscritorio1 = $('#lblEscritorio1');
var lblEscritorio2 = $('#lblEscritorio2');
var lblEscritorio3 = $('#lblEscritorio3');
var lblEscritorio4 = $('#lblEscritorio4');

var lblTickets = [lblTicket1, lblTicket2, lblTicket3, lblTicket4];
var lblEscitorios = [lblEscritorio1, lblEscritorio2, lblEscritorio3, lblEscritorio4];

var lblTicket4 = $('#tickets4');
//  Pantalla de publica
socket.on('estadoActual', function(resp) {

    console.log(resp);
    actulizaHTML(resp.ultimos4)

});

//escucha este vento  que viene del servidor pintarNuevos4EnPantallaPublica
socket.on('pintarNuevos4EnPantallaPublica', function(resp) {

    actulizaHTML(resp.ultimos4);

});





function actulizaHTML(ultimos4) {
    for (let i = 0; i < ultimos4.length; i++) {

        lblTickets[i].text('Ticket ' + ultimos4[i].numero);
        lblEscitorios[i].text('Escritorio ' + ultimos4[i].escritorio);

    }
}