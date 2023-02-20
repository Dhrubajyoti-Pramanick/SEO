var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      
    },
  });
  let a,b;
  document.getElementById("check").addEventListener("click",()=> {
    event.preventDefault();
    a=document.getElementById("url");
    b=document.getElementById("mail");
    console.log(a.value);
    console.log(b.value);
    if(a.value=="" && b.value==""){
        document.getElementById("output").innerHTML = `*Please enter the info`;
    }
    else {
        document.getElementById("output").innerHTML = `your entry is recorded`;
    } 
  })