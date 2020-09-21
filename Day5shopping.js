let products = [
  {
    name: "White T-Shirt",
    size: "L",
    color: "white",
    price: 1200,
    image: "product1.jpeg",
    description: "Good looking white t-shirt",
  },
  {
    name: "Pink Shirt",
    size: "XL",
    color: "pink",
    price: 1800,
    image: "product2.jpeg",
    description: "Good looking pink shirt",
  },
 
  {
    name: "White Ladies Top",
    size: "L",
    color: "white",
    price: 1900,
    image: "product4.jpeg",
    description: "Good looking female white top",
  },
  {
    name: "Pink Ladies T-Shirt",
    size: "L",
    color: "pink",
    price: 2000,
    image: "product5.jpeg",
    description: "Good looking white t-shirt for ladies",
  },

  
];
//destructuring
cart = [];

function displayProducts(productsData, who = "productwrapper") {
  let productsString = "";

  productsData.forEach(function (product, index) {
    let { id, name, image, color, description, price, size } = product;

    if (who == "productwrapper") {
      productsString += ` <div class="product">
        <div class="prodimg">
          <img src="productimages/${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="addToCart(${id})">Add to Cart</button>
        </p>
      </div>`;
    } else if (who == "cart") {
      productsString += ` <div class="product">
        <div class="prodimg">
          <img src="productimages/${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="removeFromCart(${id})">Remove from Cart</button>
        </p>
      </div>`;
    }
  });

  document.getElementById(who).innerHTML = productsString;
}

displayProducts(products);

function searchProduct(searchValue) {
  let searchedProducts = products.filter(function (product, index) {
    let searchString =
      product.name + " " + product.color + " " + product.description;

    return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
  });

  displayProducts(searchedProducts);
}

// this is a function to get a product based on id from a particular array
// @param 1 the array u want to get products from
// @param 2 the id u want to search

function getProductByID(productArray, id) {
  return productArray.find(function (product) {
    return product.id == id;
  });
}

function addToCart(id) {
  // getting the product
  let pro = getProductByID(products, id);

  //   putting in cart
  cart.push(pro);
  displayProducts(cart, "cart");
}

function removeFromCart(id) {
  // getting the index based on id
  let index = cart.findIndex(function (product) {
    return product.id == id;
  });

  //   removing from cart based on index
  cart.splice(index, 1);
  displayProducts(cart, "cart");
}
