/*global variables*/
/*var items=[

{ //first item
    code:"Itvs",
    title:"TV Samsung",
    price: 1000,
    discription:"This is the long description of the item",
    catagory:"Electronics",
    image:"https://images.samsung.com/is/image/samsung/pe-fhdtv-j5290-un49j5290agxpe-frontblack-113108078?$PD_GALLERY_L_JPG$"
      },

 {//second item
    code:"iph10",
    title: "iPhone",
    price: 1000,
    description: "This is the long description",
    catagory: "mobile devices",
    image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MRWM2_AV1_GOLD_GEO_MX?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1536254549811"
      }, 

 {//third item
    code:"2spk",
    title: "Speakers",
    price: 100,
    description: "This is the long description",
    catagory: "Sound",
    image:"https://cdn.audioaffair.co.uk/media/catalog/product/cache/1/image/1000x1000/602f0fa2c1f0d1ba5e241f914e856ff9/1/0/100_-_black.jpg"
     }
    ]*/

    var  items=[];
    var serverURL="http://localhost:8080/API/";

    function fetchCatalog(){
        //.get item from the server
        $.ajax({
            url:serverURL+"items",
            type:"GET",
            success:function(res){
                    console.log("It Works",res);
                //console.log(res);
                for(var i=0; i<res.length;i++){
                    if(res[i].user=="Terri"){
                    items.push(res[i]);
                    }
                }
                displayCatalog();

            },
            error:function(details){
                console.log("Error",details);
            }
        });

    }

function displayCatalog(){
    //travel the array
    for(var i=0;i<items.length;i++){
    //get the element from the array
        var product=items[i];
    //create the string
        drawItem(product);

    }

}

function drawItem(product){

    var layout=`
        <div class="item" id="${product.code}">
            <img src="${product.image}">
            <h4>${product.title}<h1>
            <h6 class="itemPrice">${product.price}<h6>
            <p> ${product.description}</p>
            <button class="btn btn-primary">Add to Cart</button>
        </div>`;

        //display the element in the DOM(HTML)
            $("#catalog").append(layout);
}

function search(){
    
    var searchText=$("#txt-search").val();
    $("#catalog").html("");
    for(var i=0;i<items.length;i++){
        var item=items[i];
        if(item.title.toLowerCase().includes(searchText.toLowerCase())){
            drawItem(item);
        }

    }
}


/*initialization*/
function init(){
    console.log("catalog page");
    fetchCatalog();
    //displayCatalog();

    $("#btn-search").click(search);
}
window.onload=init;