$(document).ready(function(){
    const btn = $('#btn-cart');
    // console.log(btn)

    btn.click(function(){
        const products = $.get('http://localhost:3000/products').done(function(data){
        data.forEach(element => {
            console.log(element)

        })
        });
    })

})



// let carts = document.querySelectorAll('#btn-cart');

// for (let i=0; i < carts.length; i++) {
//     carts[i].addEventListener('click', () => {
//         cartNumbers();
//     })
// }



// $.ajax({
//     method:'GET'
//     url: "http://localhost:3000/products"
//     dataType: 'json'
// })


