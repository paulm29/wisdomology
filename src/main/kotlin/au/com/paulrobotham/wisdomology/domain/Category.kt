package au.com.paulrobotham.wisdomology.domain

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.Table
import java.util.UUID

@Table(schema = "wisdomology", name = "category")
@Entity
class Category(
    @Id
    val id: UUID,

    @Column(name = "quote_id", nullable = false)
    val quoteId: UUID,

    @Column(name = "category", nullable = false)
    val category: String,
)
