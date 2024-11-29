#!/bin/bash

# Esperar a que mongo-primary esté accesible
echo "Esperando a que mongo-primary esté listo..."
sleep 10

mongosh --host mongo-primary:27017 <<EOF
rs.initiate({
    _id: "rs0",
    members: [
        { _id: 0, host: "mongo-primary:27017","priority": 2 },
        { _id: 1, host: "mongo-secondary:27017","priority": 0 },
        { _id: 2, host: "mongo-secondary2:27017","priority": 0 }
    ]
});
EOF

echo "Replica set initialized!"
