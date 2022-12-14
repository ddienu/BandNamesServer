
const { io } = require('../index');


//Socket Messages

io.on('connection', client => {
    console.log('Usuario conectado');

    client.on('disconnect', () => { 
        
        console.log('Usuario desconectado');
     });

     client.on('mensaje', ( payload ) => {
        console.log('mensaje', payload);

        io.emit('mensaje', { admin: 'Nuevo Mensaje'} );
     });

     client.on( 'emitir-mensaje', payload => {
         //io.emit( 'nuevo-mensaje', payload );//Emits everyone including the client.
         client.broadcast.emit('nuevo-mensaje', payload); //Emits everyone except client that emit.
     })

     client.on( 'mandar-mensaje', payload => {

        client.broadcast.emit( 'mandar-mensaje', payload );
     });

  });