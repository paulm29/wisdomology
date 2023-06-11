package au.com.paulrobotham.wisdomology.service

import au.com.paulrobotham.wisdomology.domain.Quote
import au.com.paulrobotham.wisdomology.domain.reference.CategoryReference
import au.com.paulrobotham.wisdomology.repository.CategoryReferenceRepository
import au.com.paulrobotham.wisdomology.repository.QuoteRepository
import org.springframework.stereotype.Service
import java.util.UUID
import kotlin.text.Typography.quote

@Service
class ReferenceService (private val categoryReferenceRepository: CategoryReferenceRepository) {

    fun findAllCategories(): List<CategoryReference>? = categoryReferenceRepository.findAll()

    fun createCategory(categoryReference: CategoryReference): CategoryReference? {
        categoryReference.id = UUID.randomUUID()
        return categoryReferenceRepository.save(categoryReference)
    }

    fun updateCategory(categoryReference: CategoryReference): CategoryReference? {
        return categoryReferenceRepository.save(categoryReference)
    }

    fun deleteCategory(id: String) = categoryReferenceRepository.deleteById(UUID.fromString(id));
}
