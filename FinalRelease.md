

## Architecture

### Model

Herre is the Architecture model for the application

![image](https://user-images.githubusercontent.com/3461182/167307621-50833008-61a1-43e6-befa-e6e86eb71a73.png)

## Architecture Components

| Component | Description |
| --------- | ----------- |
| User/Browser   |  The User Starting launching the application from a browser |
| Frontend/Vue | The Web application written using the single page architecture design and implemented using vue/quasar |
| Backend (Dockerized) | This is a node application developed using fastify/node that wraps the functionality of github apis and serves as a proxy to the 3rd party system (github)  |
| Github API | This is the rest api endpoints exposed by github to interact with github services |

## Architecture Decisions

1. Use a Single Page application that compiles with the modern web architecture
2. Use A backend Web API that wraps the functionality of a thrid party service provider (GITHUB API)
3. Keep the web and api layer separate so independent decisions can be made on scaling, maintenance and upgrades
4. Containerize the backend app so deployment can be orchestrated and controlled

### Instructions

Instructions

1. Clone the project using git clone git@github.com:harshgit/se577-software-architecture.git
2. checkout proj-final branch using git checkout proj-final
3. Start the backend service by
   cd web-service-node

   1. Create docker image

      Docker build . -t hvb36/node-web-app


   2. Start the docker container

      Docker run -p 4080:4080 -d hvb36/node-web-app


4. Start the UI app by

   cd git-explorer
   
   'quasar dev'
   
5. navigate to http://localhost:8080/#/
6. Then click on GitRepos page to view repositories being shown from the backend call
7. Select any repository and click Repo Details button to view additional details about the repository like (contributors and latest commit message)



