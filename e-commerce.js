// an array of objects
// this was created to grant access to items/ products by looping through the items
// it helped with d sliding pictures on both modals
const items = [
  {
    id: "product1",
    name: "Fall Limited Edition Sneakers",
    Bigimage: "images/image-product-1.jpg",
    Smallimage:"images/image-product-1-thumbnail.jpg",
    Quantity: 0,
    price: 125,
    totalPrice: function () {
    return this.price * count;
      
    },
  },
  {
    id: "product2",
    name: "Winter Limited Edition Sneakers",
    Bigimage: "images/image-product-2.jpg",
    Smallimage:"images/image-product-2-thumbnail.jpg",
    Quantity: 0,
    price: 200,
    product: function () {
      return this.price * count;
    },
  },

  {
    id: "product3",
    name: "Summer Limited Edition Sneakers",
    Bigimage: "images/image-product-3.jpg",
    Smallimage:"images/image-product-3-thumbnail.jpg",
    Quantity: 0,
    price: 300,
    product: function () {
      return this.price * count;
    },
  },
  {
    id: "product4",
    name: "spring Limited Edition Sneakers",
    Bigimage: "images/image-product-4.jpg",
    Smallimage:"images/image-product-4-thumbnail.jpg",
    Quantity: 0,
    price: 225,
    product: function () {
      return this.price * count;
    },
  },
];

// cart array

const cartArray=[];



// define variables outside the function to store element that we worked with.
let miniframes = document.querySelectorAll(".mini-frame");
let miniframes2 = document.querySelectorAll(".mini");
let closebutton = document.querySelector(".closebutton");
const imgBtn = document.querySelector(".modal-bg");
const addToCartBtn = document.querySelector(".cartBtn");
const cartCount = document.querySelector(".cartCount");
const cartAvatar = document.querySelector(".avatar");
const miniModal = document.querySelector(".modal-mbg");
const cartbox = document.querySelector(".cartDisplay");
const bigFrame= document.querySelector(".frame");
const modalFrame=document.querySelector(".minImage");
const modalLabel=document.querySelector("minLabel");
const displayCart=document.querySelector("#cartDisplay");

// miniframes.forEach((frame) => {
// looping through image classList


// changing the image on the modal
  bigFrame.onclick = function (e) 
  {
    let idSwitch3 = e.target.src;
    document.querySelector(".frame2").setAttribute("src", e.target.src);

    imgBtn.style.visibility = "visible";
      }
    
    


// modal functionality
  closebutton.addEventListener("click", function () {
  imgBtn.style.visibility = "hidden";
});

const previousBtn = document.querySelector(".pre-arrow");
const NextBtn = document.querySelector(".next-arrow");

let currentIndex = 0;

NextBtn.addEventListener("click", function () {
  if (currentIndex === 3) {
    currentIndex = 0;
    return;
  }
  currentIndex++;
  document
    .querySelector(".frame2")
    .setAttribute("src", items[currentIndex].image);
});
previousBtn.addEventListener("click", function (e) {
  if (currentIndex === 0) {
    currentIndex = 3;
    return;
  }
  currentIndex--;
  document
    .querySelector(".frame2")
    .setAttribute("src", items[currentIndex].image);
});

for(const frame of miniframes){
  frame.onclick=function(event){
    let idSwitch = event.target.id;

    items.map((item) => {
      if (item.id === idSwitch) {
        console.log(idSwitch);
        document.querySelector(".frame").setAttribute("src", item.Bigimage);
        document.querySelector(".text").innerHTML=item.name;
        document.querySelector(".amount").innerHTML=`$${item.price}`;
        
      }
    });
    
  }
}














// functionality of the mini-image click
for (const min of miniframes2) {
  min.onclick = function (e) {
    console.log("hello");
    let minSwitchId = e.target.id;
    console.log(minSwitchId);
    items.map((item) => {
      if (item.id === minSwitchId) {
        document.querySelector(".frame2").setAttribute("src", item.image);
      }
    });
  };
}

// functionality of the count button: plus/minus
let count = 0;
document.querySelector(".minus").onclick = function () {

  if (count === 0) {
    return;
  }
  count--;
  
  document.querySelector(".count-value").innerHTML = count;
};
document.querySelector(".plus").onclick = function () {
  
  count++;
  document.querySelector(".count-value").innerHTML = count;
  // console.log(Quantity);
};

// document.querySelector(".modal-btn").onclick = function () {};

// functionality on click on add to cart button
addToCartBtn.addEventListener("click", function () {

  if(count==0){
    return
  }
items.map((item)=>{
  
  if(item.name===document.querySelector(".text").innerHTML){
    
    const object={
      id:item.id,
      name:item.name,
      price:item.price,
      smallImage: item.Smallimage,
      quantity: Number(document.querySelector(".count-value").innerHTML),
      totalPrice:function(){
        return item.price * Number(document.querySelector(".count-value").innerHTML) 
        
      },
    }
    console.log(object);
    cartArray.push(object);
  }

})
});
  
  //  onclick image and count should be added to
// functionality on click on avatar
document.querySelector(".avatar").onclick = function () {
  // cartDisplay.innerHTML="";
  let output="";
  cartArray.map((cart)=>{
    output+=`
    <div class="minholder w-100">
      <div class="minImager">
        <img class="minImage" src=${cart.smallImage}>
      </div>
      <div class="minLabel">
        <p class="objName">${cart.name}</p>
        <p class="calculation">$${cart.price}*${cart.quantity} ${cart.totalPrice()}</p>
       </div>
      <div class="delbtn">
        <img src="images/icon-delete.svg">
      </div>
    </div>`
  })
  cartDisplay.innerHTML=output;
  // display modal
  miniModal.style.visibility = "visible";
};
