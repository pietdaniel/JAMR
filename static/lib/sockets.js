function sendMessage(model) {
    console.log(new Date().getTime());
    connection.send(JSON.stringify(model));
}

function sleep(millis, callback) {
    setTimeout(function(){ callback(); }, millis);
}

var websocket_url = "ws://127.0.0.1:9000/ws";
var connection = new WebSocket(websocket_url);

connection.onopen = function () {
    if(connection.readyState === 1) {
        connection.send('Ping'); // Send the message 'Ping' to the server
        console.log('pinging');
    }
    
};

// Log errors
connection.onerror = function (error) {
    console.log('WebSocket Error ' + error);
};

var users = [];

// Log messages from the server
connection.onmessage = function (message) {
    var data = JSON.parse(message.data);
    //check if message is users
    //TODO: set message metadata on server...
    if (_.isArray(data) && _.has(data[0], "genr")) {
    }

    console.log('Server: ' + message.data);
    var model = $.parseJSON(message.data);
    var type = model['kind'];
    if (users.length == 0) {
        users = JSON.parse(message.data);
        //console.log(users);
    }
    if (type === 'ADD_USER') {
        var userJson = $.parseJSON(message.data);
        console.log(userJson);
    } else if (type === 'CREATE_USER') {

    } else if (type === 'INVITE') {

    } else if (type === 'LEAVE') {

    } else if (type === 'MESSAGE') {

    } else if (type === 'USERS') {
        console.log('weve got users');
    }else {
        console.log('unknown request type');
    }
};