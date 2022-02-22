function Products() {
  try {
    fetch("http://localhost:6789/products")
      .then((res) => res.json())
      .then((data) => {
        hello2(data);
      });
  } catch (e) {
    console.log(e.message);
  }
}
// console.log("Products:");

Products();

function hello2(array) {
  var all_product = document.getElementById("Pro-ducts");

  array.forEach((product) => {
    // console.log(product);
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = product.img_link;

    let name = document.createElement("p");
    name.innerText = product.product_name;

    let cur_price = document.createElement("p");
    cur_price.innerText = product.current_price;

    let reg_price = document.createElement("p");
    reg_price.innerText = product.regular_price;

    div.append(img, name, cur_price, reg_price);
    // console.log((img, name, cur_price, reg_price));
    all_product.append(div);
  });
}
