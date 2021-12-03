var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE scenes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            scene integer,
            name text,
            q1 text,
            q2 text,
            q3 text,
            q4 text
                );`,
            (err) => {
                if (err) {
                    // Table already created
                } else {
                    // Table just created
                }
            });
    }
});

 
module.exports = db