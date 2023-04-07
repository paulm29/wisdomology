Quote organisation tool with advanced features.

# Assumptions
* Windows
* Powershell
* Dockerhub
* NVM

# 1. Create IntelliJ project

* Create git repository

* Language: Kotlin
* Build system: Gradle
* JDK: cornetto-17
* Gradle DSL: Kotlin

Advanced settings:
* GroupId: au.com.paulrobotham
* ArtifactId: wisdomology

# 2. Add remote to Github

1. create github repository 
2. git remote add origin https://github.com/paulm29/wisdomology.git
3. git push -u origin master (ignore the "main" specified in Github doco, as it's it just political correctness gone stupid)

# 3. Spring Initialzr

Overwrite build.gradle.kts with the file generated from Spring Initializr:
    https://start.spring.io/#!type=gradle-project-kotlin&language=kotlin&platformVersion=3.0.3&packaging=jar&jvmVersion=17&groupId=au.com.paulrobotham&artifactId=wisdomology&name=wisdomology&description=wisdomology&packageName=au.com.paulrobotham.wisdomology&dependencies=web,webflux,graphql,configuration-processor,liquibase,websocket,actuator

And overwrite *src* folder

Note: you could have skipped step 1, and overwriting in this step, if you just imported Spring Initialzr folder. 
We just did this for learning purposes.

# Axon Initialzr dependencies

Add to build.gradle.kts:
    [https://start.axoniq.io?groupId=au.com.paulrobotham&artifactId=wisdomology&baseDir=wisdomology&name=wisdomology&description=wisdomology&packageName=au.com.paulrobotham&type=gradle-project&language=java&javaVersion=11&packaging=jar&usingAxonServer=SE&axonServerContext=&dependencies=axon-starter%2Caxon-test%2Caxon-kotlin%2Caxon-reactor-starter%2Cweb%2Cdata-jpa%2Ch2%2Cpostgresql]

# Set up Axon server

Run with:

    docker run -d --name axonserver -p 8024:8024 -p 8124:8124 axoniq/axonserver

Check with:

    curl -s http://localhost:8024/actuator/info

# Frontend

I hate having to switch IntelliJ windows for frontend and backend, so source for both are in one project.

We may create a Gradle multi-module project later 
(like this [https://blogs.perficient.com/2021/08/30/angular-and-spring-boot-as-a-single-application/]), but for now, let's maintain just Gradle build file

## NVM and Node

Install node (latest is 19.7.0 at time of writing) with:
   nvm install latest 64
   nvm use 19.7.0

## Angular

    cd src/main/webapp
    npm i -g @angular/cli
    ng new webapp

Answer:
    N (usage statistics)
    Y routing
    CSS

### PowerShell permissions

If you get the following error:
    cannot be loaded because running scripts is disabled on this system. For more information, see about_Execution_Policies at
[https:/go.microsoft.com/fwlink/?LinkID=135170

Run this in Administrator window:
    Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine
    A

While you're at it, create PowerShell profile, which you may use later, in:
    $HOME\Documents\PowerShell\Microsoft.PowerShell_profile.ps1

$HOME is c:\Users\<your username>

If only using PowerShell for this project, you could add to this file:
    cd c:\wisdomology

# IntelliJ settings

Project
* Always select open file

Kotlin
* Add unambigious imports on the fly
* Organise imports on the fly

Terminal: 
* Powershell