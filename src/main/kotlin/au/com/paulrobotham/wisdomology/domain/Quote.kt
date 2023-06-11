package au.com.paulrobotham.wisdomology.domain

import jakarta.persistence.CascadeType
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.FetchType
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.OneToMany
import jakarta.persistence.OneToOne
import jakarta.persistence.PrimaryKeyJoinColumn
import jakarta.persistence.Table
import java.util.*


@Table(schema = "wisdomology", name = "quote")
@Entity
class Quote(
    @Id
    var id: UUID,

    @Column(name = "quote", nullable = false)
    val quote: String,

    @OneToOne
    @PrimaryKeyJoinColumn(name = "source_text_id")
    var sourceText: SourceText?,

    @OneToMany(cascade = [CascadeType.ALL], fetch = FetchType.EAGER, orphanRemoval = true)
    @JoinColumn(name = "quote_id")
    var comment: MutableList<Comment> = mutableListOf(),

    @OneToMany(cascade = [CascadeType.ALL], fetch = FetchType.EAGER, orphanRemoval = true)
    @JoinColumn(name = "quote_id")
    var categories: MutableList<Category> = mutableListOf(),
)
