# Movie Rating and Comment System

## Description

This system allows users to provide ratings and comments on movies. It also includes features for categorizing movies by genre.

## Database Schema

```sql
CREATE TABLE Users (
    UserID INT PRIMARY KEY AUTO_INCREMENT,
    Username VARCHAR(50) NOT NULL UNIQUE,
    Email VARCHAR(100) NOT NULL UNIQUE,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Movies (
    MovieID INT PRIMARY KEY AUTO_INCREMENT,
    Title VARCHAR(100) NOT NULL,
    ReleaseYear INT,
    Description TEXT,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Ratings (
    RatingID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    MovieID INT,
    Rating INT CHECK (Rating >= 1 AND Rating <= 5),
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE,
    FOREIGN KEY (MovieID) REFERENCES Movies(MovieID) ON DELETE CASCADE
);

CREATE TABLE Comments (
    CommentID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    MovieID INT,
    Comment TEXT,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE,
    FOREIGN KEY (MovieID) REFERENCES Movies(MovieID) ON DELETE CASCADE
);

CREATE TABLE Genres (
    GenreID INT PRIMARY KEY AUTO_INCREMENT,
    GenreName VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE MovieGenres (
    MovieID INT,
    GenreID INT,
    PRIMARY KEY (MovieID, GenreID),
    FOREIGN KEY (MovieID) REFERENCES Movies(MovieID) ON DELETE CASCADE,
    FOREIGN KEY (GenreID) REFERENCES Genres(GenreID) ON DELETE CASCADE
);
```

## Retrieve All Ratings and Comments for a Specific Movie

```sql
SELECT
    R.Rating,
    C.Comment,
    U.Username,
    R.CreatedAt AS RatingDate,
    C.CreatedAt AS CommentDate
FROM
    Movies M
LEFT JOIN
    Ratings R ON M.MovieID = R.MovieID
LEFT JOIN
    Comments C ON M.MovieID = C.MovieID
LEFT JOIN
    Users U ON R.UserID = U.UserID OR C.UserID = U.UserID
WHERE
    M.MovieID = ?;  -- Replace ? with the specific MovieID
```

## Retrieve Average Rating for a Specific Movie

```sql
SELECT
    AVG(R.Rating) AS AverageRating
FROM
    Ratings R
WHERE
    R.MovieID = ?;  -- Replace ? with the specific MovieID
```

## Retrieve All Movies Associated with a Particular Genre

```sql
SELECT
    M.MovieID,
    M.Title,
    M.ReleaseYear,
    M.Description
FROM
    Movies M
JOIN
    MovieGenres MG ON M.MovieID = MG.MovieID
JOIN
    Genres G ON MG.GenreID = G.GenreID
WHERE
    G.GenreName = ?;  -- Replace ? with the specific GenreName
```
