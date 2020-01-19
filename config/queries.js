let obj={
    "fetch":(connection, res) => {
        connection.query('select *from person',
            (err, records, fields)=> {
            if(err)
             throw err;
             else
             res.send.records
        });
    },

    "insert":(connection,req,res)=>{
        connection.query(`insert into person values(
            ${req.body.id},
            '${req.body.Name}',
            ${req.body.Age},
            '${req.body.Gender}',
            ${req.body.Mobile})`, (err,result)=>{
                if(err)
                 res.send({"insert":"fail"});
                 else
                 res.send({"insert":"success"})
            });
        },

    
        


};