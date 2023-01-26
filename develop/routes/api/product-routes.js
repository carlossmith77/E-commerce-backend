const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', async(req, res) => {
  const rows =await Product.findAll();
  res.json(rows);
  // find all products
  // be sure to include its associated Category and Tag data
});

// get one product
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const row=await Product.findByPk(id);
  res.json(row);
    // find a single product by its `id`
  // be sure to include its associated Category and Tag data
});

// create new product
router.post('/', async (req, res) => {
    const data = req.body;
    console.log("test-post:", data);
    const prod = await Product.create(data);
    res.send(prod);
});

// update product
router.put('/:id', async (req, res) => {
    const id =req.params.id;
    console.log("PUT-UPDATE:", id);
    const rows = await Product.update (
      {tag_name:req.body.tag_name},
      {where: {id:id}}
    );
   
    res.send({message:"Updated", rows:rows});
});

router.delete('/:id', (req, res) => {
    Product.destroy({where: {id:req.params.id}});

  res.send({message: "Deleted"});
  // delete one product by its `id` value
});

module.exports = router;