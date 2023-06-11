package au.com.paulrobotham.wisdomology.domain.reference

import au.com.paulrobotham.wisdomology.domain.Category
import au.com.paulrobotham.wisdomology.domain.SourceLink
import jakarta.persistence.CascadeType
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.FetchType
import jakarta.persistence.Id
import jakarta.persistence.ManyToOne
import jakarta.persistence.OneToMany
import jakarta.persistence.OneToOne
import jakarta.persistence.Table
import java.util.UUID

@Table(schema = "wisdomology", name = "category_reference")
@Entity
class CategoryReference(
    @Id
    var id: UUID,

    @Column(name = "category", nullable = false)
    val category: String,
)
