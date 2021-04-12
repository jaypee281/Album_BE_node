let fs = require("fs");
// const Image=require("../model/Image")
exports.getImages = (req, res) => {
  fs.readFile( __dirname + "/" + "users.json", 'utf8', (err, data) =>{
    if (err) console.log(err);
    res.status(200).end( data );
 });
};
/*Adding images */
exports.addImage = (req, res) => {
  const id = req.body.id;
  const image = req.body.image;
  const like=req.body.like;
  const i={id, image, like};
  if (!image) {
    res.status(304).end();
  }
  else{
  fs.readFile( __dirname + "/" + "users.json", 'utf8', (err, data)=> {
    if (err) console.log(err);
    let img=JSON.parse(data);
    img.push(i);
  fs.writeFile( __dirname + "/" + "users.json", JSON.stringify(img), err => {
    console.log(err);
  });
  res.status(201).end(data);
  })
}
};

/*Deleting images */
exports.deleteImage = (req, res) => {
  const urlId = req.params.id;
  fs.readFile( __dirname + "/" + "users.json", 'utf8',(err, data) =>{
    if (err) console.log(err);
    let img=JSON.parse(data);
    const filteredImages = img.filter((t) => t.id != urlId);
    fs.writeFile( __dirname + "/" + "users.json", JSON.stringify(filteredImages),'utf8', err => {
      console.log(err);
    });
    res.status(200).end( );
 });
};


/*Liking images */
exports.likeImage = (req, res) => {
  const urlId=req.params.id;
  fs.readFile( __dirname + "/" + "users.json", 'utf8',(err, data)=> {
    if (err) console.log(err);
    let img=JSON.parse(data);
      let updImages= img.map(t => t.id == urlId? {...t,like:!t.like,} : t
    );
    console.log(updImages);
    fs.writeFile( __dirname + "/" + "users.json", JSON.stringify(updImages),'utf8', err => {
      console.log(err);
    });
});
fs.readFile( __dirname + "/" + "users.json", 'utf8', (err, data)=> {
  if (err) console.log(err);
  res.status(200).end( data );
});
}

/*Updating images */
exports.updateImage = (req, res) => {
  const id=req.body.id;
  const updatedImage=req.body.image;
  if (!updatedImage) {
    res.status(304).end();
  }
else{
  fs.readFile( __dirname + "/" + "users.json", 'utf8', (err, data)=> {
    if (err) console.log(err);
    let img=JSON.parse(data);
      let updImages= img.map(t => t.id == id? {...t,image:updatedImage} : t
    );
    console.log(updImages);
    fs.writeFile( __dirname + "/" + "users.json", JSON.stringify(updImages),'utf8', err => {
      console.log(err);
    });
    res.status(200).end();
});
}
}
