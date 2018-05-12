var mysql=require("mysql");  
var pool = mysql.createPool({  
    host     : 'localhost',
    port     : '3306',
    user     : 'mgn',
    password : 'bn6HpSxbru9oaUzN',
    database : 'mgn'
});  
  
var query=function(sql,options,success, error){
    pool.getConnection(function(err,conn){  
        if(err){  
            error(err);  
        }else{  
            conn.query(sql,options,function(err,results,fields){  
                //释放连接  
                conn.release();  
                if (err) {
                    error(err);
                } else {
                    //事件驱动回调  
                    success(results);
                }
            });  
        }  
    });  
};

module.exports = query;