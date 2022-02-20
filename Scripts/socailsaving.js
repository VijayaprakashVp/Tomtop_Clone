function socialsaving() {
  try {
    fetch("http://localhost:6789/socials")
      .then((res) => res.json())
      .then((data) => console.log(data));
  } catch (e) {
    console.log(e.message);
  }
}
// console.log("socialsaving:");

socialsaving();
