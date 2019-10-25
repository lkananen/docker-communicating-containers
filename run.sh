#!/bin/bash
#
docker image build -t dcc-image .
docker container run --publish 8001:8001 --detach --name dcc-app dcc-image
