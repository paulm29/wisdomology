package au.com.paulrobotham.wisdomology.restcontroller

import au.com.paulrobotham.wisdomology.domain.Quote
import au.com.paulrobotham.wisdomology.service.QuoteService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("/api/quote")
class QuoteController(private val quoteService: QuoteService) {

    @GetMapping("/{id}")
    fun getQuote(id: String): String? {
        return "Hello world!"
    }

    @GetMapping
    fun findAll(): List<Quote>? {
        return quoteService.findAll()
    }
}