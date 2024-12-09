import React from 'react';

const NewProduct = () => {
  return (
    <div className="browse-styles-container bg-gray-200 p-[73px] px-[64px] rounded-[40px] flex flex-col overflow-hidden">
      <h2 className="browse-heading text-black text-center font-[Integral CF] font-bold text-[48px] self-center">
        BROWSE BY DRESS STYLE
      </h2>
      <div className="styles-grid mt-[64px]">
        <div className="styles-row flex gap-[20px]">
          <div className="casual-style-col flex flex-col line-height-normal w-[37%]">
            <div className="style-card flex flex-col bg-white overflow-hidden rounded-[20px] flex-grow w-full">
              <div className="style-content relative flex flex-col w-full aspect-[1.408] p-[25px] px-[36px] pb-[172px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/44d2f1bb2e5311c0204e84b240f172aefe90eaa99ec84dd03ebb71200ab65297?placeholderIfAbsent=true&apiKey=c79ff61bd3ea46dbb2084e260c97adba"
                  alt="Casual dress style showcase"
                  className="style-image absolute inset-0 w-full h-full object-cover object-center"
                />
                Casual
              </div>
            </div>
          </div>
          <div className="formal-style-col flex flex-col line-height-normal w-[63%] ml-[20px]">
            <div className="style-card flex flex-col bg-white overflow-hidden rounded-[20px] flex-grow w-full">
              <div className="style-content relative flex flex-col w-full aspect-[1.408] p-[25px] px-[36px] pb-[172px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5427b4a379e7bafa85d8de62e2d00d2584ab623650998332dd2eca00d92e715?placeholderIfAbsent=true&apiKey=c79ff61bd3ea46dbb2084e260c97adba"
                  alt="Formal dress style showcase"
                  className="style-image absolute inset-0 w-full h-full object-cover object-center"
                />
                Formal
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-images mt-[20px]">
        <div className="bottom-row flex gap-[20px]">
          <div className="large-image-col flex flex-col line-height-normal w-[63%]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7902ec3c8733d4a952c875ab428c15fbadd046b5726fd1a5be6071c999ab59d3?placeholderIfAbsent=true&apiKey=c79ff61bd3ea46dbb2084e260c97adba"
              alt="Featured dress collection"
              className="large-image aspect-[2.36] object-contain object-center w-full rounded-[20px] flex-grow"
            />
          </div>
          <div className="small-image-col flex flex-col line-height-normal w-[37%] ml-[20px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/76bdad1c4c37f4e4565b5e04ee503434f3ac038b409420cab42eb478cd9a31c3?placeholderIfAbsent=true&apiKey=c79ff61bd3ea46dbb2084e260c97adba"
              alt="Dress style highlight"
              className="small-image aspect-[1.41] object-contain object-center w-full rounded-[20px] flex-grow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
// // import React from 'react';

// // const Cards = () => {
// //   return (
// //     <section className="text-gray-600 body-font">
// //       <div className="container px-5 py-24 mx-auto">
// //         <div className="flex flex-wrap -mx-4 -my-8">
// //           {/* Blog Item 1 */}
// //           <div className="py-8 px-4 lg:w-1/3">
// //             <div className="h-full flex items-start">
// //               <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
// //                 <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
// //                 <span className="font-medium text-lg text-gray-800 title-font leading-none">18</span>
// //               </div>
// //               <div className="flex-grow pl-6">
// //                 <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">CATEGORY</h2>
// //                 <h1 className="title-font text-xl font-medium text-gray-900 mb-3">The 400 Blows</h1>
// //                 <p className="leading-relaxed mb-5">
// //                   Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
// //                 </p>
// //                 <a className="inline-flex items-center">
// //                   <img
// //                     alt="blog"
// //                     src="https://dummyimage.com/103x103"
// //                     className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
// //                   />
// //                   <span className="flex-grow flex flex-col pl-3">
// //                     <span className="title-font font-medium text-gray-900">Alper Kamu</span>
// //                   </span>
// //                 </a>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Blog Item 2 */}
// //           <div className="py-8 px-4 lg:w-1/3">
// //             <div className="h-full flex items-start">
// //               <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
// //                 <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
// //                 <span className="font-medium text-lg text-gray-800 title-font leading-none">18</span>
// //               </div>
// //               <div className="flex-grow pl-6">
// //                 <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">CATEGORY</h2>
// //                 <h1 className="title-font text-xl font-medium text-gray-900 mb-3">Shooting Stars</h1>
// // //                 <p className="leading-relaxed mb-5">
// // //                   Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
// // //                 </p>
// // //                 <a className="inline-flex items-center">
// // //                   <img
// // //                     alt="blog"
// // //                     src="https://dummyimage.com/102x102"
// // //                     className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
// // //                   />
// // //                   <span className="flex-grow flex flex-col pl-3">
// // //                     <span className="title-font font-medium text-gray-900">Holden Caulfield</span>
// // //                   </span>
// // //                 </a>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Blog Item 3 */}
// // //           <div className="py-8 px-4 lg:w-1/3">
// // //             <div className="h-full flex items-start">
// // //               <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
// // //                 <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
// // //                 <span className="font-medium text-lg text-gray-800 title-font leading-none">18</span>
// // //               </div>
// // //               <div className="flex-grow pl-6">
// // //                 <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">CATEGORY</h2>
// // //                 <h1 className="title-font text-xl font-medium text-gray-900 mb-3">Neptune</h1>
// // //                 <p className="leading-relaxed mb-5">
// // //                   Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
// // //                 </p>
// // //                 <a className="inline-flex items-center">
// // //                   <img
// // //                     alt="blog"
// // //                     src="https://dummyimage.com/101x101"
// // //                     className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
// // //                   />
// // //                   <span className="flex-grow flex flex-col pl-3">
// // //                     <span className="title-font font-medium text-gray-900">Henry Letham</span>
// // //                   </span>
// // //                 </a>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// //    </section>
//  );
//  };

//  export default Cards;