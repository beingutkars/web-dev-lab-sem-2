import React, { useState } from "react";
import {
  Search,
  ShoppingCart,
  MapPin,
  Menu,
  ChevronDown,
} from "lucide-react";

export default function App() {

  const [cartCount, setCartCount] = useState(0);

  // ================= PRODUCTS =================

  const products = [
    {
      title: "Continue shopping deals",
      images: [
        "https://m.media-amazon.com/images/I/81OxirWitAL._AC_SY145_.jpg",
        "https://m.media-amazon.com/images/I/612FuICrCCL._AC_SY145_.jpg",
        "https://m.media-amazon.com/images/I/81OxirWitAL._AC_SY145_.jpg",
        "https://m.media-amazon.com/images/I/61yp3ndG1JL._AC_SY145_.jpg",
      ],
    },

    {
      title: "Revamp your home in style",
      images: [
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg",
      ],
    },

    {
      title: "Bulk order discounts + GST savings",
      images: [
        "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/img25/nov/bau/ain/gw/Laptops_186_116_10._SY116_CB777673831_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/img25/nov/bau/ain/gw/KitchenAppliances_186_116_10._SY116_CB777673831_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/img25/nov/bau/ain/gw/OfficeChairs_186_116_10._SY116_CB777673831_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/img25/dec/bau/ain/gw/ABdelivery_186_116._SY116_CB776314701_.jpg",
      ],
    },

    {
      title: "Best Sellers in Electronics",
      images: [
        "https://m.media-amazon.com/images/I/71TPda7cwUL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/61VuVU94RnL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/71an9eiBxpL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_SY200_.jpg",
      ],
    },

    {
      title: "Starting ₹199 | Toys & Games",
      images: [
        "https://m.media-amazon.com/images/I/711Rh9MsKvL._AC_SY195_.jpg",
        "https://m.media-amazon.com/images/I/61vERbb2LXL._AC_SY195_.jpg",
        "https://m.media-amazon.com/images/I/71B1VdtdjAL._AC_SY195_.jpg",
        "https://m.media-amazon.com/images/I/71K9CbNZPsL._AC_SY195_.jpg",
      ],
    },

    {
      title: "Kitchen essentials under ₹999",
      images: [
        "https://m.media-amazon.com/images/I/71MXSFRW87L._AC_SY195_.jpg",
        "https://m.media-amazon.com/images/I/71HzHSEjFlL._AC_SY195_.jpg",
        "https://m.media-amazon.com/images/I/71leLgzKqDL._AC_SY195_.jpg",
        "https://m.media-amazon.com/images/I/51X0Rj62IvL._AC_SY195_.jpg",
      ],
    },

    {
      title: "Trending Fashion Deals",
      images: [
        "https://m.media-amazon.com/images/I/619xMvtqClL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/71nW6Xh7QnL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/71OAvZWN00L._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/81L0Y0-UPGL._AC_SY200_.jpg",
      ],
    },

    {
      title: "Customers’ Most-Loved Products",
      images: [
        "https://m.media-amazon.com/images/I/51oIwAfzsmL._AC_SY145_.jpg",
        "https://m.media-amazon.com/images/I/81wcpowlmLL._AC_SY145_.jpg",
        "https://m.media-amazon.com/images/I/514anPl6pIL._AC_SY145_.jpg",
        "https://m.media-amazon.com/images/I/41lGEdOBu0L._AC_SY145_.jpg",
      ],
    },
  ];

  return (
    <div>

      {/* ================= NAVBAR ================= */}

      <div className="navbar">

        <div className="nav-logo border">

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="amazon"
          />

        </div>

        <div className="nav-location border">

          <div className="location-icon">
            <MapPin size={20} />
          </div>

          <div className="location-text">
            <p>Delivering to Ghaziabad 201009</p>
            <h4>Update location</h4>
          </div>

        </div>

        <div className="nav-search">

          <select>
            <option>All</option>
          </select>

          <input
            type="text"
            placeholder="Search Amazon.in"
          />

          <button>
            <Search size={20} />
          </button>

        </div>

        <div className="nav-language border">
          🇮🇳 EN <ChevronDown size={14} />
        </div>

        <div className="nav-account border">
          <p>Hello, sign in</p>
          <h4>
            Account & Lists <ChevronDown size={14} />
          </h4>
        </div>

        <div className="nav-orders border">
          <p>Returns</p>
          <h4>& Orders</h4>
        </div>

        <div className="nav-cart border">
          <ShoppingCart size={32} />
          <span>{cartCount}</span>
          Cart
        </div>

      </div>

      {/* ================= SECOND NAVBAR ================= */}

      <div className="panel">

        <div className="panel-all">
          <Menu size={18} />
          All
        </div>

        <div className="panel-links">
          <a href="/">Fresh</a>
          <a href="/">MX Player</a>
          <a href="/">Sell</a>
          <a href="/">Bestsellers</a>
          <a href="/">Today's Deals</a>
          <a href="/">Mobiles</a>
          <a href="/">Prime</a>
          <a href="/">Electronics</a>
          <a href="/">Fashion</a>
          <a href="/">Home & Kitchen</a>
        </div>

      </div>

      {/* ================= HERO SECTION ================= */}

      <div className="product_start">

        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/X-GL/Feb5/PC_Hero_1_3000._CB582457311_.jpg"
          alt=""
        />

      </div>

      {/* ================= PRODUCT SECTION ================= */}

      <section className="product-section">

        <div className="grid-4">

          {products.map((item, index) => (

            <div className="card" key={index}>

              <h2>{item.title}</h2>

              <div className="box1">

                <img src={item.images[0]} alt="" />
                <img src={item.images[1]} alt="" />

              </div>

              <div className="box1">

                <img src={item.images[2]} alt="" />
                <img src={item.images[3]} alt="" />

              </div>

              <button
                className="add-btn"
                onClick={() => setCartCount(cartCount + 1)}
              >
                Add to Cart
              </button>

            </div>

          ))}

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <div className="back-to-top">
        Back to top
      </div>

      <footer className="footer">

        <div className="footer-links">

          <div>
            <h4>Get to Know Us</h4>
            <a href="/">About Amazon</a>
            <a href="/">Careers</a>
            <a href="/">Press Releases</a>
          </div>

          <div>
            <h4>Connect with Us</h4>
            <a href="/">Facebook</a>
            <a href="/">Twitter</a>
            <a href="/">Instagram</a>
          </div>

          <div>
            <h4>Make Money with Us</h4>
            <a href="/">Sell on Amazon</a>
            <a href="/">Advertise Your Products</a>
            <a href="/">Amazon Pay</a>
          </div>

          <div>
            <h4>Let Us Help You</h4>
            <a href="/">Your Account</a>
            <a href="/">Returns Centre</a>
            <a href="/">Help</a>
          </div>

        </div>

      </footer>

      {/* ================= CSS ================= */}

      <style>{`

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Arial, Helvetica, sans-serif;
        }

        body{
          background:#e3e6e6;
        }

        /* ================= NAVBAR ================= */

        .navbar{
          width:100%;
          background:#131921;
          color:white;
          display:flex;
          align-items:center;
          justify-content:space-evenly;
          padding:8px 12px;
          gap:10px;
          flex-wrap:wrap;
          position:sticky;
          top:0;
          z-index:1000;
        }

        .border{
          border:1px solid transparent;
          padding:8px;
          cursor:pointer;
          transition:0.3s;
        }

        .border:hover{
          border:1px solid white;
          transform:scale(1.03);
        }

        /* ================= AMAZON LOGO ================= */

        .nav-logo{
          display:flex;
          align-items:center;
        }

        .nav-logo img{
          width:110px;
          height:35px;
          object-fit:contain;
          filter:brightness(1.2);
          transition:0.3s;
          cursor:pointer;
        }

        .nav-logo img:hover{
          transform:scale(1.05);
        }

        /* ================= LOCATION ================= */

        .nav-location{
          display:flex;
          align-items:center;
          gap:8px;
        }

        .location-text p{
          font-size:12px;
          color:#ccc;
        }

        .location-text h4{
          font-size:14px;
        }

        /* ================= SEARCH ================= */

        .nav-search{
          display:flex;
          flex:1;
          max-width:800px;
          height:45px;
          border-radius:5px;
          overflow:hidden;
          background:white;
          transition:0.3s;
        }

        .nav-search:hover{
          outline:3px solid #f3a847;
          transform:scale(1.01);
        }

        .nav-search select{
          width:60px;
          border:none;
          background:#e6e6e6;
        }

        .nav-search input{
          flex:1;
          border:none;
          padding:10px;
          font-size:16px;
        }

        .nav-search input:focus{
          outline:none;
        }

        .nav-search button{
          width:60px;
          border:none;
          background:#febd69;
          cursor:pointer;
        }

        /* ================= NAV ITEMS ================= */

        .nav-language{
          display:flex;
          align-items:center;
          gap:5px;
          font-weight:bold;
        }

        .nav-account p,
        .nav-orders p{
          font-size:12px;
        }

        .nav-account h4,
        .nav-orders h4{
          font-size:14px;
        }

        .nav-cart{
          display:flex;
          align-items:center;
          gap:5px;
          font-size:18px;
          font-weight:bold;
        }

        .nav-cart span{
          color:#f08804;
          font-size:20px;
          font-weight:bold;
        }

        /* ================= PANEL ================= */

        .panel{
          width:100%;
          background:#232f3e;
          color:white;
          display:flex;
          align-items:center;
          gap:25px;
          padding:12px 15px;
          overflow-x:auto;
        }

        .panel::-webkit-scrollbar{
          display:none;
        }

        .panel-all{
          display:flex;
          align-items:center;
          gap:8px;
          font-weight:bold;
          white-space:nowrap;
          cursor:pointer;
        }

        .panel-links{
          display:flex;
          gap:20px;
          white-space:nowrap;
        }

        .panel-links a{
          color:white;
          text-decoration:none;
          transition:0.3s;
        }

        .panel-links a:hover{
          color:#febd69;
        }

        /* ================= HERO ================= */

        .product_start{
          overflow:hidden;
        }

        .product_start img{
          width:100%;
          object-fit:cover;
          transition:0.5s;
        }

        .product_start img:hover{
          transform:scale(1.03);
        }

        /* ================= PRODUCT SECTION ================= */

        .product-section{
          padding:20px;
        }

        .grid-4{
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:20px;
        }

        .card{
          background:white;
          padding:15px;
          border-radius:10px;
          transition:0.3s;
          overflow:hidden;
        }

        .card:hover{
          transform:translateY(-8px);
          box-shadow:0 0 20px rgba(0,0,0,0.2);
        }

        .card h2{
          margin-bottom:15px;
          font-size:22px;
        }

        .box1{
          display:flex;
          gap:10px;
          margin-bottom:10px;
        }

        .box1 img{
          width:100%;
          max-width:170px;
          cursor:pointer;
          transition:0.3s;
          border-radius:5px;
        }

        .box1 img:hover{
          transform:scale(1.08);
        }

        .add-btn{
          width:100%;
          background:#ffd814;
          border:none;
          padding:12px;
          border-radius:30px;
          cursor:pointer;
          font-weight:bold;
          margin-top:10px;
          transition:0.3s;
        }

        .add-btn:hover{
          background:#f7ca00;
          transform:scale(1.03);
        }

        /* ================= FOOTER ================= */

        .back-to-top{
          background:#37475a;
          color:white;
          text-align:center;
          padding:15px;
          cursor:pointer;
        }

        .back-to-top:hover{
          background:#485769;
        }

        .footer{
          background:#232f3e;
          color:white;
          padding:40px 30px;
        }

        .footer-links{
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:30px;
        }

        .footer-links a{
          display:block;
          color:#ddd;
          text-decoration:none;
          margin-top:8px;
          font-size:14px;
        }

        .footer-links a:hover{
          text-decoration:underline;
        }

        /* ================= RESPONSIVE ================= */

        @media(max-width:1100px){

          .grid-4{
            grid-template-columns:repeat(2,1fr);
          }

          .nav-search{
            width:100%;
            order:3;
          }

        }

        @media(max-width:768px){

          .grid-4{
            grid-template-columns:1fr;
          }

          .nav-location,
          .nav-language{
            display:none;
          }

          .footer-links{
            grid-template-columns:1fr;
          }

        }

      `}</style>

    </div>
  );
}