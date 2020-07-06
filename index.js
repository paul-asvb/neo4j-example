var neo4j = require('neo4j-driver');
var driver = neo4j.driver('bolt://localhost:7687', neo4j.auth.basic('neo4j', 'neo4j'));

var query =
    `CREATE (adam:User { name: 'Adam' }),(pernilla:User { name: 'Pernilla' }),(david:User { name: 'David'
}),
(adam)-[:FRIEND]->(pernilla),(pernilla)-[:FRIEND]->(david)`;

var params = { "limit": 10 };

var session = driver.session();

session.run(query, params)
    .then(function (result) {
        result.records.forEach(function (record) {
            console.log(record.get('id'));
        })
    })
    .catch(function (error) {
        console.log(error);
    });


var query =
    `MATCH (n)
RETURN n`;

var params = { "limit": 10 };

var session = driver.session();

session.run(query, params)
    .then(function (result) {
        result.records.forEach(function (record) {
            console.log(record);
        })
    })
    .catch(function (error) {
        console.log(error);
    });

driver.close()
    .catch(function (error) {
        console.log(error);
    }); 