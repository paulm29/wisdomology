package au.com.paulrobotham.wisdomology.service

import au.com.paulrobotham.wisdomology.domain.Quote
import au.com.paulrobotham.wisdomology.repository.QuoteRepository
import org.springframework.data.jpa.domain.AbstractPersistable_.id
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import java.util.UUID

@Service
class QuoteService (private val quoteRepository: QuoteRepository) {

    fun findAll(): List<Quote>? {
        return quoteRepository.findAll()
    }

    fun get(id: String): Quote? {
        return quoteRepository.findByIdOrNull(UUID.fromString(id))
    }

    fun create(quote: Quote): Quote? {
        return quoteRepository.save(quote)
    }

    fun update(quote: Quote): Quote? {
        return quoteRepository.save(quote)
    }

    fun delete(id: String) {
        quoteRepository.deleteById(UUID.fromString(id));
    }
}