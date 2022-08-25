const pg = require('pg');

exports.lambdaHandler = async (event, context) => {
    let response;
    let client;
    try {
        //configure your credentials
        client = new pg.Client({
            user: '',
            host: '',
            database: '',
            password: '',
            port: 5432,
        });
        client.connect();
        const result = await client.query('SELECT * FROM cryptonewstable');
        response = {
            'statusCode': 200,
            'body': JSON.stringify({ "data": result.rows })
        };
    } catch (err) {
        console.log(err);
        return err;
    } finally {
        client.end();
    }
    return response;
};