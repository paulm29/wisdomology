package au.com.paulrobotham.wisdomology.domain

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.Table
import java.util.*

@Entity
@Table(schema = "wisdomology", name = "author")
data class Author (
    @Id
    val id: UUID,

    @Column(name = "name", nullable = false)
    var name: String? = null
)