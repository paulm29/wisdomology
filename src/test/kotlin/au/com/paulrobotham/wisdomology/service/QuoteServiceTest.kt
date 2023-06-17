package au.com.paulrobotham.wisdomology.service

import au.com.paulrobotham.wisdomology.domain.Quote
import au.com.paulrobotham.wisdomology.repository.QuoteRepository
import io.mockk.Runs
import io.mockk.clearAllMocks
import io.mockk.every
import io.mockk.impl.annotations.MockK
import io.mockk.junit5.MockKExtension
import io.mockk.just
import io.mockk.mockk
import io.mockk.verify
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.springframework.data.repository.findByIdOrNull
import java.util.*

const val uuidString = "4cde3c15-6c3f-4a6f-8ad2-c90fd66ffcb4"

fun quote(): Quote {
    return Quote(
        id = UUID.randomUUID(),
        quote = "a",
        sourceText = null,
        comments = mutableListOf(),
        categories = mutableListOf()
    )
}

@ExtendWith(MockKExtension::class)
internal class QuoteServiceTest {

    lateinit var service: QuoteService

    @MockK
    lateinit var repository: QuoteRepository

    @BeforeEach
    fun setUp() {
        clearAllMocks()
        service = QuoteService(repository)
    }

    @Test
    fun findAll() {
        every { repository.findAll() } returns emptyList()

        service.findAll()

        verify {
            repository.findAll()
        }
    }

    @Test
    fun get() {
        every { repository.findByIdOrNull(any()) } returns mockk()

        service.get(uuidString)

        verify {
            repository.findByIdOrNull(any())
        }
    }

    @Test
    fun create() {
        every { repository.save(any()) } returns mockk()

        service.create(quote())

        verify {
            repository.save(any())
        }
    }

    @Test
    fun update() {
        every { repository.save(any()) } returns mockk()

        service.update(quote())

        verify {
            repository.save(any())
        }
    }

    @Test
    fun delete() {
        every { repository.deleteById(any()) } just Runs

        service.delete(uuidString)

        verify {
            repository.deleteById(any())
        }
    }
}
