package au.com.paulrobotham.wisdomology.restcontroller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("/api")
class AppController {

    @GetMapping("/config")
    fun getConfig(): String {
        return "TODO";
    }
}