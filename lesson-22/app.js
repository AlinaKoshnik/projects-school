let tabItemList = document.querySelectorAll(".tab-title-items");
let tabContent = document.querySelectorAll(".tab-content");
let tabItemsWrap = document.querySelector(".tab-title-items");

function hideTabContent() {
    tabContent.forEach( tab => {
        tab.classList.add("hide");
        tab.classList.remove("show")
    })
}


function showTabContent(i){
    tabContent[i].classList.add("show")
    tabContent[i].classList.remove("hide")

}
hideTabContent();
showTabContent(0)


let decrementBtns = document.querySelectorAll(".decrement-button")[0];
let incrementBtns = document.querySelectorAll(".increment-button")[0];
let productsQuantity = document.querySelectorAll(".product-quantity input")[0];


incrementBtns.addEventListener("click",function() {
    let currentCount = +productsQuantity.value;
    let nextCount = currentCount + 1;
    productsQuantity.value = nextCount;
})

decrementBtns.addEventListener("click",function() {
    let currentCount = +productsQuantity.value;
    let nextCount = currentCount + 1;
    productsQuantity.value = nextCount;
})