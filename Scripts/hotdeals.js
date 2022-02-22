function Hotdeals() {
    try {
      fetch("http://localhost:6789/hotdeals")
        .then((res) => res.json())
        .then((data) => console.log(data));
    } catch (e) {
      console.log(e.message);
    }
  }
//   console.log("Hotdeals:");
  
  Hotdeals();
  