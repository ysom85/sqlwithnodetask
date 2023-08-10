import mysql from 'mysql' 
const mysqlConnection = mysql.createConnection({
    host: "sql6.freesqldatabase.com",
    user: "sql6638871",
    password: "z6WKK7AD4T",
    database: "sql6638871",
    multipleStatements: true   
})  
export const getData = (req,res) =>{
    const id=req.params.id
    const data =  [{Uid: `${id}`}];

var sqlQuery = `SELECT COUNT(*) AS TotalCandidates FROM Candidate_Table WHERE uid=${id}`;
// res.send(" Hello world somanth") 
mysqlConnection.query(sqlQuery,(err,result,fields)=>{
    if(err)
    {
        console.log("Hello world")
        return console.log(err)
    }
    data.push(result[0])
})
sqlQuery =`SELECT COUNT(*) AS Joined FROM Candidate_Status_Table AS CS INNER JOIN Candidate_Table AS CT ON CS.cid=CT.id WHERE CS.status='joined' AND CT.uid=${id}`;
mysqlConnection.query(sqlQuery,(err,result,fields)=>{
    if(err)
    {
        console.log("Hello world")
        return console.log(err)
    }
    data.push(result[0])

})
sqlQuery = `SELECT COUNT(*) AS Interview FROM Candidate_Status_Table AS CS INNER JOIN Candidate_Table AS CT ON CS.cid=CT.id WHERE CS.status='interview' AND CT.uid=${id}`;
mysqlConnection.query(sqlQuery,(err,result,fields)=>{
    if(err)
    {
        console.log("Hello world")
        return console.log(err)
    }
    data.push(result[0])
    res.send(data)
    
})

}


 
export const createUser=(req,res)=>{
    const { id,name}=req.body;
    var sql='INSERT INTO User_Table(id,name) VALUES ?';
    var values=[[id,name]]
    mysqlConnection.query(sql,[values],(err, rows, fields)=>{
        if(!err)
        res.send('Inserted Sucessfully')
        else
        console.log(err)    })
}
export const createCandidate=(req,res)=>{
    const { id, uid, candidateName}=req.body;
    var sql='INSERT INTO Candidate_Table(id,uid,candidateName) VALUES ?';
    var values=[[id,uid,candidateName]]
    mysqlConnection.query(sql,[values],(err, rows, fields)=>{
        if(!err)
        res.send('Inserted Sucessfully')
        else
        console.log(err)
    })
}
export const createCandidateStatus = (req,res)=>{
    const { id, cid, status, statusUpdatedAt}=req.body;
    var sql='INSERT INTO Candidate_Status_Table(id,cid,status,statusUpdatedAt) VALUES ?';
    var values=[[id,cid, status, statusUpdatedAt]]
    mysqlConnection.query(sql,[values],(err, rows, fields)=>{
        if(!err)
        res.send('Inserted Sucessfully')
        else
        console.log(err)
    })
} 
export default createUser; 