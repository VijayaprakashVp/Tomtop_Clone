function nav_bar() {
  return `<div>
  <!-- winter_Olympics -->

  <div id="winter_Olympics">
    <img
      src="https://img.tttcdn.com/advertising/2022/2/15/Zsuiz2-897457327.jpg"
      alt=""
    />
  </div>

  <!-- NavBar -->

  <div id="Nav_Bar">
    <div id="logo_part">
      <div id="tomtop_logo">
        <a href="./index.html"
          ><img
            src="https://static.tomtop.com/tomtop/icon/logo.png?v=3"
            alt=""
        /></a>
      </div>
      <div id="arr_check">
        <p>| English</p>
        <div class="material-icons" id="arrow">arrow_drop_down</div>
      </div>
      <div id="arr_check">
        <p>All</p>
        <div class="material-icons" id="arrow">arrow_drop_down</div>
      </div>
      <div id="search_bar">
        <input
          type="text"
          placeholder="What are you looking for?"
          id="bar"
        />
        <span class="material-icons search">search</span>
      </div>
      <div id="account">
        <a href="./Sign_In.html"
          ><button>
            <span class="material-icons" id="icon">person_outline</span>
            <span id="gif"
              ><img
                src="https://static.tomtop.com/tomtop/img/gift_icon.gif"
                alt=""
            /></span>
            <p class="p1">Sign In</p>
          </button></a
        >

        &nbsp;&nbsp;&nbsp;
        <a href="#"
          ><button>
            <span class="material-icons" id="icon">favorite_border</span>
            <p class="p1">Favourites</p>
          </button></a
        >
        &nbsp;&nbsp;&nbsp;
        <a href="./cart.html"
          ><button>
            <span class="material-icons" id="icon">shopping_cart</span>
            <p class="p1">Cart</p>
          </button></a
        >
      </div>
    </div>
    <div id="tags">
      <p>
        <a href="#">Popular Earphones</a>, <a href="#">Smartphones</a>,
        <a href="#">3d Printer</a>, <a href="#">Electric Bikes</a>,
        <a href="#">Sports Watch</a>,
      </p>
    </div>
  </div>

  <!-- Menu -->

  <div id="menu">
    <div id="arr_check">
      <div class="material-icons menu">menu</div>
      <p><strong>Shop By Departments</strong></p>
    </div>
    <div id="sub_menu">
      <p>New Arrivals</p>
      <div id="arr_check">
        <p>Flash Deals</p>
        <div class="material-icons" id="arrow_down">arrow_drop_down</div>
      </div>
      <div id="arr_check">
        <p>Coupons</p>
        <div class="material-icons" id="arrow_down">arrow_drop_down</div>
      </div>
      <div id="arr_check">
        <p>Social Savings</p>
        <div class="material-icons" id="arrow_down">arrow_drop_down</div>
      </div>
      <div id="arr_check">
        <p>Clearance</p>
        <div class="material-icons" id="arrow_down">arrow_drop_down</div>
      </div>
    </div>
    <div>
      <img
        src="https://img.tttcdn.com/advertising/2021/12/21/uo0byU1874985519.jpg"
        alt=""
      />
    </div>
  </div>
</div>`;
}

export default nav_bar;
