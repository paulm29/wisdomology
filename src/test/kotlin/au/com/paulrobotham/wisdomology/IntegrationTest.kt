package au.com.paulrobotham.wisdomology

import com.fasterxml.jackson.databind.ObjectMapper
import com.github.tomakehurst.wiremock.WireMockServer
import com.github.tomakehurst.wiremock.client.WireMock.ok
import com.github.tomakehurst.wiremock.client.WireMock.okJson
import com.github.tomakehurst.wiremock.client.WireMock.post
import com.github.tomakehurst.wiremock.client.WireMock.postRequestedFor
import com.github.tomakehurst.wiremock.client.WireMock.urlEqualTo
import com.github.tomakehurst.wiremock.core.WireMockConfiguration.options
import org.assertj.core.api.Assertions.assertThat
import org.json.JSONObject
import org.junit.jupiter.api.AfterAll
import org.junit.jupiter.api.BeforeAll
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.TestInstance
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.web.server.LocalServerPort
import org.springframework.http.HttpStatus
import org.springframework.web.client.RestTemplate

@SpringBootTest(
    classes = [WisdomologyApplication::class],
    webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT
)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class IntegrationTest {
    @LocalServerPort
    var port = 0

    val wireMockServer = WireMockServer(options().port(8080))

    @BeforeAll
    fun beforeAll() {
        wireMockServer.start()

        val mapper = ObjectMapper()
        val response = JSONObject()
        wireMockServer.stubFor(
            post("/sync/v9/items/get")
                .willReturn(okJson(mapper.writeValueAsString(response)))
        )
        wireMockServer.stubFor(
            post("/sync/v9/sync")
                .willReturn(ok())
        )
    }

    @AfterAll
    fun afterAll() {
        wireMockServer.stop()
    }

    @BeforeEach
    fun beforeEach() {
        wireMockServer.resetRequests()
    }

    @Disabled
    @Test
    fun `Event without follow-up label is ignored`() {
        val event = JSONObject()

        // When
        val response = RestTemplate().postForEntity(
            "http://localhost:$port/webhookEvent",
            event,
            String::class.java
        )

        // Then
        assertThat(response.statusCode).isEqualTo(HttpStatus.OK)

        wireMockServer.verify(0, postRequestedFor(urlEqualTo("/sync/v9/sync")))
    }
}
