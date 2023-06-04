package au.com.paulrobotham.wisdomology.restcontroller

import au.com.paulrobotham.wisdomology.domain.Quote
import au.com.paulrobotham.wisdomology.service.QuoteService
import org.springframework.data.jpa.domain.AbstractPersistable_.id
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.util.*


@RestController
@CrossOrigin(origins = ["http://localhost:4200"])
@RequestMapping("/api/quote")
class QuoteController(private val quoteService: QuoteService) {

    @GetMapping
    fun findAll(): List<Quote>? {
        return quoteService.findAll()
    }

    @PostMapping()
    fun getQuote(@RequestBody quote: Quote): Quote? {
        // TODO throw error if it already has an ID
        quote.id = UUID.randomUUID()
        return quoteService.create(quote)
    }

    @GetMapping("/{id}")
    fun getQuote(id: String): Quote? {
        return quoteService.get(id);
    }

    @PutMapping("/{id}")
    fun updateQuote(id: String, @RequestBody quote: Quote): Quote? {
        // TODO check IDs match
        return quoteService.update(quote);
    }

    @DeleteMapping("/{id}")
    fun deleteQuote(id: String) {
        return quoteService.delete(id);
    }
}
