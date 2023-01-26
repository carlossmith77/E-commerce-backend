const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
const { findAll } = require('../../models/Product');

// The `/api/tags` endpoint

router.get('/',async (req, res) => {
  console.log(findAll)
    // find all tags
  // be sure to include its associated Product data
  const rows=await Tag.findAll();
  res.json(rows);
});

router.get('/:id', async (req, res) => {
const id= req.params.id;
const row = await Tag.findByPk(id);

res.json(row);
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
    const data = req.body;
    console.log("test-post:", data);
    const ta=await Tag.create(data);
    res.send(ta);


  // create a new tag
});

router.put('/:id', async (req, res) => {
    const id =req.params.id;
    console.log("PUT-UPDATE:", id);
    const rows = await Tag.update (
      {tag_name:req.body.tag_name},
      {where: {id:id}}
    );
   
    res.send({message:"Updated", rows:rows});
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
    Tag.destroy({where: {id:req.params.id}});

  res.send({message: "Deleted"});
  // delete on tag by its `id` value

});

module.exports = router;