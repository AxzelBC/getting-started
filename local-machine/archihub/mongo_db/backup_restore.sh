#!/bin/bash

FILES=(system.bson users.bson)

cd /data_restore

for file in "${FILES[@]}"
do
    if test -f "$file"; then
        mongorestore --username $MONGO_INITDB_ROOT_USERNAME --password $MONGO_INITDB_ROOT_PASSWORD --authenticationDatabase admin --db $MONGO_INITDB_DATABASE $file
    fi
done