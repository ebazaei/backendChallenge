
const PostFeed = require('../models/postfeed');



const getHomePage = (req, res) => {
    PostFeed.find()
        .then(postfeeds => {
            res.render('homePage', { titleForPage: 'Home Page', postfeeds });
        })
        .catch(err => console.log(err))
}



const addNewPostFeed = (req, res) => {
    if (req.method === 'GET') {
        res.render('addNewPostFeed', { titleForPage: 'New PostFeed' });
    }

    if (req.method === 'POST') {
        console.log(req.body);
        const postfeed = new PostFeed(req.body);
        postfeed.save()
            .then(postfeed => {
                res.redirect('/');
            })
            .catch(err => console.log(err))
    }
}


const updatePostFeed = (req, res) => {
    if (req.method === 'GET') {
        PostFeed.findById(req.params.id)
            .then(postfeed => {
                res.render('editPostFeed', { titleForPage: 'Edit PostFeed', postfeed })
            })
            .catch(err => console.log(err))
    }

    if (req.method === 'POST') {
        console.log(req.params.id);
        console.log(req.body);
        PostFeed.findByIdAndUpdate(req.params.id, req.body, { runValidators: true })
            .then(result => {
                res.redirect('/')
            })
            .catch(err => console.log(err))
    }
}


const showOnePostFeed = (req, res) => {
    PostFeed.findById(req.params.id)
        .then(postfeed => {
            res.render('showPostFeed', { titleForPage: 'Show PostFeed', postfeed });
        })
        .catch(err => console.log(err))
}








const delPostFeed = (req, res) => {
    PostFeed.findByIdAndDelete(req.params.id)
        .then(result => {
            res.redirect('/');
        })
        .catch(err => console.log(err))
}



module.exports = {
    getHomePage,
    addNewPostFeed,
    showOnePostFeed,
    updatePostFeed,
    delPostFeed
}

