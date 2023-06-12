package au.com.paulrobotham.wisdomology.restcontroller

import au.com.paulrobotham.wisdomology.domain.reference.CategoryReference
import au.com.paulrobotham.wisdomology.service.ReferenceService
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.util.*


@RestController
@CrossOrigin(origins = ["http://localhost:4200"])
@RequestMapping("/api/reference")
class ReferenceController(private val referenceService: ReferenceService) {

    @GetMapping("/category")
    fun findAll(): List<CategoryReference>? {
        return referenceService.findAllCategories()
    }

    @PostMapping("/category")
    fun createCategory(@RequestBody categoryReference: CategoryReference): CategoryReference? {
        categoryReference.id = UUID.randomUUID()
        return referenceService.updateCategory(categoryReference);
    }

    @PutMapping("/category/{id}")
    fun updateCategory(id: String, @RequestBody categoryReference: CategoryReference): CategoryReference? {
        // TODO check IDs match
        return referenceService.updateCategory(categoryReference);
    }

    @DeleteMapping("/category/{id}")
    fun deleteCategory(id: String) {
        referenceService.deleteCategory(id);
    }
}
