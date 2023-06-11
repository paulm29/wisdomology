package au.com.paulrobotham.wisdomology.security

import au.edu.qtac.starter.logging.PIIMaskingLogger
import org.slf4j.Logger
import org.slf4j.LoggerFactory

object Logging {
    inline fun <reified T : Any> loggerFor(): Logger = PIIMaskingLogger(LoggerFactory.getLogger(T::class.java))
    fun loggerForCompanion(c: Any): Logger = PIIMaskingLogger(LoggerFactory.getLogger(c.javaClass.enclosingClass))
}

fun Logger.logCommand(command: Any) {
    info("Handling: {}", command)
}

fun Logger.logProjectingEvent(event: Any) {
    info("Projecting: {}", event)
}

fun Logger.logHandlingQuery(query: Any) {
    info("Handling: {}", query)
}
