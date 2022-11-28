// CRUDS Operating System 
// Create Display Update Delete Search....
// Start CRUDS 
var productNameInput =document.getElementById("productNameInput");
var productPriceInput =document.getElementById("productPriceInput");
var productCategoryInput =document.getElementById("productCategoryInput");
var productDescInput =document.getElementById("productDescInput");
var productContainer =[];
var productCreate = 'create';
var list;

if(localStorage.getItem('products') !=null){
    productContainer= JSON.parse(localStorage.getItem('products'))
    displayProdect();
    
}



function addProduct(){
    var product= {
        name:productNameInput.value ,
        price:productPriceInput.value,
        category:productCategoryInput.value,
        desc:productDescInput.value,
    }
    if(productCreate === 'create'){
        productContainer.push(product);
        
    }
    else{
        productContainer[ list ] = product;
        productCreate = 'create';
        add.innerHTML = 'Add Prodcut';
    
    }
    localStorage.setItem('products',JSON.stringify(productContainer))
    clearProduct();
    displayProdect();
    
}


function displayProdect(){
    var cartona = ``;
        for(var i=0;i<productContainer.length;i++){
            cartona +=`<tr>
            <td>${productContainer[i].name}</td>
            <td>${productContainer[i].price}</td>
            <td>${productContainer[i].category}</td>
            <td>${productContainer[i].desc}</td>
            <td><button onclick='updateProduct(${i})' class ='btn btn-outline-dark  btn-sm'>Update</button></td>
            <td><button onclick='deleteProduct(${i})' class ='btn btn-outline-dark btn-sm'>Delete</button></td>
        </tr>`
        }
    
    document.getElementById('rowData').innerHTML =cartona;
}
function clearProduct(){
    productNameInput.value = ``;
    productPriceInput.value = ``;
    productCategoryInput.value = ``;
    productDescInput.value = ``;
}  


function deleteProduct(deleteIndex){
    productContainer.splice(deleteIndex,1)
    localStorage.setItem('products',JSON.stringify(productContainer))
    displayProdect();
}

function search(term){
    var cartona = ``;
        for(var i=0;i<productContainer.length;i++){
            if(productContainer[i].name.toLowerCase().includes(term.toLocaleLowerCase())==true){
                cartona +=`<tr>
                <td>${productContainer[i].name}</td>
                <td>${productContainer[i].price}</td>
                <td>${productContainer[i].category}</td>
                <td>${productContainer[i].desc}</td>
                <td><button onclick='updateProduct(${i})' class ='btn btn-outline btn-sm'>Update</button></td>
                <td><button onclick='deleteProduct(${i})' class ='btn btn-outline btn-sm'>Delete</button></td>
            </tr>`
            }
        document.getElementById('rowData').innerHTML =cartona;
            }
}

function updateProduct(i){
    productNameInput.value = productContainer[i].name;
    productPriceInput.value = productContainer[i].price;
    productCategoryInput.value = productContainer[i].category;
    productDescInput.value = productContainer[i].desc;
    document.getElementById('add').innerHTML ='Update';
    productCreate = 'update';
    list = i;
    scroll({
        top: 0,
        behavior:'smooth'
    })
}

