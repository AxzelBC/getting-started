#!/bin/bash

find /usr/share/nginx/html/static/js -name "*.js" -exec sed -i "s|localhost:5000|localhost:${FLASK_PORT}|g" {} \;

echo "Replaced localhost:5000 with localhost:${FLASK_PORT} in all js files"