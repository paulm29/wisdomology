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

# Frontend

I hate having to switch IntelliJ windows for frontend and backend, so source for both are in one project.
You can organise IntelliJ with separate modules for frontend/backend in same project, which has the advantage of live frontend updates,
but I prefer just to run everything again when I make a change, either frontend or backend.

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
* Import: use single name import

Terminal: 
* Powershell

# Postgres

docker pull postgres

docker run -itd -e POSTGRES_USER=wisdomology -e POSTGRES_PASSWORD=wisdomology -p 5432:5432 -v /data:/wisdomology_data --name wisdomology postgres

use wisdomology/wisdomology to connect

# Angular material

add library, https://material.angular.io/guide/getting-started

# Running

http://localhost:8080/