module.exports = function(app,db){
    app.post('/notes', (req,res) => {
        //youll create your note here 
        console.log(req.body)
        res.send('Hello')
    });
};
