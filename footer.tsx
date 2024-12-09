import React from 'react'

const Footer = () => {
  return (
    <div><div className="flex flex-col">
    <section className="flex flex-col items-center bg-black text-white p-6 rounded-lg w-full max-w-screen-xl mx-auto">
      <h2 className="text-center font-bold text-4xl leading-tight max-w-lg">
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </h2>
      <form className="flex flex-col items-center mt-6 space-y-4 w-full max-w-md">
        <div className="flex items-center bg-white p-3 rounded-full w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2f03936191f3af3d684591454051985eb354413c6b0268ef063c0cdcd4d89b8?placeholderIfAbsent=true&apiKey=c79ff61bd3ea46dbb2084e260c97adba"
            alt="Email icon"
            className="w-6 h-6"
          />
          <label htmlFor="emailInput" className="sr-only">
            Enter your email address
          </label>
          <input
            type="email"
            id="emailInput"
            placeholder="Enter your email address"
            className="flex-1 outline-none pl-3"
          />
        </div>
        <button
          type="submit"
          className="bg-white text-black rounded-full py-2 px-6 w-full font-medium"
        >
          Subscribe to Newsletter
        </button>
      </form>
    </section>
    <footer className="bg-gray-200 p-10">
      <div className="flex flex-wrap justify-between items-start max-w-screen-xl mx-auto gap-10">
        <div className="flex flex-col max-w-xs">
          <h3 className="text-3xl font-bold">SHOP.CO</h3>
          <p className="text-gray-600 mt-4">
            We have clothes that suit your style and that you're proud to wear.
            From women to men.
          </p>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea93c2d0568535bffae9b91dd019000c3123470b3647e627e9d9b8083ebe4e24?placeholderIfAbsent=true&apiKey=c79ff61bd3ea46dbb2084e260c97adba"
            alt="Payment methods"
            className="mt-6"
          />
        </div>
        <div>
          <h4 className="uppercase tracking-wider font-semibold">Company</h4>
          <ul className="text-gray-600 space-y-2 mt-4">
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>
        <div>
          <h4 className="uppercase tracking-wider font-semibold">Help</h4>
          <ul className="text-gray-600 space-y-2 mt-4">
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h4 className="uppercase tracking-wider font-semibold">FAQ</h4>
          <ul className="text-gray-600 space-y-2 mt-4">
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
        </div>
        <div>
          <h4 className="uppercase tracking-wider font-semibold">Resources</h4>
          <ul className="text-gray-600 space-y-2 mt-4">
            <li>Free eBooks</li>
            <li>Development Tutorial</li>
            <li>How to - Blog</li>
            <li>YouTube Playlist</li>
          </ul>
        </div>
      </div>
      <hr className="my-6 border-gray-300" />
      <div className="flex flex-wrap justify-between items-center max-w-screen-xl mx-auto">
        <p className="text-gray-600 text-sm">&copy; Shop.co 2000-2023, All Rights Reserved</p>
        <div className="flex space-x-3">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/17b78a36f86bc6c05eeb0d6aad0e9aeb3d856b27295cebe274c35650b9f2baca?placeholderIfAbsent=true&apiKey=c79ff61bd3ea46dbb2084e260c97adba"
            alt="Social Media"
            className="w-8"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/da216ba2d5360e741d3ba4bb6dce6488955a267bbdbf18d61a641cbdef0aecd1?placeholderIfAbsent=true&apiKey=c79ff61bd3ea46dbb2084e260c97adba"
            alt="Social Media"
            className="w-8"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f97edf61f564be5b75e6c33da87cad7789dc75cba64389f8fc7b2e1ded9297f0?placeholderIfAbsent=true&apiKey=c79ff61bd3ea46dbb2084e260c97adba"
            alt="Social Media"
            className="w-8"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/de61304b9fd7183ea0c45e140922733349ca85e06d443dbd39e7c89f28c58d43?placeholderIfAbsent=true&apiKey=c79ff61bd3ea46dbb2084e260c97adba"
            alt="Social Media"
            className="w-8"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ccae17d7b6398f38a7a159f56ec8bb5a130878571c9b9f98c547999ca37604c?placeholderIfAbsent=true&apiKey=c79ff61bd3ea46dbb2084e260c97adba"
            alt="Social Media"
            className="w-8"
          />
        </div>
      </div>
    </footer>
  </div>
  </div>
  )
}

export default Footer