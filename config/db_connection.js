let mysql=require("./imports").mysql;
let prop=require("./db_properties");
let myfun=()=>{
    return mysql.createConnection(prop);
};
module.exports=myfun;