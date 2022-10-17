let count = 0;
    let bt_Plus = document.getElementById("buttonCountPlus");
    let bt_Minus = document.getElementById("buttonCountMinus");
    let display = document.getElementById("CountNumber");

    bt_Plus.onclick = function () {
        display.value = ++count;
    }

    bt_Minus.onclick = function () {
        if(display.value >1){
        display.value = --count;
        }
    }
        
            function success(){
        if(display.value<10){
        let lastDigit = display.value % 10;
        if(lastDigit == 1){
                toastr.success(display.value + ' товар был добавлен в корзину');
        } if((lastDigit > 1) && (lastDigit < 5)){
                toastr.success(display.value + ' товара было добавлено в корзину');
        } if(lastDigit > 4 && lastDigit <10){
                toastr.success(display.value + ' товаров было добавлено в корзину');
        }
    }
    else {
        toastr.success(display.value + ' товаров было добавлено в корзину');
    }
    }


    
    
    

    var previews = document.querySelectorAll('.imgs img')
    var mainPhoto = document.querySelector('.imgs-big img')
    
    for(let i = 0; i < previews.length; i++) {
     previews[i].addEventListener('mouseover', function () {
      const src = this.getAttribute('data-full-img');
      mainPhoto.setAttribute('src', src);
     })
    }
    