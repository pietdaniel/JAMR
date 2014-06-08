define([], function(){
    return {
        function sendMessage(model) {
            console.log(new Date().getTime());
            connection.send(JSON.stringify(model));
        }

        function sleep(millis, callback) {
            setTimeout(function(){ callback(); }, millis);
        }

        var websocket_url = "ws://localhost:9000/ws";
        var connection = new WebSocket(websocket_url);

        connection.onopen = function () {
            connection.send('Ping'); // Send the message 'Ping' to the server
        };

        // Log errors
        connection.onerror = function (error) {
            console.log('WebSocket Error ' + error);
        };

        // Log messages from the server
        connection.onmessage = function (message) {
            console.log('Server: ' + message.data);
            var model = $.parseJSON(message.data);
            var type = model['kind'];
            if (type === 'ADD_USER') {

            } else if (type === 'CREATE_USER') {

            } else if (type === 'INVITE') {

            } else if (type === 'LEAVE') {

            } else if (type === 'MESSAGE') {

            } else if (type === 'USERS') {

            }else {
                console.log('unknown request type');
            }
        };
    }
});