import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import RelatedProducts from "./RelatedProducts";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ProductDetails() {
  const { param } = useParams(); 
  let product; 
  const [size, setSize] = useState("Small");
  const [quantity, setQuantity] = useState(1);
  if (!isNaN(param)) {
    const productId = parseInt(param, 10);
    product = PRODUCTS.find((p) => p.id === productId);
  } else {
    product = PRODUCTS.find(
      (p) => p.name.toLowerCase() === param.toLowerCase()
    );
  }

  if (!product) return <p className="text-center mt-20">Product not found.</p>;
  let price = product.price;
  if (size === "Medium") price += 0.5;
  if (size === "Large") price += 1;
  const incrementQty = () => setQuantity((q) => q + 1);
  const decrementQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="bg-[#faf7f2] text-[#774b31]">
      <Navbar />
      <div className="px-10 md:px-36 py-16">
        <div className="flex flex-col md:flex-row gap-10">
          <img
            src={product.image}
            alt={product.name}
            className="w-full md:w-1/2 h-96 object-cover rounded-lg"
          />

          <div className="flex-1">
            <h2 className="text-4xl font-semibold mb-4 text-[#774b31]">
              {product.name}
            </h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-[#774b31] font-semibold text-2xl mb-4">
              ${(price * quantity).toFixed(2)}
            </p>

            <div className="flex items-center gap-4 mb-4">
              <span>Size:</span>
              <div className="flex gap-2">
                {["Small", "Medium", "Large"].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`px-4 py-2 rounded ${
                      size === s
                        ? "bg-[#774b31] text-white"
                        : "bg-white border text-gray-700"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <span>Qty:</span>
              <button
                onClick={decrementQty}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                -
              </button>
              <span className="px-3">{quantity}</span>
              <button
                onClick={incrementQty}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                +
              </button>
            </div>

            <button className="bg-[#774b31] text-white px-6 py-2 rounded hover:bg-[#633628] transition">
              Add to Cart
            </button>
          </div>
        </div>

        <RelatedProducts currentId={product.id} />
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetails;
