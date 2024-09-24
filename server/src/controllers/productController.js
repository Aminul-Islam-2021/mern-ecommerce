const Product = require(".././models/productModel");


const createProduct=async(req,res)=>{
  try{
    console.log("Product crated")
  }catch(error){
    console.log(error),
    res.json(400).send("Internal server error")
  }
}

const getAllProducts=async(req,res)=>{
  try{
    const allProduct=await Product.find()
    if(!allProduct){
      return res.status(404).send("Products not found")
    }
    return res.status(200).send({
      success:true,
      message:"All products",
      total:allProduct.length,
      allProduct,
    })
  }catch(error){
    console.log(error),
     res.json(400).send("Internal server error")
  }
}

const getSingleProduct=async(req,res)=>{
  const {id} = req.params;
  try{
    const product = await Product.findById(id);
    if(!product){
      return res.status(404).send("Product not found")
    }
    return res.status(200).send({
      success:true,
      message:"Single product",
      product,
    })
  }catch(error){
     return 
       res.json(400).send("Internal server error")
     
  }
}

const updateProduct=async(req,res)=>{
  const {id} = req.params;
  const updatedProduct={...req.body}
  try{
    const updateProduct=await Product.findByIdAndUpdate(id,updatedProduct,{new:true})
    console.log(updateProduct)
  }catch(error){
    console.log(error),
     res.json(400).send("Internal server error")
  }
}


const deleteProduct=async(req,res)=>{
  try{
    console.log("Product deleted")
  }catch(error){
    console.log(error),
     res.json(400).send("Internal server error")
  }
}

module.exports={createProduct,getAllProducts,getSingleProduct,updateProduct,deleteProduct}
