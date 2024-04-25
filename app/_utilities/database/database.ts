import { Pool, Client } from 'pg';

class Database {
    static #instance: Database|null = null;

    static getDatabase() {
        console.log(this.#instance);
        if(!this.#instance) {
            this.#instance = new Database();
        }
        return this.#instance;
    }

    #dbPool: Pool;

    constructor() {
        this.#dbPool = new Pool({
            host: process.env.PGHOST,
            database: process.env.PGDATABASE,
            user: process.env.PGUSER,
            password: process.env.PGPASSWORD,
            port: process.env.PGPORT ? +process.env.PGPORT : undefined
          });

          this.#dbPool.on('error', (err, client) => console.error('Unexpected error on idle client', err));
    }

    async query (queryString: string, values?: any[]) {
        const client = await this.#dbPool.connect();
        try {
            const result = await client.query(queryString, values);
            return result.rows;
        } catch (error) {
            console.log(error);
        } finally {
            client.release();
        }
    }
}

export default Database;



// In a long running program you don’t need to call ‘pool.end()’ unless you’re going to dynamically create and gracefully shutdown a pool. In most cases you can ignore it entirely as exiting the node process will close the sockets for the pool.
// pool.end() should be called when you don’t intend to use the pool anymore, so in a web server, you would call it when shutting down (or not at all).