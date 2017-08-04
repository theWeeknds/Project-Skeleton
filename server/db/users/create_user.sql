insert into Users (authid, email, givenname, familyname, picture)
  values($1, $2, $3, $4, $5)
  returning *
