package au.com.paulrobotham.wisdomology.domain

import jakarta.persistence.CascadeType
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.FetchType
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.OneToMany
import jakarta.persistence.OneToOne
import jakarta.persistence.PrimaryKeyJoinColumn
import jakarta.persistence.Table
import java.util.*

@Table(schema = "wisdomology", name = "source_text")
@Entity
class SourceText(
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    var id: UUID?,

    @OneToOne
    @PrimaryKeyJoinColumn(name = "author_id")
    var author: Author?,

    @Column(name = "title", nullable = false)
    val title: String,

    @OneToOne
    @PrimaryKeyJoinColumn(name = "translation_id")
    var translation: Translation?,

    @OneToMany(cascade = [CascadeType.ALL], fetch = FetchType.EAGER, orphanRemoval = true)
    @JoinColumn(name = "source_text_id")
    var sourceLinks: MutableList<SourceLink> = mutableListOf()
)
