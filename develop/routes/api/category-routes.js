const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/',async (req, res) => {
  console.log("find all");
 // const cat = await testPost();
 // res.send(cat);
  const rows =await Category.findAll();
  res.json(rows);
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async(req, res) => {
  const id = req.params.id;
  const row =await Category.findByPk(id);
  res.json(row);
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async(req, res) => {
  const data = req.body;
  console.log("test-post:", data);
  const cat = await Category.create(data);
  res.send(cat);
  // create a new category
});

router.put('/:id', async(req, res) => {
  const id =req.params.id;
  console.log("PUT-UPDATE:", id);
  const rows = await Category.update (
    {category_name:req.body.category_name},
    {where: {id:id}}
  );
 
  res.send({message:"Updated", rows:rows});
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  Category.destroy({where: {id:req.params.id}});

  res.send({message: "Deleted"});
  // delete a category by its `id` value
});

module.exports = router;
