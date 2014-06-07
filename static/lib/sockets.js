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
    if (type === 'add_user') {

    } else if (type === 'create_user') {

    } else if (type === 'invite') {

    } else if (type === 'leave') {

    } else if (type === 'message') {

    } else {
        console.log('unknow request type');
    }
};