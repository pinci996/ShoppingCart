var mongoose = require ('mongoose');
var Product = require('../models/product');

mongoose.connect('mongodb://localhost:27017/shopping');

var products =[ 
    new Product ({
        imagePath: 'https://s3.eu-central-1.amazonaws.com/cnj-img/images/1y/1yxOSkSwqV2p',
        title: 'Lebron James Dres',
        description:'Nike Dres Lebron James, LA Lakers, broj 23',
        price: 600
}),
new Product ({
    imagePath: 'https://cdn.shopify.com/s/files/1/2030/1917/products/RWSTY_2400x.jpg?v=1571715516',
    title: 'Russell Westbrook Dres',
    description:'Nike Dres Russell Westbrook, OKC Thunder, broj 0',
    price: 500
}),
 new Product ({
        imagePath: 'https://cdn.shopify.com/s/files/1/2030/1917/products/DLICY_-_5_200x.jpeg?v=1571715511',
        title: 'Damian Lillard Dres',
        description:'Nike Dres Damian Lillard, Portland Trailblazers, broj 0',
        price: 350
}),
new Product ({
    imagePath: 'https://sc02.alicdn.com/kf/H7f0d4c1c4a7d4b01b42a29ec5fa0d91be.jpg',
    title: 'Luka Doncic Dres',
    description:'Nike Dres Luka Doncic, Dallas Mavericks, broj 77',
    price: 499
}),
];

var done = 0;
for(var i=0; i< products.length;i++){
    products[i].save(function(err,result){
        done++;
        if(done === products.length){
            exit();
        }
    });
}

function exit(){
mongoose.disconnect();
}