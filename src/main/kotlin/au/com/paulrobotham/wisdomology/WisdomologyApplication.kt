package au.com.paulrobotham.wisdomology

import au.com.paulrobotham.wisdomology.config.WebSecurityConfig
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Import

@SpringBootApplication
@Import(
	WebSecurityConfig::class
)
class WisdomologyApplication

fun main(args: Array<String>) {
	runApplication<WisdomologyApplication>(*args)
}
