package au.com.paulrobotham.wisdomology.domain.reference

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.Table
import java.util.*

@Table(schema = "wisdomology", name = "category_reference")
@Entity
class CategoryReference(
    @Id
    var id: UUID?,

    @Column(name = "category", nullable = false)
    val category: String?,
)
