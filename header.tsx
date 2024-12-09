import React from 'react'

const Upperheader = () => {
  return (
    <div className="promo-banner relative bg-black text-white flex flex-col items-center gap-4 overflow-hidden p-3 px-20 font-sans font-medium text-sm text-center">
    <div>
      <span className="promo-text font-normal">
        Sign up and get 20% off to your first order.
      </span>
      <a
        href="#"
        className="signup-link underline cursor-pointer ml-2"
        role="button"
        aria-label="Sign up for 20% off your first order"
      >
        Sign Up Now
      </a>
    </div>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3655c9fb50a68bd87ce75ab0b699b8d8e2f856e4deddd085916f9920fb3d888?placeholderIfAbsent=true&apiKey=c79ff61bd3ea46dbb2084e260c97adba"
      className="close-icon absolute top-4 right-4 w-5 aspect-square object-contain object-center cursor-pointer"
      alt="Close"
      aria-hidden="true"
    />
  </div>
  
  
  )
}

export default Upperheader


export const Header = () => {
  return (
    <div><div className="header-wrapper flex flex-col justify-center py-0.5">
    <nav className="nav-container flex h-[41px] w-full items-center gap-10 justify-center flex-wrap">
      <div className="brand-logo text-black font-bold text-4xl leading-none font-integral">
        SHOP.CO
      </div>
      <div className="nav-links flex items-center min-w-[240px] gap-6 text-black font-normal text-base font-sans">
        <div className="shop-dropdown flex items-center gap-1 whitespace-nowrap">
          <span className="shop-text">Shop</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9277ccbe5239ce091af51f7cc6c6bc29fced288bc1f583f1e8df67276c741ef?placeholderIfAbsent=true&apiKey=c79ff61bd3ea46dbb2084e260c97adba"
            className="dropdown-icon w-4 aspect-square object-contain object-center"
            alt=""
          />
        </div>
        <a href="#" className="on-sale">On Sale</a>
        <a href="#" className="new-arrivals">New Arrivals</a>
        <a href="#" className="brands">Brands</a>
      </div>
      <form className="search-container flex items-start gap-3 rounded-full bg-gray-200 text-gray-400 min-w-[240px] flex-grow p-3 font-normal text-base font-sans overflow-hidden" role="search">
        <label htmlFor="search-input" className="visually-hidden sr-only">
          Search for products
        </label>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d586a131cd32fe5b23d7d42a959d7390a16091b9d6748bda3fb9e1d0e1acbadd?placeholderIfAbsent=true&apiKey=c79ff61bd3ea46dbb2084e260c97adba"
          className="search-icon w-6 aspect-square object-contain object-center"
          alt=""
        />
        <input
          type="search"
          id="search-input"
          placeholder="Search for products..."
          className="flex-grow bg-transparent outline-none"
        />
      </form>
      <div className="user-actions flex items-start gap-3">
        <button className="user-account" aria-label="User account">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9e37a5fb01f763dee20dcd0c15637ddec838b836fa2b826401d47fefcef9fa7?placeholderIfAbsent=true&apiKey=c79ff61bd3ea46dbb2084e260c97adba"
            className="user-icon w-6 aspect-square object-contain object-center"
            alt=""
          />
        </button>
        <button className="shopping-cart" aria-label="Shopping cart">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/147359b907ae81172b8d57655ab9ff21b853a638d7d230458002ed0c5d314070?placeholderIfAbsent=true&apiKey=c79ff61bd3ea46dbb2084e260c97adba"
            className="cart-icon w-6 aspect-square object-contain object-center"
            alt=""
          />
        </button>
      </div>
    </nav>
  </div>
  </div>
  )
}
