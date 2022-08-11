
const homeController = (req, res) =>{
    res.render('index');
}
const usPage = (req, res) =>{
    res.send('Us page');
}
const subscribeEmail = (req, res) =>{
    const {email, name} = req.body;
    console.log(`Thank you ${name}, we save your email ${email}`);
    res.send("Subscribed!!");
}

module.exports = {
    homeController, 
    usPage, 
    subscribeEmail
};