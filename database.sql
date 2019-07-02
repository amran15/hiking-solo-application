
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "location" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(80) NOT NULL,  
    "address" VARCHAR (80) NOT NULL, 
    "description" VARCHAR NOT NULL,
    "image_url" VARCHAR (2083),
     "latitude" FLOAT,  
    "longitude" FLOAT
    );

    CREATE TABLE "review" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user", 
    "location_id" INT REFERENCES "location", 
    "visit_date" DATE, 
    "review" VARCHAR (100)
);
    

