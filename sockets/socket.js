
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

  });