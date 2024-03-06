let famousplace=[
{name:"goa",image:"https://images.pexels.com/photos/88212/pexels-photo-88212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",price:"rs 3000",details:"Goa is mainly known for world-famous beaches. Goa is the hub of a variety of alcohols at low prices. Most of the people think that Goa is full of beaches, but Goa has covered one-third of forests.  "},
{name:"Agra",image:"https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",price:"rs 4000",details:"This city is situated on the river Yamuna banks in Uttar Pradesh. It is one of the most renowned cities across the country. This city is filled with exquisite monuments belonging to the period of the Mughal Kingdom.  "},
{name:"manali",image:"https://images.pexels.com/photos/7846563/pexels-photo-7846563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",price:" rs 5000",details:"Manali, a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state, is a jewel in the crown of the Indian tourism industry. It’s a hub for adventure sports, a haven for nature lovers, and a  "},
{name:"jaipur",image:"https://images.pexels.com/photos/15395061/pexels-photo-15395061/free-photo-of-hawa-mahal-palace-in-jaipur-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",price:"rs 3500",details:"Across the entire Rajasthan, Jaipur is known to be the biggest city. It is also popularly called the Pink City. It got the name of the pink city due to the   "},
{name:"munnar",image:"https://media.istockphoto.com/id/511119924/photo/tea-plantations-and-river-in-hills-kerala-india.jpg?s=2048x2048&w=is&k=20&c=DHGXYX9Ff21baUwbpwv_7lyAKi-iPI8IVl2nmBVG_nA=",price:"rs 4000",details:"Munnar is in Kerala. It is situated at an altitude of 1600mts to 1800mts above sea level, this valley is covered with a green carpet of huge tea plantations  "},
{name:"mumbai",image:"https://images.pexels.com/photos/12460246/pexels-photo-12460246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",price:"rs 3000",details:"Mumbai could be the capital city of Maharashtra & also the financial capital of India. Mumbai was formerly called Bombay. Some popular sports of Mumbai city are the Prince of Wades Museum (the Chhatrapati Shivaji Vastu "},
{name:"kolkata",image:"https://media.istockphoto.com/id/1164386039/photo/howrah-bridge-on-river-ganges-at-kolkata-at-twilight-with-moody-sky.jpg?s=2048x2048&w=is&k=20&c=yyLWm_OAuiWhvOh52WPNj2X0hGbe-rWik_TC5ECnXS0=",price:"rs 4000",details:"Kolkata is considered one of the largest cities in India. It is among the top metro cities in India and is capital for West Bengal. "},
{name:"kashmir",image:"https://images.pexels.com/photos/10999526/pexels-photo-10999526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",price:"rs 6000",details:"The Kashmir region is predominantly mountainous, with deep, narrow valleys and high, barren plateaus. The relatively low-lying Jammu and Punch (Poonch) plains in the southwest are separated by the thickly forested "},
];
let clutter="";
let box=document.querySelector(".box");
famousplace.forEach(function(places,index){
      clutter+=
      clutter=`<div class="box1">
      <img src="${places.image}">
      <div class="inner">
      <h1>${places.name}</h1>
      <p>${places.price}</p>
    <p class="review"><i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      </p>
      <button id="${index}" class="details">see details</button>
  </div>
  </div>`
});
box.innerHTML=clutter;
let section=document.querySelector("section")
let section2=document.querySelector("section2")
let section3=document.querySelector("section3")
let section4=document.querySelector("section4")
let section5=document.querySelector("section5")
let section6=document.querySelector("section6")
let section7=document.querySelector("section7")
let section1=document.querySelector("section1")
let bigimage=document.querySelector(".bigimage");
let bigtitle=document.querySelector(".bigtitle");
let bigprice=document.querySelector(".bigprice");
let bigdetails=document.querySelector(".bigdetails");
let number=0
box.addEventListener("click",(event)=>{
    number=Number(event.target.id);
       if(event.target.className=="details"){
        section.style.display="none"
        section2.style.display="none"
        section3.style.display="none"
        section4.style.display="none"
        section5.style.display="none"
        section6.style.display="none"
        section7.style.display="none"
        section1.style.display="block"
        bigimage.src=`${famousplace[number].image}`
        bigtitle.innerText=`${famousplace[number].name}`
        bigprice.innerText=`${famousplace[number].price}`
        bigdetails.innerText=`${famousplace[number].details}`
       }
});
let book = document.querySelector(".book")
let input=document.querySelectorAll("input")
let back = document.querySelector(".back")
book.addEventListener("click",()=>{
 if(input[0].value==""){
        alert("fill the form")
   }else{
    input.forEach(function(inputs){
        book.innerText="booked";
        inputs.value=""
})
alert("booking is done")
   }
 })

back.addEventListener("click",()=>{
        section.style.display="block"
        section2.style.display="block"
        section3.style.display="block"
        section4.style.display="block"
        section5.style.display="block"
        section6.style.display="block"
        section7.style.display="block"
        section1.style.display="none"
        book.innerText="book"
})


