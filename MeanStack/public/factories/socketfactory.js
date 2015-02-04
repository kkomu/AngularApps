module.factory('SocketFactory', function($resource){
    
    var factory = {};
    
    // Create client socket
    var socket = io();
    
    factory.notify;
    
    
    factory.getMessagesForUser = function() {
        console.log("SocketFactory: getMessagesForUser");
        return $resource('/app').get().$promise;
    };
    
    factory.sendMessage = function(data) {
    
        socket.emit('new_message', data);
    
    };
    
    // This will be triggered when server broadcasts message
    socket.on('broadcast_msg', function(data) {
        factory.notify(data);
    
    });
    
    return factory;
});