const express = require('express');
const router = express.Router();

const multer = require('multer');

const storage = multer.diskStorage({
  destination(req,file,callback){
        callback(null,"upload");
  },
  filename(req,file,callback){
      callback(null,Date.now()+file.originalname);
  }
});

const upload = multer({storage});

router.get('/api/get',(req,res)=>{
      res.json({
        code: 0,
        data: {
          name: 'hello world',
        },
      })
});

router.post('/api/post',(req,res)=>{
  res.json({
    code: 0,
    data: {
      name: 'hello world',
    },
  })
});

router.get('/api/500',(req,res)=>{
  res.status(500).json({
    code: 500,
      message: '内部错误',
      data: null,
  })
})

router.post('/api1/upload/upImg',upload.single('file'),(req,res)=>{
  const url = "http://localhost:3001/" +req.file.filename;
  res.json({
    url
  })
})


module.exports=router;