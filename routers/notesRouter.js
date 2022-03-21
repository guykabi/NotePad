const express = require('express') 
const notesBL = require('../models/noteBL') 
 

const router = express.Router()  

router.route('/')
    .get( async function(req,resp)
    {
        let data = await notesBL.getallnotes()
        return resp.json(data);    
    })  

    router.route('/')
    .post(async function(req, resp)
    {
       let obj = req.body 
       let data = await notesBL.addnote(obj) 
       return resp.json(data)
    }) 

    router.route('/:id')
    .put(async function(req,resp)
    {
      let id = req.params.id 
      let obj = req.body 
      let data = await notesBL.updatenote(obj, id) 
      return resp.json(data)
    }) 

    router.route('/:id')
    .delete(async function(req,resp)
    {
       let id = req.params.id
       let data = await notesBL.deleteMovie(id)
       return resp.json(data)
    })

    module.exports = router
