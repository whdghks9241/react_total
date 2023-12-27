const express = require('express');
const oracledb = require('oracledb');

const app = express();
const PORT = 5050;

const cors = require('cors');

app.use(cors());

const dbConfig = {
    user : 'JongHwan',
    password : 'kh1234',
    connectString : 'localhost:1521/XE',
}

app.use(express.json());

async function runQuery(sql, binds = [], options = {}) {
    
    let connection;

    try {
        connection = await oracledb.getConnection(dbConfig);

        const result = await connection.execute(sql, binds, options);

        return result.rows.map((row) => ({
            ID: row[0],
            NAME: row[1],
          }));
    } catch (err) {
        console.error(err);
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                close.error(err)
            }
        }
    }
}

app.get('/', (request, response) => {
    response.send('백엔드 연결에 오신것을 환영합니다.')
})

app.get('/api/cafes', async(request,response) => {
    const cafe = await runQuery('SELECT * FROM cafe');
    response.json(cafe);
})

app.listen(PORT , () =>{
    console.log(`서버가 시작되었습니다.  :  http://localhost:${PORT}`);
})
