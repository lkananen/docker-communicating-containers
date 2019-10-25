#!/bin/bash
#


# Running individual images:
#docker image build -t dcc-image .
#docker container run --publish 8001:8001 --detach --name dcc-app dcc-image


# Running the whole swarm
docker stack deploy -c dcc-stack.yaml dcc-demo
docker service ls

