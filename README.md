# se577-software-architecture

This branch contains the work for the final project deliverables

## Architecture Model

![image](https://user-images.githubusercontent.com/3461182/167307621-50833008-61a1-43e6-befa-e6e86eb71a73.png)

## Final Project Features -
1. Front end application devoped using vue.js/quasar
2. Backend service developed using fastify/noode that is respoonsible for getting github data from github api's
3. Backend service is dockerized
4. Additional featurers added in the final project

  4.1 All rerpositories are lised in a dybalix table/grid
  
  4.2 User can select a repository and click "Repo Details" button to view additional details like (contributors, latest commit message etc)
  
  4.3 All apis work using the backend node service and no direct api calls are made to github apis
Backend service is now dockerized and instructions are provided in Release3.md to create it and start the backend container

## Appliction Screenshot

The app contains 4 pages
* Home
* About Me
* Git Repos (with new features for final project)
* Git Gist Demo

<img width="695" alt="image" src="https://user-images.githubusercontent.com/3461182/172252049-d1ff7e39-f465-45a1-a02c-7e068922687c.png">


### 3 Instructions

Instructions can be found in FinalRelease.md - [here](https://github.com/harshgit/se577-software-architecture/blob/proj-final/FinalRelease.md)
