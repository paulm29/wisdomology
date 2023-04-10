package au.com.paulrobotham.wisdomology.domain

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.Table
import java.util.*

@Entity
@Table(schema = "wisdomology", name = "source_link")
data class SourceLink (
    @Id
    val id: UUID,

    @Column(name = "url", nullable = false)
    val url: String,
)
