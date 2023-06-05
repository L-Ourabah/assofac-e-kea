const GridCell = (array, container) => {
    let cell = ``;
    array.map((element) => {
      cell =
        cell +
        `
        <div class="cell">
        <div class="text-image">${element.name}
        </div>
        <div class="price">${element.price} €
        </div>
        <img
            src=${element.image}
            class="img-fluid"
            alt="${element.name}"
        />
        <button class="add-to-basket${element.id}">
            ajouter au panier
        </button>
        </div> `;
    });
    container.innerHTML = cell;
  
    array.map((element) => {
      const myButton = document.querySelector(".add-to-basket" + element.id);
      myButton.addEventListener("click", () => addBasket(element));
    });
};

const products = [
    {
      id: 1,
      name: "Fauteuil Supra",
      image: "images/supra.svg",
      price: 100,
      type: "confort",
    },
    {
      id: 2,
      name: "Fauteuil Dhiarry",
      image: "images/dhiarry.svg",
      price: 200,
      type: "confort",
    },
    {
      id: 3,
      name: "Fauteuil Dembourabah",
      image: "images/dembourabah.svg",
      price: 150,
      type: "surface",
    },
    {
      id: 4,
      name: "Table Xavitina",
      image: "images/xavitina",
      price: 200,
      type: "surface",
    },
    {
      id: 5,
      name: "Marcaaron",
      image: "images/marcaaron.jpg",
      price: 50,
      type: "decoration",
    },
    {
      id: 6,
      name: "Davimartinio",
      image: "images/davimartinio.jpeg",
      price: 90,
      type: "decoration",
    }
]

// Sauvegarde les éléments dans le panier
function saveBasket(basket){
    localStorage.setItem("basket", JSON.stringify(basket));
}

function getBasket(){
    let basket = localStorage.getItem("basket");
    if(basket == null){
        return [];
    }else{
        return JSON.parse(basket);
    }
}

// Ajoute des produits au panier
function addBasket(product){
    let basket = getBasket();
    let foundProduct = basket.find(p => p.id == product.id);
    if(foundProduct != undefined){
        foundProduct.quantity++;
    }else{
        product.quantity = 1;
        basket.push(product);
    }
    saveBasket(basket);
}

// Retire un produit du panier
function removeFromBasket(product){
    let basket = getBasket();
    basket = basket.filter(p => p.id != product.id);
    saveBasket(basket);
}

// Change la quantité de produits
function changeQuantity(product, quantity){
    let basket = getBasket();
    let foundProduct = basket.find(p => p.id == product.id);
    if(foundProduct != undefined){
        foundProduct.quantity += quantity;
        if(foundProduct.quantity <= 0){
            removeFromBasket(foundProduct);
        }else{
            saveBasket(basket);
        }
    }
}

// Calcule du total de produit
function getNumberProduct(){
    let basket = getBasket();
    let number = 0;
    for(let product of basket){
        number += product.quantity;
    }
    return number
}

// Calcul du prix total
function getTotalPrice(){
    let basket = getBasket();
    let total = 0;
    for(let product of basket){
        total += product.quantity * product.price;
    }
    return total;
}