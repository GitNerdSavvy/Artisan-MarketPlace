const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorH");
const catchAsyncErrors = require("../middleware/catchAsync");
const ApiFeatures = require('../utils/features')
// Create product
exports.createProduct =catchAsyncErrors (async (req, res,next) => {
  
    const product = await Product.create(req.body);
    res.status(200).json({
      success: true,
      product,
    });
  
    res.status(500).json({
      success: false,
      message: "Error creating product",
    });
  
});

// Get all Products
exports.getAllProducts =catchAsyncErrors(async (req, res,next) => {

  const resultPerPage = 4;
  const productsCount = await Product.countDocuments();
  const apiFeature = new ApiFeatures(Product.find(), req.query)
  .search()
  .filter()
  .pagination(resultPerPage);


    const products = await apiFeature.query;
    res.status(200).json({
      success: true,
      products,
    });
  
    res.status(500).json({
      success: false,
      message: "Error retrieving products",
    });
  
});

// Get Product Details
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    product,
    productsCount,
  });
});

// Update Product
exports.updateProduct =catchAsyncErrors(async (req, res,next) => {
 
  let product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  } 
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
      product,
    });
  

});

// Delete Product
exports.deleteProduct = catchAsyncErrors(async (req, res,next) => {
  
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  } else {
    await product.deleteOne();
    res.status(200).json({
      success: true,
      message: "Product Deleted",
    });
  }

});
