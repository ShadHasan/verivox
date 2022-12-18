#!/bin/bash

curl -X GET -H "Content-type:application/json" -d '{"consumption":9000}' "http://localhost:8888/comparetariff"
