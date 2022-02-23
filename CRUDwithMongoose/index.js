const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/e-comm');

const productSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    category: String
});

// Insert
const mongooseInsert = async () => {
    const productModel = mongoose.model('products', productSchema);
    let data = new productModel({
        name: "ProductName",
        brand: "ProductBrand",
        price: 0,
        category: "ProductCategory"
    });
    let result = await data.save();
    console.log(result);
}
// mongooseInsert();


// Update
const mongooseUpdate = async () => {
    const productModel = mongoose.model('products', productSchema);
    let data = await productModel.updateOne(
        { name: "ProductName" },
        { $set: { name: "PName", brand: "PBrand", category: "PCategory" } }
    );
    console.log(data);
}
// mongooseUpdate();


// Delete
const mongooseDelete = async () => {
    const productModel = mongoose.model('products', productSchema);
    let data = await productModel.deleteOne({name: "PName"});
    console.log(data);
}
// mongooseDelete();


// Search
const mongooseSearch = async () => {
    const productModel = mongoose.model('products', productSchema);
    let data = await productModel.find({name: "Samsang note 7"});
    console.log(data);
}
mongooseSearch();
