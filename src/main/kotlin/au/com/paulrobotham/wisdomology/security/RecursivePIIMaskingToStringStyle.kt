package au.edu.qtac.starter.logging

import org.apache.commons.lang3.ClassUtils
import org.apache.commons.lang3.builder.ToStringStyle
import au.com.paulrobotham.wisdomology.security.PIIMaskingToStringBuilder

object RecursivePIIMaskingToStringStyle : ToStringStyle() {

    init {
        this.isUseClassName = true
        this.isUseShortClassName = true
        this.isUseIdentityHashCode = false
        this.isUseFieldNames = true
        this.fieldSeparator = ", "
        this.contentStart = "("
        this.contentEnd = ")"
    }

    public override fun appendDetail(buffer: StringBuffer, fieldName: String?, value: Any?) {
        if (!ClassUtils.isPrimitiveWrapper(value!!.javaClass) &&
            String::class.java != value.javaClass &&
            this.accept(value.javaClass)) {
            buffer.append(PIIMaskingToStringBuilder(value, this))
        } else {
            super.appendDetail(buffer, fieldName, value)
        }
    }

    override fun appendDetail(buffer: StringBuffer, fieldName: String?, coll: Collection<*>?) {
        this.appendClassName(buffer, coll)
        this.appendIdentityHashCode(buffer, coll)
        this.appendDetail(buffer, fieldName, coll!!.toTypedArray() as Array<Any>)
    }

    fun accept(clazz: Class<*>): Boolean = when {
        clazz.name.contains("qtac") -> true
        else -> false
    }
}
