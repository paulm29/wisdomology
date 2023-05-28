package au.com.paulrobotham.wisdomology.domain

import jakarta.persistence.*
import java.util.*

@Table(schema = "wisdomology", name = "source_text")
@Entity
class SourceText(
    @Id
    val id: UUID,

    @OneToOne
    @PrimaryKeyJoinColumn(name = "author_id")
    var author: Author?,

    @Column(name = "title", nullable = false)
    val title: String,

    @OneToOne
    @PrimaryKeyJoinColumn(name = "translation_id")
    var translation: Translation?,

    @OneToMany(cascade = [CascadeType.ALL], mappedBy = "sourceTextId", fetch = FetchType.EAGER, orphanRemoval = true)
    var sourceLinks: MutableList<SourceLink> = mutableListOf()
)