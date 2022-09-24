(function (){
    let screen=document.querySelector('.screen');
    let buttons=document.querySelectorAll('.btn');
    let clear=document.querySelector('.btn-cancel');
    let equal=document.querySelector('.btn-equal');

    buttons.forEach(function(button){
     button.addEventListener('click',function(e){
        let value=e.target.dataset.num;
        screen.value +=value;
     })
    });

    clear.addEventListener('click',function(e){
        
        screen.value="";
        
    })
    equal.addEventListener('click',function(e){

var q=eval(screen.value);
screen.value=q;

    }) 

    
   
    

})();
