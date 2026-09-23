<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).




















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
