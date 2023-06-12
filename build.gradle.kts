import cz.habarta.typescript.generator.JsonLibrary
import cz.habarta.typescript.generator.TypeScriptFileType
import cz.habarta.typescript.generator.TypeScriptOutputKind
import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    id("org.springframework.boot") version "3.1.0"
    id("io.spring.dependency-management") version "1.1.0"
    kotlin("jvm") version "1.7.22"
    kotlin("plugin.spring") version "1.8.21" // include all-open
    kotlin("plugin.jpa") version "1.8.21" // include no-arg
    id("cz.habarta.typescript-generator") version "3.2.1263"
}

group = "au.com.paulrobotham"
version = "0.0.1-SNAPSHOT"
java.sourceCompatibility = JavaVersion.VERSION_17

configurations {
    compileOnly {
        extendsFrom(configurations.annotationProcessor.get())
    }
}

repositories {
    mavenCentral()
}

dependencies {
    annotationProcessor("org.springframework.boot:spring-boot-configuration-processor")

    // spring
    implementation("org.springframework.boot:spring-boot-starter-actuator")
    implementation("org.springframework.boot:spring-boot-starter-data-jpa")
    implementation("org.springframework.boot:spring-boot-starter-security")
    implementation("org.springframework.boot:spring-boot-starter-validation")
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("org.springframework.boot:spring-boot-starter-websocket")

    // kotlin
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
    implementation("io.projectreactor.kotlin:reactor-kotlin-extensions")
    implementation("org.jetbrains.kotlin:kotlin-reflect")
    implementation("org.jetbrains.kotlin:kotlin-noarg")
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-reactor")

    // database
    implementation("org.liquibase:liquibase-core")
    runtimeOnly("com.h2database:h2")
    runtimeOnly("org.postgresql:postgresql")
    implementation("org.hibernate.validator:hibernate-validator")

    implementation("com.opencsv:opencsv:4.5")

    // testing
    testImplementation("org.springframework.boot:spring-boot-starter-test")
    testImplementation("org.springframework.security:spring-security-test")
    testImplementation("io.projectreactor:reactor-test")
    testImplementation("org.mockito:mockito-core")
    testImplementation("com.willowtreeapps.assertk:assertk:0.26.1")
    implementation("io.mockk:mockk:1.13.5")
    testImplementation("com.ninja-squad:springmockk:4.0.2")
    testImplementation("com.github.tomakehurst:wiremock-jre8:2.35.0")
    testImplementation("org.springframework.graphql:spring-graphql-test")
}

allOpen {
    annotations("jakarta.persistence.Entity", "jakarta.persistence.MappedSuperclass", "jakarta.persistence.Embedabble")
}

noArg {
    annotations("jakarta.persistence.Entity", "jakarta.persistence.MappedSuperclass", "jakarta.persistence.Embedabble")
}

tasks.withType<KotlinCompile> {
    kotlinOptions {
        freeCompilerArgs = listOf("-Xjsr305=strict")
        jvmTarget = "17"
    }
}

tasks.withType<Test> {
    useJUnitPlatform()
}

tasks {
    generateTypeScript {
        classes = mutableListOf(
            "au.com.paulrobotham.wisdomology.domain.Author",
            "au.com.paulrobotham.wisdomology.domain.Category",
            "au.com.paulrobotham.wisdomology.domain.Quote",
            "au.com.paulrobotham.wisdomology.domain.QuoteComment",
            "au.com.paulrobotham.wisdomology.domain.SourceLink",
            "au.com.paulrobotham.wisdomology.domain.SourceText",
            "au.com.paulrobotham.wisdomology.domain.Translation"
        )
        jsonLibrary = JsonLibrary.jackson2
        outputKind = TypeScriptOutputKind.module
        outputFileType = TypeScriptFileType.implementationFile
    }
}

// called ondemand instead:
// gradle generateTypeScript
// output to C:\wisdomology\build\typescript-generator\wisdomology.ts
//build.dependsOn generateTypeScript

// Angular

val webappDir = "$projectDir/src/main/webapp"

tasks.create<Delete>("deleteAngularBuild") {
    delete(
        fileTree("$webappDir/node_modules"),
        fileTree("$webappDir/.vs_code")
    )
}

tasks.processResources {
    dependsOn(":buildAngular")
}

task<Exec>("installAngular") {
//    dependsOn(":deleteAngularBuild")
    workingDir = File(webappDir)
    workingDir.mkdir()
    inputs.dir(webappDir)
    group = BasePlugin.BUILD_GROUP
    if (System.getProperty("os.name").toUpperCase().contains("WINDOWS")) {
        commandLine = listOf("npm.cmd", "install")
    } else {
        commandLine("npm", "install")
    }
}
task<Exec>("buildAngular") {
    dependsOn(":installAngular")
    workingDir = File(webappDir)
    inputs.dir(webappDir)
    // Add task to the standard build group
    group = BasePlugin.BUILD_GROUP
    // ng doesn't exist as a file in windows -> ng.cmd
    commandLine = if (System.getProperty("os.name").toUpperCase().contains("WINDOWS")) {
        listOf("ng.cmd", "build")
    } else {
        listOf("ng", "build")
    }
}
