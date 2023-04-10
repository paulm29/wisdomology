package au.com.paulrobotham.wisdomology.domain

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.Table
import java.util.UUID

@Entity
@Table(schema = "wisdomology", name = "quote_comment")
data class QuoteComment(
    @Id
    val id: UUID,

    @Column(name = "comment", nullable = false)
    val comment: String,
)
