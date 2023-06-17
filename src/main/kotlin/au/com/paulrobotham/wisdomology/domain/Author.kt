package au.com.paulrobotham.wisdomology.domain

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.Table
import java.util.*

@Table(schema = "wisdomology", name = "author")
@Entity
class Author (
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    val id: UUID,

    @Column(name = "first_name")
    var firstName: String?,

    @Column(name = "last_name", nullable = false)
    var lastName: String,
)
