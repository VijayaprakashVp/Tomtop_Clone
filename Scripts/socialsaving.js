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
    let link = document.createElement("a");
    link.href = `./product_detail.html?id=${product._id}`;
    link.setAttribute("target", "_blank");

    let div = document.createElement("div");
    // let div2 = document.createElement("div");
    // div2.setAttribute("id" , "product-name")

    let img = document.createElement("img");
    img.src = product.img_link;

    let name = document.createElement("p");
    name.innerText = "Title :   " + product.product_name;

    let cur_price = document.createElement("p");
    cur_price.innerText = "Discount price : " + product.current_price;
    cur_price.setAttribute("id", "dis_price");

    let reg_price = document.createElement("p");
    reg_price.innerText = product.regular_price;
    reg_price.setAttribute("id", "regular_price");

    div.append(img, name, cur_price, reg_price);
    // div2.append();
    link.append(div);
    // console.log((img, name, cur_price, reg_price));
    Social_saving.append(link);
  });
}
