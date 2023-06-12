package au.com.paulrobotham.wisdomology.websocket

import au.com.paulrobotham.wisdomology.security.Logging
import org.springframework.boot.configurationprocessor.json.JSONException
import org.springframework.boot.configurationprocessor.json.JSONObject
import org.springframework.stereotype.Component
import org.springframework.web.socket.TextMessage
import org.springframework.web.socket.WebSocketSession
import org.springframework.web.socket.handler.TextWebSocketHandler
import java.io.IOException


@Component
class AppWebSocketHandler : TextWebSocketHandler() {
    companion object {
        private val LOGGER = Logging.loggerForCompanion(this)
    }

    @Throws(InterruptedException::class, IOException::class, JSONException::class)
    override fun handleTextMessage(session: WebSocketSession , message: TextMessage) {
        val payload = message.payload
        LOGGER.info("Payload: $payload")

        val jsonObject = JSONObject(payload)
        session.sendMessage(TextMessage("Your message: $jsonObject"))
    }

}
