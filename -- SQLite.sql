-- SQLite
CREATE TABLE classroom
(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(100) NOT NULL
);

INSERT INTO classroom (name) VALUES
  ("Classe 1");

DROP TABLE status;