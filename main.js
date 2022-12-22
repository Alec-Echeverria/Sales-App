const menuEmail=document.querySelector(".navbar-email");
const desktopMenu=document.querySelector(".desktop-menu");
const menuHamIcon=document.querySelector(".menu");
const mobileMenu=document.querySelector(".mobile-menu");
const menuCarroIcon=document.querySelector(".navbar-shopping-cart");
const aside=document.querySelector(".product-detail");
const productList=[];                                                   //Array  donde se almacenaran productos
const cardsContainer=document.querySelector(".cards-container")                  //Selector de donde se guardan las cards

//Funcion para mostrar menu desktop
function toogleDesktopMenu(){
    const isAsideClosed=aside.classList.contains("inactive");

    if(!isAsideClosed){    
        aside.classList.add("inactive") //Si el menu del carro de compras esta abierto lo cerramos
    }else{
        aside.classList.add("inactive")
    }

    desktopMenu.classList.toggle("inactive");  //Activamos menu de salida
}

//Funcion para mostrar menu mobile
function tooglemobileMenu(){

    const isAsideClosed=aside.classList.contains("inactive");

        if(!isAsideClosed){    
            aside.classList.add("inactive") //Si el menu mobile esta abierto lo cerramos
        }else{
            aside.classList.add("inactive")
        }

        mobileMenu.classList.toggle("inactive");  //Activamos menu mobile
}

//Funcion para mostrar aside de carrito de compras
function toogleshoppingcarthMenu(){
    const isMobileMenuClosed=mobileMenu.classList.contains("inactive");
    const isDesktopMenuClosed=desktopMenu.classList.contains("inactive");

        if(!isMobileMenuClosed){    
            mobileMenu.classList.add("inactive") //Si el menu mobile esta abierto lo cerramos
        }else{
            mobileMenu.classList.add("inactive")
        }

        if(!isDesktopMenuClosed){    
            desktopMenu.classList.add("inactive") //Si el menu del correo esta abierto lo cerramos
        }else{
            desktopMenu.classList.add("inactive")
        }

    aside.classList.toggle("inactive");  //Activamos el menu del carro de compras
}

/* 
Estructura HTML
<div class="product-card">
              <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" >
              <div class="product-info">
                  <div>
                      <p>$120,00</p>
                      <p>Bike</p>
                  </div>
                  <figure>
                      <img src="./icons/bt_add_to_cart.svg" alt="">
                  </figure>
              </div>
</div> */


//Insertar JS en HTML ---recreamos el codigo html desde JS
function renderProduct(array){
    for(product of array){
        const productCard= document.createElement("div");    //Creamos elemento Div
        productCard.classList.add("product-card");           //Asignamos la clase al elemento Div (product-card)
    
        const img= document.createElement("img");
        img.setAttribute("src",product.image);          //Modificamos el atributo src de img y le agregamos la propiedad img del objeto
    
        const productInfo= document.createElement("div");    //Creamos segundo elemento Div
        productInfo.classList.add("product-info");           //Asignamos la clase al elemento Div (product-info)
    
    
        const productInfoDiv= document.createElement("div");  //Creamos tercer elemento Div
        const productPrice=document.createElement("p");      //Creamos primer elemento p, donde ira el precio
        productPrice.innerText="$"+product.price;           //Insertamos el precio directamente en el parrafo desde la propiedad del prodcuto usando un inner.text
        const productName=document.createElement("p");      //Creamos segundo elemento p, donde ira el precio
        productName.innerText=product.name                  //Insertamos el nombre directamente en el parrafo desde la propiedad del producto usando un inner.text
    
        productInfoDiv.append(productPrice,productName);     //insertamos los hijos (p) en el padre (div)
    
        const productInfoFifure= document.createElement("figure"); //Creamos primer elemento Figure
        const productImgCart= document.createElement("img");             //Creamos elemento img donde ira el logo del carro de compras 
        productImgCart.setAttribute("src","./icons/bt_add_to_cart.svg"); //Enlazamos el atributo src a la direccion del icono
    
        productInfoFifure.appendChild(productImgCart);   //insertamos el hijo (img) en el padre (figure)
    
        productInfo.append(productInfoDiv,productInfoFifure);    //insertamos los hijos (div y figure) en el padre (div.product-info)
        productCard.append(img,productInfo);                     //insertamos los hijos (img y div.product-info) en el padre (div.product-card)
        
        cardsContainer.append(productCard);              
    }
}

//Activar menu desktop si dan click
menuEmail.addEventListener("click",toogleDesktopMenu)

//Activar menu mobile si dan click
menuHamIcon.addEventListener("click",tooglemobileMenu)

//Activar aside de carrito de compras si dan click
menuCarroIcon.addEventListener("click",toogleshoppingcarthMenu)


//Agregar nuevo producto al array
productList.push({
    name:"Bike",
    price:120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},
{
    name:"wristwatch",
    price:500,
    image:"https://images.pexels.com/photos/3651587/pexels-photo-3651587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
{
    name:"Book",
    price:40,
    image:"https://images.pexels.com/photos/2099266/pexels-photo-2099266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
{
    name:"Happy Cup",
    price:10,
    image:"https://images.pexels.com/photos/1239403/pexels-photo-1239403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
{
    name:"Zuculenta",
    price:20,
    image:"https://images.pexels.com/photos/305821/pexels-photo-305821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
{
    name:"Mobile",
    price:320,
    image:"https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
{
    name:"SmartWatch",
    price:120,
    image:"https://images.pexels.com/photos/1682821/pexels-photo-1682821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
{
    name:"Laptop",
    price:500,
    image:"https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
{
    name:"Ram Memory",
    price:220,
    image:"https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}
,
{
    name:"Sneakers",
    price:140,
    image:"https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}
,
{
    name:"Gold Dsinosaur",
    price:140,
    image:"https://images.pexels.com/photos/6848351/pexels-photo-6848351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}

)

 

//Llamamos el renderizador segun el array que necesitemos que se renderice
renderProduct(productList)























