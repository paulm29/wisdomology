package au.com.paulrobotham.wisdomology.exception

import jakarta.persistence.EntityNotFoundException
import org.springframework.http.HttpStatus
import org.springframework.security.access.AccessDeniedException
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler

@ControllerAdvice
class ControllerExceptionHandler : ResponseEntityExceptionHandler() {
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
