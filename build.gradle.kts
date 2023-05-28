import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    id("org.springframework.boot") version "3.0.3"
    id("io.spring.dependency-management") version "1.1.0"
    kotlin("jvm") version "1.7.22"
    kotlin("plugin.spring") version "1.8.21" // include all-open
    kotlin("plugin.jpa") version "1.8.21" // include no-arg
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

    implementation("org.springframework.boot:spring-boot-starter-actuator")
    implementation("org.springframework.boot:spring-boot-starter-graphql")
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("org.springframework.boot:spring-boot-starter-webflux")
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
    implementation("org.springframework.boot:spring-boot-starter-data-jpa")
    runtimeOnly("com.h2database:h2")
    runtimeOnly("org.postgresql:postgresql")
    implementation("org.hibernate.validator:hibernate-validator")

    // testing
    testImplementation("org.springframework.boot:spring-boot-starter-test")
    testImplementation("io.projectreactor:reactor-test")
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
