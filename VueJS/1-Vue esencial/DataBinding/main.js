// // vanila JS

// var input = document.querySelector('input');
// var h1 = document.querySelector('h1');

// input.addEventListener(
//     //'keyup', function (){
//     //    h1.innerHTML = input.value;
//     //}

//     //podemos hacer más eficiente el código con ES6
//     //function(){acciones} = ()=>acciones

//     'keyup', () => h1.innerHTML = input.value
// );


new Vue ({
    el: 'main',
    data:{
       mensaje: 'hola mundo',
    }
});



