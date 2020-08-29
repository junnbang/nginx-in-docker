# nginx-in-docker

## About
This project...
- uses **Docker** as a container for each server
- uses **Nginx** as a reverse proxy server where it directs the requests to two backend servers.
  - 1st Web Server using Flask (*Python*)
  - 2nd Web API Server using Node (*Javascript*)

## Install
1. [Docker](https://docs.docker.com/get-started/)

## Instructions on how to run the Docker container
1. Download or Clone this repository and Docker.
2. Open Command Prompt in the repository directory.
3. To start the docker machine, type `docker-machine start` OR click on **Docker Quickstart Terminal** .
4. To run all the containers, type `docker-compose up -d` .
   > This will pull the images from **Nginx**, **junbang/flask-app** and **junbang/node-app** in the *DockerHub* if they do not exist in your local storage. After which, it will run these containers and get the servers online.
5. To check if the containers are running, type `docker ps` .
    > You should see 3 containers running (**nginx**, **junbang/node-app**, **junbang/flask-app**). Nginx acts as the reverse proxy for the two servers.
6. To access the 1st server (*flask-app*), enter the *URL* in your browser.
    > http://192.168.99.100 if you are using **Docker Machine**.
    
    > OR http://localhost if you are using **Docker Desktop**.
    
    *Refer to [FAQ](#FAQ) on how to check your Docker Machine's ip address.*
7. To access the 2nd server (*node-app*), enter the *URL* in your browser
    > http://192.168.99.100/api if you are using **Docker Machine**.
    
    > OR http://localhost/api if you are using **Docker Desktop**.
8. Completed! The Nginx server is now acting as the gateway between the client and the servers where the `/` path will be redirected to the flask server while the `/api` path will be redirected to the node server. 


> *These instructions is based on usage on Docker Machine, not Docker Desktop.*

## Instructions on how to stop the Docker container
1. To stop all containers, type `docker-compose stop`.
2. To check if the containers are still online, type `docker ps`


## Ports used if you running using Docker container
- nginx uses port 80.
- flask-app uses `port 5000 in docker container`, but is directed to `port 8000 in the host server`.
- node-app uses `port 5001 in docker container`, but is directed to `port 8001 in the host server`.

## FAQ
Q: How to check my ip address in Docker Machine?

A: If you are using `Docker Machine` instead of Docker Desktop, you can find the hostname on the command line using `docker-machine` as follows (assuming you are using the default machine). Use the ip-address instead of localhost to connect to the web server.

  ```bash
  $ docker-machine ip default 
  192.168.99.100 
  ```