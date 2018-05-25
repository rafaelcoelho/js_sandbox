"use strict";
const cassandra = require('cassandra-driver');

const client = new cassandra.Client({ contactPoints: ['127.0.0.1'] });

    client.connect()
    .then(() => {
        console.log('Connect to cluster with %d host(s): %j', client.hosts.length, client.hosts.keys());
        console.log('Keyspaces: %j', Object.keys(client.metadata.keyspaces));

        return client.execute('SELECT * FROM system.local');
    })
    .then(result => {
        console.log('Length: ', result.rowLength)
        console.log('Get row: ', row)
        console.log('Shutting down')

        return client.shutdown();
    })
    .catch(err => {
        console.error('There was error to open connection', err)
    })
