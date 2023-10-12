

exports.homePage = async(req,res)=>
{
    const locals ={
        title: "Notes App",
        description: "This is nots app developed with js"
    }
    res.render('index' , {
        locals,
        layout: '../views/layouts/front_page_layout'
    });

} 

exports.about = async(req,res)=>
{
    const locals ={
        title: "Notes_App_About_Page",
        description: "This is nots app developed with js"
    }
    res.render('about' , locals);

}



