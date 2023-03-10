const productModal = require("../modal/ProductModal");
const commen = require("../helper/Commen")

class ProductService {
    constructor() { }

    async createProduct(req, res) {
        let data = {
            title: req.body.title,
            description: req.body.description,
            categoryId: req.body.categoryId,
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
        let response = [];
        let path = "http://127.0.0.1:3003/" + "/images/products/";
        if (getAllProduct){
            getAllProduct.forEach(product => {
                product.path = path + product.image;
                response.push(product);
            });
        }
        console.log("response", response);
        return response
    };

    async getProductsById(req, res) {
        let data = req.params.productsId
        console.log("data", data);
        let getProductsById = await productModal.getProductsById(data)
        let response = [];
        let path = "http://127.0.0.1:3003/" + "/images/products/";
        if (getProductsById){
            getProductsById.forEach(product => {
                product.path = path + product.image;
                response.push(product);
            });
        }
        console.log("response", response);
        return response
    };
    
    async updateProduct(req, res) {
        let data = {
            title: req.body.title,
            description: req.body.description,
            categoryId: req.body.categoryId,
            price: req.body.price,
            productId: req.body.productId
        };
        console.log("req.files", req.files);
        console.log("req.body", req.body);
        // return false;
        const imageName = await commen.uploadImage(req.files.image);
        data.image = imageName
        console.log(data);
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