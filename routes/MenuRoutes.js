const express = require('express')
const router = express.Router()
const Menu = require("../models/Menu");

//Post menu

router.post("/",async (req,res)=>{
    const menuItem = req.body;
    const newMenu = new Menu(menuItem);
    try{
     await newMenu.save();
     console.log("Menu added");
     res.status(200).json({message:"menu added",Menu : newMenu});
    }catch(e){
      console.log(e);
      res.status(500).json({message:"internal server error",e});
    };
  });
  
  
  router.get("/",async (req,res)=>{
    const menu = await Menu.find({});
    res.send(menu);
  })


  module.exports = router