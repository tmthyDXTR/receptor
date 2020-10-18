var app = {

    initalize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },


    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },
}

redirectURL("../www/login.html");





function redirectURL(url) {
    window.location = url;
}