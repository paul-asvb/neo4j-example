# neo4j-example
// npm install --save neo4j-driver
var neo4j = require('neo4j-driver');
var driver = neo4j.driver('bolt://34.224.17.173:35104', neo4j.auth.basic('neo4j', 'lent-ingredients-heater'));

var query = 
  "MATCH (n) \
   RETURN ID(n) as id \
   LIMIT $limit";

var params = {"limit": 10};

var session = driver.session();

session.run(query, params)
  .then(function(result) {
    result.records.forEach(function(record) {
        console.log(record.get('id'));
    })
  })
  .catch(function(error) {
    console.log(error);
  });
