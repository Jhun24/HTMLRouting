let route = (app)=>{
    app.get("/",(req, res)=>{
        res.render("index.html");
    });
}

module.exports = route;
