DROP TABLE IF EXISTS comments CASCADE;

CREATE TABLE comments (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  resource_id INTEGER REFERENCES resources(id) ON DELETE CASCADE,
  comment TEXT NOT NULL,
  comment_date TIMESTAMP NOT NULL default now()
);
