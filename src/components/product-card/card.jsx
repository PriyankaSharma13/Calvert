import React, { useEffect, useState } from "react";
import horizon from "../../assets/horizon.png";
import btn from "../../assets/Close Btn.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const data = [
  {
    img: horizon,
    name: " Horizons Preschool for Three's Curriculum Set",
    id: "Id:PR5000",
    price1: "$153.0",
    price: "120.00",
    person: false,
  },
  {
    img: horizon,
    name: " Horizons Preschool for Three's Curriculum Set Horizons Preschool for Three's Curriculum Set",
    id: "Id:PR5000",
    price: "120.10",
    person: false,
  },

  {
    img: horizon,
    name: " Horizons Preschool for Three's Curriculum Set Horizons Preschool for Three's Curriculum Set",
    id: "Core Course",
    person: true,
    username: "Madison Norris",
    price: "120.00",
    des: "Next Monthly Payment $9.95 due 3/23/23",
  },
  {
    img: horizon,
    name: "Monarch Probability and Statistics A - Full Course wraps after 2 lines...",
    id: "Elective",
    price: 200.1,
    person: true,
    username: "Madison Norris",
  },
];
const CardPage = () => {
  // const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className=" mt-3 ml-3 font-[Open Sans]  text-4xl text-[#444444] font-bold">
        SOPPING CART
        <sub className="font-semibold text-sm font-sans">4ITEMS</sub>
      </h1>

      <section className="flex gap-5 m-auto mt-5 max-w-screen-xl  flex-col lg:flex-row ">
        <section className=" lg:w-[60%] ">
          {data.map((item, index) => (
            <div
              key={index}
              className=" rounded-lg border  mt-5 border-[#E0E9EF]"
            >
              <div className="flex items-start it flex-col justify-between lg:flex-row  ">
                <div className="flex items-center w-[40%]">
                  <img src={item.img} className=" w-[110px] h-[110px]" />

                  {/* <div className="flex mb-[50px]"> */}
                  <div className="flex flex-col ml-1  ">
                    {item.person ? (
                      <div className="border w-[175px] h-10 mt-3">
                        <div className="flex p-2 gap-2 ">
                          <FontAwesomeIcon icon={faCircleUser} />
                          <p className="text-[#444444] text-[14px]">
                            {item.username}
                          </p>
                        </div>
                      </div>
                    ) : null}

                    <h3 className=" text-[#007ABC] font-semibold font-sans max-w-[221px] w-48 line-clamp-2">
                      {item.name}
                    </h3>
                    <p className="text-[#436579] font-normal text-sm mt-1">
                      {item.id}
                    </p>
                  </div>
                </div>

                <div className="flex  items-center flex-col mx-4 p-2 ">
                  <div className=" flex flex-row rounded-full border">
                    <button
                      className="cursor-pointer px-3 py-1 w-8 rounded-1 outline-none hover:bg-sky-500 text-gray-500"
                      onClick={handleDecrement}
                    >
                      <span className="m-auto text-2 font-thin">-</span>
                    </button>
                    <span className=" text-center w-[16px] font-semibold text-md hover:text-black focus:text-black  md:text-base flex items-center text-gray-700  ">
                      {count}
                    </span>
                    <button
                      className="cursor-pointer px-3 py-1 w-8 rounded-1 outline-none hover:bg-sky-500 text-gray-500"
                      onClick={handleIncrement}
                    >
                      <span className="m-auto text-2 font-thin">+</span>
                    </button>
                  </div>
                  <a
                    href="#"
                    className="text-[#007ABC] item-center font-bold underline my-2"
                  >
                    <p>remove</p>
                  </a>
                </div>

                <div className=" flex gap-2 w-[35%] justify-between p-2">
                  <p className="line-through">{item.price1}</p>

                  <p className="text-[#5CA446] font-normal mx-2 ">
                    ${item.price}
                  </p>
                  {/* <p className=" text-[#436579] text-[12px]  ">{item.des}</p> */}

                  <div className=" my-3 ml-9 mb-[80px]">
                    <img src={btn} alt="" width={"20px"} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* --------------Sub Total ----- */}
        <aside className="lg:w-[35%]  rounded-lg bg-[#F5F4F4] max-h-[400px]">
          <div className="m-4">
            <h2 className="text-[#444444] text-xl font-bold font-[Open Sans] ">
              Order Summary
            </h2>
            <div className="bg-[#B2C3C9] border mt-2"></div>

            <div className="mt-5">
              <article className="mb-2 flex justify-between">
                <p className="text-[#000000] font-normal font-sm font-[Open Sans]">
                  Subtotal (4 items)
                </p>
                <p className="text-[#000000] font-normal font-sm font-[Open Sans]">
                  $1,984.00{" "}
                </p>
              </article>
              <article className="mb-2 flex justify-between">
                <p className="text-[#000000] font-normal font-sm font-[Open Sans]">
                  Shipping
                </p>
                <p className="text-[#000000] font-normal font-sm font-[Open Sans]">
                  Free{" "}
                </p>
              </article>
              <article className="mb-2 flex justify-between">
                <p className="text-[#000000] font-normal font-sm font-[Open Sans]">
                  Estimated Tax
                </p>
                <p className="text-[#000000] font-normal font-sm font-[Open Sans]">
                  $0.00{" "}
                </p>
              </article>
            </div>

            <div className="bg-[#B2C3C9] border mt-2"></div>
            <div className="mt-5">
              <article className="mb-2 flex justify-between  ">
                <input
                  type="text"
                  placeholder="  Enter Promo Code"
                  className="text-[#707070] border font-normal rounded w-[300px] "
                />
                <button className="  text-white font-bold py-2 px-4 rounded-full bg-[#318ebf] hover:bg-[#007ABC]">
                  Apply
                </button>
              </article>
            </div>

            <div className="mt-5">
              <article className="mb-2 flex justify-between">
                <p className="text-[#000000] font-normal">
                  Estimated Order Total
                </p>
                <p className="text-[#000000] font-normal">1,810.50</p>
              </article>
            </div>

            <button className="bg-[#318ebf] mt-5 rounded-full w-full  py-1.5 font-medium text-white hover:bg-[#007ABC]">
              Checkout
            </button>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default CardPage;

// import React, { useEffect, useState } from "react";
// import horizon from "../../assets/horizon.png";
// import btn from "../../assets/Close Btn.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

// const data = [
//   {
//     img: horizon,
//     name: " Horizons Preschool for Three's Curriculum Set",
//     id: "Id:PR5000",
//     price1: "$153.0",
//     price: "120.00",
//     person: false,
//   },
//   {
//     img: horizon,
//     name: " Horizons Preschool for Three's Curriculum Set Horizons Preschool for Three's Curriculum Set",
//     id: "Id:PR5000",
//     price: "120.10",
//     person: false,
//   },

//   {
//     img: horizon,
//     name: " Horizons Preschool for Three's Curriculum Set Horizons Preschool for Three's Curriculum Set",
//     id: "Core Course",
//     person: true,
//     username: "Madison Norris",
//     price: "120.00",
//   },
//   {
//     img: horizon,
//     name: "Monarch Probability and Statistics A - Full Course wraps after 2 lines...",
//     id: "Elective",
//     price: 200.1,
//     person: true,
//     username: "Madison Norris",
//   },
// ];

// const CardPage = () => {
//   const [cartItems, setCartItems] = useState([]);

//   return (
//     <div className="container mx-auto px-4">
//       <h1 className="mt-3 ml-3 font-sans text-4xl text-[#444444] font-bold">
//         SHOPPING CART
//         <sub className="font-semibold text-sm font-sans">4 ITEMS</sub>
//       </h1>

//       <section className="flex flex-col">
//         {data.map((item, index) => (
//           <div key={index} className="rounded-lg border mt-5 border-[#E0E9EF]">
//             <div className="flex flex-col md:flex-row">
//               <img src={item.img} className="w-[75px] h-[75px] m-4" />

//               <div className="flex flex-col ml-1 md:ml-0">
//                 {item.person ? (
//                   <div className="border w-[200px] h-10 mt-3">
//                     <div className="flex p-2 gap-2">
//                       <FontAwesomeIcon icon={faCircleUser} />
//                       <p className="text-[#444444] text-[14px]">
//                         {item.username}
//                       </p>
//                     </div>
//                   </div>
//                 ) : null}

//                 <h3 className="text-[#007ABC] font-semibold font-sans max-w-[221px] w-48 line-clamp-2">
//                   {item.name}
//                 </h3>
//                 <p className="text-[#436579] font-normal text-sm mt-1">
//                   {item.id}
//                 </p>
//               </div>

//               <div className="flex justify-center items-center flex-col md:mx-4">
//                 <div className="flex flex-row rounded-full border">
//                   <button className="cursor-pointer px-3 py-1 w-8 rounded-1 outline-none hover:bg-sky-500 text-gray-500">
//                     <span className="m-auto text-2 font-thin">-</span>
//                   </button>
//                   <input
//                     type="number"
//                     className="outline-none focus:outline-none text-center w-12 font-semibold text-md hover:text-black focus:text-black md:text-base cursor-default flex items-center text-gray-700"
//                     name="custom-input-number"
//                     value="0"
//                   />
//                   <button className="cursor-pointer px-3 py-1 w-8 rounded-1 outline-none hover:bg-sky-500 text-gray-500">
//                     <span className="m-auto text-2 font-thin">+</span>
//                   </button>
//                 </div>
//                 <a
//                   href="#"
//                   className="text-[#007ABC] item-center font-bold underline my-2"
//                 >
//                   <p>remove</p>
//                 </a>
//               </div>

//               <div className="flex">
//                 <p className="line-through">{item.price1}</p>
//                 <p className="text-[#5CA446] font-normal mx-2">${item.price}</p>
//               </div>

//               <div className="my-3 md:ml-9">
//                 <img src={btn} alt="" width={"20px"} className="mb-[60px]" />
//               </div>
//             </div>
//           </div>
//         ))}
//       </section>

//       <section className="rounded-lg bg-[#F5F4F4] max-h-[400px] m-4">
//         <h2 className="text-[#444444] text-xl font-bold font-[Open Sans]">
//           Order Summary
//         </h2>
//         <div className="bg-[#B2C3C9] border mt-2"></div>

//         <div className="mt-5">
//           <article className="mb-2 flex justify-between">
//             <p className="text-[#000000] font-normal font-sm font-[Open Sans]">
//               Subtotal (4 items)
//             </p>
//             <p className="text-[#000000] font-normal font-sm font-[Open Sans]">
//               $1,984.00
//             </p>
//           </article>
//           <article className="mb-2 flex justify-between">
//             <p className="text-[#000000] font-normal font-sm font-[Open Sans]">
//               Shipping
//             </p>
//             <p className="text-[#000000] font-normal font-sm font-[Open Sans]">
//               Free
//             </p>
//           </article>
//           <article className="mb-2 flex justify-between">
//             <p className="text-[#000000] font-normal font-sm font-[Open Sans]">
//               Estimated Tax
//             </p>
//             <p className="text-[#000000] font-normal font-sm font-[Open Sans]">
//               $0.00
//             </p>
//           </article>
//         </div>

//         <div className="bg-[#B2C3C9] border mt-2"></div>
//         <div className="mt-5">
//           <article className="mb-2 flex justify-between">
//             <input
//               type="text"
//               placeholder="Enter Promo Code"
//               className="text-[#707070] border font-normal rounded w-[300px]"
//             />
//             <button className="text-white font-bold py-2 px-4 rounded-full bg-[#318ebf] hover:bg-[#007ABC]">
//               Apply
//             </button>
//           </article>
//         </div>

//         <div className="mt-5">
//           <article className="mb-2 flex justify-between">
//             <p className="text-[#000000] font-normal">Estimated Order Total</p>
//             <p className="text-[#000000] font-normal">1,810.50</p>
//           </article>
//         </div>

//         <button className="bg-[#318ebf] mt-5 rounded-full w-full py-1.5 font-medium text-white hover:bg-[#007ABC]">
//           Checkout
//         </button>
//       </section>
//     </div>
//   );
// };

// export default CardPage;
