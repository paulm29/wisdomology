package au.com.paulrobotham.wisdomology

import au.com.paulrobotham.wisdomology.config.WebSecurityConfig
import au.com.paulrobotham.wisdomology.config.WebSocketConfig
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Import
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories

@SpringBootApplication
@Import(
    WebSecurityConfig::class,
    WebSocketConfig::class,
)
@EnableMongoRepositories
class WisdomologyApplication

fun main(args: Array<String>) {
    runApplication<WisdomologyApplication>(*args)
}
