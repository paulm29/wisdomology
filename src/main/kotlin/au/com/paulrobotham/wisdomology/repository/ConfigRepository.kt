package au.com.paulrobotham.wisdomology.repository

import au.com.paulrobotham.wisdomology.domain.config.Config
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface ConfigRepository : MongoRepository<Config, String>
