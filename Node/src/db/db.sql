DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;

CREATE TABLE  users(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  birth_year INTEGER,
  friends VARCHAR(255) --1: person I know 2: friendly 3: good friend 4: ride or die 5: I will actually die for you not just sayintg that bas line
);

CREATE TABLE  posts(
  id SERIAL PRIMARY KEY,
  content VARCHAR(255),
  creation_date INTEGER,
  user_id INTEGER
);