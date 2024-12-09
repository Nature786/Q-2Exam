
const ProductTitle = () => {
  return (
    <div className="text-black max-w-[225px] font-[700] text-[20px] font-sans">
      T
      <span className="lowercase">SHIRT</span>
      <span className="lowercase">WITH</span>
      T
      <span className="lowercase">APE</span>
      D
      <span className="lowercase">ETAILS</span>
    </div>
  );
};

const Products = () => {
  const products = [
    {
      img: "https://cdn.builder.io/api/v1/image/assets/TEMP/c561bda873a035046516edfe5a46f2659fc9f4dfcf6fad490d2702bd35a1ff59?placeholderIfAbsent=true&apiKey=c79ff61bd3ea46dbb2084e260c97adba",
      category: <ProductTitle />,
      // name: "Product 1",
      rating: 4.5, price: "$29.99",
      // price: "$29.99",
    
    },
    {
      img: "https://cdn.builder.io/api/v1/image/assets/TEMP/1e8ae61d8189a0682c10d026b0aee00f2d0d065f2c0a63d25bc150cd6a6a4a05?placeholderIfAbsent=true&apiKey=c79ff61bd3ea46dbb2084e260c97adba",
      category: <ProductTitle />,
      rating: 3.8,  // Changed price to rating value
      price: "$19.99",  // Changed rating to price value
    },
    
    {
      img: "https://cdn.builder.io/api/v1/image/assets/TEMP/c561bda873a035046516edfe5a46f2659fc9f4dfcf6fad490d2702bd35a1ff59?placeholderIfAbsent=true&apiKey=c79ff61bd3ea46dbb2084e260c97adba",
      category: <ProductTitle />,
      name: "Product 3",
      price: "$39.99",
      rating: 5
    },
    {
      img: "https://cdn.builder.io/api/v1/image/assets/TEMP/c561bda873a035046516edfe5a46f2659fc9f4dfcf6fad490d2702bd35a1ff59?placeholderIfAbsent=true&apiKey=c79ff61bd3ea46dbb2084e260c97adba",
      category: <ProductTitle />,
      name: "Product 4",
      price: "$49.99",
      rating: 4
    }
  ];

  return (
    <div>
      {/* Black Section */}
      {/* <div className="bg-black flex min-h-[122px]"></div> */}

      {/* Section Heading */}
      <div className="text-black text-center max-w-[403px] font-bold text-4xl font-[Integral CF] mx-auto mt-8">
       TOP SELLING
      </div>

      {/* Product Grid Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap justify-between">
            {products.map((product, index) => (
              <div key={index} className="lg:w-1/4 md:w-1/4 p-4 w-full">
                <div className="flex flex-col items-center overflow-hidden bg-[#F0EEED] rounded-[20px] w-[90%] h-[400px] max-w-[400px] mx-auto">
                  <img
                    alt="ecommerce"
                    className="object-contain object-center w-full h-full block"
                    src={product.img}
                  />
                </div>
                <div className="mt-4">
                  <div className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {product.category}
                  </div>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
                  <div className="text-black font-bold text-2xl">{product.price}</div>

                  {/* Rating Section */}
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-start gap-1">
                      {/* Star Icons */}
                      {[...Array(5)].map((_, i) => (
                        <img
                          key={i}
                          loading="lazy"
                          src={
                            i < product.rating
                              ? "https://cdn.builder.io/api/v1/image/assets/TEMP/cd9b0bd5db6710393466c437b5db0bc26ea88b8abd6fe83b0cc647abf9042923?placeholderIfAbsent=true&apiKey=c79ff61bd3ea46dbb2084e260c97adba"
                              : i < product.rating + 0.5
                              ? "https://cdn.builder.io/api/v1/image/assets/TEMP/944fa9de3f27359d00cf41b93a33e231cce073f01b1e9388a4135b8bd651f630?placeholderIfAbsent=true&apiKey=c79ff61bd3ea46dbb2084e260c97adba"
                              : "https://cdn.builder.io/api/v1/image/assets/TEMP/c561bda873a035046516edfe5a46f2659fc9f4dfcf6fad490d2702bd35a1ff59?placeholderIfAbsent=true&apiKey=c79ff61bd3ea46dbb2084e260c97adba"
                          }
                          className={`w-[${i < product.rating ? '19px' : '9px'}] aspect-[0.95] object-contain`}
                          alt="star"
                        />
                      ))}
                    </div>
                    <div className="text-black font-normal text-sm">
                      {product.rating}/<span className="font-semibold">5</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;

