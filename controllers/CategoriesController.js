import Category from '../models/Category.js'

const CategoriesController = {
    //Add Category. 
    CategoryCreate(req, res) {
        Category.create(req.body)
        .then(category => {res.status(201).send(category)})
        .catch(error => {
            console.error(error)
            res.send(error)
        })
    },
    // Get all categories. 
    getAllCategories(req, res) {
        Category.find({})
        .then(category => {res.status(201).send(category)})
        .catch(error => {
            console.log(error);
            res.send(error);
        })
    },
    //Find category by id. 
    getCategoryById(req, res) {
        Category.findById(req.params._id)
        .then(category => {res.send(category)})
        .catch(error=>{console.error(error)})

    }


}

export default CategoriesController;