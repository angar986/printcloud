    onDeviceReady();
    function onDeviceReady(){
		/*window.plugin.printer.isServiceAvailable(
			function (isAvailable,installedAppIds) {
				alert(isAvailable ? 'Service is available' : 'Service NOT available');
				if(isAvailable){
					// Get HTML string
					alert('The following print apps are installed on your device: ' + installedAppIds.join(', '));
					//window.print();
					// Pass the HTML
					//var page = $(document);
					window.plugin.printer.print("<label>Hola</label>");
					//window.print();
				}
			}
		);*/
    }

   
    var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        //aqui codigo de ondevide ready para empezar a hacer cosas.
    },
    escanear: function(){
        resultDiv = document.querySelector("#results");
    resultDiv.innerHTML='';
        cordova.plugins.barcodeScanner.scan(
        function (result) {
                        alert(result.text);
        }, 
        function (error) {
            alert("Error de Scan: " + error);
        }
    );
        
    }
};
