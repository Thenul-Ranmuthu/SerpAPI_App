# NestJS Project API Endpoints

This project exposes a small REST API for user authentication and Google search results using SerpAPI.

Base URL:

- http://localhost:3080

> The application starts on port 3080 in `src/main.ts`.

---

## 1) Root endpoint

### GET /

Returns a simple greeting from the app.

Request:

```http
GET / HTTP/1.1
Host: localhost:3080
```

Example response:

```json
"Hello World!"
```

---

## 2) User authentication endpoints

These routes are defined under the `user` controller.

### POST /user/register

Creates a new user account and returns a JWT token.

Request body:

```json
{
  "email": "user@example.com",
  "password": "yourPassword123"
}
```

Example response:

```json
{
  "userToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "userStatusMsg": "User Created!!"
}
```

Notes:

- Email must be a string.
- Password must be a string.
- If the email already exists, the API returns a conflict error.

---

### POST /user/login

Logs in an existing user and returns a JWT token.

Request body:

```json
{
  "email": "user@example.com",
  "password": "yourPassword123"
}
```

Example response:

```json
{
  "userToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

Notes:

- Uses HTTP 200 status code.
- Returns an authentication error if credentials are invalid.

---

## 3) Search endpoints

These routes are defined under the `client` controller.

### POST /client/getResults

Performs a search using SerpAPI without requiring authentication.

Request body:

```json
{
  "engine": "google",
  "q": "nestjs jwt authentication",
  "location": "United States",
  "hl": "en",
  "gl": "us"
}
```

Example response:

```json
{
  "search_metadata": {
    "id": "...",
    "status": "Success",
    "json_endpoint": "https://serpapi.com/searches/...",
    "created_at": "2026-09-23 12:30:00 UTC",
    "processed_at": "2026-09-23 12:30:01 UTC",
    "google_url": "https://www.google.com/search?q=nestjs+jwt+authentication",
    "raw_html_file": "https://serpapi.com/searches/...",
    "total_time_taken": 1.23
  },
  "search_parameters": {
    "engine": "google",
    "q": "nestjs jwt authentication",
    "location": "United States",
    "hl": "en",
    "gl": "us"
  },
  "organic_results": [
    {
      "position": 1,
      "title": "NestJS JWT Authentication",
      "link": "https://example.com/article",
      "snippet": "A guide describing JWT-based authentication in NestJS."
    }
  ]
}
```

Notes:

- This route calls the SerpAPI search endpoint directly.
- It does not use JWT authentication.

---

### POST /client/login/getResults

Performs a SerpAPI search for an authenticated user and stores the query in the database.

Authentication:

- Header required: `Authorization: Bearer <JWT_TOKEN>`

Request body:

```json
{
  "engine": "google",
  "q": "nestjs jwt authentication",
  "location": "United States",
  "hl": "en",
  "gl": "us"
}
```

Example response:

```json
{
  "search_metadata": {
    "status": "Success"
  },
  "organic_results": [
    {
      "position": 1,
      "title": "NestJS JWT Authentication",
      "link": "https://example.com/article",
      "snippet": "A practical example of JWT auth in NestJS."
    }
  ]
}
```

Notes:

- Requires a valid JWT token.
- Saves the search term to the `SearchEntity` table with the logged-in user.

---

### GET /client/getSearchHistory

Returns the authenticated user's search history.

Authentication:

- Header required: `Authorization: Bearer <JWT_TOKEN>`

Example request:

```http
GET /client/getSearchHistory HTTP/1.1
Host: localhost:3080
Authorization: Bearer <JWT_TOKEN>
```

Example response:

```json
[
  {
    "id": 1,
    "search_string": "nestjs jwt authentication",
    "user": {
      "id": 5,
      "email": "user@example.com"
    }
  }
]
```

Notes:

- Returns the most recent searches first.
- If no search history exists, it throws a `404 Not Found` error.

---

## 4) Authentication format

The project uses JWT authentication.

Send the token like this:

```http
Authorization: Bearer <your_jwt_token>
```

The token is generated when a user registers or logs in.

---

## 5) Example SerpAPI response structure

This is a typical response format returned by SerpAPI for a Google search call:

```json
{
  "search_metadata": {
    "id": "7f1b9d85f9d3...",
    "status": "Success",
    "total_time_taken": 1.18,
    "created_at": "2026-09-23 12:30:00 UTC"
  },
  "search_parameters": {
    "q": "nestjs jwt authentication",
    "engine": "google",
    "hl": "en",
    "gl": "us"
  },
  "organic_results": [
    {
      "position": 1,
      "title": "Secure NestJS App with JWT",
      "link": "https://example.com/article",
      "snippet": "Learn how to set up JWT authentication in NestJS",
      "displayed_link": "https://example.com"
    }
  ],
  "answer_box": {},
  "knowledge_graph": {}
}
```

---

## 6) Summary of all endpoints

| Method | Route                    | Auth Required | Description                          |
| ------ | ------------------------ | ------------- | ------------------------------------ |
| GET    | /                        | No            | App health/root endpoint             |
| POST   | /user/register           | No            | Register a new user                  |
| POST   | /user/login              | No            | Login and get JWT                    |
| POST   | /client/getResults       | No            | Search via SerpAPI                   |
| POST   | /client/login/getResults | Yes           | Search via SerpAPI and store history |
| GET    | /client/getSearchHistory | Yes           | Return user's search history         |

---

## 7) Common usage example

```bash
# Register user
curl -X POST http://localhost:3080/user/register \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"secret123"}'

# Login user
curl -X POST http://localhost:3080/user/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"secret123"}'

# Search without auth
curl -X POST http://localhost:3080/client/getResults \
  -H "Content-Type: application/json" \
  -d '{"engine":"google","q":"nestjs jwt authentication","location":"United States","hl":"en","gl":"us"}'

# Search with auth
curl -X POST http://localhost:3080/client/login/getResults \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <JWT_TOKEN>" \
  -d '{"engine":"google","q":"nestjs jwt authentication","location":"United States","hl":"en","gl":"us"}'

# Get history
curl -X GET http://localhost:3080/client/getSearchHistory \
  -H "Authorization: Bearer <JWT_TOKEN>"
```
