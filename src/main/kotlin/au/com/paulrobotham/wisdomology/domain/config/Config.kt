package au.com.paulrobotham.wisdomology.domain.config

import jakarta.persistence.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document("appconfig")
data class Config(
    @Id private val id: String? = null,
    private val name: String? = null,
    private val value: String? = null
)
