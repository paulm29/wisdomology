package au.com.paulrobotham.wisdomology.domain

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.Table
import java.util.UUID

// TODO rename to comment
@Table(schema = "wisdomology", name = "quote_comment")
@Entity
class QuoteComment(
    @Id
    val id: UUID,

    @Column(name = "quote_id", nullable = false)
    val quoteId: UUID,

    @Column(name = "comment", nullable = false)
    val comment: String,
)
