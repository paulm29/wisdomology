package au.com.paulrobotham.wisdomology.repository

import au.com.paulrobotham.wisdomology.domain.Quote
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface QuoteRepository: JpaRepository<Quote, Long>