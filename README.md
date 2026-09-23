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
  "email": "newGmail@gmail.com",
  "password": "T&M123"
}
```

Example response:

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "status": "User Created!!"
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
  "email": "newGmail@gmail.com",
  "password": "T&M123"
}
```

Example response:

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "status": "User logged-in!!"
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
  "location": "Colombo,Western Province,Sri Lanka",
  "hl": "en",
  "gl": "us"
}
```

Example response:

```json
{
  "search_metadata": {
    "id": "6ab36df295e0b36ec3c35025",
    "status": "Success",
    "json_endpoint": "https://serpapi.com/searches/c5uuegpi8E-WapIFD_3x_K0tTlCmutTvChigG9LertE/6ab36df295e0b36ec3c35025.json",
    "markdown_endpoint": "https://serpapi.com/searches/c5uuegpi8E-WapIFD_3x_K0tTlCmutTvChigG9LertE/6ab36df295e0b36ec3c35025.md",
    "pixel_position_endpoint": "https://serpapi.com/searches/c5uuegpi8E-WapIFD_3x_K0tTlCmutTvChigG9LertE/6ab36df295e0b36ec3c35025.json_with_pixel_position",
    "created_at": "2026-09-23 06:13:06 UTC",
    "processed_at": "2026-09-23 06:13:06 UTC",
    "google_url": "https://www.google.com/search?q=nestjs+jwt+authentication&oq=nestjs+jwt+authentication&uule=w+CAIQICIiQ29sb21ibyxXZXN0ZXJuIFByb3ZpbmNlLFNyaSBMYW5rYQ&hl=en&gl=us&sourceid=chrome&ie=UTF-8",
    "raw_html_file": "https://serpapi.com/searches/c5uuegpi8E-WapIFD_3x_K0tTlCmutTvChigG9LertE/6ab36df295e0b36ec3c35025.html",
    "total_time_taken": 4.95
  },
  "search_parameters": {
    "engine": "google",
    "q": "nestjs jwt authentication",
    "location_requested": "Colombo,Western Province,Sri Lanka",
    "location_used": "Colombo,Western Province,Sri Lanka",
    "google_domain": "google.com",
    "hl": "en",
    "gl": "us",
    "device": "desktop"
  },
  "search_information": {
    "query_displayed": "nestjs jwt authentication",
    "total_results": 108,
    "time_taken_displayed": 0.19,
    "organic_results_state": "Results for exact spelling"
  },
  "inline_videos": [
    {
      "position": 1,
      "title": "NestJS JWT Authentication – Secure Your API Like a Pro!",
      "link": "https://www.youtube.com/watch?v=BfDHPOiHlqU",
      "thumbnail": "https://serpapi.com/searches/6ab36df295e0b36ec3c35025/images/_uV04r1R9Jq2XHzBwNTq4LiDof1rkuN5ffnfr_MCGxQ.jpeg",
      "channel": "Sakura Dev",
      "duration": "27:02",
      "platform": "YouTube",
      "date": "Aug 3, 2024",
      "key_moments": [
        {
          "time": "00:00",
          "title": "Introduction – Why Secure APIs Matter",
          "link": "https://www.youtube.com/watch?v=BfDHPOiHlqU&t=0"
        },
        {
          "time": "00:13",
          "title": "Installing Dependencies for JWT",
          "link": "https://www.youtube.com/watch?v=BfDHPOiHlqU&t=13"
        },
        {
          "time": "01:48",
          "title": "Configuring the JWT Module",
          "link": "https://www.youtube.com/watch?v=BfDHPOiHlqU&t=108"
        },
        {
          "time": "04:18",
          "title": "Using ENV Variables for Security",
          "link": "https://www.youtube.com/watch?v=BfDHPOiHlqU&t=258"
        },
        {
          "time": "08:25",
          "title": "Generating Secure JWT Tokens",
          "link": "https://www.youtube.com/watch?v=BfDHPOiHlqU&t=505"
        },
        {
          "time": "13:26",
          "title": "Implementing JWT Strategy in NestJS",
          "link": "https://www.youtube.com/watch?v=BfDHPOiHlqU&t=806"
        },
        {
          "time": "19:00",
          "title": "Setting Up JWT Auth Guards",
          "link": "https://www.youtube.com/watch?v=BfDHPOiHlqU&t=1140"
        },
        {
          "time": "20:14",
          "title": "Protecting API Routes with Role-Based Access",
          "link": "https://www.youtube.com/watch?v=BfDHPOiHlqU&t=1214"
        },
        {
          "time": "24:19",
          "title": "Recap & Next Steps",
          "link": "https://www.youtube.com/watch?v=BfDHPOiHlqU&t=1459"
        }
      ]
    },
    {
      "position": 2,
      "title": "NestJS JWT Authentication Tutorial",
      "link": "https://www.youtube.com/watch?v=EFDUvzJT_wI",
      "thumbnail": "https://serpapi.com/searches/6ab36df295e0b36ec3c35025/images/Sub0-wROCAGSnsZpItImwT6wM4OCYpaJZ8NpBIvvWzs.png",
      "channel": "Anson",
      "duration": "49:04",
      "platform": "YouTube",
      "date": "Jan 12, 2024"
    },
    {
      "position": 3,
      "title": "NestJS Authentication + Refresh Token With Passport.js",
      "link": "https://www.youtube.com/watch?v=S8Cjx5ua2JU",
      "thumbnail": "https://serpapi.com/searches/6ab36df295e0b36ec3c35025/images/upSaqk4F_-4zWWZJz5cU15Wsrd8JDvzvSCchYlHbzCs.png",
      "channel": "Michael Guay",
      "duration": "1:25:12",
      "platform": "YouTube",
      "date": "Aug 10, 2024",
      "key_moments": [
        {
          "time": "00:00",
          "title": "Introduction",
          "link": "https://www.youtube.com/watch?v=S8Cjx5ua2JU&t=0"
        },
        {
          "time": "04:18",
          "title": "MongoDB",
          "link": "https://www.youtube.com/watch?v=S8Cjx5ua2JU&t=258"
        },
        {
          "time": "14:02",
          "title": "Users CRUD",
          "link": "https://www.youtube.com/watch?v=S8Cjx5ua2JU&t=842"
        },
        {
          "time": "28:00",
          "title": "JWT Auth",
          "link": "https://www.youtube.com/watch?v=S8Cjx5ua2JU&t=1680"
        },
        {
          "time": "01:08:00",
          "title": "Refresh Token",
          "link": "https://www.youtube.com/watch?v=S8Cjx5ua2JU&t=4080"
        }
      ]
    },
    {
      "position": 4,
      "title": "Nestjs Authentication with JWT and Passport (plus Guards ...",
      "link": "https://www.youtube.com/watch?v=9_GG28nS6CY",
      "thumbnail": "https://serpapi.com/searches/6ab36df295e0b36ec3c35025/images/KBW33SUfi-EI7lE77PRupyFYK-hcG4jIfUtrYWCPGJc.jpeg",
      "channel": "ZestMade",
      "duration": "37:12",
      "platform": "YouTube",
      "date": "Jul 15, 2024",
      "short_clip": "https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcS6qU5Ll_K8VrZmTqvteakBcEzv_uR8Vsefgg"
    }
  ],
  "related_questions": [
    {
      "question": "Is JWT different than OAuth?",
      "type": "ai_overview",
      "page_token": "UaKcF3icHdDBboIwHIDx7GU8SpGUbSZmGVNAHGXW9o_0sigd6GihKhPltnfZU-1pZnb7br_k-_5R-7r6vVvv2tacxpbVdd2wbJpSfQzzRlub07XOrXyj1HaTV2P33rWfinwyO3XeS9N5S24MTCliYYypfsBSeQ6MzDmuMAem3NQnUa79AwVFwDZo28_bV_DwqpIoRm0m1jEi6JHFgexXKDrzPsMylCHYwAmjc6nNYqMjuk3NRayX_TYsL1kv7Aw4zuqqh9SnaSAOMsUnBt7yZnGmfcUdOmcpdlMWuXm4K4huEz5Vb-xTJkmA9WrUrfxetXFtdlIjm_HmysLIpvBs89nlSGa-H-wjj4bkmqSCi-DSAdAKQPpgkwUNbs3EF612vUTiKBxCB0V-njiD_2OT90K3Y3Nsyj8K9njC",
      "serpapi_ai_overview_link": "https://serpapi.com/search.json?engine=google_ai_overview&page_token=UaKcF3icHdDBboIwHIDx7GU8SpGUbSZmGVNAHGXW9o_0sigd6GihKhPltnfZU-1pZnb7br_k-_5R-7r6vVvv2tacxpbVdd2wbJpSfQzzRlub07XOrXyj1HaTV2P33rWfinwyO3XeS9N5S24MTCliYYypfsBSeQ6MzDmuMAem3NQnUa79AwVFwDZo28_bV_DwqpIoRm0m1jEi6JHFgexXKDrzPsMylCHYwAmjc6nNYqMjuk3NRayX_TYsL1kv7Aw4zuqqh9SnaSAOMsUnBt7yZnGmfcUdOmcpdlMWuXm4K4huEz5Vb-xTJkmA9WrUrfxetXFtdlIjm_HmysLIpvBs89nlSGa-H-wjj4bkmqSCi-DSAdAKQPpgkwUNbs3EF612vUTiKBxCB0V-njiD_2OT90K3Y3Nsyj8K9njC",
      "next_page_token": "eyJvbnMiOiIxMDA0MSIsImZjIjoiRXFFQkNtSkJTbWxVTkhSS1UxOUpkMTh6TFMweVduZE9USHBmYUc1Uk5YVmpRMDFKYUZkUll6aFZiRGx5WDJwSVdsOVlia1ZUT0dwWkxUQldNVlp4VkhrM1ZuUlJRa2c0Y25GcWNteHpiMmczWmtWQlNqQTNkR0pGY0ZVdGNHdFpOalJXZFVsSmR4SVhPVzB5ZW1GMmJUVk5TakpNY25WRlVEVlFUR3MwUVVVYUlrRkVjM0k1WmxKM2RFSkdiVzF4V1dOUlEzUjJXVmhKUzFNd1gzRmxVV1F5TVZFIiwiZmN2IjoiMyIsImVpIjoiOW0yemF2bTVNSjJMcnVFUDVQTGs0QUUiLCJxYyI6IkNobHVaWE4wYW5NZ2FuZDBJR0YxZEdobGJuUnBZMkYwYVc5dUVBQjlYWWdlUHciLCJxdWVzdGlvbiI6IklzIEpXVCBkaWZmZXJlbnQgdGhhbiBPQXV0aD8iLCJsayI6IkdodHBjeUJxZDNRZ1pHbG1abVZ5Wlc1MElIUm9ZVzRnYjJGMWRHZyIsImJzIjoiYzNYT3NRckNNQlNGWVZ3ek9ZaG90SHFlb1l1VEZIR3hIWFJRY0E3MmhxWmlMalNwcFc5dlVncUM0UHhkX25QRlhxeHpoLUotUTJtMHBvYXNoNi1VeGVYUS1pcExFN2t5RG5YbmY1MVZjTEVUeXhOMzhJelcwWkF4Rm1jdXFiaG1xWlNMNm91eEVkQUdySjA0aXUyNDY1UW1hRzRRZ3lGdkhzb2J0bGtLdVJtbl81eUU5U1N1bDR3Y2IycU03dkhxaDZqbko0WEVYTTdpQjZQRjFBRFR5UWMiLCJpZCI6ImZjXzltMnphdm01TUoyTHJ1RVA1UExrNEFFXzcifQ==",
      "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google_related_questions&google_domain=google.com&next_page_token=eyJvbnMiOiIxMDA0MSIsImZjIjoiRXFFQkNtSkJTbWxVTkhSS1UxOUpkMTh6TFMweVduZE9USHBmYUc1Uk5YVmpRMDFKYUZkUll6aFZiRGx5WDJwSVdsOVlia1ZUT0dwWkxUQldNVlp4VkhrM1ZuUlJRa2c0Y25GcWNteHpiMmczWmtWQlNqQTNkR0pGY0ZVdGNHdFpOalJXZFVsSmR4SVhPVzB5ZW1GMmJUVk5TakpNY25WRlVEVlFUR3MwUVVVYUlrRkVjM0k1WmxKM2RFSkdiVzF4V1dOUlEzUjJXVmhKUzFNd1gzRmxVV1F5TVZFIiwiZmN2IjoiMyIsImVpIjoiOW0yemF2bTVNSjJMcnVFUDVQTGs0QUUiLCJxYyI6IkNobHVaWE4wYW5NZ2FuZDBJR0YxZEdobGJuUnBZMkYwYVc5dUVBQjlYWWdlUHciLCJxdWVzdGlvbiI6IklzIEpXVCBkaWZmZXJlbnQgdGhhbiBPQXV0aD8iLCJsayI6IkdodHBjeUJxZDNRZ1pHbG1abVZ5Wlc1MElIUm9ZVzRnYjJGMWRHZyIsImJzIjoiYzNYT3NRckNNQlNGWVZ3ek9ZaG90SHFlb1l1VEZIR3hIWFJRY0E3MmhxWmlMalNwcFc5dlVncUM0UHhkX25QRlhxeHpoLUotUTJtMHBvYXNoNi1VeGVYUS1pcExFN2t5RG5YbmY1MVZjTEVUeXhOMzhJelcwWkF4Rm1jdXFiaG1xWlNMNm91eEVkQUdySjA0aXUyNDY1UW1hRzRRZ3lGdkhzb2J0bGtLdVJtbl81eUU5U1N1bDR3Y2IycU03dkhxaDZqbko0WEVYTTdpQjZQRjFBRFR5UWMiLCJpZCI6ImZjXzltMnphdm01TUoyTHJ1RVA1UExrNEFFXzcifQ%3D%3D"
    },
    {
      "question": "How to use JWT in NodeJS?",
      "type": "ai_overview",
      "page_token": "U_Zz33icHdDbToMwAIDh-DK7dCBjxiWLEcdxaWcLLYcbU1oYW8uoDsfgznfxqXwaF5_g__J__6jDSf7eXZq-1-fVfD4Mw_2-6_aquuddO2fn8cTnnClVMi5Xy8el-VzztfsVOq8foYOI1nSDjZhEl1xqlmdiTKUOdq7NkEVR6gnCTJWgjOIdsR-Yq1XRXlVONMMK55VXHEolapw-aWHKBfYXPQi8vNo4EmSRIdKFwUjjIPpEcwnr-FiA0oMSe_CMrZexklFYbZpOBGDkfnGGBlVoAhML8FuaQZK4oVW28irSphFHx8BmFMc3QRx4cdlGKGm9HPjXbeoLAi24iyfhFml_chtul0m0zLOih8TcAnkdBaEIUgewCTsYdwdE8MSPqiXHZiBU2pRGtwZcFmQxJJZqq6yZgG9naAptgmY1v6yt2f_P9Xvd9iv92e3_AAQzhJA",
      "serpapi_ai_overview_link": "https://serpapi.com/search.json?engine=google_ai_overview&page_token=U_Zz33icHdDbToMwAIDh-DK7dCBjxiWLEcdxaWcLLYcbU1oYW8uoDsfgznfxqXwaF5_g__J__6jDSf7eXZq-1-fVfD4Mw_2-6_aquuddO2fn8cTnnClVMi5Xy8el-VzztfsVOq8foYOI1nSDjZhEl1xqlmdiTKUOdq7NkEVR6gnCTJWgjOIdsR-Yq1XRXlVONMMK55VXHEolapw-aWHKBfYXPQi8vNo4EmSRIdKFwUjjIPpEcwnr-FiA0oMSe_CMrZexklFYbZpOBGDkfnGGBlVoAhML8FuaQZK4oVW28irSphFHx8BmFMc3QRx4cdlGKGm9HPjXbeoLAi24iyfhFml_chtul0m0zLOih8TcAnkdBaEIUgewCTsYdwdE8MSPqiXHZiBU2pRGtwZcFmQxJJZqq6yZgG9naAptgmY1v6yt2f_P9Xvd9iv92e3_AAQzhJA",
      "next_page_token": "eyJvbnMiOiIxMDA0MSIsImZjIjoiRXFFQkNtSkJTbWxVTkhSS1UxOUpkMTh6TFMweVduZE9USHBmYUc1Uk5YVmpRMDFKYUZkUll6aFZiRGx5WDJwSVdsOVlia1ZUT0dwWkxUQldNVlp4VkhrM1ZuUlJRa2c0Y25GcWNteHpiMmczWmtWQlNqQTNkR0pGY0ZVdGNHdFpOalJXZFVsSmR4SVhPVzB5ZW1GMmJUVk5TakpNY25WRlVEVlFUR3MwUVVVYUlrRkVjM0k1WmxKM2RFSkdiVzF4V1dOUlEzUjJXVmhKUzFNd1gzRmxVV1F5TVZFIiwiZmN2IjoiMyIsImVpIjoiOW0yemF2bTVNSjJMcnVFUDVQTGs0QUUiLCJxYyI6IkNobHVaWE4wYW5NZ2FuZDBJR0YxZEdobGJuUnBZMkYwYVc5dUVBQjlYWWdlUHciLCJxdWVzdGlvbiI6IkhvdyB0byB1c2UgSldUIGluIE5vZGVKUz8iLCJsayI6IkdoaG9iM2NnZEc4Z2RYTmxJR3AzZENCcGJpQnViMlJsYW5NIiwiYnMiOiJjM1hPc1FyQ01CU0ZZVnd6T1lob3RIcWVvWXVURkhHeEhYUlFjQTcyaHFaaUxqU3BwVzl2VWdxQzRQeGRfblBGWHF4emgtSi1RMm0wcG9hc2g2LVV4ZVhRLWlwTEU3a3lEblhuZjUxVmNMRVR5eE4zOEl6VzBaQXhGbWN1cWJobXFaU0w2b3V4RWRBR3JKMDRpdTI0NjVRbWFHNFFneUZ2SHNvYnRsa0t1Um1uXzV5RTlTU3VsNHdjYjJxTTd2SHFoNmpuSjRYRVhNN2lCNlBGMUFEVHlRYyIsImlkIjoiZmNfOW0yemF2bTVNSjJMcnVFUDVQTGs0QUVfNyJ9",
      "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google_related_questions&google_domain=google.com&next_page_token=eyJvbnMiOiIxMDA0MSIsImZjIjoiRXFFQkNtSkJTbWxVTkhSS1UxOUpkMTh6TFMweVduZE9USHBmYUc1Uk5YVmpRMDFKYUZkUll6aFZiRGx5WDJwSVdsOVlia1ZUT0dwWkxUQldNVlp4VkhrM1ZuUlJRa2c0Y25GcWNteHpiMmczWmtWQlNqQTNkR0pGY0ZVdGNHdFpOalJXZFVsSmR4SVhPVzB5ZW1GMmJUVk5TakpNY25WRlVEVlFUR3MwUVVVYUlrRkVjM0k1WmxKM2RFSkdiVzF4V1dOUlEzUjJXVmhKUzFNd1gzRmxVV1F5TVZFIiwiZmN2IjoiMyIsImVpIjoiOW0yemF2bTVNSjJMcnVFUDVQTGs0QUUiLCJxYyI6IkNobHVaWE4wYW5NZ2FuZDBJR0YxZEdobGJuUnBZMkYwYVc5dUVBQjlYWWdlUHciLCJxdWVzdGlvbiI6IkhvdyB0byB1c2UgSldUIGluIE5vZGVKUz8iLCJsayI6IkdoaG9iM2NnZEc4Z2RYTmxJR3AzZENCcGJpQnViMlJsYW5NIiwiYnMiOiJjM1hPc1FyQ01CU0ZZVnd6T1lob3RIcWVvWXVURkhHeEhYUlFjQTcyaHFaaUxqU3BwVzl2VWdxQzRQeGRfblBGWHF4emgtSi1RMm0wcG9hc2g2LVV4ZVhRLWlwTEU3a3lEblhuZjUxVmNMRVR5eE4zOEl6VzBaQXhGbWN1cWJobXFaU0w2b3V4RWRBR3JKMDRpdTI0NjVRbWFHNFFneUZ2SHNvYnRsa0t1Um1uXzV5RTlTU3VsNHdjYjJxTTd2SHFoNmpuSjRYRVhNN2lCNlBGMUFEVHlRYyIsImlkIjoiZmNfOW0yemF2bTVNSjJMcnVFUDVQTGs0QUVfNyJ9"
    },
    {
      "question": "Is JWT safe for authentication?",
      "type": "ai_overview",
      "page_token": "G2BHonicHdBfToMwHADgeJk9DijbNEsWI6NlIVKk41egLwbaARt_HUxkb97FU3kaE78jfN8_9bmtfh_ichz7Yatp0zQti64r6tNSdo2WDnMrNZnWdZbKart53BjPudzhYbL23WQF0PfcZvoxmvRAN0zpVCsPmAdAnCAsZwHFXdSlnYUqFA1F3HGtlKg9wzoCVCAg5Obj9U3pIgekLh6mH0Gs6CuskAop8NadEngyBaqZwjTOOGVRxILowtacCMLDZJUROp44L6nN7-qSzBKNfgiUCjwgwO6NOn2v2v4tiOqSx9TOmvIz0Ysjudej1_alanQjhG4OD67B-IsB-OtKMSHO2bXYgc5-JI4SOKcwjkmrKh9P60D3jARRFpi8AUc5J8LbRS4_d-bif2z3njfjtr92xR9utXfZ",
      "serpapi_ai_overview_link": "https://serpapi.com/search.json?engine=google_ai_overview&page_token=G2BHonicHdBfToMwHADgeJk9DijbNEsWI6NlIVKk41egLwbaARt_HUxkb97FU3kaE78jfN8_9bmtfh_ichz7Yatp0zQti64r6tNSdo2WDnMrNZnWdZbKart53BjPudzhYbL23WQF0PfcZvoxmvRAN0zpVCsPmAdAnCAsZwHFXdSlnYUqFA1F3HGtlKg9wzoCVCAg5Obj9U3pIgekLh6mH0Gs6CuskAop8NadEngyBaqZwjTOOGVRxILowtacCMLDZJUROp44L6nN7-qSzBKNfgiUCjwgwO6NOn2v2v4tiOqSx9TOmvIz0Ysjudej1_alanQjhG4OD67B-IsB-OtKMSHO2bXYgc5-JI4SOKcwjkmrKh9P60D3jARRFpi8AUc5J8LbRS4_d-bif2z3njfjtr92xR9utXfZ",
      "next_page_token": "eyJvbnMiOiIxMDA0MSIsImZjIjoiRXFFQkNtSkJTbWxVTkhSS1UxOUpkMTh6TFMweVduZE9USHBmYUc1Uk5YVmpRMDFKYUZkUll6aFZiRGx5WDJwSVdsOVlia1ZUT0dwWkxUQldNVlp4VkhrM1ZuUlJRa2c0Y25GcWNteHpiMmczWmtWQlNqQTNkR0pGY0ZVdGNHdFpOalJXZFVsSmR4SVhPVzB5ZW1GMmJUVk5TakpNY25WRlVEVlFUR3MwUVVVYUlrRkVjM0k1WmxKM2RFSkdiVzF4V1dOUlEzUjJXVmhKUzFNd1gzRmxVV1F5TVZFIiwiZmN2IjoiMyIsImVpIjoiOW0yemF2bTVNSjJMcnVFUDVQTGs0QUUiLCJxYyI6IkNobHVaWE4wYW5NZ2FuZDBJR0YxZEdobGJuUnBZMkYwYVc5dUVBQjlYWWdlUHciLCJxdWVzdGlvbiI6IklzIEpXVCBzYWZlIGZvciBhdXRoZW50aWNhdGlvbj8iLCJsayI6IkdoNXBjeUJxZDNRZ2MyRm1aU0JtYjNJZ1lYVjBhR1Z1ZEdsallYUnBiMjQiLCJicyI6ImMzWE9zUXJDTUJTRllWd3pPWWhvdEhxZW9ZdVRGSEd4SFhSUWNBNzJocVppTGpTcHBXOXZVZ3FDNFB4ZF9uUEZYcXh6aC1KLVEybTBwb2FzaDYtVXhlWFEtaXBMRTdreURuWG5mNTFWY0xFVHl4TjM4SXpXMFpBeEZtY3VxYmhtcVpTTDZvdXhFZEFHckowNGl1MjQ2NVFtYUc0UWd5RnZIc29idGxrS3VSbW5fNXlFOVNTdWw0d2NiMnFNN3ZIcWg2am5KNFhFWE03aUI2UEYxQURUeVFjIiwiaWQiOiJmY185bTJ6YXZtNU1KMkxydUVQNVBMazRBRV83In0=",
      "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google_related_questions&google_domain=google.com&next_page_token=eyJvbnMiOiIxMDA0MSIsImZjIjoiRXFFQkNtSkJTbWxVTkhSS1UxOUpkMTh6TFMweVduZE9USHBmYUc1Uk5YVmpRMDFKYUZkUll6aFZiRGx5WDJwSVdsOVlia1ZUT0dwWkxUQldNVlp4VkhrM1ZuUlJRa2c0Y25GcWNteHpiMmczWmtWQlNqQTNkR0pGY0ZVdGNHdFpOalJXZFVsSmR4SVhPVzB5ZW1GMmJUVk5TakpNY25WRlVEVlFUR3MwUVVVYUlrRkVjM0k1WmxKM2RFSkdiVzF4V1dOUlEzUjJXVmhKUzFNd1gzRmxVV1F5TVZFIiwiZmN2IjoiMyIsImVpIjoiOW0yemF2bTVNSjJMcnVFUDVQTGs0QUUiLCJxYyI6IkNobHVaWE4wYW5NZ2FuZDBJR0YxZEdobGJuUnBZMkYwYVc5dUVBQjlYWWdlUHciLCJxdWVzdGlvbiI6IklzIEpXVCBzYWZlIGZvciBhdXRoZW50aWNhdGlvbj8iLCJsayI6IkdoNXBjeUJxZDNRZ2MyRm1aU0JtYjNJZ1lYVjBhR1Z1ZEdsallYUnBiMjQiLCJicyI6ImMzWE9zUXJDTUJTRllWd3pPWWhvdEhxZW9ZdVRGSEd4SFhSUWNBNzJocVppTGpTcHBXOXZVZ3FDNFB4ZF9uUEZYcXh6aC1KLVEybTBwb2FzaDYtVXhlWFEtaXBMRTdreURuWG5mNTFWY0xFVHl4TjM4SXpXMFpBeEZtY3VxYmhtcVpTTDZvdXhFZEFHckowNGl1MjQ2NVFtYUc0UWd5RnZIc29idGxrS3VSbW5fNXlFOVNTdWw0d2NiMnFNN3ZIcWg2am5KNFhFWE03aUI2UEYxQURUeVFjIiwiaWQiOiJmY185bTJ6YXZtNU1KMkxydUVQNVBMazRBRV83In0%3D"
    },
    {
      "question": "How do I verify my JWT token?",
      "type": "ai_overview",
      "page_token": "WiPl-nicHdDbTsIwGADg-DJcshOgkhCTsYNMaLKuf8d6Y0o3KKzdhkx2uPNdfCqfRuP1d_d9fatzVf483GXbNrelYXRdNz3V9UkVU1Frg9-GShiCK3XgolwuHhfWy1Gs_M-Nu75u3BiahnrYTMz5Zu_gfWYrQnzGqbYs5OVzcbbGbKQJA7MDbQ6QKp_bz25s9hGp6HFXnnoU-GOhsCQX5DMvknkaJIxEmQAZHMImAf000ErMcBiUxGP7JIheeZivt9DXqWLXAqgb6wAhT41EqwQAHO6ga-zAkJmdLSqUkjDCqScbqORClKgm-mZRm3Huyz_MeXFB8yIVtgj7yzZtXV-K-YFEi2zPWgTW267shxxojKi74yN2Ma7PMeBRXJQGkwH25AxpdsYKzXhIMSIsQl5mb9PmntDcZN3kKO4rZ_L_uXo_6nbZfNSnXweug3Q",
      "serpapi_ai_overview_link": "https://serpapi.com/search.json?engine=google_ai_overview&page_token=WiPl-nicHdDbTsIwGADg-DJcshOgkhCTsYNMaLKuf8d6Y0o3KKzdhkx2uPNdfCqfRuP1d_d9fatzVf483GXbNrelYXRdNz3V9UkVU1Frg9-GShiCK3XgolwuHhfWy1Gs_M-Nu75u3BiahnrYTMz5Zu_gfWYrQnzGqbYs5OVzcbbGbKQJA7MDbQ6QKp_bz25s9hGp6HFXnnoU-GOhsCQX5DMvknkaJIxEmQAZHMImAf000ErMcBiUxGP7JIheeZivt9DXqWLXAqgb6wAhT41EqwQAHO6ga-zAkJmdLSqUkjDCqScbqORClKgm-mZRm3Huyz_MeXFB8yIVtgj7yzZtXV-K-YFEi2zPWgTW267shxxojKi74yN2Ma7PMeBRXJQGkwH25AxpdsYKzXhIMSIsQl5mb9PmntDcZN3kKO4rZ_L_uXo_6nbZfNSnXweug3Q",
      "next_page_token": "eyJvbnMiOiIxMDA0MSIsImZjIjoiRXFFQkNtSkJTbWxVTkhSS1UxOUpkMTh6TFMweVduZE9USHBmYUc1Uk5YVmpRMDFKYUZkUll6aFZiRGx5WDJwSVdsOVlia1ZUT0dwWkxUQldNVlp4VkhrM1ZuUlJRa2c0Y25GcWNteHpiMmczWmtWQlNqQTNkR0pGY0ZVdGNHdFpOalJXZFVsSmR4SVhPVzB5ZW1GMmJUVk5TakpNY25WRlVEVlFUR3MwUVVVYUlrRkVjM0k1WmxKM2RFSkdiVzF4V1dOUlEzUjJXVmhKUzFNd1gzRmxVV1F5TVZFIiwiZmN2IjoiMyIsImVpIjoiOW0yemF2bTVNSjJMcnVFUDVQTGs0QUUiLCJxYyI6IkNobHVaWE4wYW5NZ2FuZDBJR0YxZEdobGJuUnBZMkYwYVc5dUVBQjlYWWdlUHciLCJxdWVzdGlvbiI6IkhvdyBkbyBJIHZlcmlmeSBteSBKV1QgdG9rZW4/IiwibGsiOiJHaFJvYjNjZ2RtVnlhV1o1SUdwM2RDQjBiMnRsYmciLCJicyI6ImMzWE9zUXJDTUJTRllWd3pPWWhvdEhxZW9ZdVRGSEd4SFhSUWNBNzJocVppTGpTcHBXOXZVZ3FDNFB4ZF9uUEZYcXh6aC1KLVEybTBwb2FzaDYtVXhlWFEtaXBMRTdreURuWG5mNTFWY0xFVHl4TjM4SXpXMFpBeEZtY3VxYmhtcVpTTDZvdXhFZEFHckowNGl1MjQ2NVFtYUc0UWd5RnZIc29idGxrS3VSbW5fNXlFOVNTdWw0d2NiMnFNN3ZIcWg2am5KNFhFWE03aUI2UEYxQURUeVFjIiwiaWQiOiJmY185bTJ6YXZtNU1KMkxydUVQNVBMazRBRV83In0=",
      "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google_related_questions&google_domain=google.com&next_page_token=eyJvbnMiOiIxMDA0MSIsImZjIjoiRXFFQkNtSkJTbWxVTkhSS1UxOUpkMTh6TFMweVduZE9USHBmYUc1Uk5YVmpRMDFKYUZkUll6aFZiRGx5WDJwSVdsOVlia1ZUT0dwWkxUQldNVlp4VkhrM1ZuUlJRa2c0Y25GcWNteHpiMmczWmtWQlNqQTNkR0pGY0ZVdGNHdFpOalJXZFVsSmR4SVhPVzB5ZW1GMmJUVk5TakpNY25WRlVEVlFUR3MwUVVVYUlrRkVjM0k1WmxKM2RFSkdiVzF4V1dOUlEzUjJXVmhKUzFNd1gzRmxVV1F5TVZFIiwiZmN2IjoiMyIsImVpIjoiOW0yemF2bTVNSjJMcnVFUDVQTGs0QUUiLCJxYyI6IkNobHVaWE4wYW5NZ2FuZDBJR0YxZEdobGJuUnBZMkYwYVc5dUVBQjlYWWdlUHciLCJxdWVzdGlvbiI6IkhvdyBkbyBJIHZlcmlmeSBteSBKV1QgdG9rZW4%2FIiwibGsiOiJHaFJvYjNjZ2RtVnlhV1o1SUdwM2RDQjBiMnRsYmciLCJicyI6ImMzWE9zUXJDTUJTRllWd3pPWWhvdEhxZW9ZdVRGSEd4SFhSUWNBNzJocVppTGpTcHBXOXZVZ3FDNFB4ZF9uUEZYcXh6aC1KLVEybTBwb2FzaDYtVXhlWFEtaXBMRTdreURuWG5mNTFWY0xFVHl4TjM4SXpXMFpBeEZtY3VxYmhtcVpTTDZvdXhFZEFHckowNGl1MjQ2NVFtYUc0UWd5RnZIc29idGxrS3VSbW5fNXlFOVNTdWw0d2NiMnFNN3ZIcWg2am5KNFhFWE03aUI2UEYxQURUeVFjIiwiaWQiOiJmY185bTJ6YXZtNU1KMkxydUVQNVBMazRBRV83In0%3D"
    }
  ],
  "ai_overview": {
    "page_token": "tb2lXXiczVbdcqJIGH2AfY7lJqMg4l-qqKnuDsZGjelEjeaGQsAG5cfhJ8Tczbvs8-wD7NNsg0owo2ZmLra2qxC66T79nf6-w_H7X67jr__54287jjfRNc-naVqlQUBdq2oEHq9HW9_gl4EbhYb91XZly-eSxLXk9AoBTDDCDhE70UKsOYvt6-x5dic8z9QEd-F2UX_eLLw7d9C92-qPcDh_aoRzwlFXTiIuCpLQsBxTNuww8Cxu-yLXOSOSBc5y5I4nvukvXmOoioMwUe4b94O1BBQuD0bWFnpkrVisr6uI13j2s_6zfsM61ahq-dUEzgUUTu90ElVFodapjnjdYxPAf9cIAgoAFGL2DM9OYjN-BgwyBAa0Lg3h_coS9hygDA-TvIfOINMcLQPAMFvAbtpzKEHQP2DB9GwgqLwf62RbKSgnkjN1foZNiUPWlAITXZx9is8OgW2vHEaGpbcKONPQh0qYMPQ2GGJg7wc-ZKwblHtq9nOz234JpFSRHroXI2enM0lhow8-TXcXPPh0TwqjmK2EvElZ5Qr8ImS3Gu8YtpE_hFFW0GjcEYLbUU_D_Ybq--lkrQ4rDzF2aJIK7XGX8saCzXMD3bRMzdaEr3m_JtYaQqfean_JlWREhZSispRA_7beEfRvLXFYHVRh7aAjVJz8h5RltYDwCWIQ7aeeyjGF7-PvJ68o5Sz0d2eSnaWIQbF_voQ0d6kusnqPAaS4XAoFbrbulI72kRSsKMmLOwsrKKIrM6NMRkWAZVbDk3r_OEZ6RQQY_jCxHBOGmDLapIAvN5RVObazlxN2yAO6V6BRxujC7HjIUag0Z45uC2JKmaJS3sZhSLkwVo8gq_5AzXIMM0C0W3GQ_QTshktkznz7IpAC9bLezzX8yXdiv_NBMB_qv6wbZTlJ7kGzZt1v6oCmndVo0nI1l9D0EZzWSeAtfsFzjP-Vkg6O1M_fnVdSVjefKokVP77oSPnzzpGIulMSomeVlFvSD440OulIxxWFwMO7kvrwoiP9upLQRSXRPdMTSmKOdEpJ63NKyh3pWEl2mxw50hHvd0cqlPQ7joR-z5FyYVm727E9JSt61qZ6s7XYXCs20pWXnlupbDGhs3QZ4JYGPrWppRdfe7rpftEc8xqKarw1v2hsILi2TO6b7FtRvIquVml8pSexbfmxY-ixE_ic54aBLOhS5y3ZvkkKrCQDo9GXumtVCJ056oW6Om42dRImc9gQyFOnPniCi2RkSN7b7FnXLHMkoXA8hU2wvqm0TGnixtrSRK7XmLzBabrcEDrtxgHybglCt8lTfeHrUzKsrEdj07iZv5Kk8hq9qNs2brm9TWep1aZjLc3jimTYFW2AmqI9YyOhIbOESBTcEfBEWeWhOVMtK1kUsCtlVxMQBXKRwcKK2L9lQ68tF0ZbatSW5tJsch6Ntxu5zUV-KNf-BXhqV8k",
    "serpapi_link": "https://serpapi.com/search.json?engine=google_ai_overview&page_token=tb2lXXiczVbdcqJIGH2AfY7lJqMg4l-qqKnuDsZGjelEjeaGQsAG5cfhJ8Tczbvs8-wD7NNsg0owo2ZmLra2qxC66T79nf6-w_H7X67jr__54287jjfRNc-naVqlQUBdq2oEHq9HW9_gl4EbhYb91XZly-eSxLXk9AoBTDDCDhE70UKsOYvt6-x5dic8z9QEd-F2UX_eLLw7d9C92-qPcDh_aoRzwlFXTiIuCpLQsBxTNuww8Cxu-yLXOSOSBc5y5I4nvukvXmOoioMwUe4b94O1BBQuD0bWFnpkrVisr6uI13j2s_6zfsM61ahq-dUEzgUUTu90ElVFodapjnjdYxPAf9cIAgoAFGL2DM9OYjN-BgwyBAa0Lg3h_coS9hygDA-TvIfOINMcLQPAMFvAbtpzKEHQP2DB9GwgqLwf62RbKSgnkjN1foZNiUPWlAITXZx9is8OgW2vHEaGpbcKONPQh0qYMPQ2GGJg7wc-ZKwblHtq9nOz234JpFSRHroXI2enM0lhow8-TXcXPPh0TwqjmK2EvElZ5Qr8ImS3Gu8YtpE_hFFW0GjcEYLbUU_D_Ybq--lkrQ4rDzF2aJIK7XGX8saCzXMD3bRMzdaEr3m_JtYaQqfean_JlWREhZSispRA_7beEfRvLXFYHVRh7aAjVJz8h5RltYDwCWIQ7aeeyjGF7-PvJ68o5Sz0d2eSnaWIQbF_voQ0d6kusnqPAaS4XAoFbrbulI72kRSsKMmLOwsrKKIrM6NMRkWAZVbDk3r_OEZ6RQQY_jCxHBOGmDLapIAvN5RVObazlxN2yAO6V6BRxujC7HjIUag0Z45uC2JKmaJS3sZhSLkwVo8gq_5AzXIMM0C0W3GQ_QTshktkznz7IpAC9bLezzX8yXdiv_NBMB_qv6wbZTlJ7kGzZt1v6oCmndVo0nI1l9D0EZzWSeAtfsFzjP-Vkg6O1M_fnVdSVjefKokVP77oSPnzzpGIulMSomeVlFvSD440OulIxxWFwMO7kvrwoiP9upLQRSXRPdMTSmKOdEpJ63NKyh3pWEl2mxw50hHvd0cqlPQ7joR-z5FyYVm727E9JSt61qZ6s7XYXCs20pWXnlupbDGhs3QZ4JYGPrWppRdfe7rpftEc8xqKarw1v2hsILi2TO6b7FtRvIquVml8pSexbfmxY-ixE_ic54aBLOhS5y3ZvkkKrCQDo9GXumtVCJ056oW6Om42dRImc9gQyFOnPniCi2RkSN7b7FnXLHMkoXA8hU2wvqm0TGnixtrSRK7XmLzBabrcEDrtxgHybglCt8lTfeHrUzKsrEdj07iZv5Kk8hq9qNs2brm9TWep1aZjLc3jimTYFW2AmqI9YyOhIbOESBTcEfBEWeWhOVMtK1kUsCtlVxMQBXKRwcKK2L9lQ68tF0ZbatSW5tJsch6Ntxu5zUV-KNf-BXhqV8k"
  },
  "organic_results": [
    {
      "position": 1,
      "title": "Authentication | NestJS - A progressive Node.js framework",
      "link": "https://docs.nestjs.com/security/authentication",
      "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=CAESZwHrOzAVkBE6xjNbQttZoFWMKOBJ2zzVGhIW1ePwLTz03Sa63FknC9-M4f4E-f8Vm1etnqUVcoyBw8sJOGpX1y14a1Db_DKYbE-GlVJVXn8kf9SDzt5pqQdHn6fkHKbfXHcv5X7oGqE&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQFnoECBgQAQ&uoh=1",
      "displayed_link": "https://docs.nestjs.com › security › authentication",
      "snippet": "Clients start by authenticating with a username and password. Once authenticated, the server issues a JWT, which the client sends as a bearer token in the ...",
      "snippet_highlighted_words": [
        "Clients start by authenticating with a username and password"
      ],
      "sitelinks": {
        "inline": [
          {
            "title": "Implementing The ``sign In''...",
            "link": "https://docs.nestjs.com/security/authentication#:~:text=%29-,Implementing%20the%20%60%60Sign%20in%27%27%20endpoint"
          },
          {
            "title": "Learn The Right Way!",
            "link": "https://docs.nestjs.com/security/authentication#:~:text=Learn%20the%20right%20way%21"
          },
          {
            "title": "Jwt Token",
            "link": "https://docs.nestjs.com/security/authentication#:~:text=course-,JWT%20token"
          }
        ]
      },
      "about_this_result": {
        "source": {
          "description": "Clients start by authenticating with a username and password. Once authenticated, the server issues a JWT, which the client sends as a bearer token in the ...",
          "source_info_link": "https://docs.nestjs.com/security/authentication",
          "icon": "https://serpapi.com/images/i/iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y-mAAAALVBMVEVHcEzgI07gI07gI07gI07gI07gI07gI07gI07gI07gI07gI07gI07gI07gI07NqLYqAAAADnRSTlMAPnr0B1OesxZnx90rjVerX3QAAADJSURBVCiRlZJZDsMgDESNDZglmfsft0BIAgmt1PkAyU94GUP0jyTG8BUqA-Yb9Ciyc8yplGD2Zq-QR2QzJunIZGbwFDsKjKcM9cz5hZAoAnUg92a-BXXRCzLHI1Sf2vfTQ61qQOLIaVG56nDL-iedXDIPOJlo3Q9INBcectZjG5lcDNhK30agF7zcNzWJUwjOrvReeShZ2iY1dGjurNSHzNRXJNbdMJ6OtdtjQK2s285hdp9oIY6urkxWrLXtiO2SeeFlvDk0f_YPq8UTEoYLBHwAAAAASUVORK5CYII.png"
        },
        "languages": ["en"],
        "regions": ["US"]
      },
      "about_page_link": "https://www.google.com/search/about-this-result?origin=www.google.com&req=CpkBL2dvdG8_dXJsPUNBRVNad0hyT3pBVmtCRTZ4ak5iUXR0Wm9GV01LT0JKMnp6VkdoSVcxZVB3TFR6MDNTYTYzRmtuQzktTTRmNEUtZjhWbTFldG5xVVZjb3lCdzhzSk9HcFgxeTE0YTFEYl9ES1liRS1HbFZKVlhuOGtmOVNEenQ1cHFRZEhuNmZrSEtiZlhIY3Y1WDdvR3FFEgQaAggAGtMEEgIIARoAIgAqADIGCAMSAnVzOgBCBAgBEABKAFoAcgIIAXoAgkCrBAgAEAAYACAAKhoKBm5lc3RqcxWCqudAGgtpdjtwO25lc3RqcyonCgNqd3QVqecRQBoRand0YXV0aGVudGljYXRpb24aCGl2O3A7and0KkoKDmF1dGhlbnRpY2F0aW9uFdnrkUAaBGF1dGgaBXRva2VuGhFqd3RhdXRoZW50aWNhdGlvbhoTaXY7cDthdXRoZW50aWNhdGlvbjKZAS9nb3RvP3VybD1DQUVTWndIck96QVZrQkU2eGpOYlF0dFpvRldNS09CSjJ6elZHaElXMWVQd0xUejAzU2E2M0ZrbkM5LU00ZjRFLWY4Vm0xZXRucVVWY295Qnc4c0pPR3BYMXkxNGExRGJfREtZYkUtR2xWSlZYbjhrZjlTRHp0NXBxUWRIbjZma0hLYmZYSGN2NVg3b0dxRTpHPGI-QXV0aGVudGljYXRpb248L2I-IHwgPGI-TmVzdEpTPC9iPiAtIEEgcHJvZ3Jlc3NpdmUgTm9kZS5qcyBmcmFtZXdvcmtCqgE8Yj5DbGllbnRzIHN0YXJ0IGJ5IGF1dGhlbnRpY2F0aW5nIHdpdGggYSB1c2VybmFtZSBhbmQgcGFzc3dvcmQ8L2I-LiBPbmNlIGF1dGhlbnRpY2F0ZWQsIHRoZSBzZXJ2ZXIgaXNzdWVzIGEgSldULCB3aGljaCB0aGUgY2xpZW50IHNlbmRzIGFzIGEgYmVhcmVyIHRva2VuIGluIHRoZSZuYnNwOy4uLiICEAFIAFgAaAA",
      "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&req_token=CpkBL2dvdG8_dXJsPUNBRVNad0hyT3pBVmtCRTZ4ak5iUXR0Wm9GV01LT0JKMnp6VkdoSVcxZVB3TFR6MDNTYTYzRmtuQzktTTRmNEUtZjhWbTFldG5xVVZjb3lCdzhzSk9HcFgxeTE0YTFEYl9ES1liRS1HbFZKVlhuOGtmOVNEenQ1cHFRZEhuNmZrSEtiZlhIY3Y1WDdvR3FFEgQaAggAGtMEEgIIARoAIgAqADIGCAMSAnVzOgBCBAgBEABKAFoAcgIIAXoAgkCrBAgAEAAYACAAKhoKBm5lc3RqcxWCqudAGgtpdjtwO25lc3RqcyonCgNqd3QVqecRQBoRand0YXV0aGVudGljYXRpb24aCGl2O3A7and0KkoKDmF1dGhlbnRpY2F0aW9uFdnrkUAaBGF1dGgaBXRva2VuGhFqd3RhdXRoZW50aWNhdGlvbhoTaXY7cDthdXRoZW50aWNhdGlvbjKZAS9nb3RvP3VybD1DQUVTWndIck96QVZrQkU2eGpOYlF0dFpvRldNS09CSjJ6elZHaElXMWVQd0xUejAzU2E2M0ZrbkM5LU00ZjRFLWY4Vm0xZXRucVVWY295Qnc4c0pPR3BYMXkxNGExRGJfREtZYkUtR2xWSlZYbjhrZjlTRHp0NXBxUWRIbjZma0hLYmZYSGN2NVg3b0dxRTpHPGI-QXV0aGVudGljYXRpb248L2I-IHwgPGI-TmVzdEpTPC9iPiAtIEEgcHJvZ3Jlc3NpdmUgTm9kZS5qcyBmcmFtZXdvcmtCqgE8Yj5DbGllbnRzIHN0YXJ0IGJ5IGF1dGhlbnRpY2F0aW5nIHdpdGggYSB1c2VybmFtZSBhbmQgcGFzc3dvcmQ8L2I-LiBPbmNlIGF1dGhlbnRpY2F0ZWQsIHRoZSBzZXJ2ZXIgaXNzdWVzIGEgSldULCB3aGljaCB0aGUgY2xpZW50IHNlbmRzIGFzIGEgYmVhcmVyIHRva2VuIGluIHRoZSZuYnNwOy4uLiICEAFIAFgAaAA",
      "source": "NestJS",
      "read_more_link": "https://docs.nestjs.com/security/authentication#:~:text=Clients%20start%20by%20authenticating%20with,subsequent%20requests%20to%20prove%20authentication."
    },
    {
      "position": 2,
      "title": "NestJS Authentication Guide 2026 - JWT, Passport & Guards",
      "link": "https://encore.dev/articles/nestjs-authentication-guide",
      "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=CAESbwHrOzAV5a97mgtiaRr16_em5K5Ersl_5Zdae20WJ_q-DLc3rspzgZtnorT1reRqg2xWMbkROJXNVDKenj5oOHUjvVZGkBydKRCm1c-3GCG68wYeT8pxHcxAH0gu-OSfRIolmWjMa1c4wGeqRX__dw&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQFnoECBQQAQ&uoh=1",
      "displayed_link": "https://encore.dev › articles › nestjs-authentication-guide",
      "date": "Apr 19, 2026",
      "snippet": "This guide walks through what NestJS gives you, how to wire up JWT and Passport correctly, and where teams typically get stuck.",
      "snippet_highlighted_words": [
        "how to wire up JWT and Passport correctly"
      ],
      "about_this_result": {
        "source": {
          "description": "This guide walks through what NestJS gives you, how to wire up JWT and Passport correctly, and where teams typically get stuck.",
          "source_info_link": "https://encore.dev/articles/nestjs-authentication-guide",
          "icon": "https://serpapi.com/images/i/UklGRrAAAABXRUJQVlA4IKQAAABQBACdASocABwAPtE-tFooIigoFAEAGglnAADq5lrifGYRn7HV0YXAMh1gAP78pdSVG_pVJu34qrfdBRX8grEz5jtcfLH8VSZL68eZgMiMS3O_opGtu_nnVQveoQFlBmoz7ZDVwQS5GAOSe1zT7_WphkbOW8wRqNPKbz681OIUzCOuCIMTJaawH-3PsKssuABeNVVnoi8ZyEvynSc_C3j58oAAAA.webp"
        },
        "languages": ["en"],
        "regions": ["US"]
      },
      "about_page_link": "https://www.google.com/search/about-this-result?origin=www.google.com&req=CqQBL2dvdG8_dXJsPUNBRVNid0hyT3pBVjVhOTdtZ3RpYVJyMTZfZW01SzVFcnNsXzVaZGFlMjBXSl9xLURMYzNyc3B6Z1p0bm9yVDFyZVJxZzJ4V01ia1JPSlhOVkRLZW5qNW9PSFVqdlZaR2tCeWRLUkNtMWMtM0dDRzY4d1llVDhweEhjeEFIMGd1LU9TZlJJb2xtV2pNYTFjNHdHZXFSWF9fZHcSBBoCCAAaugQSABoAIgAqADIGCAMSAnVzOgBCBAgBEABKAFoAcgB6AIJAlgQIABAAGAAgACoaCgZuZXN0anMVfHG_QBoLaXY7cDtuZXN0anMqJwoDand0FfFmpEAaEWp3dGF1dGhlbnRpY2F0aW9uGghpdjtwO2p3dCpKCg5hdXRoZW50aWNhdGlvbhUIg6hAGgRhdXRoGgV0b2tlbhoRand0YXV0aGVudGljYXRpb24aE2l2O3A7YXV0aGVudGljYXRpb24ypAEvZ290bz91cmw9Q0FFU2J3SHJPekFWNWE5N21ndGlhUnIxNl9lbTVLNUVyc2xfNVpkYWUyMFdKX3EtRExjM3JzcHpnWnRub3JUMXJlUnFnMnhXTWJrUk9KWE5WREtlbmo1b09IVWp2VlpHa0J5ZEtSQ20xYy0zR0NHNjh3WWVUOHB4SGN4QUgwZ3UtT1NmUklvbG1Xak1hMWM0d0dlcVJYX19kdzpLPGI-TmVzdEpTIEF1dGhlbnRpY2F0aW9uPC9iPiBHdWlkZSAyMDI2IC0gPGI-SldUPC9iPiwgUGFzc3BvcnQgJmFtcDsgR3VhcmRzQoYBVGhpcyBndWlkZSB3YWxrcyB0aHJvdWdoIHdoYXQgTmVzdEpTIGdpdmVzIHlvdSwgPGI-aG93IHRvIHdpcmUgdXAgSldUIGFuZCBQYXNzcG9ydCBjb3JyZWN0bHk8L2I-LCBhbmQgd2hlcmUgdGVhbXMgdHlwaWNhbGx5IGdldCBzdHVjay4iAhABSABYAGgA",
      "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&req_token=CqQBL2dvdG8_dXJsPUNBRVNid0hyT3pBVjVhOTdtZ3RpYVJyMTZfZW01SzVFcnNsXzVaZGFlMjBXSl9xLURMYzNyc3B6Z1p0bm9yVDFyZVJxZzJ4V01ia1JPSlhOVkRLZW5qNW9PSFVqdlZaR2tCeWRLUkNtMWMtM0dDRzY4d1llVDhweEhjeEFIMGd1LU9TZlJJb2xtV2pNYTFjNHdHZXFSWF9fZHcSBBoCCAAaugQSABoAIgAqADIGCAMSAnVzOgBCBAgBEABKAFoAcgB6AIJAlgQIABAAGAAgACoaCgZuZXN0anMVfHG_QBoLaXY7cDtuZXN0anMqJwoDand0FfFmpEAaEWp3dGF1dGhlbnRpY2F0aW9uGghpdjtwO2p3dCpKCg5hdXRoZW50aWNhdGlvbhUIg6hAGgRhdXRoGgV0b2tlbhoRand0YXV0aGVudGljYXRpb24aE2l2O3A7YXV0aGVudGljYXRpb24ypAEvZ290bz91cmw9Q0FFU2J3SHJPekFWNWE5N21ndGlhUnIxNl9lbTVLNUVyc2xfNVpkYWUyMFdKX3EtRExjM3JzcHpnWnRub3JUMXJlUnFnMnhXTWJrUk9KWE5WREtlbmo1b09IVWp2VlpHa0J5ZEtSQ20xYy0zR0NHNjh3WWVUOHB4SGN4QUgwZ3UtT1NmUklvbG1Xak1hMWM0d0dlcVJYX19kdzpLPGI-TmVzdEpTIEF1dGhlbnRpY2F0aW9uPC9iPiBHdWlkZSAyMDI2IC0gPGI-SldUPC9iPiwgUGFzc3BvcnQgJmFtcDsgR3VhcmRzQoYBVGhpcyBndWlkZSB3YWxrcyB0aHJvdWdoIHdoYXQgTmVzdEpTIGdpdmVzIHlvdSwgPGI-aG93IHRvIHdpcmUgdXAgSldUIGFuZCBQYXNzcG9ydCBjb3JyZWN0bHk8L2I-LCBhbmQgd2hlcmUgdGVhbXMgdHlwaWNhbGx5IGdldCBzdHVjay4iAhABSABYAGgA",
      "source": "encore.dev"
    },
    {
      "position": 3,
      "title": "Integrating JWT for Authentication in NestJS",
      "link": "https://codesignal.com/learn/courses/securing-your-nestjs-app/lessons/integrating-jwt-for-authentication-in-nestjs",
      "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=CAESqgEB6zswFXGdthh8_OaW__FDvov6cEx7R_EoMQi107DcbUHDVxC-Ik7undDSopj9PyMJi_f90zQhQX1PHCp3tRCW058BNFlSP_mpEirdu62j8kjEDP-4kYqQdiNYHTOyfECPLqTYi8HWf891hSSsHBjJvfPAanKQSdSiD5uLXHwrHXFuArDfY95g2E0mp8yw_87eFe62uLoIZLUh6XiLyNa9gG8eJ3LWcooHBQ&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQFnoECBIQAQ&uoh=1",
      "displayed_link": "https://codesignal.com › learn › courses › lessons › inte...",
      "snippet": "In this lesson, we explored how to integrate JSON Web Tokens (JWT) for authentication in a NestJS application. WT (JSON Web Tokens)",
      "snippet_highlighted_words": [
        "how to integrate JSON Web Tokens (JWT) for authentication"
      ],
      "about_this_result": {
        "source": {
          "description": "In this lesson, we explored how to integrate JSON Web Tokens (JWT) for authentication in a NestJS application. WT (JSON Web Tokens)",
          "source_info_link": "https://codesignal.com/learn/courses/securing-your-nestjs-app/lessons/integrating-jwt-for-authentication-in-nestjs",
          "icon": "https://serpapi.com/images/i/UklGRhoBAABXRUJQVlA4IA4BAABwBgCdASocABwAPtEutFooIagoGAEAGglsAJ0yhHmYgWoC7YN5fIiwVqT3D3-d6Zta0m0ddjekcEJeYwAA_abvDsVvtWsceUMeI4gidbcwLsM04tO-gbfYS2i2A_pJtOSFjRK_cHEcrKX2Gsubz5YyLN__xIcu-YixgHA8eovz9ahn4n6GDPn7kfSGica4L93YbA0u7uxjSQH-_hYa30J7Z-clPisu8NY_cBHSMFrHXMIMvHbtnYpieaZ7SemHtXahIZZ93F41N79q2Mo_-2-976qRkiF_SQbenva5mwe7WLRmOlHw7tt7rIWcqjeT1rnqvMOnc2HWL1DYAdU6rVF7bet0kJcU6c4Wy0j1AAA.webp"
        },
        "languages": ["en"],
        "regions": ["US"]
      },
      "about_page_link": "https://www.google.com/search/about-this-result?origin=www.google.com&req=CvQBL2dvdG8_dXJsPUNBRVNxZ0VCNnpzd0ZYR2R0aGg4X09hV19fRkR2b3Y2Y0V4N1JfRW9NUWkxMDdEY2JVSERWeEMtSWs3dW5kRFNvcGo5UHlNSmlfZjkwelFoUVgxUEhDcDN0UkNXMDU4Qk5GbFNQX21wRWlyZHU2Mmo4a2pFRFAtNGtZcVFkaU5ZSFRPeWZFQ1BMcVRZaThIV2Y4OTFoU1NzSEJqSnZmUEFhbktRU2RTaUQ1dUxYSHdySFhGdUFyRGZZOTVnMkUwbXA4eXdfODdlRmU2MnVMb0laTFVoNlhpTHlOYTlnRzhlSjNMV2Nvb0hCURIEGgIIABqXBRIAGgAiACoAMgYIAxICdXM6AEIECAEQAEoAWgByAHoAgkDzBAgAEAAYACAAKhoKBm5lc3RqcxVEcrJAGgtpdjtwO25lc3RqcyonCgNqd3QVGpnFQBoRand0YXV0aGVudGljYXRpb24aCGl2O3A7and0KkoKDmF1dGhlbnRpY2F0aW9uFQD9p0AaBGF1dGgaBXRva2VuGhFqd3RhdXRoZW50aWNhdGlvbhoTaXY7cDthdXRoZW50aWNhdGlvbjL0AS9nb3RvP3VybD1DQUVTcWdFQjZ6c3dGWEdkdGhoOF9PYVdfX0ZEdm92NmNFeDdSX0VvTVFpMTA3RGNiVUhEVnhDLUlrN3VuZERTb3BqOVB5TUppX2Y5MHpRaFFYMVBIQ3AzdFJDVzA1OEJORmxTUF9tcEVpcmR1NjJqOGtqRURQLTRrWXFRZGlOWUhUT3lmRUNQTHFUWWk4SFdmODkxaFNTc0hCakp2ZlBBYW5LUVNkU2lENXVMWEh3ckhYRnVBckRmWTk1ZzJFMG1wOHl3Xzg3ZUZlNjJ1TG9JWkxVaDZYaUx5TmE5Z0c4ZUozTFdjb29IQlE6VEludGVncmF0aW5nIDxiPkpXVDwvYj4gZm9yIDxiPkF1dGhlbnRpY2F0aW9uPC9iPiBpbiA8Yj5OZXN0SlM8L2I-IHwgQ29kZVNpZ25hbCBMZWFybkKKAUluIHRoaXMgbGVzc29uLCB3ZSBleHBsb3JlZCA8Yj5ob3cgdG8gaW50ZWdyYXRlIEpTT04gV2ViIFRva2VucyAoSldUKSBmb3IgYXV0aGVudGljYXRpb248L2I-IGluIGEgTmVzdEpTIGFwcGxpY2F0aW9uLiBXVCAoSlNPTiBXZWIgVG9rZW5zKSICEAFIAFgAaAA",
      "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&req_token=CvQBL2dvdG8_dXJsPUNBRVNxZ0VCNnpzd0ZYR2R0aGg4X09hV19fRkR2b3Y2Y0V4N1JfRW9NUWkxMDdEY2JVSERWeEMtSWs3dW5kRFNvcGo5UHlNSmlfZjkwelFoUVgxUEhDcDN0UkNXMDU4Qk5GbFNQX21wRWlyZHU2Mmo4a2pFRFAtNGtZcVFkaU5ZSFRPeWZFQ1BMcVRZaThIV2Y4OTFoU1NzSEJqSnZmUEFhbktRU2RTaUQ1dUxYSHdySFhGdUFyRGZZOTVnMkUwbXA4eXdfODdlRmU2MnVMb0laTFVoNlhpTHlOYTlnRzhlSjNMV2Nvb0hCURIEGgIIABqXBRIAGgAiACoAMgYIAxICdXM6AEIECAEQAEoAWgByAHoAgkDzBAgAEAAYACAAKhoKBm5lc3RqcxVEcrJAGgtpdjtwO25lc3RqcyonCgNqd3QVGpnFQBoRand0YXV0aGVudGljYXRpb24aCGl2O3A7and0KkoKDmF1dGhlbnRpY2F0aW9uFQD9p0AaBGF1dGgaBXRva2VuGhFqd3RhdXRoZW50aWNhdGlvbhoTaXY7cDthdXRoZW50aWNhdGlvbjL0AS9nb3RvP3VybD1DQUVTcWdFQjZ6c3dGWEdkdGhoOF9PYVdfX0ZEdm92NmNFeDdSX0VvTVFpMTA3RGNiVUhEVnhDLUlrN3VuZERTb3BqOVB5TUppX2Y5MHpRaFFYMVBIQ3AzdFJDVzA1OEJORmxTUF9tcEVpcmR1NjJqOGtqRURQLTRrWXFRZGlOWUhUT3lmRUNQTHFUWWk4SFdmODkxaFNTc0hCakp2ZlBBYW5LUVNkU2lENXVMWEh3ckhYRnVBckRmWTk1ZzJFMG1wOHl3Xzg3ZUZlNjJ1TG9JWkxVaDZYaUx5TmE5Z0c4ZUozTFdjb29IQlE6VEludGVncmF0aW5nIDxiPkpXVDwvYj4gZm9yIDxiPkF1dGhlbnRpY2F0aW9uPC9iPiBpbiA8Yj5OZXN0SlM8L2I-IHwgQ29kZVNpZ25hbCBMZWFybkKKAUluIHRoaXMgbGVzc29uLCB3ZSBleHBsb3JlZCA8Yj5ob3cgdG8gaW50ZWdyYXRlIEpTT04gV2ViIFRva2VucyAoSldUKSBmb3IgYXV0aGVudGljYXRpb248L2I-IGluIGEgTmVzdEpTIGFwcGxpY2F0aW9uLiBXVCAoSlNPTiBXZWIgVG9rZW5zKSICEAFIAFgAaAA",
      "source": "CodeSignal"
    },
    {
      "position": 4,
      "title": "(NestJS-9)Authentication in NestJS with JWT - Bhargava Chary",
      "link": "https://bhargavacharyb.medium.com/nestjs-9-authentication-and-authorization-in-nestjs-with-jwt-and-cookies-a-practical-eb89221db927",
      "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=CAESvAEB6zswFaexgjSc3crFdB4RzQ5eJN1Y7jQCO5KHoHWvT0VANdOL0cQyQXGAcZktYM66Vfi7WB1bZFpkIRjYxCkaCMNIMURQRROf9r_ZJP8q-xj9JbhuOWNfMGOf0D5YvduCXml8BPjzjONFfnwvkwQZ0wivjE3bvePoCx-iXX1RY09gLnC3yT_8rd1fUIfQQILQZAkhO_rm5saIv6QUMn9dpB79qklhN1fEIUa-GyqZhEmZIh4P_7RJa0x-gA&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQFnoECBYQAQ&uoh=1",
      "displayed_link": "10+ likes · 1 year ago",
      "snippet": "In this article, we'll walk you through setting up authentication and authorization in NestJS using JWT (JSON Web Token) for session management ...",
      "snippet_highlighted_words": [
        "setting up authentication and authorization in NestJS using JWT"
      ],
      "about_this_result": {
        "source": {
          "description": "In this article, we'll walk you through setting up authentication and authorization in NestJS using JWT (JSON Web Token) for session management ...",
          "source_info_link": "https://bhargavacharyb.medium.com/nestjs-9-authentication-and-authorization-in-nestjs-with-jwt-and-cookies-a-practical-eb89221db927",
          "icon": "https://serpapi.com/images/i/UklGRk4BAABXRUJQVlA4IEIBAABQBwCdASocABwAPtEytFooIigoGAEAGglpAAznf1Vcxech6G_5Hqq9U30AP1mGqvqdUgmnZ4poKzlLrvAx4-Mst8AAAP7CCyYY03O28r5JLioHtbFiVFHnCJyb2nNCBNRW56SV-XlrfT7Q3tRrlur0xQidpwCAO83snjRUs4X8b4Vd29vh5FZY0ANnK5gA7UA4K8ogU94vGfbJKfPsedJPrrnbqSsGt4cVKmMg9gk3bc-IvDOh_3W7s9bYtT-jv2vzP7YBkzzvo38BMP0T5w-2nGchsxdZJ7p07VcBr7iyjWnewYq1_h32TqlV751Dr3L7qdpfQi7DjV3S_YvIb08XwjDmGVhfc871zz-7kEket3qOqhOkfPVdCTnyCcO29XitwYDfKoDwpCklX7VO65n-8y2Pa_-Mz7rzPAFFzF7oAAAA.webp"
        },
        "languages": ["en"],
        "regions": ["US"]
      },
      "about_page_link": "https://www.google.com/search/about-this-result?origin=www.google.com&req=CowCL2dvdG8_dXJsPUNBRVN2QUVCNnpzd0ZhZXhnalNjM2NyRmRCNFJ6UTVlSk4xWTdqUUNPNUtIb0hXdlQwVkFOZE9MMGNReVFYR0FjWmt0WU02NlZmaTdXQjFiWkZwa0lSall4Q2thQ01OSU1VUlFSUk9mOXJfWkpQOHEteGo5SmJodU9XTmZNR09mMEQ1WXZkdUNYbWw4QlBqempPTkZmbnd2a3dRWjB3aXZqRTNidmVQb0N4LWlYWDFSWTA5Z0xuQzN5VF84cmQxZlVJZlFRSUxRWkFraE9fcm01c2FJdjZRVU1uOWRwQjc5cWtsaE4xZkVJVWEtR3lxWmhFbVpJaDRQXzdSSmEweC1nQRIEGgIIABrMBRIAGgAiACoAMgYIAxICdXM6AEIECAEQAEoAWgByAHoAgkCoBQgAEAAYACAAKhoKBm5lc3RqcxWcGrBAGgtpdjtwO25lc3RqcyonCgNqd3QVBn2mQBoRand0YXV0aGVudGljYXRpb24aCGl2O3A7and0KkoKDmF1dGhlbnRpY2F0aW9uFWqEtkAaBGF1dGgaBXRva2VuGhFqd3RhdXRoZW50aWNhdGlvbhoTaXY7cDthdXRoZW50aWNhdGlvbjKMAi9nb3RvP3VybD1DQUVTdkFFQjZ6c3dGYWV4Z2pTYzNjckZkQjRSelE1ZUpOMVk3alFDTzVLSG9IV3ZUMFZBTmRPTDBjUXlRWEdBY1prdFlNNjZWZmk3V0IxYlpGcGtJUmpZeENrYUNNTklNVVJRUlJPZjlyX1pKUDhxLXhqOUpiaHVPV05mTUdPZjBENVl2ZHVDWG1sOEJQanpqT05GZm53dmt3UVowd2l2akUzYnZlUG9DeC1pWFgxUlkwOWdMbkMzeVRfOHJkMWZVSWZRUUlMUVpBa2hPX3JtNXNhSXY2UVVNbjlkcEI3OXFrbGhOMWZFSVVhLUd5cVpoRW1aSWg0UF83UkphMHgtZ0E6WCg8Yj5OZXN0SlM8L2I-LTkpPGI-QXV0aGVudGljYXRpb248L2I-IGluIDxiPk5lc3RKUzwvYj4gd2l0aCA8Yj5KV1Q8L2I-IC0gQmhhcmdhdmEgQ2hhcnlCowFJbiB0aGlzIGFydGljbGUsIHdlJiMzOTtsbCB3YWxrIHlvdSB0aHJvdWdoIDxiPnNldHRpbmcgdXAgYXV0aGVudGljYXRpb24gYW5kIGF1dGhvcml6YXRpb24gaW4gTmVzdEpTIHVzaW5nIEpXVDwvYj4gKEpTT04gV2ViIFRva2VuKSBmb3Igc2Vzc2lvbiBtYW5hZ2VtZW50Jm5ic3A7Li4uIgIQAUgAWABoAA",
      "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&req_token=CowCL2dvdG8_dXJsPUNBRVN2QUVCNnpzd0ZhZXhnalNjM2NyRmRCNFJ6UTVlSk4xWTdqUUNPNUtIb0hXdlQwVkFOZE9MMGNReVFYR0FjWmt0WU02NlZmaTdXQjFiWkZwa0lSall4Q2thQ01OSU1VUlFSUk9mOXJfWkpQOHEteGo5SmJodU9XTmZNR09mMEQ1WXZkdUNYbWw4QlBqempPTkZmbnd2a3dRWjB3aXZqRTNidmVQb0N4LWlYWDFSWTA5Z0xuQzN5VF84cmQxZlVJZlFRSUxRWkFraE9fcm01c2FJdjZRVU1uOWRwQjc5cWtsaE4xZkVJVWEtR3lxWmhFbVpJaDRQXzdSSmEweC1nQRIEGgIIABrMBRIAGgAiACoAMgYIAxICdXM6AEIECAEQAEoAWgByAHoAgkCoBQgAEAAYACAAKhoKBm5lc3RqcxWcGrBAGgtpdjtwO25lc3RqcyonCgNqd3QVBn2mQBoRand0YXV0aGVudGljYXRpb24aCGl2O3A7and0KkoKDmF1dGhlbnRpY2F0aW9uFWqEtkAaBGF1dGgaBXRva2VuGhFqd3RhdXRoZW50aWNhdGlvbhoTaXY7cDthdXRoZW50aWNhdGlvbjKMAi9nb3RvP3VybD1DQUVTdkFFQjZ6c3dGYWV4Z2pTYzNjckZkQjRSelE1ZUpOMVk3alFDTzVLSG9IV3ZUMFZBTmRPTDBjUXlRWEdBY1prdFlNNjZWZmk3V0IxYlpGcGtJUmpZeENrYUNNTklNVVJRUlJPZjlyX1pKUDhxLXhqOUpiaHVPV05mTUdPZjBENVl2ZHVDWG1sOEJQanpqT05GZm53dmt3UVowd2l2akUzYnZlUG9DeC1pWFgxUlkwOWdMbkMzeVRfOHJkMWZVSWZRUUlMUVpBa2hPX3JtNXNhSXY2UVVNbjlkcEI3OXFrbGhOMWZFSVVhLUd5cVpoRW1aSWg0UF83UkphMHgtZ0E6WCg8Yj5OZXN0SlM8L2I-LTkpPGI-QXV0aGVudGljYXRpb248L2I-IGluIDxiPk5lc3RKUzwvYj4gd2l0aCA8Yj5KV1Q8L2I-IC0gQmhhcmdhdmEgQ2hhcnlCowFJbiB0aGlzIGFydGljbGUsIHdlJiMzOTtsbCB3YWxrIHlvdSB0aHJvdWdoIDxiPnNldHRpbmcgdXAgYXV0aGVudGljYXRpb24gYW5kIGF1dGhvcml6YXRpb24gaW4gTmVzdEpTIHVzaW5nIEpXVDwvYj4gKEpTT04gV2ViIFRva2VuKSBmb3Igc2Vzc2lvbiBtYW5hZ2VtZW50Jm5ic3A7Li4uIgIQAUgAWABoAA",
      "source": "Medium · Bhargava Chary"
    },
    {
      "position": 5,
      "title": "passport | NestJS - A progressive Node.js framework",
      "link": "https://docs.nestjs.com/recipes/passport",
      "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=CAESYAHrOzAV0vJwbVJZzVV6aaFVNZKBV-Y7lXbvtJOkwoc51wMfliIKa47Rf8h4yGfhfHovmaSqrNC1YVg_nH9eEK9J1coJPwIXGfGmYWfGwr1mN_NAZ8t3aZBaBVmTlRJRVg&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQFnoECBsQAQ&uoh=1",
      "displayed_link": "https://docs.nestjs.com › recipes › passport",
      "snippet": "Passport checks the JWT's expiration time automatically, so your application doesn't have to. This completes our JWT authentication implementation.",
      "snippet_highlighted_words": [
        "Passport checks the JWT's expiration time automatically"
      ],
      "about_this_result": {
        "source": {
          "description": "Passport checks the JWT's expiration time automatically, so your application doesn't have to. This completes our JWT authentication implementation.",
          "source_info_link": "https://docs.nestjs.com/recipes/passport",
          "icon": "https://serpapi.com/images/i/iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y-mAAAALVBMVEVHcEzgI07gI07gI07gI07gI07gI07gI07gI07gI07gI07gI07gI07gI07gI07NqLYqAAAADnRSTlMAPnr0B1OesxZnx90rjVerX3QAAADJSURBVCiRlZJZDsMgDESNDZglmfsft0BIAgmt1PkAyU94GUP0jyTG8BUqA-Yb9Ciyc8yplGD2Zq-QR2QzJunIZGbwFDsKjKcM9cz5hZAoAnUg92a-BXXRCzLHI1Sf2vfTQ61qQOLIaVG56nDL-iedXDIPOJlo3Q9INBcectZjG5lcDNhK30agF7zcNzWJUwjOrvReeShZ2iY1dGjurNSHzNRXJNbdMJ6OtdtjQK2s285hdp9oIY6urkxWrLXtiO2SeeFlvDk0f_YPq8UTEoYLBHwAAAAASUVORK5CYII.png"
        },
        "languages": ["en"],
        "regions": ["US"]
      },
      "about_page_link": "https://www.google.com/search/about-this-result?origin=www.google.com&req=CpABL2dvdG8_dXJsPUNBRVNZQUhyT3pBVjB2SndiVkpaelZWNmFhRlZOWktCVi1ZN2xYYnZ0Sk9rd29jNTF3TWZsaUlLYTQ3UmY4aDR5R2ZoZkhvdm1hU3FyTkMxWVZnX25IOWVFSzlKMWNvSlB3SVhHZkdtWVdmR3dyMW1OX05BWjh0M2FaQmFCVm1UbFJKUlZnEgQaAggAGrMEEgIIARoAIgAqADIGCAMSAnVzOgBCBAgBEABKAFoAcgB6AIJAjQQIABAAGAAgACoaCgZuZXN0anMV_pPsQBoLaXY7cDtuZXN0anMqJwoDand0FbXk5T8aEWp3dGF1dGhlbnRpY2F0aW9uGghpdjtwO2p3dCpKCg5hdXRoZW50aWNhdGlvbhWDC_M_GgRhdXRoGgV0b2tlbhoRand0YXV0aGVudGljYXRpb24aE2l2O3A7YXV0aGVudGljYXRpb24ykAEvZ290bz91cmw9Q0FFU1lBSHJPekFWMHZKd2JWSlp6VlY2YWFGVk5aS0JWLVk3bFhidnRKT2t3b2M1MXdNZmxpSUthNDdSZjhoNHlHZmhmSG92bWFTcXJOQzFZVmdfbkg5ZUVLOUoxY29KUHdJWEdmR21ZV2ZHd3IxbU5fTkFaOHQzYVpCYUJWbVRsUkpSVmc6OnBhc3Nwb3J0IHwgPGI-TmVzdEpTPC9iPiAtIEEgcHJvZ3Jlc3NpdmUgTm9kZS5qcyBmcmFtZXdvcmtCogE8Yj5QYXNzcG9ydCBjaGVja3MgdGhlIEpXVCYjMzk7cyBleHBpcmF0aW9uIHRpbWUgYXV0b21hdGljYWxseTwvYj4sIHNvIHlvdXIgYXBwbGljYXRpb24gZG9lc24mIzM5O3QgaGF2ZSB0by4gVGhpcyBjb21wbGV0ZXMgb3VyIEpXVCBhdXRoZW50aWNhdGlvbiBpbXBsZW1lbnRhdGlvbi4iAhABSABYAGgA",
      "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&req_token=CpABL2dvdG8_dXJsPUNBRVNZQUhyT3pBVjB2SndiVkpaelZWNmFhRlZOWktCVi1ZN2xYYnZ0Sk9rd29jNTF3TWZsaUlLYTQ3UmY4aDR5R2ZoZkhvdm1hU3FyTkMxWVZnX25IOWVFSzlKMWNvSlB3SVhHZkdtWVdmR3dyMW1OX05BWjh0M2FaQmFCVm1UbFJKUlZnEgQaAggAGrMEEgIIARoAIgAqADIGCAMSAnVzOgBCBAgBEABKAFoAcgB6AIJAjQQIABAAGAAgACoaCgZuZXN0anMV_pPsQBoLaXY7cDtuZXN0anMqJwoDand0FbXk5T8aEWp3dGF1dGhlbnRpY2F0aW9uGghpdjtwO2p3dCpKCg5hdXRoZW50aWNhdGlvbhWDC_M_GgRhdXRoGgV0b2tlbhoRand0YXV0aGVudGljYXRpb24aE2l2O3A7YXV0aGVudGljYXRpb24ykAEvZ290bz91cmw9Q0FFU1lBSHJPekFWMHZKd2JWSlp6VlY2YWFGVk5aS0JWLVk3bFhidnRKT2t3b2M1MXdNZmxpSUthNDdSZjhoNHlHZmhmSG92bWFTcXJOQzFZVmdfbkg5ZUVLOUoxY29KUHdJWEdmR21ZV2ZHd3IxbU5fTkFaOHQzYVpCYUJWbVRsUkpSVmc6OnBhc3Nwb3J0IHwgPGI-TmVzdEpTPC9iPiAtIEEgcHJvZ3Jlc3NpdmUgTm9kZS5qcyBmcmFtZXdvcmtCogE8Yj5QYXNzcG9ydCBjaGVja3MgdGhlIEpXVCYjMzk7cyBleHBpcmF0aW9uIHRpbWUgYXV0b21hdGljYWxseTwvYj4sIHNvIHlvdXIgYXBwbGljYXRpb24gZG9lc24mIzM5O3QgaGF2ZSB0by4gVGhpcyBjb21wbGV0ZXMgb3VyIEpXVCBhdXRoZW50aWNhdGlvbiBpbXBsZW1lbnRhdGlvbi4iAhABSABYAGgA",
      "source": "NestJS",
      "read_more_link": "https://docs.nestjs.com/recipes/passport#:~:text=Passport%20checks%20the%20JWT's%20expiration,completes%20our%20JWT%20authentication%20implementation."
    },
    {
      "position": 6,
      "title": "How to Add JWT-Based Authentication in NestJS",
      "link": "https://www.freecodecamp.org/news/how-to-add-jwt-based-authentication-in-nest-js/",
      "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=CAESiQEB6zswFd5dGEvHa3g1JSqr-DXBtlAIH8LoJaNqbqzq2W8DdCfZfM6cfsaPk4zXqeyNicJf4K8jwfqz2WBOdMLlesv3cOP53UI3VpyeZe60uuvn_vLtsUmSze2GjOXMP9lcOg5uVvUS-DGykubJOLSAnU_B43Fkw0jP4GRM3dB4Wx5nOBDZ8XiZ4Q&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQFnoECBAQAQ&uoh=1",
      "displayed_link": "https://www.freecodecamp.org › news › how-to-add-jw...",
      "date": "Jul 31, 2024",
      "snippet": "This tutorial will guide you through building a JWT-based user authentication in NestJS and MongoDb. NestJS is a powerful Node.js framework for ...",
      "snippet_highlighted_words": ["JWT-based user authentication in NestJS"],
      "about_this_result": {
        "source": {
          "description": "This tutorial will guide you through building a JWT-based user authentication in NestJS and MongoDb. NestJS is a powerful Node.js framework for ...",
          "source_info_link": "https://www.freecodecamp.org/news/how-to-add-jwt-based-authentication-in-nest-js/",
          "icon": "https://serpapi.com/images/i/UklGRi4BAABXRUJQVlA4ICIBAABwBgCdASocABwAPtFAtFooIqgoFAEAGgllAL3U88txLNo9AagAHYLWFoNPPqVvqec8dAdsVG9KvrBFIuAA_vVrVpvAe0f4hUL8M0rI-gVAafy7GLEHhs7uno0NREFqQY3JQ9u_B2ptSXGDL-P18r8MAZJ5i9K8LPk9tkPdT4E05fmrUgHApCzZIK6AAyYVzOpHRjKCeT_-g37Ir75bIwQ0xO9_-ugW8XpAESnfJIiw_-QG2xOSo8vjRa12x34P0O0AtrlvP8OcaRl8_-21BfAzgYvnC8_38fqOM4Nt_nKEn023vQgCHp1CnS2d4r_vL8t_Z3X0fQ0F9MR5__hJcLgifDxuKE9yIjN_MV792xfoamKrPHf77ewE90QytE36vAAAAA.webp"
        },
        "languages": ["en"],
        "regions": ["US"]
      },
      "about_page_link": "https://www.google.com/search/about-this-result?origin=www.google.com&req=CsgBL2dvdG8_dXJsPUNBRVNpUUVCNnpzd0ZkNWRHRXZIYTNnMUpTcXItRFhCdGxBSUg4TG9KYU5xYnF6cTJXOERkQ2ZaZk02Y2ZzYVBrNHpYcWV5TmljSmY0Szhqd2ZxejJXQk9kTUxsZXN2M2NPUDUzVUkzVnB5ZVplNjB1dXZuX3ZMdHNVbVN6ZTJHak9YTVA5bGNPZzV1VnZVUy1ER3lrdWJKT0xTQW5VX0I0M0ZrdzBqUDRHUk0zZEI0V3g1bk9CRFo4WGlaNFESBBoCCAAa8AQSAggAGgAiACoAMgYIAhICdXM6AEIECAEQAEoAWgByAHoAgkDKBAgAEAAYACAAKhoKBm5lc3RqcxVevaNAGgtpdjtwO25lc3RqcyonCgNqd3QVErudQBoRand0YXV0aGVudGljYXRpb24aCGl2O3A7and0KkoKDmF1dGhlbnRpY2F0aW9uFRQPsUAaBGF1dGgaBXRva2VuGhFqd3RhdXRoZW50aWNhdGlvbhoTaXY7cDthdXRoZW50aWNhdGlvbjLIAS9nb3RvP3VybD1DQUVTaVFFQjZ6c3dGZDVkR0V2SGEzZzFKU3FyLURYQnRsQUlIOExvSmFOcWJxenEyVzhEZENmWmZNNmNmc2FQazR6WHFleU5pY0pmNEs4andmcXoyV0JPZE1MbGVzdjNjT1A1M1VJM1ZweWVaZTYwdXV2bl92THRzVW1TemUyR2pPWE1QOWxjT2c1dVZ2VVMtREd5a3ViSk9MU0FuVV9CNDNGa3cwalA0R1JNM2RCNFd4NW5PQkRaOFhpWjRROkJIb3cgdG8gQWRkIDxiPkpXVDwvYj4tQmFzZWQgPGI-QXV0aGVudGljYXRpb248L2I-IGluIDxiPk5lc3RKUzwvYj5CnwFUaGlzIHR1dG9yaWFsIHdpbGwgZ3VpZGUgeW91IHRocm91Z2ggYnVpbGRpbmcgYSA8Yj5KV1QtYmFzZWQgdXNlciBhdXRoZW50aWNhdGlvbiBpbiBOZXN0SlM8L2I-IGFuZCBNb25nb0RiLiBOZXN0SlMgaXMgYSBwb3dlcmZ1bCBOb2RlLmpzIGZyYW1ld29yayBmb3ImbmJzcDsuLi4iAhABSABYAGgA",
      "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&req_token=CsgBL2dvdG8_dXJsPUNBRVNpUUVCNnpzd0ZkNWRHRXZIYTNnMUpTcXItRFhCdGxBSUg4TG9KYU5xYnF6cTJXOERkQ2ZaZk02Y2ZzYVBrNHpYcWV5TmljSmY0Szhqd2ZxejJXQk9kTUxsZXN2M2NPUDUzVUkzVnB5ZVplNjB1dXZuX3ZMdHNVbVN6ZTJHak9YTVA5bGNPZzV1VnZVUy1ER3lrdWJKT0xTQW5VX0I0M0ZrdzBqUDRHUk0zZEI0V3g1bk9CRFo4WGlaNFESBBoCCAAa8AQSAggAGgAiACoAMgYIAhICdXM6AEIECAEQAEoAWgByAHoAgkDKBAgAEAAYACAAKhoKBm5lc3RqcxVevaNAGgtpdjtwO25lc3RqcyonCgNqd3QVErudQBoRand0YXV0aGVudGljYXRpb24aCGl2O3A7and0KkoKDmF1dGhlbnRpY2F0aW9uFRQPsUAaBGF1dGgaBXRva2VuGhFqd3RhdXRoZW50aWNhdGlvbhoTaXY7cDthdXRoZW50aWNhdGlvbjLIAS9nb3RvP3VybD1DQUVTaVFFQjZ6c3dGZDVkR0V2SGEzZzFKU3FyLURYQnRsQUlIOExvSmFOcWJxenEyVzhEZENmWmZNNmNmc2FQazR6WHFleU5pY0pmNEs4andmcXoyV0JPZE1MbGVzdjNjT1A1M1VJM1ZweWVaZTYwdXV2bl92THRzVW1TemUyR2pPWE1QOWxjT2c1dVZ2VVMtREd5a3ViSk9MU0FuVV9CNDNGa3cwalA0R1JNM2RCNFd4NW5PQkRaOFhpWjRROkJIb3cgdG8gQWRkIDxiPkpXVDwvYj4tQmFzZWQgPGI-QXV0aGVudGljYXRpb248L2I-IGluIDxiPk5lc3RKUzwvYj5CnwFUaGlzIHR1dG9yaWFsIHdpbGwgZ3VpZGUgeW91IHRocm91Z2ggYnVpbGRpbmcgYSA8Yj5KV1QtYmFzZWQgdXNlciBhdXRoZW50aWNhdGlvbiBpbiBOZXN0SlM8L2I-IGFuZCBNb25nb0RiLiBOZXN0SlMgaXMgYSBwb3dlcmZ1bCBOb2RlLmpzIGZyYW1ld29yayBmb3ImbmJzcDsuLi4iAhABSABYAGgA",
      "source": "freeCodeCamp"
    },
    {
      "position": 7,
      "title": "Authentication and Authorization in NestJS Using JWT",
      "link": "https://www.devcentrehouse.eu/blogs/authentication-in-nestjs-using-jwt/",
      "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=CAESfwHrOzAVrcsML1ipuz1Own9rpDIrsJo8y0_eKlm1f7k2rVdWUZ9g2chtf1QnInrqKYqLb1GnzJResM-dqMoonFe4BhyVPe7oac2FDXHJej8_GOkAOrjF65qeOlYsS_IFVIoxQ6d-26jVbIiE-Jodn67GIQsJpa1NQOpvxwRGI_M&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQFnoECBEQAQ&uoh=1",
      "displayed_link": "https://www.devcentrehouse.eu › Home › Blog",
      "date": "Apr 22, 2025",
      "snippet": "Question: What is JWT authentication, and why use it in NestJS? Answer: JWT (JSON Web Token) authentication enables secure, stateless user ...",
      "snippet_highlighted_words": ["JWT (JSON Web Token) authentication"],
      "about_this_result": {
        "source": {
          "description": "Question: What is JWT authentication, and why use it in NestJS? Answer: JWT (JSON Web Token) authentication enables secure, stateless user ...",
          "source_info_link": "https://www.devcentrehouse.eu/blogs/authentication-in-nestjs-using-jwt/",
          "icon": "https://serpapi.com/images/i/UklGRqQBAABXRUJQVlA4IJgBAABQCACdASogACAAPtEutFooIagoGAEAGglpABOY66-sB0DOID6V63NGr6GGcN6W9gjo5p_sXUr6liO4xmxmuPvpS1FjMUoCGBQDFAAA_v7DlHlqj7zow1EZ52N2eaT-dje_2m0yX40k_qX2thxS_Rz76vzoCuoFbENNPC2t23Zj5q96u92X-jveS6z7n0xK1g2pI5B7rj7G1_vzV58HiaOGhw0ta0PMHrbkME8dij_7xLAH9qGZcFH0c_liS1HN_mr4_1yjqKri8e6BTfPoC6d8bJqi9Ztudvx-72NJ9oQ-3Q9MEmm3eN4xpkYlmwrra6xQ_uyaJybjUsJ2vp7Fh96Dx4kG3-R4CJeNH_vLpFY2q2cdnuxdGOFQI7-tf19cvJZxcTgcOjYMp3R-GUW_wq2SCJrCsbX6tAvUvILnm78utppwsw62Nt79Dbyxj13WfhQDl0ZXjGqah3rzPWQaolQMf8JWA7HoEu98tbbqQBb8aqh2bl2PN7XWm3Ud4bVC2vrZCgZz8HZXXislso6w1NRWZcQ-72WgAAA.webp"
        },
        "languages": ["en"],
        "regions": ["US"]
      },
      "about_page_link": "https://www.google.com/search/about-this-result?origin=www.google.com&req=CrkBL2dvdG8_dXJsPUNBRVNmd0hyT3pBVnJjc01MMWlwdXoxT3duOXJwRElyc0pvOHkwX2VLbG0xZjdrMnJWZFdVWjlnMmNodGYxUW5JbnJxS1lxTGIxR256SlJlc00tZHFNb29uRmU0Qmh5VlBlN29hYzJGRFhISmVqOF9HT2tBT3JqRjY1cWVPbFlzU19JRlZJb3hRNmQtMjZqVmJJaUUtSm9kbjY3R0lRc0pwYTFOUU9wdnh3UkdJX00SBBoCCAAa4QQSABoAIgAqADIGCAISAnVzOgBCBAgBEABKAFoAcgB6AIJAvQQIABAAGAAgACoaCgZuZXN0anMVhOu7QBoLaXY7cDtuZXN0anMqJwoDand0FRDXx0AaEWp3dGF1dGhlbnRpY2F0aW9uGghpdjtwO2p3dCpKCg5hdXRoZW50aWNhdGlvbhXO98VAGgRhdXRoGgV0b2tlbhoRand0YXV0aGVudGljYXRpb24aE2l2O3A7YXV0aGVudGljYXRpb24yuQEvZ290bz91cmw9Q0FFU2Z3SHJPekFWcmNzTUwxaXB1ejFPd245cnBESXJzSm84eTBfZUtsbTFmN2syclZkV1VaOWcyY2h0ZjFRbklucnFLWXFMYjFHbnpKUmVzTS1kcU1vb25GZTRCaHlWUGU3b2FjMkZEWEhKZWo4X0dPa0FPcmpGNjVxZU9sWXNTX0lGVklveFE2ZC0yNmpWYklpRS1Kb2RuNjdHSVFzSnBhMU5RT3B2eHdSR0lfTTpJPGI-QXV0aGVudGljYXRpb248L2I-IGFuZCBBdXRob3JpemF0aW9uIGluIDxiPk5lc3RKUzwvYj4gVXNpbmcgPGI-SldUPC9iPkKaAVF1ZXN0aW9uOiBXaGF0IGlzIEpXVCBhdXRoZW50aWNhdGlvbiwgYW5kIHdoeSB1c2UgaXQgaW4gTmVzdEpTPyBBbnN3ZXI6IDxiPkpXVCAoSlNPTiBXZWIgVG9rZW4pIGF1dGhlbnRpY2F0aW9uPC9iPiBlbmFibGVzIHNlY3VyZSwgc3RhdGVsZXNzIHVzZXImbmJzcDsuLi4iAhABSABYAGgA",
      "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&req_token=CrkBL2dvdG8_dXJsPUNBRVNmd0hyT3pBVnJjc01MMWlwdXoxT3duOXJwRElyc0pvOHkwX2VLbG0xZjdrMnJWZFdVWjlnMmNodGYxUW5JbnJxS1lxTGIxR256SlJlc00tZHFNb29uRmU0Qmh5VlBlN29hYzJGRFhISmVqOF9HT2tBT3JqRjY1cWVPbFlzU19JRlZJb3hRNmQtMjZqVmJJaUUtSm9kbjY3R0lRc0pwYTFOUU9wdnh3UkdJX00SBBoCCAAa4QQSABoAIgAqADIGCAISAnVzOgBCBAgBEABKAFoAcgB6AIJAvQQIABAAGAAgACoaCgZuZXN0anMVhOu7QBoLaXY7cDtuZXN0anMqJwoDand0FRDXx0AaEWp3dGF1dGhlbnRpY2F0aW9uGghpdjtwO2p3dCpKCg5hdXRoZW50aWNhdGlvbhXO98VAGgRhdXRoGgV0b2tlbhoRand0YXV0aGVudGljYXRpb24aE2l2O3A7YXV0aGVudGljYXRpb24yuQEvZ290bz91cmw9Q0FFU2Z3SHJPekFWcmNzTUwxaXB1ejFPd245cnBESXJzSm84eTBfZUtsbTFmN2syclZkV1VaOWcyY2h0ZjFRbklucnFLWXFMYjFHbnpKUmVzTS1kcU1vb25GZTRCaHlWUGU3b2FjMkZEWEhKZWo4X0dPa0FPcmpGNjVxZU9sWXNTX0lGVklveFE2ZC0yNmpWYklpRS1Kb2RuNjdHSVFzSnBhMU5RT3B2eHdSR0lfTTpJPGI-QXV0aGVudGljYXRpb248L2I-IGFuZCBBdXRob3JpemF0aW9uIGluIDxiPk5lc3RKUzwvYj4gVXNpbmcgPGI-SldUPC9iPkKaAVF1ZXN0aW9uOiBXaGF0IGlzIEpXVCBhdXRoZW50aWNhdGlvbiwgYW5kIHdoeSB1c2UgaXQgaW4gTmVzdEpTPyBBbnN3ZXI6IDxiPkpXVCAoSlNPTiBXZWIgVG9rZW4pIGF1dGhlbnRpY2F0aW9uPC9iPiBlbmFibGVzIHNlY3VyZSwgc3RhdGVsZXNzIHVzZXImbmJzcDsuLi4iAhABSABYAGgA",
      "source": "Dev Centre House",
      "read_more_link": "https://www.devcentrehouse.eu/blogs/authentication-in-nestjs-using-jwt/#:~:text=Question%3A%20What%20is%20JWT%20authentication%2C,stateless%20user%20sessions%20in%20APIs."
    },
    {
      "position": 8,
      "title": "How to Implement Authentication in NestJS with JWT",
      "link": "https://blog.stackademic.com/how-to-implement-authentication-in-nestjs-with-jwt-b941ac20ab6e",
      "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=CAESlAEB6zswFdsihCerQJVL1diqEz8O6hG2rtil5KYQPLOBs6u-lNZ1FD7FfjOvQ1xJ-eKJAQWs7B2xaHMrN1oSMvr7W3VSwn2B8RN5aHfld1Yhxfl2ZVa0rNbv_FHgZXS6pMHXshDGtREFkMwuPzsx7PiakEv6gWfYWH0ouK_fNtOgOZ0KsCLU7R0goZsgZymmdK2O4EMd&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQFnoECEkQAQ&uoh=1",
      "displayed_link": "https://blog.stackademic.com › how-to-implement-auth...",
      "date": "Mar 24, 2025",
      "snippet": "How to Implement Authentication in NestJS with JWT · Step 1: Creating a New NestJS Project · Step 2: Setting Up Database Connection with TypeORM.",
      "snippet_highlighted_words": [
        "How to Implement Authentication in NestJS with JWT"
      ],
      "about_this_result": {
        "source": {
          "description": "How to Implement Authentication in NestJS with JWT · Step 1: Creating a New NestJS Project · Step 2: Setting Up Database Connection with TypeORM.",
          "source_info_link": "https://blog.stackademic.com/how-to-implement-authentication-in-nestjs-with-jwt-b941ac20ab6e",
          "icon": "https://serpapi.com/images/i/UklGRlQBAABXRUJQVlA4IEgBAADQBgCdASocABwAPtEwtFooIigoGAEAGglpAAzq71pc92cX6E9FXqq_sAM0L2JYbbZQyexZs_v-NrvA0U_FIAAA_sIYLXkbXykzt_3YNJ7eCObOzJSJIUK3TNIwx5T5djQFT7ZStkTTvgIhnq40fdJok7BALVaGNolDOeHbSXOIKODioKmP7R3S5LOLlECQO5Y5KdzMij8MDj19HbZ-M-v-xLfqGNYfsL6Imc2b0KTp4gRv9dErc-5NU_V6lufsojo3H16SD-AmH6KIbdenxCT9LrUpLf_I2l63ekMuwGZHXouDM1uGqlEXu4vTxXljUWXhCMi88CHq8DH8v6lFTcrf8RSY8-qSvTqGoip-_2z89tenN2sVinMXPY8brcY_COxeQbm61xg18_j-wboLoZV-zjlNxk7878y-ZJmG1mfD_qy6Ozw3BIAA.webp"
        },
        "languages": ["en"],
        "regions": ["US"]
      },
      "about_page_link": "https://www.google.com/search/about-this-result?origin=www.google.com&req=CtYBL2dvdG8_dXJsPUNBRVNsQUVCNnpzd0Zkc2loQ2VyUUpWTDFkaXFFejhPNmhHMnJ0aWw1S1lRUExPQnM2dS1sTloxRkQ3RmZqT3ZRMXhKLWVLSkFRV3M3QjJ4YUhNck4xb1NNdnI3VzNWU3duMkI4Uk41YUhmbGQxWWh4ZmwyWlZhMHJOYnZfRkhnWlhTNnBNSFhzaERHdFJFRmtNd3VQenN4N1BpYWtFdjZnV2ZZV0gwb3VLX2ZOdE9nT1owS3NDTFU3UjBnb1pzZ1p5bW1kSzJPNEVNZBIEGgIIABqIBRIAGgAiACoAMgYIAxICdXM6AEIECAEQAEoAWgByAHoAgkDkBAgAEAAYACAAKhoKBm5lc3RqcxV5zrdAGgtpdjtwO25lc3RqcyonCgNqd3QVPk-jQBoRand0YXV0aGVudGljYXRpb24aCGl2O3A7and0KkoKDmF1dGhlbnRpY2F0aW9uFcv9nEAaBGF1dGgaBXRva2VuGhFqd3RhdXRoZW50aWNhdGlvbhoTaXY7cDthdXRoZW50aWNhdGlvbjLWAS9nb3RvP3VybD1DQUVTbEFFQjZ6c3dGZHNpaENlclFKVkwxZGlxRXo4TzZoRzJydGlsNUtZUVBMT0JzNnUtbE5aMUZEN0Zmak92UTF4Si1lS0pBUVdzN0IyeGFITXJOMW9TTXZyN1czVlN3bjJCOFJONWFIZmxkMVloeGZsMlpWYTByTmJ2X0ZIZ1pYUzZwTUhYc2hER3RSRUZrTXd1UHpzeDdQaWFrRXY2Z1dmWVdIMG91S19mTnRPZ09aMEtzQ0xVN1IwZ29ac2daeW1tZEsyTzRFTWQ6R0hvdyB0byBJbXBsZW1lbnQgPGI-QXV0aGVudGljYXRpb248L2I-IGluIDxiPk5lc3RKUzwvYj4gd2l0aCA8Yj5KV1Q8L2I-QqYBPGI-SG93IHRvIEltcGxlbWVudCBBdXRoZW50aWNhdGlvbiBpbiBOZXN0SlMgd2l0aCBKV1Q8L2I-ICZtaWRkb3Q7IFN0ZXAgMTogQ3JlYXRpbmcgYSBOZXcgTmVzdEpTIFByb2plY3QgJm1pZGRvdDsgU3RlcCAyOiBTZXR0aW5nIFVwIERhdGFiYXNlIENvbm5lY3Rpb24gd2l0aCBUeXBlT1JNLiICEAFIAFgAaAA",
      "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&req_token=CtYBL2dvdG8_dXJsPUNBRVNsQUVCNnpzd0Zkc2loQ2VyUUpWTDFkaXFFejhPNmhHMnJ0aWw1S1lRUExPQnM2dS1sTloxRkQ3RmZqT3ZRMXhKLWVLSkFRV3M3QjJ4YUhNck4xb1NNdnI3VzNWU3duMkI4Uk41YUhmbGQxWWh4ZmwyWlZhMHJOYnZfRkhnWlhTNnBNSFhzaERHdFJFRmtNd3VQenN4N1BpYWtFdjZnV2ZZV0gwb3VLX2ZOdE9nT1owS3NDTFU3UjBnb1pzZ1p5bW1kSzJPNEVNZBIEGgIIABqIBRIAGgAiACoAMgYIAxICdXM6AEIECAEQAEoAWgByAHoAgkDkBAgAEAAYACAAKhoKBm5lc3RqcxV5zrdAGgtpdjtwO25lc3RqcyonCgNqd3QVPk-jQBoRand0YXV0aGVudGljYXRpb24aCGl2O3A7and0KkoKDmF1dGhlbnRpY2F0aW9uFcv9nEAaBGF1dGgaBXRva2VuGhFqd3RhdXRoZW50aWNhdGlvbhoTaXY7cDthdXRoZW50aWNhdGlvbjLWAS9nb3RvP3VybD1DQUVTbEFFQjZ6c3dGZHNpaENlclFKVkwxZGlxRXo4TzZoRzJydGlsNUtZUVBMT0JzNnUtbE5aMUZEN0Zmak92UTF4Si1lS0pBUVdzN0IyeGFITXJOMW9TTXZyN1czVlN3bjJCOFJONWFIZmxkMVloeGZsMlpWYTByTmJ2X0ZIZ1pYUzZwTUhYc2hER3RSRUZrTXd1UHpzeDdQaWFrRXY2Z1dmWVdIMG91S19mTnRPZ09aMEtzQ0xVN1IwZ29ac2daeW1tZEsyTzRFTWQ6R0hvdyB0byBJbXBsZW1lbnQgPGI-QXV0aGVudGljYXRpb248L2I-IGluIDxiPk5lc3RKUzwvYj4gd2l0aCA8Yj5KV1Q8L2I-QqYBPGI-SG93IHRvIEltcGxlbWVudCBBdXRoZW50aWNhdGlvbiBpbiBOZXN0SlMgd2l0aCBKV1Q8L2I-ICZtaWRkb3Q7IFN0ZXAgMTogQ3JlYXRpbmcgYSBOZXcgTmVzdEpTIFByb2plY3QgJm1pZGRvdDsgU3RlcCAyOiBTZXR0aW5nIFVwIERhdGFiYXNlIENvbm5lY3Rpb24gd2l0aCBUeXBlT1JNLiICEAFIAFgAaAA",
      "source": "Stackademic",
      "read_more_link": "https://blog.stackademic.com/how-to-implement-authentication-in-nestjs-with-jwt-b941ac20ab6e#:~:text=How%20to%20Implement%20Authentication%20in,NestJS%20with%20JWT&text=Step%201%3A%20Creating%20a%20New,NestJS%20Project&text=Step%202%3A%20Setting%20Up%20Database,Connection%20with%20TypeORM"
    }
  ],
  "related_searches": [
    {
      "block_position": 1,
      "query": "Nestjs/passport",
      "link": "https://www.google.com/search?sca_esv=3ca1fbc8451fdfd6&hl=en&gl=us&sxsrf=APpeQnslpd3K4gBIRhjNe_masBnOB7dkYQ:1790143990801&q=Nestjs/passport&sa=X&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQ1QJ6BAg_EAE",
      "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&location=Colombo%2CWestern+Province%2CSri+Lanka&q=Nestjs%2Fpassport"
    },
    {
      "block_position": 1,
      "query": "Nestjs jwt authentication example",
      "link": "https://www.google.com/search?sca_esv=3ca1fbc8451fdfd6&hl=en&gl=us&sxsrf=APpeQnslpd3K4gBIRhjNe_masBnOB7dkYQ:1790143990801&q=Nestjs+jwt+authentication+example&sa=X&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQ1QJ6BAhGEAE",
      "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&location=Colombo%2CWestern+Province%2CSri+Lanka&q=Nestjs+jwt+authentication+example"
    },
    {
      "block_position": 1,
      "query": "Nestjs jwt authentication github",
      "link": "https://www.google.com/search?sca_esv=3ca1fbc8451fdfd6&hl=en&gl=us&sxsrf=APpeQnslpd3K4gBIRhjNe_masBnOB7dkYQ:1790143990801&q=Nestjs+jwt+authentication+github&sa=X&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQ1QJ6BAhEEAE",
      "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&location=Colombo%2CWestern+Province%2CSri+Lanka&q=Nestjs+jwt+authentication+github"
    },
    {
      "block_position": 1,
      "query": "Nestjs/passport-jwt",
      "link": "https://www.google.com/search?sca_esv=3ca1fbc8451fdfd6&hl=en&gl=us&sxsrf=APpeQnslpd3K4gBIRhjNe_masBnOB7dkYQ:1790143990801&q=Nestjs/passport-jwt&sa=X&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQ1QJ6BAhDEAE",
      "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&location=Colombo%2CWestern+Province%2CSri+Lanka&q=Nestjs%2Fpassport-jwt"
    },
    {
      "block_position": 1,
      "query": "Nestjs/jwt refresh token",
      "link": "https://www.google.com/search?sca_esv=3ca1fbc8451fdfd6&hl=en&gl=us&sxsrf=APpeQnslpd3K4gBIRhjNe_masBnOB7dkYQ:1790143990801&q=Nestjs/jwt+refresh+token&sa=X&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQ1QJ6BAhCEAE",
      "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&location=Colombo%2CWestern+Province%2CSri+Lanka&q=Nestjs%2Fjwt+refresh+token"
    },
    {
      "block_position": 1,
      "query": "Nestjs jwt authentication not working",
      "link": "https://www.google.com/search?sca_esv=3ca1fbc8451fdfd6&hl=en&gl=us&sxsrf=APpeQnslpd3K4gBIRhjNe_masBnOB7dkYQ:1790143990801&q=Nestjs+jwt+authentication+not+working&sa=X&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQ1QJ6BAhHEAE",
      "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&location=Colombo%2CWestern+Province%2CSri+Lanka&q=Nestjs+jwt+authentication+not+working"
    },
    {
      "block_position": 1,
      "query": "Nestjs authentication",
      "link": "https://www.google.com/search?sca_esv=3ca1fbc8451fdfd6&hl=en&gl=us&sxsrf=APpeQnslpd3K4gBIRhjNe_masBnOB7dkYQ:1790143990801&q=Nestjs+authentication&sa=X&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQ1QJ6BAhIEAE",
      "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&location=Colombo%2CWestern+Province%2CSri+Lanka&q=Nestjs+authentication"
    },
    {
      "block_position": 1,
      "query": "Nestjs/jwt strategy",
      "link": "https://www.google.com/search?sca_esv=3ca1fbc8451fdfd6&hl=en&gl=us&sxsrf=APpeQnslpd3K4gBIRhjNe_masBnOB7dkYQ:1790143990801&q=Nestjs/jwt+strategy&sa=X&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQ1QJ6BAhFEAE",
      "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&location=Colombo%2CWestern+Province%2CSri+Lanka&q=Nestjs%2Fjwt+strategy"
    }
  ],
  "pagination": {
    "current": 1,
    "next": "https://www.google.com/search?q=nestjs+jwt+authentication&sca_esv=3ca1fbc8451fdfd6&hl=en&gl=us&sxsrf=APpeQnslpd3K4gBIRhjNe_masBnOB7dkYQ:1790143990801&ei=9m2zavm5MJ2LruEP5PLk4AE&start=10&sa=N&sstk=AS6-VmImDqBJPAEizTxAvAM_ILL-YUPKoyHBcr1dqp0rKkMudpfdoutwAIiuvmwezyCCjV-bJiUaYrg7r6UJume1u4JvX4Eaw6CNuw&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQ8NMDegQINhAW",
    "other_pages": {
      "2": "https://www.google.com/search?q=nestjs+jwt+authentication&sca_esv=3ca1fbc8451fdfd6&hl=en&gl=us&sxsrf=APpeQnslpd3K4gBIRhjNe_masBnOB7dkYQ:1790143990801&ei=9m2zavm5MJ2LruEP5PLk4AE&start=10&sa=N&sstk=AS6-VmImDqBJPAEizTxAvAM_ILL-YUPKoyHBcr1dqp0rKkMudpfdoutwAIiuvmwezyCCjV-bJiUaYrg7r6UJume1u4JvX4Eaw6CNuw&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQ8tMDegQINhAE",
      "3": "https://www.google.com/search?q=nestjs+jwt+authentication&sca_esv=3ca1fbc8451fdfd6&hl=en&gl=us&sxsrf=APpeQnslpd3K4gBIRhjNe_masBnOB7dkYQ:1790143990801&ei=9m2zavm5MJ2LruEP5PLk4AE&start=20&sa=N&sstk=AS6-VmImDqBJPAEizTxAvAM_ILL-YUPKoyHBcr1dqp0rKkMudpfdoutwAIiuvmwezyCCjV-bJiUaYrg7r6UJume1u4JvX4Eaw6CNuw&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQ8tMDegQINhAG",
      "4": "https://www.google.com/search?q=nestjs+jwt+authentication&sca_esv=3ca1fbc8451fdfd6&hl=en&gl=us&sxsrf=APpeQnslpd3K4gBIRhjNe_masBnOB7dkYQ:1790143990801&ei=9m2zavm5MJ2LruEP5PLk4AE&start=30&sa=N&sstk=AS6-VmImDqBJPAEizTxAvAM_ILL-YUPKoyHBcr1dqp0rKkMudpfdoutwAIiuvmwezyCCjV-bJiUaYrg7r6UJume1u4JvX4Eaw6CNuw&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQ8tMDegQINhAI",
      "5": "https://www.google.com/search?q=nestjs+jwt+authentication&sca_esv=3ca1fbc8451fdfd6&hl=en&gl=us&sxsrf=APpeQnslpd3K4gBIRhjNe_masBnOB7dkYQ:1790143990801&ei=9m2zavm5MJ2LruEP5PLk4AE&start=40&sa=N&sstk=AS6-VmImDqBJPAEizTxAvAM_ILL-YUPKoyHBcr1dqp0rKkMudpfdoutwAIiuvmwezyCCjV-bJiUaYrg7r6UJume1u4JvX4Eaw6CNuw&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQ8tMDegQINhAK",
      "6": "https://www.google.com/search?q=nestjs+jwt+authentication&sca_esv=3ca1fbc8451fdfd6&hl=en&gl=us&sxsrf=APpeQnslpd3K4gBIRhjNe_masBnOB7dkYQ:1790143990801&ei=9m2zavm5MJ2LruEP5PLk4AE&start=50&sa=N&sstk=AS6-VmImDqBJPAEizTxAvAM_ILL-YUPKoyHBcr1dqp0rKkMudpfdoutwAIiuvmwezyCCjV-bJiUaYrg7r6UJume1u4JvX4Eaw6CNuw&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQ8tMDegQINhAM",
      "7": "https://www.google.com/search?q=nestjs+jwt+authentication&sca_esv=3ca1fbc8451fdfd6&hl=en&gl=us&sxsrf=APpeQnslpd3K4gBIRhjNe_masBnOB7dkYQ:1790143990801&ei=9m2zavm5MJ2LruEP5PLk4AE&start=60&sa=N&sstk=AS6-VmImDqBJPAEizTxAvAM_ILL-YUPKoyHBcr1dqp0rKkMudpfdoutwAIiuvmwezyCCjV-bJiUaYrg7r6UJume1u4JvX4Eaw6CNuw&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQ8tMDegQINhAO",
      "8": "https://www.google.com/search?q=nestjs+jwt+authentication&sca_esv=3ca1fbc8451fdfd6&hl=en&gl=us&sxsrf=APpeQnslpd3K4gBIRhjNe_masBnOB7dkYQ:1790143990801&ei=9m2zavm5MJ2LruEP5PLk4AE&start=70&sa=N&sstk=AS6-VmImDqBJPAEizTxAvAM_ILL-YUPKoyHBcr1dqp0rKkMudpfdoutwAIiuvmwezyCCjV-bJiUaYrg7r6UJume1u4JvX4Eaw6CNuw&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQ8tMDegQINhAQ",
      "9": "https://www.google.com/search?q=nestjs+jwt+authentication&sca_esv=3ca1fbc8451fdfd6&hl=en&gl=us&sxsrf=APpeQnslpd3K4gBIRhjNe_masBnOB7dkYQ:1790143990801&ei=9m2zavm5MJ2LruEP5PLk4AE&start=80&sa=N&sstk=AS6-VmImDqBJPAEizTxAvAM_ILL-YUPKoyHBcr1dqp0rKkMudpfdoutwAIiuvmwezyCCjV-bJiUaYrg7r6UJume1u4JvX4Eaw6CNuw&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQ8tMDegQINhAS",
      "10": "https://www.google.com/search?q=nestjs+jwt+authentication&sca_esv=3ca1fbc8451fdfd6&hl=en&gl=us&sxsrf=APpeQnslpd3K4gBIRhjNe_masBnOB7dkYQ:1790143990801&ei=9m2zavm5MJ2LruEP5PLk4AE&start=90&sa=N&sstk=AS6-VmImDqBJPAEizTxAvAM_ILL-YUPKoyHBcr1dqp0rKkMudpfdoutwAIiuvmwezyCCjV-bJiUaYrg7r6UJume1u4JvX4Eaw6CNuw&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQ8tMDegQINhAU"
    }
  },
  "serpapi_pagination": {
    "current": 1,
    "next_link": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&location=Colombo%2CWestern+Province%2CSri+Lanka&q=nestjs+jwt+authentication&start=10",
    "next": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&location=Colombo%2CWestern+Province%2CSri+Lanka&q=nestjs+jwt+authentication&start=10",
    "other_pages": {
      "2": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&location=Colombo%2CWestern+Province%2CSri+Lanka&q=nestjs+jwt+authentication&start=10",
      "3": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&location=Colombo%2CWestern+Province%2CSri+Lanka&q=nestjs+jwt+authentication&start=20",
      "4": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&location=Colombo%2CWestern+Province%2CSri+Lanka&q=nestjs+jwt+authentication&start=30",
      "5": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&location=Colombo%2CWestern+Province%2CSri+Lanka&q=nestjs+jwt+authentication&start=40",
      "6": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&location=Colombo%2CWestern+Province%2CSri+Lanka&q=nestjs+jwt+authentication&start=50",
      "7": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&location=Colombo%2CWestern+Province%2CSri+Lanka&q=nestjs+jwt+authentication&start=60",
      "8": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&location=Colombo%2CWestern+Province%2CSri+Lanka&q=nestjs+jwt+authentication&start=70",
      "9": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&location=Colombo%2CWestern+Province%2CSri+Lanka&q=nestjs+jwt+authentication&start=80",
      "10": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&location=Colombo%2CWestern+Province%2CSri+Lanka&q=nestjs+jwt+authentication&start=90"
    }
  }
}
```

Notes:

- This route calls the SerpAPI search endpoint directly.
- It does not use JWT authentication.
- Always use "Colombo,Western Province,Sri Lanka" as the location

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
  "location": "Colombo,Western Province,Sri Lanka",
  "hl": "en",
  "gl": "us"
}
```

Example response:

```json
{
  "search_metadata": {
    "id": "6ab36df295e0b36ec3c35025",
    "status": "Success",
    "json_endpoint": "https://serpapi.com/searches/c5uuegpi8E-WapIFD_3x_K0tTlCmutTvChigG9LertE/6ab36df295e0b36ec3c35025.json",
    "markdown_endpoint": "https://serpapi.com/searches/c5uuegpi8E-WapIFD_3x_K0tTlCmutTvChigG9LertE/6ab36df295e0b36ec3c35025.md",
    "pixel_position_endpoint": "https://serpapi.com/searches/c5uuegpi8E-WapIFD_3x_K0tTlCmutTvChigG9LertE/6ab36df295e0b36ec3c35025.json_with_pixel_position",
    "created_at": "2026-09-23 06:13:06 UTC",
    "processed_at": "2026-09-23 06:13:06 UTC",
    "google_url": "https://www.google.com/search?q=nestjs+jwt+authentication&oq=nestjs+jwt+authentication&uule=w+CAIQICIiQ29sb21ibyxXZXN0ZXJuIFByb3ZpbmNlLFNyaSBMYW5rYQ&hl=en&gl=us&sourceid=chrome&ie=UTF-8",
    "raw_html_file": "https://serpapi.com/searches/c5uuegpi8E-WapIFD_3x_K0tTlCmutTvChigG9LertE/6ab36df295e0b36ec3c35025.html",
    "total_time_taken": 4.95
  },
  "search_parameters": {
    "engine": "google",
    "q": "nestjs jwt authentication",
    "location_requested": "Colombo,Western Province,Sri Lanka",
    "location_used": "Colombo,Western Province,Sri Lanka",
    "google_domain": "google.com",
    "hl": "en",
    "gl": "us",
    "device": "desktop"
  },
  "search_information": {
    "query_displayed": "nestjs jwt authentication",
    "total_results": 108,
    "time_taken_displayed": 0.19,
    "organic_results_state": "Results for exact spelling"
  },
  "inline_videos": [
    {
      "position": 1,
      "title": "NestJS JWT Authentication – Secure Your API Like a Pro!",
      "link": "https://www.youtube.com/watch?v=BfDHPOiHlqU",
      "thumbnail": "https://serpapi.com/searches/6ab36df295e0b36ec3c35025/images/_uV04r1R9Jq2XHzBwNTq4LiDof1rkuN5ffnfr_MCGxQ.jpeg",
      "channel": "Sakura Dev",
      "duration": "27:02",
      "platform": "YouTube",
      "date": "Aug 3, 2024",
      "key_moments": [
        {
          "time": "00:00",
          "title": "Introduction – Why Secure APIs Matter",
          "link": "https://www.youtube.com/watch?v=BfDHPOiHlqU&t=0"
        },
        {
          "time": "00:13",
          "title": "Installing Dependencies for JWT",
          "link": "https://www.youtube.com/watch?v=BfDHPOiHlqU&t=13"
        },
        {
          "time": "01:48",
          "title": "Configuring the JWT Module",
          "link": "https://www.youtube.com/watch?v=BfDHPOiHlqU&t=108"
        },
        {
          "time": "04:18",
          "title": "Using ENV Variables for Security",
          "link": "https://www.youtube.com/watch?v=BfDHPOiHlqU&t=258"
        },
        {
          "time": "08:25",
          "title": "Generating Secure JWT Tokens",
          "link": "https://www.youtube.com/watch?v=BfDHPOiHlqU&t=505"
        },
        {
          "time": "13:26",
          "title": "Implementing JWT Strategy in NestJS",
          "link": "https://www.youtube.com/watch?v=BfDHPOiHlqU&t=806"
        },
        {
          "time": "19:00",
          "title": "Setting Up JWT Auth Guards",
          "link": "https://www.youtube.com/watch?v=BfDHPOiHlqU&t=1140"
        },
        {
          "time": "20:14",
          "title": "Protecting API Routes with Role-Based Access",
          "link": "https://www.youtube.com/watch?v=BfDHPOiHlqU&t=1214"
        },
        {
          "time": "24:19",
          "title": "Recap & Next Steps",
          "link": "https://www.youtube.com/watch?v=BfDHPOiHlqU&t=1459"
        }
      ]
    },
    {
      "position": 2,
      "title": "NestJS JWT Authentication Tutorial",
      "link": "https://www.youtube.com/watch?v=EFDUvzJT_wI",
      "thumbnail": "https://serpapi.com/searches/6ab36df295e0b36ec3c35025/images/Sub0-wROCAGSnsZpItImwT6wM4OCYpaJZ8NpBIvvWzs.png",
      "channel": "Anson",
      "duration": "49:04",
      "platform": "YouTube",
      "date": "Jan 12, 2024"
    },
    {
      "position": 3,
      "title": "NestJS Authentication + Refresh Token With Passport.js",
      "link": "https://www.youtube.com/watch?v=S8Cjx5ua2JU",
      "thumbnail": "https://serpapi.com/searches/6ab36df295e0b36ec3c35025/images/upSaqk4F_-4zWWZJz5cU15Wsrd8JDvzvSCchYlHbzCs.png",
      "channel": "Michael Guay",
      "duration": "1:25:12",
      "platform": "YouTube",
      "date": "Aug 10, 2024",
      "key_moments": [
        {
          "time": "00:00",
          "title": "Introduction",
          "link": "https://www.youtube.com/watch?v=S8Cjx5ua2JU&t=0"
        },
        {
          "time": "04:18",
          "title": "MongoDB",
          "link": "https://www.youtube.com/watch?v=S8Cjx5ua2JU&t=258"
        },
        {
          "time": "14:02",
          "title": "Users CRUD",
          "link": "https://www.youtube.com/watch?v=S8Cjx5ua2JU&t=842"
        },
        {
          "time": "28:00",
          "title": "JWT Auth",
          "link": "https://www.youtube.com/watch?v=S8Cjx5ua2JU&t=1680"
        },
        {
          "time": "01:08:00",
          "title": "Refresh Token",
          "link": "https://www.youtube.com/watch?v=S8Cjx5ua2JU&t=4080"
        }
      ]
    },
    {
      "position": 4,
      "title": "Nestjs Authentication with JWT and Passport (plus Guards ...",
      "link": "https://www.youtube.com/watch?v=9_GG28nS6CY",
      "thumbnail": "https://serpapi.com/searches/6ab36df295e0b36ec3c35025/images/KBW33SUfi-EI7lE77PRupyFYK-hcG4jIfUtrYWCPGJc.jpeg",
      "channel": "ZestMade",
      "duration": "37:12",
      "platform": "YouTube",
      "date": "Jul 15, 2024",
      "short_clip": "https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcS6qU5Ll_K8VrZmTqvteakBcEzv_uR8Vsefgg"
    }
  ],
  "related_questions": [
    {
      "question": "Is JWT different than OAuth?",
      "type": "ai_overview",
      "page_token": "UaKcF3icHdDBboIwHIDx7GU8SpGUbSZmGVNAHGXW9o_0sigd6GihKhPltnfZU-1pZnb7br_k-_5R-7r6vVvv2tacxpbVdd2wbJpSfQzzRlub07XOrXyj1HaTV2P33rWfinwyO3XeS9N5S24MTCliYYypfsBSeQ6MzDmuMAem3NQnUa79AwVFwDZo28_bV_DwqpIoRm0m1jEi6JHFgexXKDrzPsMylCHYwAmjc6nNYqMjuk3NRayX_TYsL1kv7Aw4zuqqh9SnaSAOMsUnBt7yZnGmfcUdOmcpdlMWuXm4K4huEz5Vb-xTJkmA9WrUrfxetXFtdlIjm_HmysLIpvBs89nlSGa-H-wjj4bkmqSCi-DSAdAKQPpgkwUNbs3EF612vUTiKBxCB0V-njiD_2OT90K3Y3Nsyj8K9njC",
      "serpapi_ai_overview_link": "https://serpapi.com/search.json?engine=google_ai_overview&page_token=UaKcF3icHdDBboIwHIDx7GU8SpGUbSZmGVNAHGXW9o_0sigd6GihKhPltnfZU-1pZnb7br_k-_5R-7r6vVvv2tacxpbVdd2wbJpSfQzzRlub07XOrXyj1HaTV2P33rWfinwyO3XeS9N5S24MTCliYYypfsBSeQ6MzDmuMAem3NQnUa79AwVFwDZo28_bV_DwqpIoRm0m1jEi6JHFgexXKDrzPsMylCHYwAmjc6nNYqMjuk3NRayX_TYsL1kv7Aw4zuqqh9SnaSAOMsUnBt7yZnGmfcUdOmcpdlMWuXm4K4huEz5Vb-xTJkmA9WrUrfxetXFtdlIjm_HmysLIpvBs89nlSGa-H-wjj4bkmqSCi-DSAdAKQPpgkwUNbs3EF612vUTiKBxCB0V-njiD_2OT90K3Y3Nsyj8K9njC",
      "next_page_token": "eyJvbnMiOiIxMDA0MSIsImZjIjoiRXFFQkNtSkJTbWxVTkhSS1UxOUpkMTh6TFMweVduZE9USHBmYUc1Uk5YVmpRMDFKYUZkUll6aFZiRGx5WDJwSVdsOVlia1ZUT0dwWkxUQldNVlp4VkhrM1ZuUlJRa2c0Y25GcWNteHpiMmczWmtWQlNqQTNkR0pGY0ZVdGNHdFpOalJXZFVsSmR4SVhPVzB5ZW1GMmJUVk5TakpNY25WRlVEVlFUR3MwUVVVYUlrRkVjM0k1WmxKM2RFSkdiVzF4V1dOUlEzUjJXVmhKUzFNd1gzRmxVV1F5TVZFIiwiZmN2IjoiMyIsImVpIjoiOW0yemF2bTVNSjJMcnVFUDVQTGs0QUUiLCJxYyI6IkNobHVaWE4wYW5NZ2FuZDBJR0YxZEdobGJuUnBZMkYwYVc5dUVBQjlYWWdlUHciLCJxdWVzdGlvbiI6IklzIEpXVCBkaWZmZXJlbnQgdGhhbiBPQXV0aD8iLCJsayI6IkdodHBjeUJxZDNRZ1pHbG1abVZ5Wlc1MElIUm9ZVzRnYjJGMWRHZyIsImJzIjoiYzNYT3NRckNNQlNGWVZ3ek9ZaG90SHFlb1l1VEZIR3hIWFJRY0E3MmhxWmlMalNwcFc5dlVncUM0UHhkX25QRlhxeHpoLUotUTJtMHBvYXNoNi1VeGVYUS1pcExFN2t5RG5YbmY1MVZjTEVUeXhOMzhJelcwWkF4Rm1jdXFiaG1xWlNMNm91eEVkQUdySjA0aXUyNDY1UW1hRzRRZ3lGdkhzb2J0bGtLdVJtbl81eUU5U1N1bDR3Y2IycU03dkhxaDZqbko0WEVYTTdpQjZQRjFBRFR5UWMiLCJpZCI6ImZjXzltMnphdm01TUoyTHJ1RVA1UExrNEFFXzcifQ==",
      "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google_related_questions&google_domain=google.com&next_page_token=eyJvbnMiOiIxMDA0MSIsImZjIjoiRXFFQkNtSkJTbWxVTkhSS1UxOUpkMTh6TFMweVduZE9USHBmYUc1Uk5YVmpRMDFKYUZkUll6aFZiRGx5WDJwSVdsOVlia1ZUT0dwWkxUQldNVlp4VkhrM1ZuUlJRa2c0Y25GcWNteHpiMmczWmtWQlNqQTNkR0pGY0ZVdGNHdFpOalJXZFVsSmR4SVhPVzB5ZW1GMmJUVk5TakpNY25WRlVEVlFUR3MwUVVVYUlrRkVjM0k1WmxKM2RFSkdiVzF4V1dOUlEzUjJXVmhKUzFNd1gzRmxVV1F5TVZFIiwiZmN2IjoiMyIsImVpIjoiOW0yemF2bTVNSjJMcnVFUDVQTGs0QUUiLCJxYyI6IkNobHVaWE4wYW5NZ2FuZDBJR0YxZEdobGJuUnBZMkYwYVc5dUVBQjlYWWdlUHciLCJxdWVzdGlvbiI6IklzIEpXVCBkaWZmZXJlbnQgdGhhbiBPQXV0aD8iLCJsayI6IkdodHBjeUJxZDNRZ1pHbG1abVZ5Wlc1MElIUm9ZVzRnYjJGMWRHZyIsImJzIjoiYzNYT3NRckNNQlNGWVZ3ek9ZaG90SHFlb1l1VEZIR3hIWFJRY0E3MmhxWmlMalNwcFc5dlVncUM0UHhkX25QRlhxeHpoLUotUTJtMHBvYXNoNi1VeGVYUS1pcExFN2t5RG5YbmY1MVZjTEVUeXhOMzhJelcwWkF4Rm1jdXFiaG1xWlNMNm91eEVkQUdySjA0aXUyNDY1UW1hRzRRZ3lGdkhzb2J0bGtLdVJtbl81eUU5U1N1bDR3Y2IycU03dkhxaDZqbko0WEVYTTdpQjZQRjFBRFR5UWMiLCJpZCI6ImZjXzltMnphdm01TUoyTHJ1RVA1UExrNEFFXzcifQ%3D%3D"
    },
    {
      "question": "How to use JWT in NodeJS?",
      "type": "ai_overview",
      "page_token": "U_Zz33icHdDbToMwAIDh-DK7dCBjxiWLEcdxaWcLLYcbU1oYW8uoDsfgznfxqXwaF5_g__J__6jDSf7eXZq-1-fVfD4Mw_2-6_aquuddO2fn8cTnnClVMi5Xy8el-VzztfsVOq8foYOI1nSDjZhEl1xqlmdiTKUOdq7NkEVR6gnCTJWgjOIdsR-Yq1XRXlVONMMK55VXHEolapw-aWHKBfYXPQi8vNo4EmSRIdKFwUjjIPpEcwnr-FiA0oMSe_CMrZexklFYbZpOBGDkfnGGBlVoAhML8FuaQZK4oVW28irSphFHx8BmFMc3QRx4cdlGKGm9HPjXbeoLAi24iyfhFml_chtul0m0zLOih8TcAnkdBaEIUgewCTsYdwdE8MSPqiXHZiBU2pRGtwZcFmQxJJZqq6yZgG9naAptgmY1v6yt2f_P9Xvd9iv92e3_AAQzhJA",
      "serpapi_ai_overview_link": "https://serpapi.com/search.json?engine=google_ai_overview&page_token=U_Zz33icHdDbToMwAIDh-DK7dCBjxiWLEcdxaWcLLYcbU1oYW8uoDsfgznfxqXwaF5_g__J__6jDSf7eXZq-1-fVfD4Mw_2-6_aquuddO2fn8cTnnClVMi5Xy8el-VzztfsVOq8foYOI1nSDjZhEl1xqlmdiTKUOdq7NkEVR6gnCTJWgjOIdsR-Yq1XRXlVONMMK55VXHEolapw-aWHKBfYXPQi8vNo4EmSRIdKFwUjjIPpEcwnr-FiA0oMSe_CMrZexklFYbZpOBGDkfnGGBlVoAhML8FuaQZK4oVW28irSphFHx8BmFMc3QRx4cdlGKGm9HPjXbeoLAi24iyfhFml_chtul0m0zLOih8TcAnkdBaEIUgewCTsYdwdE8MSPqiXHZiBU2pRGtwZcFmQxJJZqq6yZgG9naAptgmY1v6yt2f_P9Xvd9iv92e3_AAQzhJA",
      "next_page_token": "eyJvbnMiOiIxMDA0MSIsImZjIjoiRXFFQkNtSkJTbWxVTkhSS1UxOUpkMTh6TFMweVduZE9USHBmYUc1Uk5YVmpRMDFKYUZkUll6aFZiRGx5WDJwSVdsOVlia1ZUT0dwWkxUQldNVlp4VkhrM1ZuUlJRa2c0Y25GcWNteHpiMmczWmtWQlNqQTNkR0pGY0ZVdGNHdFpOalJXZFVsSmR4SVhPVzB5ZW1GMmJUVk5TakpNY25WRlVEVlFUR3MwUVVVYUlrRkVjM0k1WmxKM2RFSkdiVzF4V1dOUlEzUjJXVmhKUzFNd1gzRmxVV1F5TVZFIiwiZmN2IjoiMyIsImVpIjoiOW0yemF2bTVNSjJMcnVFUDVQTGs0QUUiLCJxYyI6IkNobHVaWE4wYW5NZ2FuZDBJR0YxZEdobGJuUnBZMkYwYVc5dUVBQjlYWWdlUHciLCJxdWVzdGlvbiI6IkhvdyB0byB1c2UgSldUIGluIE5vZGVKUz8iLCJsayI6IkdoaG9iM2NnZEc4Z2RYTmxJR3AzZENCcGJpQnViMlJsYW5NIiwiYnMiOiJjM1hPc1FyQ01CU0ZZVnd6T1lob3RIcWVvWXVURkhHeEhYUlFjQTcyaHFaaUxqU3BwVzl2VWdxQzRQeGRfblBGWHF4emgtSi1RMm0wcG9hc2g2LVV4ZVhRLWlwTEU3a3lEblhuZjUxVmNMRVR5eE4zOEl6VzBaQXhGbWN1cWJobXFaU0w2b3V4RWRBR3JKMDRpdTI0NjVRbWFHNFFneUZ2SHNvYnRsa0t1Um1uXzV5RTlTU3VsNHdjYjJxTTd2SHFoNmpuSjRYRVhNN2lCNlBGMUFEVHlRYyIsImlkIjoiZmNfOW0yemF2bTVNSjJMcnVFUDVQTGs0QUVfNyJ9",
      "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google_related_questions&google_domain=google.com&next_page_token=eyJvbnMiOiIxMDA0MSIsImZjIjoiRXFFQkNtSkJTbWxVTkhSS1UxOUpkMTh6TFMweVduZE9USHBmYUc1Uk5YVmpRMDFKYUZkUll6aFZiRGx5WDJwSVdsOVlia1ZUT0dwWkxUQldNVlp4VkhrM1ZuUlJRa2c0Y25GcWNteHpiMmczWmtWQlNqQTNkR0pGY0ZVdGNHdFpOalJXZFVsSmR4SVhPVzB5ZW1GMmJUVk5TakpNY25WRlVEVlFUR3MwUVVVYUlrRkVjM0k1WmxKM2RFSkdiVzF4V1dOUlEzUjJXVmhKUzFNd1gzRmxVV1F5TVZFIiwiZmN2IjoiMyIsImVpIjoiOW0yemF2bTVNSjJMcnVFUDVQTGs0QUUiLCJxYyI6IkNobHVaWE4wYW5NZ2FuZDBJR0YxZEdobGJuUnBZMkYwYVc5dUVBQjlYWWdlUHciLCJxdWVzdGlvbiI6IkhvdyB0byB1c2UgSldUIGluIE5vZGVKUz8iLCJsayI6IkdoaG9iM2NnZEc4Z2RYTmxJR3AzZENCcGJpQnViMlJsYW5NIiwiYnMiOiJjM1hPc1FyQ01CU0ZZVnd6T1lob3RIcWVvWXVURkhHeEhYUlFjQTcyaHFaaUxqU3BwVzl2VWdxQzRQeGRfblBGWHF4emgtSi1RMm0wcG9hc2g2LVV4ZVhRLWlwTEU3a3lEblhuZjUxVmNMRVR5eE4zOEl6VzBaQXhGbWN1cWJobXFaU0w2b3V4RWRBR3JKMDRpdTI0NjVRbWFHNFFneUZ2SHNvYnRsa0t1Um1uXzV5RTlTU3VsNHdjYjJxTTd2SHFoNmpuSjRYRVhNN2lCNlBGMUFEVHlRYyIsImlkIjoiZmNfOW0yemF2bTVNSjJMcnVFUDVQTGs0QUVfNyJ9"
    },
    {
      "question": "Is JWT safe for authentication?",
      "type": "ai_overview",
      "page_token": "G2BHonicHdBfToMwHADgeJk9DijbNEsWI6NlIVKk41egLwbaARt_HUxkb97FU3kaE78jfN8_9bmtfh_ichz7Yatp0zQti64r6tNSdo2WDnMrNZnWdZbKart53BjPudzhYbL23WQF0PfcZvoxmvRAN0zpVCsPmAdAnCAsZwHFXdSlnYUqFA1F3HGtlKg9wzoCVCAg5Obj9U3pIgekLh6mH0Gs6CuskAop8NadEngyBaqZwjTOOGVRxILowtacCMLDZJUROp44L6nN7-qSzBKNfgiUCjwgwO6NOn2v2v4tiOqSx9TOmvIz0Ysjudej1_alanQjhG4OD67B-IsB-OtKMSHO2bXYgc5-JI4SOKcwjkmrKh9P60D3jARRFpi8AUc5J8LbRS4_d-bif2z3njfjtr92xR9utXfZ",
      "serpapi_ai_overview_link": "https://serpapi.com/search.json?engine=google_ai_overview&page_token=G2BHonicHdBfToMwHADgeJk9DijbNEsWI6NlIVKk41egLwbaARt_HUxkb97FU3kaE78jfN8_9bmtfh_ichz7Yatp0zQti64r6tNSdo2WDnMrNZnWdZbKart53BjPudzhYbL23WQF0PfcZvoxmvRAN0zpVCsPmAdAnCAsZwHFXdSlnYUqFA1F3HGtlKg9wzoCVCAg5Obj9U3pIgekLh6mH0Gs6CuskAop8NadEngyBaqZwjTOOGVRxILowtacCMLDZJUROp44L6nN7-qSzBKNfgiUCjwgwO6NOn2v2v4tiOqSx9TOmvIz0Ysjudej1_alanQjhG4OD67B-IsB-OtKMSHO2bXYgc5-JI4SOKcwjkmrKh9P60D3jARRFpi8AUc5J8LbRS4_d-bif2z3njfjtr92xR9utXfZ",
      "next_page_token": "eyJvbnMiOiIxMDA0MSIsImZjIjoiRXFFQkNtSkJTbWxVTkhSS1UxOUpkMTh6TFMweVduZE9USHBmYUc1Uk5YVmpRMDFKYUZkUll6aFZiRGx5WDJwSVdsOVlia1ZUT0dwWkxUQldNVlp4VkhrM1ZuUlJRa2c0Y25GcWNteHpiMmczWmtWQlNqQTNkR0pGY0ZVdGNHdFpOalJXZFVsSmR4SVhPVzB5ZW1GMmJUVk5TakpNY25WRlVEVlFUR3MwUVVVYUlrRkVjM0k1WmxKM2RFSkdiVzF4V1dOUlEzUjJXVmhKUzFNd1gzRmxVV1F5TVZFIiwiZmN2IjoiMyIsImVpIjoiOW0yemF2bTVNSjJMcnVFUDVQTGs0QUUiLCJxYyI6IkNobHVaWE4wYW5NZ2FuZDBJR0YxZEdobGJuUnBZMkYwYVc5dUVBQjlYWWdlUHciLCJxdWVzdGlvbiI6IklzIEpXVCBzYWZlIGZvciBhdXRoZW50aWNhdGlvbj8iLCJsayI6IkdoNXBjeUJxZDNRZ2MyRm1aU0JtYjNJZ1lYVjBhR1Z1ZEdsallYUnBiMjQiLCJicyI6ImMzWE9zUXJDTUJTRllWd3pPWWhvdEhxZW9ZdVRGSEd4SFhSUWNBNzJocVppTGpTcHBXOXZVZ3FDNFB4ZF9uUEZYcXh6aC1KLVEybTBwb2FzaDYtVXhlWFEtaXBMRTdreURuWG5mNTFWY0xFVHl4TjM4SXpXMFpBeEZtY3VxYmhtcVpTTDZvdXhFZEFHckowNGl1MjQ2NVFtYUc0UWd5RnZIc29idGxrS3VSbW5fNXlFOVNTdWw0d2NiMnFNN3ZIcWg2am5KNFhFWE03aUI2UEYxQURUeVFjIiwiaWQiOiJmY185bTJ6YXZtNU1KMkxydUVQNVBMazRBRV83In0=",
      "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google_related_questions&google_domain=google.com&next_page_token=eyJvbnMiOiIxMDA0MSIsImZjIjoiRXFFQkNtSkJTbWxVTkhSS1UxOUpkMTh6TFMweVduZE9USHBmYUc1Uk5YVmpRMDFKYUZkUll6aFZiRGx5WDJwSVdsOVlia1ZUT0dwWkxUQldNVlp4VkhrM1ZuUlJRa2c0Y25GcWNteHpiMmczWmtWQlNqQTNkR0pGY0ZVdGNHdFpOalJXZFVsSmR4SVhPVzB5ZW1GMmJUVk5TakpNY25WRlVEVlFUR3MwUVVVYUlrRkVjM0k1WmxKM2RFSkdiVzF4V1dOUlEzUjJXVmhKUzFNd1gzRmxVV1F5TVZFIiwiZmN2IjoiMyIsImVpIjoiOW0yemF2bTVNSjJMcnVFUDVQTGs0QUUiLCJxYyI6IkNobHVaWE4wYW5NZ2FuZDBJR0YxZEdobGJuUnBZMkYwYVc5dUVBQjlYWWdlUHciLCJxdWVzdGlvbiI6IklzIEpXVCBzYWZlIGZvciBhdXRoZW50aWNhdGlvbj8iLCJsayI6IkdoNXBjeUJxZDNRZ2MyRm1aU0JtYjNJZ1lYVjBhR1Z1ZEdsallYUnBiMjQiLCJicyI6ImMzWE9zUXJDTUJTRllWd3pPWWhvdEhxZW9ZdVRGSEd4SFhSUWNBNzJocVppTGpTcHBXOXZVZ3FDNFB4ZF9uUEZYcXh6aC1KLVEybTBwb2FzaDYtVXhlWFEtaXBMRTdreURuWG5mNTFWY0xFVHl4TjM4SXpXMFpBeEZtY3VxYmhtcVpTTDZvdXhFZEFHckowNGl1MjQ2NVFtYUc0UWd5RnZIc29idGxrS3VSbW5fNXlFOVNTdWw0d2NiMnFNN3ZIcWg2am5KNFhFWE03aUI2UEYxQURUeVFjIiwiaWQiOiJmY185bTJ6YXZtNU1KMkxydUVQNVBMazRBRV83In0%3D"
    },
    {
      "question": "How do I verify my JWT token?",
      "type": "ai_overview",
      "page_token": "WiPl-nicHdDbTsIwGADg-DJcshOgkhCTsYNMaLKuf8d6Y0o3KKzdhkx2uPNdfCqfRuP1d_d9fatzVf483GXbNrelYXRdNz3V9UkVU1Frg9-GShiCK3XgolwuHhfWy1Gs_M-Nu75u3BiahnrYTMz5Zu_gfWYrQnzGqbYs5OVzcbbGbKQJA7MDbQ6QKp_bz25s9hGp6HFXnnoU-GOhsCQX5DMvknkaJIxEmQAZHMImAf000ErMcBiUxGP7JIheeZivt9DXqWLXAqgb6wAhT41EqwQAHO6ga-zAkJmdLSqUkjDCqScbqORClKgm-mZRm3Huyz_MeXFB8yIVtgj7yzZtXV-K-YFEi2zPWgTW267shxxojKi74yN2Ma7PMeBRXJQGkwH25AxpdsYKzXhIMSIsQl5mb9PmntDcZN3kKO4rZ_L_uXo_6nbZfNSnXweug3Q",
      "serpapi_ai_overview_link": "https://serpapi.com/search.json?engine=google_ai_overview&page_token=WiPl-nicHdDbTsIwGADg-DJcshOgkhCTsYNMaLKuf8d6Y0o3KKzdhkx2uPNdfCqfRuP1d_d9fatzVf483GXbNrelYXRdNz3V9UkVU1Frg9-GShiCK3XgolwuHhfWy1Gs_M-Nu75u3BiahnrYTMz5Zu_gfWYrQnzGqbYs5OVzcbbGbKQJA7MDbQ6QKp_bz25s9hGp6HFXnnoU-GOhsCQX5DMvknkaJIxEmQAZHMImAf000ErMcBiUxGP7JIheeZivt9DXqWLXAqgb6wAhT41EqwQAHO6ga-zAkJmdLSqUkjDCqScbqORClKgm-mZRm3Huyz_MeXFB8yIVtgj7yzZtXV-K-YFEi2zPWgTW267shxxojKi74yN2Ma7PMeBRXJQGkwH25AxpdsYKzXhIMSIsQl5mb9PmntDcZN3kKO4rZ_L_uXo_6nbZfNSnXweug3Q",
      "next_page_token": "eyJvbnMiOiIxMDA0MSIsImZjIjoiRXFFQkNtSkJTbWxVTkhSS1UxOUpkMTh6TFMweVduZE9USHBmYUc1Uk5YVmpRMDFKYUZkUll6aFZiRGx5WDJwSVdsOVlia1ZUT0dwWkxUQldNVlp4VkhrM1ZuUlJRa2c0Y25GcWNteHpiMmczWmtWQlNqQTNkR0pGY0ZVdGNHdFpOalJXZFVsSmR4SVhPVzB5ZW1GMmJUVk5TakpNY25WRlVEVlFUR3MwUVVVYUlrRkVjM0k1WmxKM2RFSkdiVzF4V1dOUlEzUjJXVmhKUzFNd1gzRmxVV1F5TVZFIiwiZmN2IjoiMyIsImVpIjoiOW0yemF2bTVNSjJMcnVFUDVQTGs0QUUiLCJxYyI6IkNobHVaWE4wYW5NZ2FuZDBJR0YxZEdobGJuUnBZMkYwYVc5dUVBQjlYWWdlUHciLCJxdWVzdGlvbiI6IkhvdyBkbyBJIHZlcmlmeSBteSBKV1QgdG9rZW4/IiwibGsiOiJHaFJvYjNjZ2RtVnlhV1o1SUdwM2RDQjBiMnRsYmciLCJicyI6ImMzWE9zUXJDTUJTRllWd3pPWWhvdEhxZW9ZdVRGSEd4SFhSUWNBNzJocVppTGpTcHBXOXZVZ3FDNFB4ZF9uUEZYcXh6aC1KLVEybTBwb2FzaDYtVXhlWFEtaXBMRTdreURuWG5mNTFWY0xFVHl4TjM4SXpXMFpBeEZtY3VxYmhtcVpTTDZvdXhFZEFHckowNGl1MjQ2NVFtYUc0UWd5RnZIc29idGxrS3VSbW5fNXlFOVNTdWw0d2NiMnFNN3ZIcWg2am5KNFhFWE03aUI2UEYxQURUeVFjIiwiaWQiOiJmY185bTJ6YXZtNU1KMkxydUVQNVBMazRBRV83In0=",
      "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google_related_questions&google_domain=google.com&next_page_token=eyJvbnMiOiIxMDA0MSIsImZjIjoiRXFFQkNtSkJTbWxVTkhSS1UxOUpkMTh6TFMweVduZE9USHBmYUc1Uk5YVmpRMDFKYUZkUll6aFZiRGx5WDJwSVdsOVlia1ZUT0dwWkxUQldNVlp4VkhrM1ZuUlJRa2c0Y25GcWNteHpiMmczWmtWQlNqQTNkR0pGY0ZVdGNHdFpOalJXZFVsSmR4SVhPVzB5ZW1GMmJUVk5TakpNY25WRlVEVlFUR3MwUVVVYUlrRkVjM0k1WmxKM2RFSkdiVzF4V1dOUlEzUjJXVmhKUzFNd1gzRmxVV1F5TVZFIiwiZmN2IjoiMyIsImVpIjoiOW0yemF2bTVNSjJMcnVFUDVQTGs0QUUiLCJxYyI6IkNobHVaWE4wYW5NZ2FuZDBJR0YxZEdobGJuUnBZMkYwYVc5dUVBQjlYWWdlUHciLCJxdWVzdGlvbiI6IkhvdyBkbyBJIHZlcmlmeSBteSBKV1QgdG9rZW4%2FIiwibGsiOiJHaFJvYjNjZ2RtVnlhV1o1SUdwM2RDQjBiMnRsYmciLCJicyI6ImMzWE9zUXJDTUJTRllWd3pPWWhvdEhxZW9ZdVRGSEd4SFhSUWNBNzJocVppTGpTcHBXOXZVZ3FDNFB4ZF9uUEZYcXh6aC1KLVEybTBwb2FzaDYtVXhlWFEtaXBMRTdreURuWG5mNTFWY0xFVHl4TjM4SXpXMFpBeEZtY3VxYmhtcVpTTDZvdXhFZEFHckowNGl1MjQ2NVFtYUc0UWd5RnZIc29idGxrS3VSbW5fNXlFOVNTdWw0d2NiMnFNN3ZIcWg2am5KNFhFWE03aUI2UEYxQURUeVFjIiwiaWQiOiJmY185bTJ6YXZtNU1KMkxydUVQNVBMazRBRV83In0%3D"
    }
  ],
  "ai_overview": {
    "page_token": "tb2lXXiczVbdcqJIGH2AfY7lJqMg4l-qqKnuDsZGjelEjeaGQsAG5cfhJ8Tczbvs8-wD7NNsg0owo2ZmLra2qxC66T79nf6-w_H7X67jr__54287jjfRNc-naVqlQUBdq2oEHq9HW9_gl4EbhYb91XZly-eSxLXk9AoBTDDCDhE70UKsOYvt6-x5dic8z9QEd-F2UX_eLLw7d9C92-qPcDh_aoRzwlFXTiIuCpLQsBxTNuww8Cxu-yLXOSOSBc5y5I4nvukvXmOoioMwUe4b94O1BBQuD0bWFnpkrVisr6uI13j2s_6zfsM61ahq-dUEzgUUTu90ElVFodapjnjdYxPAf9cIAgoAFGL2DM9OYjN-BgwyBAa0Lg3h_coS9hygDA-TvIfOINMcLQPAMFvAbtpzKEHQP2DB9GwgqLwf62RbKSgnkjN1foZNiUPWlAITXZx9is8OgW2vHEaGpbcKONPQh0qYMPQ2GGJg7wc-ZKwblHtq9nOz234JpFSRHroXI2enM0lhow8-TXcXPPh0TwqjmK2EvElZ5Qr8ImS3Gu8YtpE_hFFW0GjcEYLbUU_D_Ybq--lkrQ4rDzF2aJIK7XGX8saCzXMD3bRMzdaEr3m_JtYaQqfean_JlWREhZSispRA_7beEfRvLXFYHVRh7aAjVJz8h5RltYDwCWIQ7aeeyjGF7-PvJ68o5Sz0d2eSnaWIQbF_voQ0d6kusnqPAaS4XAoFbrbulI72kRSsKMmLOwsrKKIrM6NMRkWAZVbDk3r_OEZ6RQQY_jCxHBOGmDLapIAvN5RVObazlxN2yAO6V6BRxujC7HjIUag0Z45uC2JKmaJS3sZhSLkwVo8gq_5AzXIMM0C0W3GQ_QTshktkznz7IpAC9bLezzX8yXdiv_NBMB_qv6wbZTlJ7kGzZt1v6oCmndVo0nI1l9D0EZzWSeAtfsFzjP-Vkg6O1M_fnVdSVjefKokVP77oSPnzzpGIulMSomeVlFvSD440OulIxxWFwMO7kvrwoiP9upLQRSXRPdMTSmKOdEpJ63NKyh3pWEl2mxw50hHvd0cqlPQ7joR-z5FyYVm727E9JSt61qZ6s7XYXCs20pWXnlupbDGhs3QZ4JYGPrWppRdfe7rpftEc8xqKarw1v2hsILi2TO6b7FtRvIquVml8pSexbfmxY-ixE_ic54aBLOhS5y3ZvkkKrCQDo9GXumtVCJ056oW6Om42dRImc9gQyFOnPniCi2RkSN7b7FnXLHMkoXA8hU2wvqm0TGnixtrSRK7XmLzBabrcEDrtxgHybglCt8lTfeHrUzKsrEdj07iZv5Kk8hq9qNs2brm9TWep1aZjLc3jimTYFW2AmqI9YyOhIbOESBTcEfBEWeWhOVMtK1kUsCtlVxMQBXKRwcKK2L9lQ68tF0ZbatSW5tJsch6Ntxu5zUV-KNf-BXhqV8k",
    "serpapi_link": "https://serpapi.com/search.json?engine=google_ai_overview&page_token=tb2lXXiczVbdcqJIGH2AfY7lJqMg4l-qqKnuDsZGjelEjeaGQsAG5cfhJ8Tczbvs8-wD7NNsg0owo2ZmLra2qxC66T79nf6-w_H7X67jr__54287jjfRNc-naVqlQUBdq2oEHq9HW9_gl4EbhYb91XZly-eSxLXk9AoBTDDCDhE70UKsOYvt6-x5dic8z9QEd-F2UX_eLLw7d9C92-qPcDh_aoRzwlFXTiIuCpLQsBxTNuww8Cxu-yLXOSOSBc5y5I4nvukvXmOoioMwUe4b94O1BBQuD0bWFnpkrVisr6uI13j2s_6zfsM61ahq-dUEzgUUTu90ElVFodapjnjdYxPAf9cIAgoAFGL2DM9OYjN-BgwyBAa0Lg3h_coS9hygDA-TvIfOINMcLQPAMFvAbtpzKEHQP2DB9GwgqLwf62RbKSgnkjN1foZNiUPWlAITXZx9is8OgW2vHEaGpbcKONPQh0qYMPQ2GGJg7wc-ZKwblHtq9nOz234JpFSRHroXI2enM0lhow8-TXcXPPh0TwqjmK2EvElZ5Qr8ImS3Gu8YtpE_hFFW0GjcEYLbUU_D_Ybq--lkrQ4rDzF2aJIK7XGX8saCzXMD3bRMzdaEr3m_JtYaQqfean_JlWREhZSispRA_7beEfRvLXFYHVRh7aAjVJz8h5RltYDwCWIQ7aeeyjGF7-PvJ68o5Sz0d2eSnaWIQbF_voQ0d6kusnqPAaS4XAoFbrbulI72kRSsKMmLOwsrKKIrM6NMRkWAZVbDk3r_OEZ6RQQY_jCxHBOGmDLapIAvN5RVObazlxN2yAO6V6BRxujC7HjIUag0Z45uC2JKmaJS3sZhSLkwVo8gq_5AzXIMM0C0W3GQ_QTshktkznz7IpAC9bLezzX8yXdiv_NBMB_qv6wbZTlJ7kGzZt1v6oCmndVo0nI1l9D0EZzWSeAtfsFzjP-Vkg6O1M_fnVdSVjefKokVP77oSPnzzpGIulMSomeVlFvSD440OulIxxWFwMO7kvrwoiP9upLQRSXRPdMTSmKOdEpJ63NKyh3pWEl2mxw50hHvd0cqlPQ7joR-z5FyYVm727E9JSt61qZ6s7XYXCs20pWXnlupbDGhs3QZ4JYGPrWppRdfe7rpftEc8xqKarw1v2hsILi2TO6b7FtRvIquVml8pSexbfmxY-ixE_ic54aBLOhS5y3ZvkkKrCQDo9GXumtVCJ056oW6Om42dRImc9gQyFOnPniCi2RkSN7b7FnXLHMkoXA8hU2wvqm0TGnixtrSRK7XmLzBabrcEDrtxgHybglCt8lTfeHrUzKsrEdj07iZv5Kk8hq9qNs2brm9TWep1aZjLc3jimTYFW2AmqI9YyOhIbOESBTcEfBEWeWhOVMtK1kUsCtlVxMQBXKRwcKK2L9lQ68tF0ZbatSW5tJsch6Ntxu5zUV-KNf-BXhqV8k"
  },
  "organic_results": [
    {
      "position": 1,
      "title": "Authentication | NestJS - A progressive Node.js framework",
      "link": "https://docs.nestjs.com/security/authentication",
      "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=CAESZwHrOzAVkBE6xjNbQttZoFWMKOBJ2zzVGhIW1ePwLTz03Sa63FknC9-M4f4E-f8Vm1etnqUVcoyBw8sJOGpX1y14a1Db_DKYbE-GlVJVXn8kf9SDzt5pqQdHn6fkHKbfXHcv5X7oGqE&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQFnoECBgQAQ&uoh=1",
      "displayed_link": "https://docs.nestjs.com › security › authentication",
      "snippet": "Clients start by authenticating with a username and password. Once authenticated, the server issues a JWT, which the client sends as a bearer token in the ...",
      "snippet_highlighted_words": [
        "Clients start by authenticating with a username and password"
      ],
      "sitelinks": {
        "inline": [
          {
            "title": "Implementing The ``sign In''...",
            "link": "https://docs.nestjs.com/security/authentication#:~:text=%29-,Implementing%20the%20%60%60Sign%20in%27%27%20endpoint"
          },
          {
            "title": "Learn The Right Way!",
            "link": "https://docs.nestjs.com/security/authentication#:~:text=Learn%20the%20right%20way%21"
          },
          {
            "title": "Jwt Token",
            "link": "https://docs.nestjs.com/security/authentication#:~:text=course-,JWT%20token"
          }
        ]
      },
      "about_this_result": {
        "source": {
          "description": "Clients start by authenticating with a username and password. Once authenticated, the server issues a JWT, which the client sends as a bearer token in the ...",
          "source_info_link": "https://docs.nestjs.com/security/authentication",
          "icon": "https://serpapi.com/images/i/iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y-mAAAALVBMVEVHcEzgI07gI07gI07gI07gI07gI07gI07gI07gI07gI07gI07gI07gI07gI07NqLYqAAAADnRSTlMAPnr0B1OesxZnx90rjVerX3QAAADJSURBVCiRlZJZDsMgDESNDZglmfsft0BIAgmt1PkAyU94GUP0jyTG8BUqA-Yb9Ciyc8yplGD2Zq-QR2QzJunIZGbwFDsKjKcM9cz5hZAoAnUg92a-BXXRCzLHI1Sf2vfTQ61qQOLIaVG56nDL-iedXDIPOJlo3Q9INBcectZjG5lcDNhK30agF7zcNzWJUwjOrvReeShZ2iY1dGjurNSHzNRXJNbdMJ6OtdtjQK2s285hdp9oIY6urkxWrLXtiO2SeeFlvDk0f_YPq8UTEoYLBHwAAAAASUVORK5CYII.png"
        },
        "languages": ["en"],
        "regions": ["US"]
      },
      "about_page_link": "https://www.google.com/search/about-this-result?origin=www.google.com&req=CpkBL2dvdG8_dXJsPUNBRVNad0hyT3pBVmtCRTZ4ak5iUXR0Wm9GV01LT0JKMnp6VkdoSVcxZVB3TFR6MDNTYTYzRmtuQzktTTRmNEUtZjhWbTFldG5xVVZjb3lCdzhzSk9HcFgxeTE0YTFEYl9ES1liRS1HbFZKVlhuOGtmOVNEenQ1cHFRZEhuNmZrSEtiZlhIY3Y1WDdvR3FFEgQaAggAGtMEEgIIARoAIgAqADIGCAMSAnVzOgBCBAgBEABKAFoAcgIIAXoAgkCrBAgAEAAYACAAKhoKBm5lc3RqcxWCqudAGgtpdjtwO25lc3RqcyonCgNqd3QVqecRQBoRand0YXV0aGVudGljYXRpb24aCGl2O3A7and0KkoKDmF1dGhlbnRpY2F0aW9uFdnrkUAaBGF1dGgaBXRva2VuGhFqd3RhdXRoZW50aWNhdGlvbhoTaXY7cDthdXRoZW50aWNhdGlvbjKZAS9nb3RvP3VybD1DQUVTWndIck96QVZrQkU2eGpOYlF0dFpvRldNS09CSjJ6elZHaElXMWVQd0xUejAzU2E2M0ZrbkM5LU00ZjRFLWY4Vm0xZXRucVVWY295Qnc4c0pPR3BYMXkxNGExRGJfREtZYkUtR2xWSlZYbjhrZjlTRHp0NXBxUWRIbjZma0hLYmZYSGN2NVg3b0dxRTpHPGI-QXV0aGVudGljYXRpb248L2I-IHwgPGI-TmVzdEpTPC9iPiAtIEEgcHJvZ3Jlc3NpdmUgTm9kZS5qcyBmcmFtZXdvcmtCqgE8Yj5DbGllbnRzIHN0YXJ0IGJ5IGF1dGhlbnRpY2F0aW5nIHdpdGggYSB1c2VybmFtZSBhbmQgcGFzc3dvcmQ8L2I-LiBPbmNlIGF1dGhlbnRpY2F0ZWQsIHRoZSBzZXJ2ZXIgaXNzdWVzIGEgSldULCB3aGljaCB0aGUgY2xpZW50IHNlbmRzIGFzIGEgYmVhcmVyIHRva2VuIGluIHRoZSZuYnNwOy4uLiICEAFIAFgAaAA",
      "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&req_token=CpkBL2dvdG8_dXJsPUNBRVNad0hyT3pBVmtCRTZ4ak5iUXR0Wm9GV01LT0JKMnp6VkdoSVcxZVB3TFR6MDNTYTYzRmtuQzktTTRmNEUtZjhWbTFldG5xVVZjb3lCdzhzSk9HcFgxeTE0YTFEYl9ES1liRS1HbFZKVlhuOGtmOVNEenQ1cHFRZEhuNmZrSEtiZlhIY3Y1WDdvR3FFEgQaAggAGtMEEgIIARoAIgAqADIGCAMSAnVzOgBCBAgBEABKAFoAcgIIAXoAgkCrBAgAEAAYACAAKhoKBm5lc3RqcxWCqudAGgtpdjtwO25lc3RqcyonCgNqd3QVqecRQBoRand0YXV0aGVudGljYXRpb24aCGl2O3A7and0KkoKDmF1dGhlbnRpY2F0aW9uFdnrkUAaBGF1dGgaBXRva2VuGhFqd3RhdXRoZW50aWNhdGlvbhoTaXY7cDthdXRoZW50aWNhdGlvbjKZAS9nb3RvP3VybD1DQUVTWndIck96QVZrQkU2eGpOYlF0dFpvRldNS09CSjJ6elZHaElXMWVQd0xUejAzU2E2M0ZrbkM5LU00ZjRFLWY4Vm0xZXRucVVWY295Qnc4c0pPR3BYMXkxNGExRGJfREtZYkUtR2xWSlZYbjhrZjlTRHp0NXBxUWRIbjZma0hLYmZYSGN2NVg3b0dxRTpHPGI-QXV0aGVudGljYXRpb248L2I-IHwgPGI-TmVzdEpTPC9iPiAtIEEgcHJvZ3Jlc3NpdmUgTm9kZS5qcyBmcmFtZXdvcmtCqgE8Yj5DbGllbnRzIHN0YXJ0IGJ5IGF1dGhlbnRpY2F0aW5nIHdpdGggYSB1c2VybmFtZSBhbmQgcGFzc3dvcmQ8L2I-LiBPbmNlIGF1dGhlbnRpY2F0ZWQsIHRoZSBzZXJ2ZXIgaXNzdWVzIGEgSldULCB3aGljaCB0aGUgY2xpZW50IHNlbmRzIGFzIGEgYmVhcmVyIHRva2VuIGluIHRoZSZuYnNwOy4uLiICEAFIAFgAaAA",
      "source": "NestJS",
      "read_more_link": "https://docs.nestjs.com/security/authentication#:~:text=Clients%20start%20by%20authenticating%20with,subsequent%20requests%20to%20prove%20authentication."
    },
    {
      "position": 2,
      "title": "NestJS Authentication Guide 2026 - JWT, Passport & Guards",
      "link": "https://encore.dev/articles/nestjs-authentication-guide",
      "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=CAESbwHrOzAV5a97mgtiaRr16_em5K5Ersl_5Zdae20WJ_q-DLc3rspzgZtnorT1reRqg2xWMbkROJXNVDKenj5oOHUjvVZGkBydKRCm1c-3GCG68wYeT8pxHcxAH0gu-OSfRIolmWjMa1c4wGeqRX__dw&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQFnoECBQQAQ&uoh=1",
      "displayed_link": "https://encore.dev › articles › nestjs-authentication-guide",
      "date": "Apr 19, 2026",
      "snippet": "This guide walks through what NestJS gives you, how to wire up JWT and Passport correctly, and where teams typically get stuck.",
      "snippet_highlighted_words": [
        "how to wire up JWT and Passport correctly"
      ],
      "about_this_result": {
        "source": {
          "description": "This guide walks through what NestJS gives you, how to wire up JWT and Passport correctly, and where teams typically get stuck.",
          "source_info_link": "https://encore.dev/articles/nestjs-authentication-guide",
          "icon": "https://serpapi.com/images/i/UklGRrAAAABXRUJQVlA4IKQAAABQBACdASocABwAPtE-tFooIigoFAEAGglnAADq5lrifGYRn7HV0YXAMh1gAP78pdSVG_pVJu34qrfdBRX8grEz5jtcfLH8VSZL68eZgMiMS3O_opGtu_nnVQveoQFlBmoz7ZDVwQS5GAOSe1zT7_WphkbOW8wRqNPKbz681OIUzCOuCIMTJaawH-3PsKssuABeNVVnoi8ZyEvynSc_C3j58oAAAA.webp"
        },
        "languages": ["en"],
        "regions": ["US"]
      },
      "about_page_link": "https://www.google.com/search/about-this-result?origin=www.google.com&req=CqQBL2dvdG8_dXJsPUNBRVNid0hyT3pBVjVhOTdtZ3RpYVJyMTZfZW01SzVFcnNsXzVaZGFlMjBXSl9xLURMYzNyc3B6Z1p0bm9yVDFyZVJxZzJ4V01ia1JPSlhOVkRLZW5qNW9PSFVqdlZaR2tCeWRLUkNtMWMtM0dDRzY4d1llVDhweEhjeEFIMGd1LU9TZlJJb2xtV2pNYTFjNHdHZXFSWF9fZHcSBBoCCAAaugQSABoAIgAqADIGCAMSAnVzOgBCBAgBEABKAFoAcgB6AIJAlgQIABAAGAAgACoaCgZuZXN0anMVfHG_QBoLaXY7cDtuZXN0anMqJwoDand0FfFmpEAaEWp3dGF1dGhlbnRpY2F0aW9uGghpdjtwO2p3dCpKCg5hdXRoZW50aWNhdGlvbhUIg6hAGgRhdXRoGgV0b2tlbhoRand0YXV0aGVudGljYXRpb24aE2l2O3A7YXV0aGVudGljYXRpb24ypAEvZ290bz91cmw9Q0FFU2J3SHJPekFWNWE5N21ndGlhUnIxNl9lbTVLNUVyc2xfNVpkYWUyMFdKX3EtRExjM3JzcHpnWnRub3JUMXJlUnFnMnhXTWJrUk9KWE5WREtlbmo1b09IVWp2VlpHa0J5ZEtSQ20xYy0zR0NHNjh3WWVUOHB4SGN4QUgwZ3UtT1NmUklvbG1Xak1hMWM0d0dlcVJYX19kdzpLPGI-TmVzdEpTIEF1dGhlbnRpY2F0aW9uPC9iPiBHdWlkZSAyMDI2IC0gPGI-SldUPC9iPiwgUGFzc3BvcnQgJmFtcDsgR3VhcmRzQoYBVGhpcyBndWlkZSB3YWxrcyB0aHJvdWdoIHdoYXQgTmVzdEpTIGdpdmVzIHlvdSwgPGI-aG93IHRvIHdpcmUgdXAgSldUIGFuZCBQYXNzcG9ydCBjb3JyZWN0bHk8L2I-LCBhbmQgd2hlcmUgdGVhbXMgdHlwaWNhbGx5IGdldCBzdHVjay4iAhABSABYAGgA",
      "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&req_token=CqQBL2dvdG8_dXJsPUNBRVNid0hyT3pBVjVhOTdtZ3RpYVJyMTZfZW01SzVFcnNsXzVaZGFlMjBXSl9xLURMYzNyc3B6Z1p0bm9yVDFyZVJxZzJ4V01ia1JPSlhOVkRLZW5qNW9PSFVqdlZaR2tCeWRLUkNtMWMtM0dDRzY4d1llVDhweEhjeEFIMGd1LU9TZlJJb2xtV2pNYTFjNHdHZXFSWF9fZHcSBBoCCAAaugQSABoAIgAqADIGCAMSAnVzOgBCBAgBEABKAFoAcgB6AIJAlgQIABAAGAAgACoaCgZuZXN0anMVfHG_QBoLaXY7cDtuZXN0anMqJwoDand0FfFmpEAaEWp3dGF1dGhlbnRpY2F0aW9uGghpdjtwO2p3dCpKCg5hdXRoZW50aWNhdGlvbhUIg6hAGgRhdXRoGgV0b2tlbhoRand0YXV0aGVudGljYXRpb24aE2l2O3A7YXV0aGVudGljYXRpb24ypAEvZ290bz91cmw9Q0FFU2J3SHJPekFWNWE5N21ndGlhUnIxNl9lbTVLNUVyc2xfNVpkYWUyMFdKX3EtRExjM3JzcHpnWnRub3JUMXJlUnFnMnhXTWJrUk9KWE5WREtlbmo1b09IVWp2VlpHa0J5ZEtSQ20xYy0zR0NHNjh3WWVUOHB4SGN4QUgwZ3UtT1NmUklvbG1Xak1hMWM0d0dlcVJYX19kdzpLPGI-TmVzdEpTIEF1dGhlbnRpY2F0aW9uPC9iPiBHdWlkZSAyMDI2IC0gPGI-SldUPC9iPiwgUGFzc3BvcnQgJmFtcDsgR3VhcmRzQoYBVGhpcyBndWlkZSB3YWxrcyB0aHJvdWdoIHdoYXQgTmVzdEpTIGdpdmVzIHlvdSwgPGI-aG93IHRvIHdpcmUgdXAgSldUIGFuZCBQYXNzcG9ydCBjb3JyZWN0bHk8L2I-LCBhbmQgd2hlcmUgdGVhbXMgdHlwaWNhbGx5IGdldCBzdHVjay4iAhABSABYAGgA",
      "source": "encore.dev"
    },
    {
      "position": 3,
      "title": "Integrating JWT for Authentication in NestJS",
      "link": "https://codesignal.com/learn/courses/securing-your-nestjs-app/lessons/integrating-jwt-for-authentication-in-nestjs",
      "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=CAESqgEB6zswFXGdthh8_OaW__FDvov6cEx7R_EoMQi107DcbUHDVxC-Ik7undDSopj9PyMJi_f90zQhQX1PHCp3tRCW058BNFlSP_mpEirdu62j8kjEDP-4kYqQdiNYHTOyfECPLqTYi8HWf891hSSsHBjJvfPAanKQSdSiD5uLXHwrHXFuArDfY95g2E0mp8yw_87eFe62uLoIZLUh6XiLyNa9gG8eJ3LWcooHBQ&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQFnoECBIQAQ&uoh=1",
      "displayed_link": "https://codesignal.com › learn › courses › lessons › inte...",
      "snippet": "In this lesson, we explored how to integrate JSON Web Tokens (JWT) for authentication in a NestJS application. WT (JSON Web Tokens)",
      "snippet_highlighted_words": [
        "how to integrate JSON Web Tokens (JWT) for authentication"
      ],
      "about_this_result": {
        "source": {
          "description": "In this lesson, we explored how to integrate JSON Web Tokens (JWT) for authentication in a NestJS application. WT (JSON Web Tokens)",
          "source_info_link": "https://codesignal.com/learn/courses/securing-your-nestjs-app/lessons/integrating-jwt-for-authentication-in-nestjs",
          "icon": "https://serpapi.com/images/i/UklGRhoBAABXRUJQVlA4IA4BAABwBgCdASocABwAPtEutFooIagoGAEAGglsAJ0yhHmYgWoC7YN5fIiwVqT3D3-d6Zta0m0ddjekcEJeYwAA_abvDsVvtWsceUMeI4gidbcwLsM04tO-gbfYS2i2A_pJtOSFjRK_cHEcrKX2Gsubz5YyLN__xIcu-YixgHA8eovz9ahn4n6GDPn7kfSGica4L93YbA0u7uxjSQH-_hYa30J7Z-clPisu8NY_cBHSMFrHXMIMvHbtnYpieaZ7SemHtXahIZZ93F41N79q2Mo_-2-976qRkiF_SQbenva5mwe7WLRmOlHw7tt7rIWcqjeT1rnqvMOnc2HWL1DYAdU6rVF7bet0kJcU6c4Wy0j1AAA.webp"
        },
        "languages": ["en"],
        "regions": ["US"]
      },
      "about_page_link": "https://www.google.com/search/about-this-result?origin=www.google.com&req=CvQBL2dvdG8_dXJsPUNBRVNxZ0VCNnpzd0ZYR2R0aGg4X09hV19fRkR2b3Y2Y0V4N1JfRW9NUWkxMDdEY2JVSERWeEMtSWs3dW5kRFNvcGo5UHlNSmlfZjkwelFoUVgxUEhDcDN0UkNXMDU4Qk5GbFNQX21wRWlyZHU2Mmo4a2pFRFAtNGtZcVFkaU5ZSFRPeWZFQ1BMcVRZaThIV2Y4OTFoU1NzSEJqSnZmUEFhbktRU2RTaUQ1dUxYSHdySFhGdUFyRGZZOTVnMkUwbXA4eXdfODdlRmU2MnVMb0laTFVoNlhpTHlOYTlnRzhlSjNMV2Nvb0hCURIEGgIIABqXBRIAGgAiACoAMgYIAxICdXM6AEIECAEQAEoAWgByAHoAgkDzBAgAEAAYACAAKhoKBm5lc3RqcxVEcrJAGgtpdjtwO25lc3RqcyonCgNqd3QVGpnFQBoRand0YXV0aGVudGljYXRpb24aCGl2O3A7and0KkoKDmF1dGhlbnRpY2F0aW9uFQD9p0AaBGF1dGgaBXRva2VuGhFqd3RhdXRoZW50aWNhdGlvbhoTaXY7cDthdXRoZW50aWNhdGlvbjL0AS9nb3RvP3VybD1DQUVTcWdFQjZ6c3dGWEdkdGhoOF9PYVdfX0ZEdm92NmNFeDdSX0VvTVFpMTA3RGNiVUhEVnhDLUlrN3VuZERTb3BqOVB5TUppX2Y5MHpRaFFYMVBIQ3AzdFJDVzA1OEJORmxTUF9tcEVpcmR1NjJqOGtqRURQLTRrWXFRZGlOWUhUT3lmRUNQTHFUWWk4SFdmODkxaFNTc0hCakp2ZlBBYW5LUVNkU2lENXVMWEh3ckhYRnVBckRmWTk1ZzJFMG1wOHl3Xzg3ZUZlNjJ1TG9JWkxVaDZYaUx5TmE5Z0c4ZUozTFdjb29IQlE6VEludGVncmF0aW5nIDxiPkpXVDwvYj4gZm9yIDxiPkF1dGhlbnRpY2F0aW9uPC9iPiBpbiA8Yj5OZXN0SlM8L2I-IHwgQ29kZVNpZ25hbCBMZWFybkKKAUluIHRoaXMgbGVzc29uLCB3ZSBleHBsb3JlZCA8Yj5ob3cgdG8gaW50ZWdyYXRlIEpTT04gV2ViIFRva2VucyAoSldUKSBmb3IgYXV0aGVudGljYXRpb248L2I-IGluIGEgTmVzdEpTIGFwcGxpY2F0aW9uLiBXVCAoSlNPTiBXZWIgVG9rZW5zKSICEAFIAFgAaAA",
      "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&req_token=CvQBL2dvdG8_dXJsPUNBRVNxZ0VCNnpzd0ZYR2R0aGg4X09hV19fRkR2b3Y2Y0V4N1JfRW9NUWkxMDdEY2JVSERWeEMtSWs3dW5kRFNvcGo5UHlNSmlfZjkwelFoUVgxUEhDcDN0UkNXMDU4Qk5GbFNQX21wRWlyZHU2Mmo4a2pFRFAtNGtZcVFkaU5ZSFRPeWZFQ1BMcVRZaThIV2Y4OTFoU1NzSEJqSnZmUEFhbktRU2RTaUQ1dUxYSHdySFhGdUFyRGZZOTVnMkUwbXA4eXdfODdlRmU2MnVMb0laTFVoNlhpTHlOYTlnRzhlSjNMV2Nvb0hCURIEGgIIABqXBRIAGgAiACoAMgYIAxICdXM6AEIECAEQAEoAWgByAHoAgkDzBAgAEAAYACAAKhoKBm5lc3RqcxVEcrJAGgtpdjtwO25lc3RqcyonCgNqd3QVGpnFQBoRand0YXV0aGVudGljYXRpb24aCGl2O3A7and0KkoKDmF1dGhlbnRpY2F0aW9uFQD9p0AaBGF1dGgaBXRva2VuGhFqd3RhdXRoZW50aWNhdGlvbhoTaXY7cDthdXRoZW50aWNhdGlvbjL0AS9nb3RvP3VybD1DQUVTcWdFQjZ6c3dGWEdkdGhoOF9PYVdfX0ZEdm92NmNFeDdSX0VvTVFpMTA3RGNiVUhEVnhDLUlrN3VuZERTb3BqOVB5TUppX2Y5MHpRaFFYMVBIQ3AzdFJDVzA1OEJORmxTUF9tcEVpcmR1NjJqOGtqRURQLTRrWXFRZGlOWUhUT3lmRUNQTHFUWWk4SFdmODkxaFNTc0hCakp2ZlBBYW5LUVNkU2lENXVMWEh3ckhYRnVBckRmWTk1ZzJFMG1wOHl3Xzg3ZUZlNjJ1TG9JWkxVaDZYaUx5TmE5Z0c4ZUozTFdjb29IQlE6VEludGVncmF0aW5nIDxiPkpXVDwvYj4gZm9yIDxiPkF1dGhlbnRpY2F0aW9uPC9iPiBpbiA8Yj5OZXN0SlM8L2I-IHwgQ29kZVNpZ25hbCBMZWFybkKKAUluIHRoaXMgbGVzc29uLCB3ZSBleHBsb3JlZCA8Yj5ob3cgdG8gaW50ZWdyYXRlIEpTT04gV2ViIFRva2VucyAoSldUKSBmb3IgYXV0aGVudGljYXRpb248L2I-IGluIGEgTmVzdEpTIGFwcGxpY2F0aW9uLiBXVCAoSlNPTiBXZWIgVG9rZW5zKSICEAFIAFgAaAA",
      "source": "CodeSignal"
    },
    {
      "position": 4,
      "title": "(NestJS-9)Authentication in NestJS with JWT - Bhargava Chary",
      "link": "https://bhargavacharyb.medium.com/nestjs-9-authentication-and-authorization-in-nestjs-with-jwt-and-cookies-a-practical-eb89221db927",
      "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=CAESvAEB6zswFaexgjSc3crFdB4RzQ5eJN1Y7jQCO5KHoHWvT0VANdOL0cQyQXGAcZktYM66Vfi7WB1bZFpkIRjYxCkaCMNIMURQRROf9r_ZJP8q-xj9JbhuOWNfMGOf0D5YvduCXml8BPjzjONFfnwvkwQZ0wivjE3bvePoCx-iXX1RY09gLnC3yT_8rd1fUIfQQILQZAkhO_rm5saIv6QUMn9dpB79qklhN1fEIUa-GyqZhEmZIh4P_7RJa0x-gA&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQFnoECBYQAQ&uoh=1",
      "displayed_link": "10+ likes · 1 year ago",
      "snippet": "In this article, we'll walk you through setting up authentication and authorization in NestJS using JWT (JSON Web Token) for session management ...",
      "snippet_highlighted_words": [
        "setting up authentication and authorization in NestJS using JWT"
      ],
      "about_this_result": {
        "source": {
          "description": "In this article, we'll walk you through setting up authentication and authorization in NestJS using JWT (JSON Web Token) for session management ...",
          "source_info_link": "https://bhargavacharyb.medium.com/nestjs-9-authentication-and-authorization-in-nestjs-with-jwt-and-cookies-a-practical-eb89221db927",
          "icon": "https://serpapi.com/images/i/UklGRk4BAABXRUJQVlA4IEIBAABQBwCdASocABwAPtEytFooIigoGAEAGglpAAznf1Vcxech6G_5Hqq9U30AP1mGqvqdUgmnZ4poKzlLrvAx4-Mst8AAAP7CCyYY03O28r5JLioHtbFiVFHnCJyb2nNCBNRW56SV-XlrfT7Q3tRrlur0xQidpwCAO83snjRUs4X8b4Vd29vh5FZY0ANnK5gA7UA4K8ogU94vGfbJKfPsedJPrrnbqSsGt4cVKmMg9gk3bc-IvDOh_3W7s9bYtT-jv2vzP7YBkzzvo38BMP0T5w-2nGchsxdZJ7p07VcBr7iyjWnewYq1_h32TqlV751Dr3L7qdpfQi7DjV3S_YvIb08XwjDmGVhfc871zz-7kEket3qOqhOkfPVdCTnyCcO29XitwYDfKoDwpCklX7VO65n-8y2Pa_-Mz7rzPAFFzF7oAAAA.webp"
        },
        "languages": ["en"],
        "regions": ["US"]
      },
      "about_page_link": "https://www.google.com/search/about-this-result?origin=www.google.com&req=CowCL2dvdG8_dXJsPUNBRVN2QUVCNnpzd0ZhZXhnalNjM2NyRmRCNFJ6UTVlSk4xWTdqUUNPNUtIb0hXdlQwVkFOZE9MMGNReVFYR0FjWmt0WU02NlZmaTdXQjFiWkZwa0lSall4Q2thQ01OSU1VUlFSUk9mOXJfWkpQOHEteGo5SmJodU9XTmZNR09mMEQ1WXZkdUNYbWw4QlBqempPTkZmbnd2a3dRWjB3aXZqRTNidmVQb0N4LWlYWDFSWTA5Z0xuQzN5VF84cmQxZlVJZlFRSUxRWkFraE9fcm01c2FJdjZRVU1uOWRwQjc5cWtsaE4xZkVJVWEtR3lxWmhFbVpJaDRQXzdSSmEweC1nQRIEGgIIABrMBRIAGgAiACoAMgYIAxICdXM6AEIECAEQAEoAWgByAHoAgkCoBQgAEAAYACAAKhoKBm5lc3RqcxWcGrBAGgtpdjtwO25lc3RqcyonCgNqd3QVBn2mQBoRand0YXV0aGVudGljYXRpb24aCGl2O3A7and0KkoKDmF1dGhlbnRpY2F0aW9uFWqEtkAaBGF1dGgaBXRva2VuGhFqd3RhdXRoZW50aWNhdGlvbhoTaXY7cDthdXRoZW50aWNhdGlvbjKMAi9nb3RvP3VybD1DQUVTdkFFQjZ6c3dGYWV4Z2pTYzNjckZkQjRSelE1ZUpOMVk3alFDTzVLSG9IV3ZUMFZBTmRPTDBjUXlRWEdBY1prdFlNNjZWZmk3V0IxYlpGcGtJUmpZeENrYUNNTklNVVJRUlJPZjlyX1pKUDhxLXhqOUpiaHVPV05mTUdPZjBENVl2ZHVDWG1sOEJQanpqT05GZm53dmt3UVowd2l2akUzYnZlUG9DeC1pWFgxUlkwOWdMbkMzeVRfOHJkMWZVSWZRUUlMUVpBa2hPX3JtNXNhSXY2UVVNbjlkcEI3OXFrbGhOMWZFSVVhLUd5cVpoRW1aSWg0UF83UkphMHgtZ0E6WCg8Yj5OZXN0SlM8L2I-LTkpPGI-QXV0aGVudGljYXRpb248L2I-IGluIDxiPk5lc3RKUzwvYj4gd2l0aCA8Yj5KV1Q8L2I-IC0gQmhhcmdhdmEgQ2hhcnlCowFJbiB0aGlzIGFydGljbGUsIHdlJiMzOTtsbCB3YWxrIHlvdSB0aHJvdWdoIDxiPnNldHRpbmcgdXAgYXV0aGVudGljYXRpb24gYW5kIGF1dGhvcml6YXRpb24gaW4gTmVzdEpTIHVzaW5nIEpXVDwvYj4gKEpTT04gV2ViIFRva2VuKSBmb3Igc2Vzc2lvbiBtYW5hZ2VtZW50Jm5ic3A7Li4uIgIQAUgAWABoAA",
      "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&req_token=CowCL2dvdG8_dXJsPUNBRVN2QUVCNnpzd0ZhZXhnalNjM2NyRmRCNFJ6UTVlSk4xWTdqUUNPNUtIb0hXdlQwVkFOZE9MMGNReVFYR0FjWmt0WU02NlZmaTdXQjFiWkZwa0lSall4Q2thQ01OSU1VUlFSUk9mOXJfWkpQOHEteGo5SmJodU9XTmZNR09mMEQ1WXZkdUNYbWw4QlBqempPTkZmbnd2a3dRWjB3aXZqRTNidmVQb0N4LWlYWDFSWTA5Z0xuQzN5VF84cmQxZlVJZlFRSUxRWkFraE9fcm01c2FJdjZRVU1uOWRwQjc5cWtsaE4xZkVJVWEtR3lxWmhFbVpJaDRQXzdSSmEweC1nQRIEGgIIABrMBRIAGgAiACoAMgYIAxICdXM6AEIECAEQAEoAWgByAHoAgkCoBQgAEAAYACAAKhoKBm5lc3RqcxWcGrBAGgtpdjtwO25lc3RqcyonCgNqd3QVBn2mQBoRand0YXV0aGVudGljYXRpb24aCGl2O3A7and0KkoKDmF1dGhlbnRpY2F0aW9uFWqEtkAaBGF1dGgaBXRva2VuGhFqd3RhdXRoZW50aWNhdGlvbhoTaXY7cDthdXRoZW50aWNhdGlvbjKMAi9nb3RvP3VybD1DQUVTdkFFQjZ6c3dGYWV4Z2pTYzNjckZkQjRSelE1ZUpOMVk3alFDTzVLSG9IV3ZUMFZBTmRPTDBjUXlRWEdBY1prdFlNNjZWZmk3V0IxYlpGcGtJUmpZeENrYUNNTklNVVJRUlJPZjlyX1pKUDhxLXhqOUpiaHVPV05mTUdPZjBENVl2ZHVDWG1sOEJQanpqT05GZm53dmt3UVowd2l2akUzYnZlUG9DeC1pWFgxUlkwOWdMbkMzeVRfOHJkMWZVSWZRUUlMUVpBa2hPX3JtNXNhSXY2UVVNbjlkcEI3OXFrbGhOMWZFSVVhLUd5cVpoRW1aSWg0UF83UkphMHgtZ0E6WCg8Yj5OZXN0SlM8L2I-LTkpPGI-QXV0aGVudGljYXRpb248L2I-IGluIDxiPk5lc3RKUzwvYj4gd2l0aCA8Yj5KV1Q8L2I-IC0gQmhhcmdhdmEgQ2hhcnlCowFJbiB0aGlzIGFydGljbGUsIHdlJiMzOTtsbCB3YWxrIHlvdSB0aHJvdWdoIDxiPnNldHRpbmcgdXAgYXV0aGVudGljYXRpb24gYW5kIGF1dGhvcml6YXRpb24gaW4gTmVzdEpTIHVzaW5nIEpXVDwvYj4gKEpTT04gV2ViIFRva2VuKSBmb3Igc2Vzc2lvbiBtYW5hZ2VtZW50Jm5ic3A7Li4uIgIQAUgAWABoAA",
      "source": "Medium · Bhargava Chary"
    },
    {
      "position": 5,
      "title": "passport | NestJS - A progressive Node.js framework",
      "link": "https://docs.nestjs.com/recipes/passport",
      "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=CAESYAHrOzAV0vJwbVJZzVV6aaFVNZKBV-Y7lXbvtJOkwoc51wMfliIKa47Rf8h4yGfhfHovmaSqrNC1YVg_nH9eEK9J1coJPwIXGfGmYWfGwr1mN_NAZ8t3aZBaBVmTlRJRVg&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQFnoECBsQAQ&uoh=1",
      "displayed_link": "https://docs.nestjs.com › recipes › passport",
      "snippet": "Passport checks the JWT's expiration time automatically, so your application doesn't have to. This completes our JWT authentication implementation.",
      "snippet_highlighted_words": [
        "Passport checks the JWT's expiration time automatically"
      ],
      "about_this_result": {
        "source": {
          "description": "Passport checks the JWT's expiration time automatically, so your application doesn't have to. This completes our JWT authentication implementation.",
          "source_info_link": "https://docs.nestjs.com/recipes/passport",
          "icon": "https://serpapi.com/images/i/iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y-mAAAALVBMVEVHcEzgI07gI07gI07gI07gI07gI07gI07gI07gI07gI07gI07gI07gI07gI07NqLYqAAAADnRSTlMAPnr0B1OesxZnx90rjVerX3QAAADJSURBVCiRlZJZDsMgDESNDZglmfsft0BIAgmt1PkAyU94GUP0jyTG8BUqA-Yb9Ciyc8yplGD2Zq-QR2QzJunIZGbwFDsKjKcM9cz5hZAoAnUg92a-BXXRCzLHI1Sf2vfTQ61qQOLIaVG56nDL-iedXDIPOJlo3Q9INBcectZjG5lcDNhK30agF7zcNzWJUwjOrvReeShZ2iY1dGjurNSHzNRXJNbdMJ6OtdtjQK2s285hdp9oIY6urkxWrLXtiO2SeeFlvDk0f_YPq8UTEoYLBHwAAAAASUVORK5CYII.png"
        },
        "languages": ["en"],
        "regions": ["US"]
      },
      "about_page_link": "https://www.google.com/search/about-this-result?origin=www.google.com&req=CpABL2dvdG8_dXJsPUNBRVNZQUhyT3pBVjB2SndiVkpaelZWNmFhRlZOWktCVi1ZN2xYYnZ0Sk9rd29jNTF3TWZsaUlLYTQ3UmY4aDR5R2ZoZkhvdm1hU3FyTkMxWVZnX25IOWVFSzlKMWNvSlB3SVhHZkdtWVdmR3dyMW1OX05BWjh0M2FaQmFCVm1UbFJKUlZnEgQaAggAGrMEEgIIARoAIgAqADIGCAMSAnVzOgBCBAgBEABKAFoAcgB6AIJAjQQIABAAGAAgACoaCgZuZXN0anMV_pPsQBoLaXY7cDtuZXN0anMqJwoDand0FbXk5T8aEWp3dGF1dGhlbnRpY2F0aW9uGghpdjtwO2p3dCpKCg5hdXRoZW50aWNhdGlvbhWDC_M_GgRhdXRoGgV0b2tlbhoRand0YXV0aGVudGljYXRpb24aE2l2O3A7YXV0aGVudGljYXRpb24ykAEvZ290bz91cmw9Q0FFU1lBSHJPekFWMHZKd2JWSlp6VlY2YWFGVk5aS0JWLVk3bFhidnRKT2t3b2M1MXdNZmxpSUthNDdSZjhoNHlHZmhmSG92bWFTcXJOQzFZVmdfbkg5ZUVLOUoxY29KUHdJWEdmR21ZV2ZHd3IxbU5fTkFaOHQzYVpCYUJWbVRsUkpSVmc6OnBhc3Nwb3J0IHwgPGI-TmVzdEpTPC9iPiAtIEEgcHJvZ3Jlc3NpdmUgTm9kZS5qcyBmcmFtZXdvcmtCogE8Yj5QYXNzcG9ydCBjaGVja3MgdGhlIEpXVCYjMzk7cyBleHBpcmF0aW9uIHRpbWUgYXV0b21hdGljYWxseTwvYj4sIHNvIHlvdXIgYXBwbGljYXRpb24gZG9lc24mIzM5O3QgaGF2ZSB0by4gVGhpcyBjb21wbGV0ZXMgb3VyIEpXVCBhdXRoZW50aWNhdGlvbiBpbXBsZW1lbnRhdGlvbi4iAhABSABYAGgA",
      "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&req_token=CpABL2dvdG8_dXJsPUNBRVNZQUhyT3pBVjB2SndiVkpaelZWNmFhRlZOWktCVi1ZN2xYYnZ0Sk9rd29jNTF3TWZsaUlLYTQ3UmY4aDR5R2ZoZkhvdm1hU3FyTkMxWVZnX25IOWVFSzlKMWNvSlB3SVhHZkdtWVdmR3dyMW1OX05BWjh0M2FaQmFCVm1UbFJKUlZnEgQaAggAGrMEEgIIARoAIgAqADIGCAMSAnVzOgBCBAgBEABKAFoAcgB6AIJAjQQIABAAGAAgACoaCgZuZXN0anMV_pPsQBoLaXY7cDtuZXN0anMqJwoDand0FbXk5T8aEWp3dGF1dGhlbnRpY2F0aW9uGghpdjtwO2p3dCpKCg5hdXRoZW50aWNhdGlvbhWDC_M_GgRhdXRoGgV0b2tlbhoRand0YXV0aGVudGljYXRpb24aE2l2O3A7YXV0aGVudGljYXRpb24ykAEvZ290bz91cmw9Q0FFU1lBSHJPekFWMHZKd2JWSlp6VlY2YWFGVk5aS0JWLVk3bFhidnRKT2t3b2M1MXdNZmxpSUthNDdSZjhoNHlHZmhmSG92bWFTcXJOQzFZVmdfbkg5ZUVLOUoxY29KUHdJWEdmR21ZV2ZHd3IxbU5fTkFaOHQzYVpCYUJWbVRsUkpSVmc6OnBhc3Nwb3J0IHwgPGI-TmVzdEpTPC9iPiAtIEEgcHJvZ3Jlc3NpdmUgTm9kZS5qcyBmcmFtZXdvcmtCogE8Yj5QYXNzcG9ydCBjaGVja3MgdGhlIEpXVCYjMzk7cyBleHBpcmF0aW9uIHRpbWUgYXV0b21hdGljYWxseTwvYj4sIHNvIHlvdXIgYXBwbGljYXRpb24gZG9lc24mIzM5O3QgaGF2ZSB0by4gVGhpcyBjb21wbGV0ZXMgb3VyIEpXVCBhdXRoZW50aWNhdGlvbiBpbXBsZW1lbnRhdGlvbi4iAhABSABYAGgA",
      "source": "NestJS",
      "read_more_link": "https://docs.nestjs.com/recipes/passport#:~:text=Passport%20checks%20the%20JWT's%20expiration,completes%20our%20JWT%20authentication%20implementation."
    },
    {
      "position": 6,
      "title": "How to Add JWT-Based Authentication in NestJS",
      "link": "https://www.freecodecamp.org/news/how-to-add-jwt-based-authentication-in-nest-js/",
      "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=CAESiQEB6zswFd5dGEvHa3g1JSqr-DXBtlAIH8LoJaNqbqzq2W8DdCfZfM6cfsaPk4zXqeyNicJf4K8jwfqz2WBOdMLlesv3cOP53UI3VpyeZe60uuvn_vLtsUmSze2GjOXMP9lcOg5uVvUS-DGykubJOLSAnU_B43Fkw0jP4GRM3dB4Wx5nOBDZ8XiZ4Q&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQFnoECBAQAQ&uoh=1",
      "displayed_link": "https://www.freecodecamp.org › news › how-to-add-jw...",
      "date": "Jul 31, 2024",
      "snippet": "This tutorial will guide you through building a JWT-based user authentication in NestJS and MongoDb. NestJS is a powerful Node.js framework for ...",
      "snippet_highlighted_words": ["JWT-based user authentication in NestJS"],
      "about_this_result": {
        "source": {
          "description": "This tutorial will guide you through building a JWT-based user authentication in NestJS and MongoDb. NestJS is a powerful Node.js framework for ...",
          "source_info_link": "https://www.freecodecamp.org/news/how-to-add-jwt-based-authentication-in-nest-js/",
          "icon": "https://serpapi.com/images/i/UklGRi4BAABXRUJQVlA4ICIBAABwBgCdASocABwAPtFAtFooIqgoFAEAGgllAL3U88txLNo9AagAHYLWFoNPPqVvqec8dAdsVG9KvrBFIuAA_vVrVpvAe0f4hUL8M0rI-gVAafy7GLEHhs7uno0NREFqQY3JQ9u_B2ptSXGDL-P18r8MAZJ5i9K8LPk9tkPdT4E05fmrUgHApCzZIK6AAyYVzOpHRjKCeT_-g37Ir75bIwQ0xO9_-ugW8XpAESnfJIiw_-QG2xOSo8vjRa12x34P0O0AtrlvP8OcaRl8_-21BfAzgYvnC8_38fqOM4Nt_nKEn023vQgCHp1CnS2d4r_vL8t_Z3X0fQ0F9MR5__hJcLgifDxuKE9yIjN_MV792xfoamKrPHf77ewE90QytE36vAAAAA.webp"
        },
        "languages": ["en"],
        "regions": ["US"]
      },
      "about_page_link": "https://www.google.com/search/about-this-result?origin=www.google.com&req=CsgBL2dvdG8_dXJsPUNBRVNpUUVCNnpzd0ZkNWRHRXZIYTNnMUpTcXItRFhCdGxBSUg4TG9KYU5xYnF6cTJXOERkQ2ZaZk02Y2ZzYVBrNHpYcWV5TmljSmY0Szhqd2ZxejJXQk9kTUxsZXN2M2NPUDUzVUkzVnB5ZVplNjB1dXZuX3ZMdHNVbVN6ZTJHak9YTVA5bGNPZzV1VnZVUy1ER3lrdWJKT0xTQW5VX0I0M0ZrdzBqUDRHUk0zZEI0V3g1bk9CRFo4WGlaNFESBBoCCAAa8AQSAggAGgAiACoAMgYIAhICdXM6AEIECAEQAEoAWgByAHoAgkDKBAgAEAAYACAAKhoKBm5lc3RqcxVevaNAGgtpdjtwO25lc3RqcyonCgNqd3QVErudQBoRand0YXV0aGVudGljYXRpb24aCGl2O3A7and0KkoKDmF1dGhlbnRpY2F0aW9uFRQPsUAaBGF1dGgaBXRva2VuGhFqd3RhdXRoZW50aWNhdGlvbhoTaXY7cDthdXRoZW50aWNhdGlvbjLIAS9nb3RvP3VybD1DQUVTaVFFQjZ6c3dGZDVkR0V2SGEzZzFKU3FyLURYQnRsQUlIOExvSmFOcWJxenEyVzhEZENmWmZNNmNmc2FQazR6WHFleU5pY0pmNEs4andmcXoyV0JPZE1MbGVzdjNjT1A1M1VJM1ZweWVaZTYwdXV2bl92THRzVW1TemUyR2pPWE1QOWxjT2c1dVZ2VVMtREd5a3ViSk9MU0FuVV9CNDNGa3cwalA0R1JNM2RCNFd4NW5PQkRaOFhpWjRROkJIb3cgdG8gQWRkIDxiPkpXVDwvYj4tQmFzZWQgPGI-QXV0aGVudGljYXRpb248L2I-IGluIDxiPk5lc3RKUzwvYj5CnwFUaGlzIHR1dG9yaWFsIHdpbGwgZ3VpZGUgeW91IHRocm91Z2ggYnVpbGRpbmcgYSA8Yj5KV1QtYmFzZWQgdXNlciBhdXRoZW50aWNhdGlvbiBpbiBOZXN0SlM8L2I-IGFuZCBNb25nb0RiLiBOZXN0SlMgaXMgYSBwb3dlcmZ1bCBOb2RlLmpzIGZyYW1ld29yayBmb3ImbmJzcDsuLi4iAhABSABYAGgA",
      "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&req_token=CsgBL2dvdG8_dXJsPUNBRVNpUUVCNnpzd0ZkNWRHRXZIYTNnMUpTcXItRFhCdGxBSUg4TG9KYU5xYnF6cTJXOERkQ2ZaZk02Y2ZzYVBrNHpYcWV5TmljSmY0Szhqd2ZxejJXQk9kTUxsZXN2M2NPUDUzVUkzVnB5ZVplNjB1dXZuX3ZMdHNVbVN6ZTJHak9YTVA5bGNPZzV1VnZVUy1ER3lrdWJKT0xTQW5VX0I0M0ZrdzBqUDRHUk0zZEI0V3g1bk9CRFo4WGlaNFESBBoCCAAa8AQSAggAGgAiACoAMgYIAhICdXM6AEIECAEQAEoAWgByAHoAgkDKBAgAEAAYACAAKhoKBm5lc3RqcxVevaNAGgtpdjtwO25lc3RqcyonCgNqd3QVErudQBoRand0YXV0aGVudGljYXRpb24aCGl2O3A7and0KkoKDmF1dGhlbnRpY2F0aW9uFRQPsUAaBGF1dGgaBXRva2VuGhFqd3RhdXRoZW50aWNhdGlvbhoTaXY7cDthdXRoZW50aWNhdGlvbjLIAS9nb3RvP3VybD1DQUVTaVFFQjZ6c3dGZDVkR0V2SGEzZzFKU3FyLURYQnRsQUlIOExvSmFOcWJxenEyVzhEZENmWmZNNmNmc2FQazR6WHFleU5pY0pmNEs4andmcXoyV0JPZE1MbGVzdjNjT1A1M1VJM1ZweWVaZTYwdXV2bl92THRzVW1TemUyR2pPWE1QOWxjT2c1dVZ2VVMtREd5a3ViSk9MU0FuVV9CNDNGa3cwalA0R1JNM2RCNFd4NW5PQkRaOFhpWjRROkJIb3cgdG8gQWRkIDxiPkpXVDwvYj4tQmFzZWQgPGI-QXV0aGVudGljYXRpb248L2I-IGluIDxiPk5lc3RKUzwvYj5CnwFUaGlzIHR1dG9yaWFsIHdpbGwgZ3VpZGUgeW91IHRocm91Z2ggYnVpbGRpbmcgYSA8Yj5KV1QtYmFzZWQgdXNlciBhdXRoZW50aWNhdGlvbiBpbiBOZXN0SlM8L2I-IGFuZCBNb25nb0RiLiBOZXN0SlMgaXMgYSBwb3dlcmZ1bCBOb2RlLmpzIGZyYW1ld29yayBmb3ImbmJzcDsuLi4iAhABSABYAGgA",
      "source": "freeCodeCamp"
    },
    {
      "position": 7,
      "title": "Authentication and Authorization in NestJS Using JWT",
      "link": "https://www.devcentrehouse.eu/blogs/authentication-in-nestjs-using-jwt/",
      "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=CAESfwHrOzAVrcsML1ipuz1Own9rpDIrsJo8y0_eKlm1f7k2rVdWUZ9g2chtf1QnInrqKYqLb1GnzJResM-dqMoonFe4BhyVPe7oac2FDXHJej8_GOkAOrjF65qeOlYsS_IFVIoxQ6d-26jVbIiE-Jodn67GIQsJpa1NQOpvxwRGI_M&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQFnoECBEQAQ&uoh=1",
      "displayed_link": "https://www.devcentrehouse.eu › Home › Blog",
      "date": "Apr 22, 2025",
      "snippet": "Question: What is JWT authentication, and why use it in NestJS? Answer: JWT (JSON Web Token) authentication enables secure, stateless user ...",
      "snippet_highlighted_words": ["JWT (JSON Web Token) authentication"],
      "about_this_result": {
        "source": {
          "description": "Question: What is JWT authentication, and why use it in NestJS? Answer: JWT (JSON Web Token) authentication enables secure, stateless user ...",
          "source_info_link": "https://www.devcentrehouse.eu/blogs/authentication-in-nestjs-using-jwt/",
          "icon": "https://serpapi.com/images/i/UklGRqQBAABXRUJQVlA4IJgBAABQCACdASogACAAPtEutFooIagoGAEAGglpABOY66-sB0DOID6V63NGr6GGcN6W9gjo5p_sXUr6liO4xmxmuPvpS1FjMUoCGBQDFAAA_v7DlHlqj7zow1EZ52N2eaT-dje_2m0yX40k_qX2thxS_Rz76vzoCuoFbENNPC2t23Zj5q96u92X-jveS6z7n0xK1g2pI5B7rj7G1_vzV58HiaOGhw0ta0PMHrbkME8dij_7xLAH9qGZcFH0c_liS1HN_mr4_1yjqKri8e6BTfPoC6d8bJqi9Ztudvx-72NJ9oQ-3Q9MEmm3eN4xpkYlmwrra6xQ_uyaJybjUsJ2vp7Fh96Dx4kG3-R4CJeNH_vLpFY2q2cdnuxdGOFQI7-tf19cvJZxcTgcOjYMp3R-GUW_wq2SCJrCsbX6tAvUvILnm78utppwsw62Nt79Dbyxj13WfhQDl0ZXjGqah3rzPWQaolQMf8JWA7HoEu98tbbqQBb8aqh2bl2PN7XWm3Ud4bVC2vrZCgZz8HZXXislso6w1NRWZcQ-72WgAAA.webp"
        },
        "languages": ["en"],
        "regions": ["US"]
      },
      "about_page_link": "https://www.google.com/search/about-this-result?origin=www.google.com&req=CrkBL2dvdG8_dXJsPUNBRVNmd0hyT3pBVnJjc01MMWlwdXoxT3duOXJwRElyc0pvOHkwX2VLbG0xZjdrMnJWZFdVWjlnMmNodGYxUW5JbnJxS1lxTGIxR256SlJlc00tZHFNb29uRmU0Qmh5VlBlN29hYzJGRFhISmVqOF9HT2tBT3JqRjY1cWVPbFlzU19JRlZJb3hRNmQtMjZqVmJJaUUtSm9kbjY3R0lRc0pwYTFOUU9wdnh3UkdJX00SBBoCCAAa4QQSABoAIgAqADIGCAISAnVzOgBCBAgBEABKAFoAcgB6AIJAvQQIABAAGAAgACoaCgZuZXN0anMVhOu7QBoLaXY7cDtuZXN0anMqJwoDand0FRDXx0AaEWp3dGF1dGhlbnRpY2F0aW9uGghpdjtwO2p3dCpKCg5hdXRoZW50aWNhdGlvbhXO98VAGgRhdXRoGgV0b2tlbhoRand0YXV0aGVudGljYXRpb24aE2l2O3A7YXV0aGVudGljYXRpb24yuQEvZ290bz91cmw9Q0FFU2Z3SHJPekFWcmNzTUwxaXB1ejFPd245cnBESXJzSm84eTBfZUtsbTFmN2syclZkV1VaOWcyY2h0ZjFRbklucnFLWXFMYjFHbnpKUmVzTS1kcU1vb25GZTRCaHlWUGU3b2FjMkZEWEhKZWo4X0dPa0FPcmpGNjVxZU9sWXNTX0lGVklveFE2ZC0yNmpWYklpRS1Kb2RuNjdHSVFzSnBhMU5RT3B2eHdSR0lfTTpJPGI-QXV0aGVudGljYXRpb248L2I-IGFuZCBBdXRob3JpemF0aW9uIGluIDxiPk5lc3RKUzwvYj4gVXNpbmcgPGI-SldUPC9iPkKaAVF1ZXN0aW9uOiBXaGF0IGlzIEpXVCBhdXRoZW50aWNhdGlvbiwgYW5kIHdoeSB1c2UgaXQgaW4gTmVzdEpTPyBBbnN3ZXI6IDxiPkpXVCAoSlNPTiBXZWIgVG9rZW4pIGF1dGhlbnRpY2F0aW9uPC9iPiBlbmFibGVzIHNlY3VyZSwgc3RhdGVsZXNzIHVzZXImbmJzcDsuLi4iAhABSABYAGgA",
      "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&req_token=CrkBL2dvdG8_dXJsPUNBRVNmd0hyT3pBVnJjc01MMWlwdXoxT3duOXJwRElyc0pvOHkwX2VLbG0xZjdrMnJWZFdVWjlnMmNodGYxUW5JbnJxS1lxTGIxR256SlJlc00tZHFNb29uRmU0Qmh5VlBlN29hYzJGRFhISmVqOF9HT2tBT3JqRjY1cWVPbFlzU19JRlZJb3hRNmQtMjZqVmJJaUUtSm9kbjY3R0lRc0pwYTFOUU9wdnh3UkdJX00SBBoCCAAa4QQSABoAIgAqADIGCAISAnVzOgBCBAgBEABKAFoAcgB6AIJAvQQIABAAGAAgACoaCgZuZXN0anMVhOu7QBoLaXY7cDtuZXN0anMqJwoDand0FRDXx0AaEWp3dGF1dGhlbnRpY2F0aW9uGghpdjtwO2p3dCpKCg5hdXRoZW50aWNhdGlvbhXO98VAGgRhdXRoGgV0b2tlbhoRand0YXV0aGVudGljYXRpb24aE2l2O3A7YXV0aGVudGljYXRpb24yuQEvZ290bz91cmw9Q0FFU2Z3SHJPekFWcmNzTUwxaXB1ejFPd245cnBESXJzSm84eTBfZUtsbTFmN2syclZkV1VaOWcyY2h0ZjFRbklucnFLWXFMYjFHbnpKUmVzTS1kcU1vb25GZTRCaHlWUGU3b2FjMkZEWEhKZWo4X0dPa0FPcmpGNjVxZU9sWXNTX0lGVklveFE2ZC0yNmpWYklpRS1Kb2RuNjdHSVFzSnBhMU5RT3B2eHdSR0lfTTpJPGI-QXV0aGVudGljYXRpb248L2I-IGFuZCBBdXRob3JpemF0aW9uIGluIDxiPk5lc3RKUzwvYj4gVXNpbmcgPGI-SldUPC9iPkKaAVF1ZXN0aW9uOiBXaGF0IGlzIEpXVCBhdXRoZW50aWNhdGlvbiwgYW5kIHdoeSB1c2UgaXQgaW4gTmVzdEpTPyBBbnN3ZXI6IDxiPkpXVCAoSlNPTiBXZWIgVG9rZW4pIGF1dGhlbnRpY2F0aW9uPC9iPiBlbmFibGVzIHNlY3VyZSwgc3RhdGVsZXNzIHVzZXImbmJzcDsuLi4iAhABSABYAGgA",
      "source": "Dev Centre House",
      "read_more_link": "https://www.devcentrehouse.eu/blogs/authentication-in-nestjs-using-jwt/#:~:text=Question%3A%20What%20is%20JWT%20authentication%2C,stateless%20user%20sessions%20in%20APIs."
    },
    {
      "position": 8,
      "title": "How to Implement Authentication in NestJS with JWT",
      "link": "https://blog.stackademic.com/how-to-implement-authentication-in-nestjs-with-jwt-b941ac20ab6e",
      "redirect_link": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=CAESlAEB6zswFdsihCerQJVL1diqEz8O6hG2rtil5KYQPLOBs6u-lNZ1FD7FfjOvQ1xJ-eKJAQWs7B2xaHMrN1oSMvr7W3VSwn2B8RN5aHfld1Yhxfl2ZVa0rNbv_FHgZXS6pMHXshDGtREFkMwuPzsx7PiakEv6gWfYWH0ouK_fNtOgOZ0KsCLU7R0goZsgZymmdK2O4EMd&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQFnoECEkQAQ&uoh=1",
      "displayed_link": "https://blog.stackademic.com › how-to-implement-auth...",
      "date": "Mar 24, 2025",
      "snippet": "How to Implement Authentication in NestJS with JWT · Step 1: Creating a New NestJS Project · Step 2: Setting Up Database Connection with TypeORM.",
      "snippet_highlighted_words": [
        "How to Implement Authentication in NestJS with JWT"
      ],
      "about_this_result": {
        "source": {
          "description": "How to Implement Authentication in NestJS with JWT · Step 1: Creating a New NestJS Project · Step 2: Setting Up Database Connection with TypeORM.",
          "source_info_link": "https://blog.stackademic.com/how-to-implement-authentication-in-nestjs-with-jwt-b941ac20ab6e",
          "icon": "https://serpapi.com/images/i/UklGRlQBAABXRUJQVlA4IEgBAADQBgCdASocABwAPtEwtFooIigoGAEAGglpAAzq71pc92cX6E9FXqq_sAM0L2JYbbZQyexZs_v-NrvA0U_FIAAA_sIYLXkbXykzt_3YNJ7eCObOzJSJIUK3TNIwx5T5djQFT7ZStkTTvgIhnq40fdJok7BALVaGNolDOeHbSXOIKODioKmP7R3S5LOLlECQO5Y5KdzMij8MDj19HbZ-M-v-xLfqGNYfsL6Imc2b0KTp4gRv9dErc-5NU_V6lufsojo3H16SD-AmH6KIbdenxCT9LrUpLf_I2l63ekMuwGZHXouDM1uGqlEXu4vTxXljUWXhCMi88CHq8DH8v6lFTcrf8RSY8-qSvTqGoip-_2z89tenN2sVinMXPY8brcY_COxeQbm61xg18_j-wboLoZV-zjlNxk7878y-ZJmG1mfD_qy6Ozw3BIAA.webp"
        },
        "languages": ["en"],
        "regions": ["US"]
      },
      "about_page_link": "https://www.google.com/search/about-this-result?origin=www.google.com&req=CtYBL2dvdG8_dXJsPUNBRVNsQUVCNnpzd0Zkc2loQ2VyUUpWTDFkaXFFejhPNmhHMnJ0aWw1S1lRUExPQnM2dS1sTloxRkQ3RmZqT3ZRMXhKLWVLSkFRV3M3QjJ4YUhNck4xb1NNdnI3VzNWU3duMkI4Uk41YUhmbGQxWWh4ZmwyWlZhMHJOYnZfRkhnWlhTNnBNSFhzaERHdFJFRmtNd3VQenN4N1BpYWtFdjZnV2ZZV0gwb3VLX2ZOdE9nT1owS3NDTFU3UjBnb1pzZ1p5bW1kSzJPNEVNZBIEGgIIABqIBRIAGgAiACoAMgYIAxICdXM6AEIECAEQAEoAWgByAHoAgkDkBAgAEAAYACAAKhoKBm5lc3RqcxV5zrdAGgtpdjtwO25lc3RqcyonCgNqd3QVPk-jQBoRand0YXV0aGVudGljYXRpb24aCGl2O3A7and0KkoKDmF1dGhlbnRpY2F0aW9uFcv9nEAaBGF1dGgaBXRva2VuGhFqd3RhdXRoZW50aWNhdGlvbhoTaXY7cDthdXRoZW50aWNhdGlvbjLWAS9nb3RvP3VybD1DQUVTbEFFQjZ6c3dGZHNpaENlclFKVkwxZGlxRXo4TzZoRzJydGlsNUtZUVBMT0JzNnUtbE5aMUZEN0Zmak92UTF4Si1lS0pBUVdzN0IyeGFITXJOMW9TTXZyN1czVlN3bjJCOFJONWFIZmxkMVloeGZsMlpWYTByTmJ2X0ZIZ1pYUzZwTUhYc2hER3RSRUZrTXd1UHpzeDdQaWFrRXY2Z1dmWVdIMG91S19mTnRPZ09aMEtzQ0xVN1IwZ29ac2daeW1tZEsyTzRFTWQ6R0hvdyB0byBJbXBsZW1lbnQgPGI-QXV0aGVudGljYXRpb248L2I-IGluIDxiPk5lc3RKUzwvYj4gd2l0aCA8Yj5KV1Q8L2I-QqYBPGI-SG93IHRvIEltcGxlbWVudCBBdXRoZW50aWNhdGlvbiBpbiBOZXN0SlMgd2l0aCBKV1Q8L2I-ICZtaWRkb3Q7IFN0ZXAgMTogQ3JlYXRpbmcgYSBOZXcgTmVzdEpTIFByb2plY3QgJm1pZGRvdDsgU3RlcCAyOiBTZXR0aW5nIFVwIERhdGFiYXNlIENvbm5lY3Rpb24gd2l0aCBUeXBlT1JNLiICEAFIAFgAaAA",
      "about_page_serpapi_link": "https://serpapi.com/search.json?engine=google_about_this_result&google_domain=google.com&req_token=CtYBL2dvdG8_dXJsPUNBRVNsQUVCNnpzd0Zkc2loQ2VyUUpWTDFkaXFFejhPNmhHMnJ0aWw1S1lRUExPQnM2dS1sTloxRkQ3RmZqT3ZRMXhKLWVLSkFRV3M3QjJ4YUhNck4xb1NNdnI3VzNWU3duMkI4Uk41YUhmbGQxWWh4ZmwyWlZhMHJOYnZfRkhnWlhTNnBNSFhzaERHdFJFRmtNd3VQenN4N1BpYWtFdjZnV2ZZV0gwb3VLX2ZOdE9nT1owS3NDTFU3UjBnb1pzZ1p5bW1kSzJPNEVNZBIEGgIIABqIBRIAGgAiACoAMgYIAxICdXM6AEIECAEQAEoAWgByAHoAgkDkBAgAEAAYACAAKhoKBm5lc3RqcxV5zrdAGgtpdjtwO25lc3RqcyonCgNqd3QVPk-jQBoRand0YXV0aGVudGljYXRpb24aCGl2O3A7and0KkoKDmF1dGhlbnRpY2F0aW9uFcv9nEAaBGF1dGgaBXRva2VuGhFqd3RhdXRoZW50aWNhdGlvbhoTaXY7cDthdXRoZW50aWNhdGlvbjLWAS9nb3RvP3VybD1DQUVTbEFFQjZ6c3dGZHNpaENlclFKVkwxZGlxRXo4TzZoRzJydGlsNUtZUVBMT0JzNnUtbE5aMUZEN0Zmak92UTF4Si1lS0pBUVdzN0IyeGFITXJOMW9TTXZyN1czVlN3bjJCOFJONWFIZmxkMVloeGZsMlpWYTByTmJ2X0ZIZ1pYUzZwTUhYc2hER3RSRUZrTXd1UHpzeDdQaWFrRXY2Z1dmWVdIMG91S19mTnRPZ09aMEtzQ0xVN1IwZ29ac2daeW1tZEsyTzRFTWQ6R0hvdyB0byBJbXBsZW1lbnQgPGI-QXV0aGVudGljYXRpb248L2I-IGluIDxiPk5lc3RKUzwvYj4gd2l0aCA8Yj5KV1Q8L2I-QqYBPGI-SG93IHRvIEltcGxlbWVudCBBdXRoZW50aWNhdGlvbiBpbiBOZXN0SlMgd2l0aCBKV1Q8L2I-ICZtaWRkb3Q7IFN0ZXAgMTogQ3JlYXRpbmcgYSBOZXcgTmVzdEpTIFByb2plY3QgJm1pZGRvdDsgU3RlcCAyOiBTZXR0aW5nIFVwIERhdGFiYXNlIENvbm5lY3Rpb24gd2l0aCBUeXBlT1JNLiICEAFIAFgAaAA",
      "source": "Stackademic",
      "read_more_link": "https://blog.stackademic.com/how-to-implement-authentication-in-nestjs-with-jwt-b941ac20ab6e#:~:text=How%20to%20Implement%20Authentication%20in,NestJS%20with%20JWT&text=Step%201%3A%20Creating%20a%20New,NestJS%20Project&text=Step%202%3A%20Setting%20Up%20Database,Connection%20with%20TypeORM"
    }
  ],
  "related_searches": [
    {
      "block_position": 1,
      "query": "Nestjs/passport",
      "link": "https://www.google.com/search?sca_esv=3ca1fbc8451fdfd6&hl=en&gl=us&sxsrf=APpeQnslpd3K4gBIRhjNe_masBnOB7dkYQ:1790143990801&q=Nestjs/passport&sa=X&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQ1QJ6BAg_EAE",
      "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&location=Colombo%2CWestern+Province%2CSri+Lanka&q=Nestjs%2Fpassport"
    },
    {
      "block_position": 1,
      "query": "Nestjs jwt authentication example",
      "link": "https://www.google.com/search?sca_esv=3ca1fbc8451fdfd6&hl=en&gl=us&sxsrf=APpeQnslpd3K4gBIRhjNe_masBnOB7dkYQ:1790143990801&q=Nestjs+jwt+authentication+example&sa=X&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQ1QJ6BAhGEAE",
      "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&location=Colombo%2CWestern+Province%2CSri+Lanka&q=Nestjs+jwt+authentication+example"
    },
    {
      "block_position": 1,
      "query": "Nestjs jwt authentication github",
      "link": "https://www.google.com/search?sca_esv=3ca1fbc8451fdfd6&hl=en&gl=us&sxsrf=APpeQnslpd3K4gBIRhjNe_masBnOB7dkYQ:1790143990801&q=Nestjs+jwt+authentication+github&sa=X&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQ1QJ6BAhEEAE",
      "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&location=Colombo%2CWestern+Province%2CSri+Lanka&q=Nestjs+jwt+authentication+github"
    },
    {
      "block_position": 1,
      "query": "Nestjs/passport-jwt",
      "link": "https://www.google.com/search?sca_esv=3ca1fbc8451fdfd6&hl=en&gl=us&sxsrf=APpeQnslpd3K4gBIRhjNe_masBnOB7dkYQ:1790143990801&q=Nestjs/passport-jwt&sa=X&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQ1QJ6BAhDEAE",
      "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&location=Colombo%2CWestern+Province%2CSri+Lanka&q=Nestjs%2Fpassport-jwt"
    },
    {
      "block_position": 1,
      "query": "Nestjs/jwt refresh token",
      "link": "https://www.google.com/search?sca_esv=3ca1fbc8451fdfd6&hl=en&gl=us&sxsrf=APpeQnslpd3K4gBIRhjNe_masBnOB7dkYQ:1790143990801&q=Nestjs/jwt+refresh+token&sa=X&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQ1QJ6BAhCEAE",
      "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&location=Colombo%2CWestern+Province%2CSri+Lanka&q=Nestjs%2Fjwt+refresh+token"
    },
    {
      "block_position": 1,
      "query": "Nestjs jwt authentication not working",
      "link": "https://www.google.com/search?sca_esv=3ca1fbc8451fdfd6&hl=en&gl=us&sxsrf=APpeQnslpd3K4gBIRhjNe_masBnOB7dkYQ:1790143990801&q=Nestjs+jwt+authentication+not+working&sa=X&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQ1QJ6BAhHEAE",
      "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&location=Colombo%2CWestern+Province%2CSri+Lanka&q=Nestjs+jwt+authentication+not+working"
    },
    {
      "block_position": 1,
      "query": "Nestjs authentication",
      "link": "https://www.google.com/search?sca_esv=3ca1fbc8451fdfd6&hl=en&gl=us&sxsrf=APpeQnslpd3K4gBIRhjNe_masBnOB7dkYQ:1790143990801&q=Nestjs+authentication&sa=X&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQ1QJ6BAhIEAE",
      "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&location=Colombo%2CWestern+Province%2CSri+Lanka&q=Nestjs+authentication"
    },
    {
      "block_position": 1,
      "query": "Nestjs/jwt strategy",
      "link": "https://www.google.com/search?sca_esv=3ca1fbc8451fdfd6&hl=en&gl=us&sxsrf=APpeQnslpd3K4gBIRhjNe_masBnOB7dkYQ:1790143990801&q=Nestjs/jwt+strategy&sa=X&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQ1QJ6BAhFEAE",
      "serpapi_link": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&location=Colombo%2CWestern+Province%2CSri+Lanka&q=Nestjs%2Fjwt+strategy"
    }
  ],
  "pagination": {
    "current": 1,
    "next": "https://www.google.com/search?q=nestjs+jwt+authentication&sca_esv=3ca1fbc8451fdfd6&hl=en&gl=us&sxsrf=APpeQnslpd3K4gBIRhjNe_masBnOB7dkYQ:1790143990801&ei=9m2zavm5MJ2LruEP5PLk4AE&start=10&sa=N&sstk=AS6-VmImDqBJPAEizTxAvAM_ILL-YUPKoyHBcr1dqp0rKkMudpfdoutwAIiuvmwezyCCjV-bJiUaYrg7r6UJume1u4JvX4Eaw6CNuw&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQ8NMDegQINhAW",
    "other_pages": {
      "2": "https://www.google.com/search?q=nestjs+jwt+authentication&sca_esv=3ca1fbc8451fdfd6&hl=en&gl=us&sxsrf=APpeQnslpd3K4gBIRhjNe_masBnOB7dkYQ:1790143990801&ei=9m2zavm5MJ2LruEP5PLk4AE&start=10&sa=N&sstk=AS6-VmImDqBJPAEizTxAvAM_ILL-YUPKoyHBcr1dqp0rKkMudpfdoutwAIiuvmwezyCCjV-bJiUaYrg7r6UJume1u4JvX4Eaw6CNuw&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQ8tMDegQINhAE",
      "3": "https://www.google.com/search?q=nestjs+jwt+authentication&sca_esv=3ca1fbc8451fdfd6&hl=en&gl=us&sxsrf=APpeQnslpd3K4gBIRhjNe_masBnOB7dkYQ:1790143990801&ei=9m2zavm5MJ2LruEP5PLk4AE&start=20&sa=N&sstk=AS6-VmImDqBJPAEizTxAvAM_ILL-YUPKoyHBcr1dqp0rKkMudpfdoutwAIiuvmwezyCCjV-bJiUaYrg7r6UJume1u4JvX4Eaw6CNuw&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQ8tMDegQINhAG",
      "4": "https://www.google.com/search?q=nestjs+jwt+authentication&sca_esv=3ca1fbc8451fdfd6&hl=en&gl=us&sxsrf=APpeQnslpd3K4gBIRhjNe_masBnOB7dkYQ:1790143990801&ei=9m2zavm5MJ2LruEP5PLk4AE&start=30&sa=N&sstk=AS6-VmImDqBJPAEizTxAvAM_ILL-YUPKoyHBcr1dqp0rKkMudpfdoutwAIiuvmwezyCCjV-bJiUaYrg7r6UJume1u4JvX4Eaw6CNuw&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQ8tMDegQINhAI",
      "5": "https://www.google.com/search?q=nestjs+jwt+authentication&sca_esv=3ca1fbc8451fdfd6&hl=en&gl=us&sxsrf=APpeQnslpd3K4gBIRhjNe_masBnOB7dkYQ:1790143990801&ei=9m2zavm5MJ2LruEP5PLk4AE&start=40&sa=N&sstk=AS6-VmImDqBJPAEizTxAvAM_ILL-YUPKoyHBcr1dqp0rKkMudpfdoutwAIiuvmwezyCCjV-bJiUaYrg7r6UJume1u4JvX4Eaw6CNuw&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQ8tMDegQINhAK",
      "6": "https://www.google.com/search?q=nestjs+jwt+authentication&sca_esv=3ca1fbc8451fdfd6&hl=en&gl=us&sxsrf=APpeQnslpd3K4gBIRhjNe_masBnOB7dkYQ:1790143990801&ei=9m2zavm5MJ2LruEP5PLk4AE&start=50&sa=N&sstk=AS6-VmImDqBJPAEizTxAvAM_ILL-YUPKoyHBcr1dqp0rKkMudpfdoutwAIiuvmwezyCCjV-bJiUaYrg7r6UJume1u4JvX4Eaw6CNuw&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQ8tMDegQINhAM",
      "7": "https://www.google.com/search?q=nestjs+jwt+authentication&sca_esv=3ca1fbc8451fdfd6&hl=en&gl=us&sxsrf=APpeQnslpd3K4gBIRhjNe_masBnOB7dkYQ:1790143990801&ei=9m2zavm5MJ2LruEP5PLk4AE&start=60&sa=N&sstk=AS6-VmImDqBJPAEizTxAvAM_ILL-YUPKoyHBcr1dqp0rKkMudpfdoutwAIiuvmwezyCCjV-bJiUaYrg7r6UJume1u4JvX4Eaw6CNuw&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQ8tMDegQINhAO",
      "8": "https://www.google.com/search?q=nestjs+jwt+authentication&sca_esv=3ca1fbc8451fdfd6&hl=en&gl=us&sxsrf=APpeQnslpd3K4gBIRhjNe_masBnOB7dkYQ:1790143990801&ei=9m2zavm5MJ2LruEP5PLk4AE&start=70&sa=N&sstk=AS6-VmImDqBJPAEizTxAvAM_ILL-YUPKoyHBcr1dqp0rKkMudpfdoutwAIiuvmwezyCCjV-bJiUaYrg7r6UJume1u4JvX4Eaw6CNuw&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQ8tMDegQINhAQ",
      "9": "https://www.google.com/search?q=nestjs+jwt+authentication&sca_esv=3ca1fbc8451fdfd6&hl=en&gl=us&sxsrf=APpeQnslpd3K4gBIRhjNe_masBnOB7dkYQ:1790143990801&ei=9m2zavm5MJ2LruEP5PLk4AE&start=80&sa=N&sstk=AS6-VmImDqBJPAEizTxAvAM_ILL-YUPKoyHBcr1dqp0rKkMudpfdoutwAIiuvmwezyCCjV-bJiUaYrg7r6UJume1u4JvX4Eaw6CNuw&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQ8tMDegQINhAS",
      "10": "https://www.google.com/search?q=nestjs+jwt+authentication&sca_esv=3ca1fbc8451fdfd6&hl=en&gl=us&sxsrf=APpeQnslpd3K4gBIRhjNe_masBnOB7dkYQ:1790143990801&ei=9m2zavm5MJ2LruEP5PLk4AE&start=90&sa=N&sstk=AS6-VmImDqBJPAEizTxAvAM_ILL-YUPKoyHBcr1dqp0rKkMudpfdoutwAIiuvmwezyCCjV-bJiUaYrg7r6UJume1u4JvX4Eaw6CNuw&ved=2ahUKEwj5jKyFhoSXAxWdhSsGHWQ5GRwQ8tMDegQINhAU"
    }
  },
  "serpapi_pagination": {
    "current": 1,
    "next_link": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&location=Colombo%2CWestern+Province%2CSri+Lanka&q=nestjs+jwt+authentication&start=10",
    "next": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&location=Colombo%2CWestern+Province%2CSri+Lanka&q=nestjs+jwt+authentication&start=10",
    "other_pages": {
      "2": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&location=Colombo%2CWestern+Province%2CSri+Lanka&q=nestjs+jwt+authentication&start=10",
      "3": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&location=Colombo%2CWestern+Province%2CSri+Lanka&q=nestjs+jwt+authentication&start=20",
      "4": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&location=Colombo%2CWestern+Province%2CSri+Lanka&q=nestjs+jwt+authentication&start=30",
      "5": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&location=Colombo%2CWestern+Province%2CSri+Lanka&q=nestjs+jwt+authentication&start=40",
      "6": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&location=Colombo%2CWestern+Province%2CSri+Lanka&q=nestjs+jwt+authentication&start=50",
      "7": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&location=Colombo%2CWestern+Province%2CSri+Lanka&q=nestjs+jwt+authentication&start=60",
      "8": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&location=Colombo%2CWestern+Province%2CSri+Lanka&q=nestjs+jwt+authentication&start=70",
      "9": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&location=Colombo%2CWestern+Province%2CSri+Lanka&q=nestjs+jwt+authentication&start=80",
      "10": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&location=Colombo%2CWestern+Province%2CSri+Lanka&q=nestjs+jwt+authentication&start=90"
    }
  }
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
    "id": 7,
    "search_string": "nestjs jwt authentication"
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

## 6) Exceptions and error handling

This project uses NestJS exception classes and global validation to handle bad requests, invalid user credentials, missing authentication, and upstream service failures.

| Endpoint                      | Exception / Error                                | Trigger condition                                | HTTP status |
| ----------------------------- | ------------------------------------------------ | ------------------------------------------------ | ----------- |
| GET /                         | None                                             | Successful root response                         | 200         |
| POST /user/register           | `ConflictException`                              | Email already exists in the database             | 409         |
| POST /user/register           | `BadRequestException` via global validation pipe | Missing or invalid `email` / `password` values   | 400         |
| POST /user/login              | `UnauthorizedException`                          | Password does not match stored hash              | 401         |
| POST /user/login              | `NotFoundException`                              | User not found while creating the JWT            | 404         |
| POST /client/getResults       | `InternalServerErrorException`                   | SerpAPI request fails or service throws an error | 500         |
| POST /client/getResults       | `BadRequestException` via global validation pipe | Missing or invalid body fields                   | 400         |
| POST /client/login/getResults | `JwtAuthGuard` rejection                         | Missing, expired, or invalid JWT                 | 401         |
| POST /client/login/getResults | `ConflictException`                              | Authenticated user is not found in DB            | 409         |
| POST /client/login/getResults | `InternalServerErrorException`                   | SerpAPI request or DB save fails                 | 500         |
| GET /client/getSearchHistory  | `JwtAuthGuard` rejection                         | Missing, expired, or invalid JWT                 | 401         |
| GET /client/getSearchHistory  | `ConflictException`                              | User from JWT does not exist                     | 409         |
| GET /client/getSearchHistory  | `NotFoundException`                              | No saved search history for the user             | 404         |

### Detailed endpoint exceptions

#### POST /user/register

- Throws `ConflictException` if a user with the same email already exists.
- Message: `User with Email <email> already exsists`.
- Validation errors are automatically handled by NestJS `ValidationPipe` because it is enabled globally in the app bootstrap.

#### POST /user/login

- Calls `validate()` and compares the submitted password against the stored bcrypt hash.
- If the password is wrong, it throws `UnauthorizedException` with the message: `Invalid Credintials!!`.
- If the user cannot be found while generating the JWT, it throws `NotFoundException` with: `User not found in login function!!`.

#### POST /client/getResults

- This endpoint calls the SerpAPI search API.
- If the external request fails, `ClientService.getResult()` catches the error and throws `InternalServerErrorException` with:
  - message: `Error occoured in the serivice layer!!`
  - error: original caught error

#### POST /client/login/getResults

- Requires a valid JWT via `JwtAuthGuard`.
- If the token is invalid or missing, the request is rejected with `401 Unauthorized`.
- If the user extracted from the token does not exist in the DB, the service throws `ConflictException` with: `User doesn't exsist!!`.
- If the SerpAPI call or database save fails, it throws `InternalServerErrorException`.

#### GET /client/getSearchHistory

- Also protected by `JwtAuthGuard`.
- If the token is invalid or missing, request is rejected with `401 Unauthorized`.
- If the token user is missing from the database, it throws `ConflictException` with: `User doesn't exsist!!`.
- If no searches are stored for the user, it throws `NotFoundException` with: `No search history available!!`.

---

## 7) Summary of all endpoints

| Method | Route                    | Auth Required | Description                          |
| ------ | ------------------------ | ------------- | ------------------------------------ |
| GET    | /                        | No            | App health/root endpoint             |
| POST   | /user/register           | No            | Register a new user                  |
| POST   | /user/login              | No            | Login and get JWT                    |
| POST   | /client/getResults       | No            | Search via SerpAPI                   |
| POST   | /client/login/getResults | Yes           | Search via SerpAPI and store history |
| GET    | /client/getSearchHistory | Yes           | Return user's search history         |

---

## 8) Common usage example

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
