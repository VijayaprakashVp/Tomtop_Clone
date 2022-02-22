function socialsaving() {
  try {
    fetch("http://localhost:6789/socials")
      .then((res) => res.json())
      .then((data) => {
        hello(data);
      });
  } catch (e) {
    console.log(e.message);
  }
}

socialsaving();

function hello(array) {
  var Social_saving = document.getElementById("social-saving");
  console.log("Social_saving:", Social_saving);
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
    Social_saving.append(div);
  });
}
