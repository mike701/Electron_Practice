DROP TABLE IF EXISTS USERS;
DROP TABLE IF EXISTS POSTS;
CREATE TABLE IF NOT EXISTS USERS (id INTEGER PRIMARY KEY NOT NULL, name varchar(255), birthYear int, friends varchar(255));
CREATE TABLE IF NOT EXISTS Posts (id INTEGER PRIMARY KEY NOT NULL, content varchar(255), creationDate int);
SELECT * FROM USERS;

-- UPDATE SQLITE_SEQUENCE SET SEQ=1 WHERE NAME=USERS;
-- UPDATE SQLITE_SEQUENCE SET SEQ=1 WHERE NAME=POSTS;

INSERT INTO USERS(name, birthYear, friends) VALUES ('Cao Xueqin', 1715, '');
INSERT INTO USERS(name, birthYear, friends) VALUES ('J.K. Rowling', 1965, '');
INSERT INTO USERS(name, birthYear, friends) VALUES ('James Baldwin',1924,'');
INSERT INTO USERS(name, birthYear, friends) VALUES ('Jorge Luis Borges', 1899, '');
INSERT INTO USERS(name, birthYear, friends) VALUES ('Haruki Murakami', 1949, '');
INSERT INTO USERS(name, birthYear, friends) VALUES ('Milan Kundera',1929, '');
INSERT INTO USERS(name, birthYear, friends) VALUES ('Albert Camus',1913,'');
INSERT INTO USERS(name, birthYear, friends) VALUES ('George R.R. Martin',1945,'{"3":2}');
SELECT * FROM USERS;

-- -- Cao Xueqin
-- INSERT INTO posts(content, creationDate, userId, ) VALUES ('Dream of the Red Chamber', 1750, 1);

-- -- J.K. Rowling
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('Harry Potter and the Philosophers Stone', 1997, 2);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('Harry Potter and the Chamber of Secrets', 1998, 2);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('Harry Potter and the Prisoner of Azkaban', 1998, 2);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('Harry Potter and the Goblet of Fire', 2000, 2);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('Harry Potter and the Order of the Phoenix', 2003, 2);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('Harry Potter and the Half-Blood Prince', 2005, 2);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('Harry Potter and the Deathly Hallows', 2007, 2);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('The Casual Vacancy', 2012, 2);

-- -- James Baldwin
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('Go Tell It on the Mountain', 1953, 3);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('The Amen Corner', 1954, 3);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('Notes of a Native Son', 1955, 3);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('Giovannis Room', 1956, 3);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('Nobody Knows My Name: More Notes of a Native Son', 1961, 3);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('Another Country', 1962, 3);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('A Talk to Teachers', 1963, 3);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('The Fire Next Time', 1963, 3);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('Blues for Mister Charlie', 1964, 3);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('Going to Meet the Man', 1965, 3);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('Tell Me How Long the Trains Been Gone', 1968, 3);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('No Name in the Street', 1972, 3);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('If Beale Street Could Talk', 1974, 3);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('The Devil Finds Work', 1976, 3);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('Just Above My Head', 1979, 3);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('Jimmys Blues', 1983, 3);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('The Evidence of Things Not Seen', 1985, 3);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('The Price of the Ticket', 1985, 3);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('The Cross of Redemption: Uncollected Writings', 2010, 3);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('Jimmys Blues and Other Poems', 2014, 3);

-- -- Jean Luis Borges
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('Fervor de Buenos Aires', 1923, 4);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('Inquisiciones', 1925, 4);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('Luna de Enfrente', 1925, 4);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('El idioma de los argentinos', 1928, 4);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('Cuaderno San Martín', 1929, 4);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('Discusión', 1957, 4);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('Historia de la eternidad', 1936, 4);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('El jardín de senderos que se bifurcan', 1941, 4);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('Seis problemas para don Isidro Parodi', 1942, 4);

-- -- Haruki Murakami
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('Hear the Wind Sing', 1987, 5);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('A Wild Sheep Chase', 1989, 5);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('Norwegian Wood', 2000, 5);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('Dance Dance Dance', 1994, 5);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('South of the Border, West of the Sun', 2000, 5);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('The Wind-Up Bird Chronicle', 1997, 5);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('Sputnik Sweetheart', 2001, 5);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('Kafka on the Shore', 2005, 5);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('After Dark', 2007, 5);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('1Q84', 2011, 5);

-- -- Milan Kundera
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('The Joke', 1967, 6);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('The Farewell Waltz', 1972, 6);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('Life Is Elsewhere', 1973, 6);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('The Book of Laughter and Forgetting', 1978, 6);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('The Unbearable Lightness of Being', 1984, 6);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('Immortality', 1990, 6);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('Slowness', 1995, 6);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('Identity', 1998, 6);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('Ignorance', 2000, 6);

-- -- Albert Camus
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('The Stranger', 1942, 7);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('The Plague', 1947, 7);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('The Fall', 1956, 7);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('A Happy Death', 1971, 7);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('The First Man', 1995, 7);

-- -- George RR Martin
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('A Game of Thrones', 1996, 8);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('A Clash of Kings', 1998, 8);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('A Storm of Swords', 2000, 8);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('A Feast for Crows', 2005, 8);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('A Dance with Dragons', 2011, 8);
-- INSERT INTO posts(content, creationDate, userId ) VALUES ('I Swear the Dragons are Coming Soon', 2014, 8);