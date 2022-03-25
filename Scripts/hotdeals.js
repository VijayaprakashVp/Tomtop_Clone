function Hotdeals() {
  try {
    fetch("http://localhost:6789/hotdeals")
      .then((res) => res.json())
      .then((data) => {
        hello1(data);
      });
  } catch (e) {
    console.log(e.message);
  }
}
//   console.log("Hotdeals:");

Hotdeals();

function hello1(array) {
  var Hot_deals = document.getElementById("Hot-deals");
  // console.log("Hot_deals:", Hot_deals);
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
    Hot_deals.append(link);
  });
}
