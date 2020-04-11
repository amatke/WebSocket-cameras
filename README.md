Live Webcam Video streaming with WebSocket

    Server       <---------------------            Client
    [Java-Websocket] --------------------->	[HTML5 and Javascript-Websocket]


Implementation:
-Access web-cam and play the stream on an HTML Video Element
-Draw the video frames on a canvas element
-Read the data from the canvas element as image then
-Convert to bytes and send to the server via websocket
-Rebroadcast data the server and plave it on an image element


Websocket is network communication protocol that provides full duplex communication 
channells between client and server. 

Software Requirements:
-Java EE 7 SDK
-Any Java EE IDE
-Maven
-Glassfish Server 4.0 or above

Others:
-Webcam internal or external
-A modern browser for testing
