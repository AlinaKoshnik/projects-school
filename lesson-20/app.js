let btn = document.querySelector("#second-btn");

// btn.onclick = function () {
//     alert("Hello world")
// } - этот вариант нельзя повторить на странице

btn.addEventListener("click", function(){
    alert("hi world")
}) 
// - этот можно повторить, он фиксирует события на элементе