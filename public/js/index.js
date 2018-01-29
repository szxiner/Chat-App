//initiate the request
var socket = io();

socket.on('connect',function () {
  console.log('Connected to server');
  socket.emit('createMessage',{
    to: 'Shuanghao',
    text: 'Hello Shuanghao'
  });
});

socket.on('disconnect',function () {
  console.log('Disconnect to server');
});

socket.on('newMessage', function (message) {
  console.log('New message', message);
});
