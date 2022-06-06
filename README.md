# se577-software-architecture

This branch contains the work for week 6 deliverable

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

### 1. Front end application developed using vue.js -- ./git-explorer

The app contains a placeholder page for displaying git repositories and it currently contains hard coded data in the table.
Currently has 4 pages
* Home
* About Me
* Git Repos (with mock data)
* Repo Details (under development)

![image](https://user-images.githubusercontent.com/3461182/163634523-b56c0f77-5f0f-4455-b474-870f411d3cdf.png)



### 3 Instructions

Instructions can be found in FinalRelease.md - [here](https://github.com/harshgit/se577-software-architecture/blob/proj-final/FinalRelease.md)
