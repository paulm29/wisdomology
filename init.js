// note may need to use: docker volume prune
// if container already existed

// print("CREATING USER");

db.createUser(
    {
        user: "wisdomology",
        pwd: "wisdomology",
        roles: [
            {
                role: "readWrite",
                db: "wisdomology"
            }
        ]
    }
);

db.createCollection("appconfig"); //MongoDB creates the database when you first store data in that database
