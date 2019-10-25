# docker-communicating-containers
Implementation to docker services that communicate with each other.

## Project plan
The plan of this project is to create two simple Docker containers that start up together. Both of the containers will be running different interworking services. The first service will be exposed to outside world and the other one is internal. Both of the services share a file with read and write access that can also be accessed by the host system. Sending a request to the service in the exposed container sends a HTTP GET request to the private container.

## Architecture
Two docker containers running inside a private network. One of them is exposed to the Internet with port 8001. Sending requests there gives results from both of the services inside different containers.

Requests move through the system as follows:

```Internet ----Request1----> Service 1 in container 1 -----Request2------> Service 2 in container 2```

Details of the architecture:
* Request 1 = HTTP GET request from Internet. Response returns the IP and the port of the service 1 and the response from request 2.
* Container 1 = The container exposed to Internet.
* Request 2 = HTTP GET request from service 1 to service 2. Response returns the IP and the port of service 2.
* Container 2 = The container running inside a private network. Exposed only to container 1. Running internal service.

## Instructions

Useful commands

| Command | Action |
| ------- | ------ |
| `docker image build -t dcc-image .` | Builds the image from a Dockerfile. |
| `docker container run --publish 8001:80 --detach --name dcc-app dcc-image` | Runs the built container and gives it a name. Incoming traffic on the host's port 8001 is fowarded to container's port 80. |
| `docker container rm --force xx`| Destroys the container with name xx |
| `docker swarm init` | Initializes the Docker Swarm. Makes the current node work as a manager. Gives  |
| `docker swarm joint --token XXXXXXX 192.168.65.3:2377`| Joins a worker to the swarm. Token is a secret given by the init command. |
| `docker stack deploy -c dcc-stack.yaml dcc-demo` | Deploys the application to Swarm with name dcc-demo |
| `docker service ls` | Lists all the application services. |
| `docker stack rm dcc-stack` | Tears down the application. |




