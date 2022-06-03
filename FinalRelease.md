

## Architecture

![image](https://user-images.githubusercontent.com/3461182/167307621-50833008-61a1-43e6-befa-e6e86eb71a73.png)

## Instructions

Instructions

1. Clone the project using git clone git@github.com:harshgit/se577-software-architecture.git
2. checkout proj-final branch using git checkout proj-final
3. Start the backend service by
   cd web-service-node

   1. Create docker image

      Docker build . -t hvb36/node-web-app


   3. Start the docker container

      Docker run -p 4080:4080 -d hvb36/node-web-app


4. Start the UI app by

   cd git-explorer
   
   'quasar dev'
   
5. navigate to http://localhost:8080/#/
6. Then click on GitRepos page to view repositories being shown from the backend call
7. Select any rrepository and click Repo Details button to view additional details about the repositoryr like (contrributorrs and latest commit message)



