

exports.homePage = async(req,res)=>
{
    const locals ={
        title: "Notes App",
        description: "This is nots app developed with js"
    }
    res.render('index' , locals);

} 