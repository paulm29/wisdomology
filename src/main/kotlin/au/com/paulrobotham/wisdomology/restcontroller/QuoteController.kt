package au.com.paulrobotham.wisdomology.restcontroller

import au.com.paulrobotham.wisdomology.domain.Quote
import au.com.paulrobotham.wisdomology.service.QuoteService
import com.opencsv.CSVWriter
import com.opencsv.bean.StatefulBeanToCsv
import com.opencsv.bean.StatefulBeanToCsvBuilder
import jakarta.servlet.http.HttpServletResponse
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpHeaders.CONTENT_DISPOSITION
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

    @PostMapping
    fun getQuote(@RequestBody quote: Quote): Quote? {
        // TODO throw error if it already has an ID
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

    @GetMapping("/export")
    @Throws(Exception::class)
    fun exportCSV(response: HttpServletResponse) {

        //set file name and content type
        val filename = "quotes.csv"
        response.setContentType("text/csv")
        response.setHeader(
            CONTENT_DISPOSITION,
            "attachment; filename=\"$filename\""
        )

        //create a csv writer
        val writer: StatefulBeanToCsv<Quote> = StatefulBeanToCsvBuilder<Quote>(response.getWriter())
            .withQuotechar(CSVWriter.NO_QUOTE_CHARACTER)
            .withSeparator(CSVWriter.DEFAULT_SEPARATOR)
            .withOrderedResults(false)
            .build()

        //write all users to csv file
        writer.write(quoteService.findAll())
    }
}
