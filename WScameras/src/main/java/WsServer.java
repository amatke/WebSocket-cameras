import java.io.IOException;
import java.nio.ByteBuffer;

import javax.websocket.OnClose;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

@ServerEndpoint("/wsServer")
public class WsServer {

	@OnOpen
	public void onOpen(Session session) {
		System.out.println(session.toString());
	}
	
	@OnMessage
	public void onMessage(Session session, byte[] img) throws IOException {
		ByteBuffer buf = ByteBuffer.wrap(img);
		session.getBasicRemote().sendBinary(buf);
	}
	
	
	@OnClose
	public void onClose(Session session) {
		System.out.println(session.toString());
	}
}
