package au.com.paulrobotham.wisdomology

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class WisdomologyApplication

fun main(args: Array<String>) {
	runApplication<WisdomologyApplication>(*args)
}
