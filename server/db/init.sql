CREATE TABLE IF NOT EXISTS Users (
  id SERIAL PRIMARY KEY,
  authid TEXT,
  email TEXT,
  givenname TEXT,
  familyname TEXT,
  picture TEXT
);
