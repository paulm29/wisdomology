package au.com.paulrobotham.wisdomology.repository

import au.com.paulrobotham.wisdomology.domain.reference.CategoryReference
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface CategoryReferenceRepository : JpaRepository<CategoryReference, UUID>
