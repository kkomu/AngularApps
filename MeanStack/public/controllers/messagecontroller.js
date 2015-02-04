module.controller('MessageController', ['$scope', '$compile', 'SocketFactory','LoginFactory', function($scope, $compile, SocketFactory, LoginFactory) {
    
    $scope.message = {};
    $scope.message.messages = [];
    $scope.message.isVisible = false;
    $scope.message.name = LoginFactory.userName;
    
    
    SocketFactory.getMessagesForUser().then(function(data) {
            
        
        $scope.message.messages = data.messages[0].messages;
        
        console.log("Taulukko:");
        console.log($scope.message.messages);
        
    });
    
    $scope.message.new = function () {
        $scope.message.isVisible = true;
    };
    
    $scope.message.send = function() {
        
        var message = {
            subject: $scope.message.subject, 
            text: $scope.message.text,
            timestamp: new Date()
        };
        
        SocketFactory.sendMessage(message);
        $scope.message.isVisible = false;
    };
    
    SocketFactory.notify = function(data) {
        console.log("We got message:");
        console.log(data);
        $scope.message.messages.push(data);
        // To update view:
        console.log("Taulukko2:");
        console.log($scope.message.messages);
        $scope.$apply();
        
        /*
        $('#list').append(
            $compile(
                '<h4>{{message.messages[0].subject}}</h4><p>{{message.messages[0].text}}</p>')($scope));
        */

    };    
}]);