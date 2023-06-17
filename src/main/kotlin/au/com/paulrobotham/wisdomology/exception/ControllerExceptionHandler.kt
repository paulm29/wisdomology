package au.com.paulrobotham.wisdomology.exception

import au.com.paulrobotham.wisdomology.security.Logging
import jakarta.persistence.EntityNotFoundException
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpStatus
import org.springframework.http.HttpStatusCode
import org.springframework.http.ResponseEntity
import org.springframework.http.converter.HttpMessageNotReadableException
import org.springframework.security.access.AccessDeniedException
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.context.request.WebRequest
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler
import org.zalando.problem.Problem
import org.zalando.problem.Status

@ControllerAdvice
class ControllerExceptionHandler {
    companion object {
        private val LOGGER = Logging.loggerForCompanion(this)
    }

    @ExceptionHandler(
        HttpMessageNotReadableException::class
    )
    fun messageNotReadable(ex: HttpMessageNotReadableException): ResponseEntity<Problem> {
        LOGGER.warn("Bad request: ${ex}")

        val problem = Problem.builder().withDetail(ex.message).withStatus(Status.BAD_REQUEST).build()
        return ResponseEntity(problem, HttpStatus.BAD_REQUEST)
    }

//    @Override
//    protected fun handleHttpMessageNotReadable(
//        ex: HttpMessageNotReadableException?, headers: HttpHeaders?, status: HttpStatusCode?, request: WebRequest?
//    ): ResponseEntity<Any?>? {
//        LOGGER.warn("Bad request: ${ex}")
//
//        val problem = Problem.builder().withDetail(ex.message).withStatus(Status.BAD_REQUEST).build()
//        return ResponseEntity(problem, HttpStatus.BAD_REQUEST)
//    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(
        EntityNotFoundException::class
    )
    fun entityNotFound() {
    }

    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(
        NotFoundException::class
    )
    fun notFound() {
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(
        IllegalArgumentException::class
    )
    fun illegalArguments() {
    }

    @ResponseStatus(HttpStatus.FORBIDDEN)
    @ExceptionHandler(
        AccessDeniedException::class
    )
    fun accessDenied() {
    }
}
