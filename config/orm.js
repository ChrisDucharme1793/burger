var connection = require("./connection.js");

var orm = {
	selectAll: function(tableName, callback) {
		connection.query("SELECT * FROM ??", [tableName], function(err, result) {
			if(err) {
				throw err;
			}
			callback(result);
		});
    },
    
    insertOne: function(tableName, objectToInsert, callback) {
    connection.query("INSERT INTO ?? SET ?", [tableName, objectToInsert], function(err, result) {
        if(err) {
            throw err;
        }
        callback(result);
         });
    },
    updateOne: function(tableName, itemToUpdate, conditon, callback) {
    connection.query("UPDATE ?? SET ? WHERE ?", [tableName, itemToUpdate, conditon ], function(err, result) {
        if(err) {
            throw err;
        }
        callback(result);
    });
}
    };

module.exports = orm;
