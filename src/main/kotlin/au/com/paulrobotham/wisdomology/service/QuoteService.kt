package au.com.paulrobotham.wisdomology.service

import au.com.paulrobotham.wisdomology.domain.Quote
import au.com.paulrobotham.wisdomology.repository.QuoteRepository
import org.springframework.stereotype.Service

@Service
class QuoteService (private val quoteRepository: QuoteRepository) {

    fun findAll(): List<Quote>? {
        return quoteRepository.findAll()
    }
}