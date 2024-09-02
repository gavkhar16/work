let addButton = document.querySelector(".add-product")
let productList = document.querySelector(".products-list")
addButton.addEventListener("click", addProduct)
let productArray = [];

function addProduct() {

let productType= document.querySelector('#type-select').value
let productName= document.querySelector('#product-name').value
let productCount= document.querySelector("#product-count").value
let productString = "";
let obj ={}
obj.type = productType
obj.name = productName
obj.count = productCount
productArray.push(obj)
productArray.forEach((e,i)=>{
    productString += `<div class="product-item">
    Тип:${e.type} Название:${e.name} Количество:${e.count}
    <button class="delet" onclick={btnClick(${i})}>Удалить</button>
    </div>`
})
productList.innerHTML=productString
}

function btnClick(e){ 
    let array = productArray .filter((value, i)=>{e!=i})
    productArray=array
    let productString = "";

    productArray.forEach((e,i)=>{
        productString += `<div class="product-item">
        Тип:${e.type} Название:${e.name} Количество:${e.count}
        <button class="delet" onclick={btnClick(${i})}>Удалить</button>
        </div>`
    })
    productList.innerHTML=productString
}
let clearAll = document.querySelector(".clearList");
clearAll.addEventListener("click", clearProductList);

function renderProductList() {
    let productString = "";
    productArray.forEach((e, i) => {
        productString += `<div class="product-item">
        Тип: ${e.type} Название: ${e.name} Количество: ${e.count}
        <button class="delete" onclick="btnClick(${i})">Удалить</button>
        </div>`;
    });
    productList.innerHTML = productString;
}

function clearProductList() {
    productArray = []; 
    renderProductList(); 
}
