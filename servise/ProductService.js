const productModal = require("../modal/ProductModal");
const commen = require("../helper/Commen")

class ProductService {
    constructor() { }

    async createProduct(req, res) {
        let data = {
            title: req.body.title,
            description: req.body.description,
            perentId: req.body.perentId,
            price: req.body.price,
        };
        console.log("req.files", req.files);
        console.log("req.body", req.body);
        // return false;
        const imageName = await commen.uploadImage(req.files.image);
        data.image = imageName
        console.log(data);
        await productModal.createProduct(data)
        return true
    };

    async getAllProduct(req, res) {
        let getAllProduct = await productModal.getAllProduct()
        console.log("getAllProduct", getAllProduct);
        return getAllProduct
    };
    
    async updateProduct(req, res) {
        let data = {
            title: req.body.title,
            description: req.body.description,
            perentId: req.body.perentId,
            price: req.body.price,
            image: req.body.image,
            id: req.body.userId
        };
        console.log("data", data);
        await productModal.updateProduct(data)
        return true
    };
    
    async deleteProduct(req, res) {
        let productId = req.params.productId
        let deleteProduct = await productModal.deleteProduct(productId)
        console.log("deleteProduct", deleteProduct);
        return deleteProduct
    };
    

}
module.exports = new ProductService();