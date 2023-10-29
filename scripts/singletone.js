// Singleton Pattern: Ensuring only one instance of DatabaseConnection
class DatabaseConnection {
    static instance = null;  // Single source of truth

    constructor() {
        this.connection = 'Connected to Moodle database';
    }

    // Create instance only when needed
    static getInstance() {
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection();
        }
        return DatabaseConnection.instance;
    }

    query(sql) {
        console.log(`Executing query: ${sql}`);
    }
}

const db1 = DatabaseConnection.getInstance();
const db2 = DatabaseConnection.getInstance();
console.log(db1 === db2); // Should return true, indicating one instance

// Utilize singleton for different queries
db1.query('SELECT * FROM students');
db2.query('SELECT * FROM courses');
