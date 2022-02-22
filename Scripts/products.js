function Products() {
    try {
      fetch("http://localhost:6789/products")
        .then((res) => res.json())
        .then((data) => console.log(data));
    } catch (e) {
      console.log(e.message);
    }
  }
  // console.log("Products:");
  
  Products();
  