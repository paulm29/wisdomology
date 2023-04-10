package au.com.paulrobotham.wisdomology.domain

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.Table
import java.util.*

@Entity
@Table(schema = "wisdomology", name = "translation")
data class Translation(
    @Id
    val id: UUID,

    @Column(name = "translator", nullable = false)
    var translator: String?,
)