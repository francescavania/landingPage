const navBarElement = document.querySelectorAll(".navAction");
const activeNav = document.querySelector('.navBar a.active');

navBarElement.forEach(function(value,index){
    value.addEventListener("click",function(){
        if (activeNav !== null) {
            activeNav.classList.remove('active');
          }
        value.classList.add("active");
    })
})

const imageHero = document.querySelector('#image');

imageHero.addEventListener('click',(e)=>{
    if(imageHero.getAttributeNode('src').value === '../Assets/foto2.jpg'){
        imageHero.getAttributeNode('src').value='../Assets/foto.jpg'
    }else{
        imageHero.getAttributeNode('src').value='../Assets/foto2.jpg'
    }
})