# Robot

There was no interface spec provided, so I decided to offer two options: cli and REST API

## Cli

The cli script accepts an optional argument that represents the threshold that is `23` by default based on the specs.

### How to run

`npm run cli`

With a custom threshold:

`npm run cli 2`

_Note: Tested with Node version 12._

**The output will be displayed in the system output (terminal).**

## REST

The functionality can also be accesed via the REST API using curl/postman/http client.

### How to run

**The backend is deployed to the cloud and can be accessed at `https://kidsloop-robot.optimisedsoftware.co.uk/api`. Feel free to use it instead of spinning up your own server.**

`npm run start:prod`

alternatively, the project can be run inside a docker container

`docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d`

### How to use

You can use a curl command to calculate the number of safe cells (use `localhost:3000` instead of `kidsloop-robot.optimisedsoftware.co.uk/api` for the local server)

Create a planet:

```bash
curl 'https://kidsloop-robot.optimisedsoftware.co.uk/api/robot?threshold=23' --header 'Content-Type: application/json'
```

# Testing

The code is tested with jest.

# Things to improve

With the limited time for this project there are obviously some things that are left out and there's always room for improvement:

- add a logger to replace `console.log` for the cli app
- validate API request body
- add e2e test for the API endpoints
