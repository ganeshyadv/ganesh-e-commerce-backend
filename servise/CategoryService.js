const categoryModal = require("../modal/CategoryModal");

class CategoryService{
    constructor() { }

    async createCategory(req, res) {
        let data = {
            title: req.body.title,
            description: req.body.description,
            perentId: req.body.perentId,
        };
        let insertCategory = await categoryModal.insertCategory(data)
        return true
    };

    async getCategory(req, res) {
        let getAllCategory = await categoryModal.getAllCategory()
        console.log("getAllCategory", getAllCategory);
        return getAllCategory
    };

    async getCategoryById(req, res) {
        let catId = req.params.catId
        console.log("catId", catId);
        let getCategoryById = await categoryModal.getCategoryById(catId)
        console.log("getCategoryById", getCategoryById);
        return getCategoryById
    };

    async updateCategory(req, res) {
        let data = {
            title: req.body.title,
            description: req.body.description,
            perentId: req.body.perentId,
            categoryId: req.body.categoryId
        };
        console.log("data", data);
        await categoryModal.updateCategory(data)
        return true
    };

    async deleteCategory(req, res) {
        let categoryId = req.params.categoryId;
        console.log("categoryId", categoryId);
        let deleteCategory = await categoryModal.deleteCategory(categoryId);
        console.log("deleteCategory", deleteCategory);
        return deleteCategory
    };

}
module.exports = new CategoryService();