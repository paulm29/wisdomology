package au.com.paulrobotham.wisdomology.domain

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.Table
import java.util.UUID

@Table(schema = "wisdomology", name = "quote_comment")
@Entity
class Comment(
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    var id: UUID?,

    @Column(name = "quote_id", nullable = false)
    var quoteId: UUID?,

    @Column(name = "comment", nullable = false)
    val comment: String,
)
