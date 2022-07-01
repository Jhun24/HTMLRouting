let test = (app)=>{
    app.get("/test",(req,res)=>{
        res.send(200, "GET 메소드 성공!");
    });
    
    app.post("/test",(req, res)=>{
        let text = "입력하신 id는 " + req.body.id + "이고, 비밀번호는 " + req.body.password + "입니다."; 
        res.send(200, text);
    });
}

module.exports = test;