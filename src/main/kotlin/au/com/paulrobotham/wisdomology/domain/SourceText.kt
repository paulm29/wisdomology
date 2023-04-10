package au.com.paulrobotham.wisdomology.domain

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.OneToMany
import jakarta.persistence.OneToOne
import jakarta.persistence.PrimaryKeyJoinColumn
import jakarta.persistence.Table
import java.util.*

@Entity
@Table(schema = "wisdomology", name = "source_text")
data class SourceText(
    @Id
    val id: UUID,

    @OneToOne
    @PrimaryKeyJoinColumn(name = "author_id")
    var author: Author?,

    @Column(name = "title", nullable = false)
    val title: String,

    @OneToOne
    var translation: Translation?,

    @OneToMany
    var sourceLinks: List<SourceLink> = listOf()
)