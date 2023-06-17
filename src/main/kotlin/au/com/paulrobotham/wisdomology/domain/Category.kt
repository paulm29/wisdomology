package au.com.paulrobotham.wisdomology.domain

import au.com.paulrobotham.wisdomology.domain.reference.CategoryReference
import jakarta.persistence.CascadeType
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.FetchType
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.ManyToOne
import jakarta.persistence.OneToMany
import jakarta.persistence.OneToOne
import jakarta.persistence.PrimaryKeyJoinColumn
import jakarta.persistence.Table
import java.util.UUID

@Table(schema = "wisdomology", name = "category")
@Entity
class Category(
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    var id: UUID?,

    @Column(name = "quote_id", nullable = false)
    var quoteId: UUID?,

    @ManyToOne
    @JoinColumn(name = "category_id")
    var category: CategoryReference,
)
