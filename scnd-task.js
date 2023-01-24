const buttons = document.querySelectorAll('.btn')
buttons.forEach(button =>{
    button.addEventListener('click', function(){
        console.log('вы нажали на кнопку')
    })

})