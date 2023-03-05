CREATE TABLE libs (
    lib_id serial PRIMARY KEY,
      name VARCHAR( 50 ) NOT NULL,

      updated_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP NOT NULL
);

CREATE TABLE roles (
    role_id serial PRIMARY KEY,
      name VARCHAR( 25 ) NOT NULL,

      updated_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP NOT NULL
);

CREATE TABLE users (
    user_id serial PRIMARY KEY,
    token VARCHAR ( 64 ) UNIQUE NOT NULL,
    email VARCHAR ( 255 ) UNIQUE NOT NULL,
      password VARCHAR ( 50 ) NOT NULL,
    firstname VARCHAR ( 50 ) NOT NULL,
      lastname VARCHAR ( 50 ) NOT NULL,

      lib_id INT NOT NULL,

      updated_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP NOT NULL,

      FOREIGN KEY (lib_id) REFERENCES libs (lib_id)
);

CREATE TABLE users_roles (
    id serial PRIMARY KEY,
      user_id INT NOT NULL,
      role_id INT NOT NULL,

      granted_at TIMESTAMP NOT NULL,

      FOREIGN KEY (role_id) REFERENCES roles (role_id),
      FOREIGN KEY (user_id) REFERENCES users (user_id)
);

CREATE TABLE books (
    book_id serial PRIMARY KEY,
	isbn VARCHAR ( 13 ) NOT NULL,
      title VARCHAR ( 50 ) NOT NULL,
    author VARCHAR ( 50 ) NOT NULL,
      image VARCHAR ( 255 ) NOT NULL,
      back_cover VARCHAR ( 255 ),
      released_at TIMESTAMP NOT NULL,

      updated_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP NOT NULL
);


CREATE TABLE pages (
    page_id serial PRIMARY KEY,
    content TEXT,
      page_number INT NOT NULL,

      book_id INT NOT NULL,

      updated_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP NOT NULL,

      FOREIGN KEY (book_id) REFERENCES books (book_id)
);

CREATE TABLE books_libs (
    id serial PRIMARY KEY,
      book_id INT NOT NULL,
      lib_id INT NOT NULL,

      FOREIGN KEY (book_id) REFERENCES books (book_id),
      FOREIGN KEY (lib_id) REFERENCES libs (lib_id)
);