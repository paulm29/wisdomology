package au.com.paulrobotham.wisdomology.domain

import jakarta.persistence.CascadeType
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.OneToMany
import jakarta.persistence.OneToOne
import jakarta.persistence.PrimaryKeyJoinColumn
import jakarta.persistence.Table
import java.util.*


@Entity
@Table(schema = "wisdomology", name = "quote")
data class Quote(
    @Id
    val id: UUID,

    @Column(name = "quote", nullable = false)
    val quote: String,

    @OneToOne
    @PrimaryKeyJoinColumn(name = "source_text_id")
    var sourceText: SourceText?,

    @Column
    @OneToMany(cascade = [CascadeType.ALL])
    var quoteComment: List<QuoteComment>?
)