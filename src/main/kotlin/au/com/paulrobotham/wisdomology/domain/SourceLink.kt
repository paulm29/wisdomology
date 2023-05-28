package au.com.paulrobotham.wisdomology.domain

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.OneToMany
import jakarta.persistence.Table
import java.util.*

@Table(schema = "wisdomology", name = "source_link")
@Entity
class SourceLink (
    @Id
    val id: UUID,

    @Column(name = "source_text_id", nullable = false)
    val sourceTextId: UUID,

    @Column(name = "url", nullable = false)
    val url: String,
)
