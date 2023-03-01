package au.com.paulrobotham.wisdomology.restcontroller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("/api")
class TestController {

    @GetMapping(path = ["/hello-world"])
    fun helloWorld(): String? {
        return "Hello world!"
    }
}