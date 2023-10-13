exports.dashboard = async(req,res)=>
{
    const locals ={
        title: "Dashboard",
        description: "This is dashboard"
    }
    res.render('dashboard/index' , {
        locals, 
        layout: '../views/layouts/dashboard_page_layout'
    });

} 