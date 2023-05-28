package au.com.paulrobotham.wisdomology.domain

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.Table
import java.util.*

@Table(schema = "wisdomology", name = "translation")
@Entity
class Translation(
    @Id
    val id: UUID,

    @Column(name = "first_name")
    var firstName: String?,

    @Column(name = "last_name", nullable = false)
    var lastName: String,
)