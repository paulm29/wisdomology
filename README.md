# Quote organisation tool with advanced features.

1. [Setup](Setup.md)
2. Review entities to get acquainted with the structure: [Entities](Entities.md)
2. [Todo](Todo.md)

# Running

## Backend

```
docker run -itd -e POSTGRES_USER=wisdomology -e POSTGRES_PASSWORD=wisdomology -p 5432:5432 -v /data:/wisdomology_data --name wisdomology postgres
```

## Frontend

```
cd src/main/webapp
ng service
```
open http://localhost:4200

### Create new elements

```
ng generate module myModule
ng generate component myComponent
ng generate directive myDirective
```