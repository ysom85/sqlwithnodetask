import mysql from 'mysql'
export function connectDB(){
    const mysqlConnection = mysql.createConnection({
        host: process.env.host,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database,
        multipleStatements: true
      
    })
    console.log()
    mysqlConnection.connect((err)=>{
        if(!err)
        console.log('DB connection suceeded.');
        else
        console.log('DB connection failed')
    })
    const createUser_Table = `
    CREATE TABLE IF NOT EXISTS User_Table (
      id VARCHAR(10) NOT NULL,
      name VARCHAR(20) NOT NULL,
      PRIMARY KEY (id(10))
    )
  `;
  const createCandidate_Table= `
  CREATE TABLE IF NOT EXISTS Candidate_Table (
    id VARCHAR(10) NOT NULL,
    uid VARCHAR(10) NOT NULL,
    candidateName VARCHAR(20) NOT NULL,
    PRIMARY KEY (id(10))
  )
`;
const createCandidate_Status_Table= `
  CREATE TABLE IF NOT EXISTS Candidate_Status_Table (
    id VARCHAR(10) NOT NULL,
    cid VARCHAR(10) NOT NULL,
    status VARCHAR(20) NOT NULL,
    statusUpdatedAt  DATE NOT NULL,
    PRIMARY KEY (id(10))
  )
`;
  createTable(createUser_Table)
  createTable(createCandidate_Table)
  createTable(createCandidate_Status_Table)
function createTable(tableName){
    mysqlConnection.query(`${tableName}`, (err, result) => {
        if (err) {
          console.error('Error creating table:', err);
          return;
        }
        console.log('Table created successfully:', result);
    
        
      });
}
  

}

export default connectDB;


 
 