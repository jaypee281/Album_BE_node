var fs = require("fs");
// const Image=require("../model/Image")
exports.getImages = (req, res, next) => {
  fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
    console.log( data );
    res.status(200).end( data );
 });
};

exports.addImage = (req, res, next) => {
  const id = req.body.id;
  const image = req.body.image;
  const like=req.body.like;
  const i={id, image, like};
  fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
    var img=JSON.parse(data);
    // console.log(img);
    // console.log(x);
    // console.log(i);
    img.push(i);
    console.log(img);
  fs.writeFile( __dirname + "/" + "users.json", JSON.stringify(img), err => {
    console.log(err);
  });
  res.status(200).end(data);
  })
};

exports.deleteImage = (req, res, next) => {
  const urlId = req.params.id;
  fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
    var img=JSON.parse(data);
    const filteredImages = img.filter((t) => t.id != urlId);
    console.log(filteredImages);
    fs.writeFile( __dirname + "/" + "users.json", JSON.stringify(filteredImages),'utf8', err => {
      console.log(err);
    });
    res.status(200).end( );
 });
};



exports.likeImage = (req, res, next) => {
  const urlId=req.params.id;
  fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
    var img=JSON.parse(data);
      var updImages= img.map(t => t.id == urlId? {...t,like:!t.like,} : t
    );
    console.log(updImages);
    fs.writeFile( __dirname + "/" + "users.json", JSON.stringify(updImages),'utf8', err => {
      console.log(err);
    });
});
fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
  console.log( data );
  res.status(200).end( data );
});
}


exports.updateImage = (req, res, next) => {
  const id=req.body.id;
  const updatedImage=req.body.image;
  fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
    var img=JSON.parse(data);
      var updImages= img.map(t => t.id == id? {...t,image:updatedImage} : t
    );
    console.log(updImages);
    fs.writeFile( __dirname + "/" + "users.json", JSON.stringify(updImages),'utf8', err => {
      console.log(err);
    });
    res.status(200).end();
});
}

