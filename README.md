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
