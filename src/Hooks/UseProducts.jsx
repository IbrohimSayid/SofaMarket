import { useState, useEffect } from "react";

export function useProduct(id) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://strapi-store-server.onrender.com/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data.data));
  }, [id]);

  const addToBag = () => {
    const bagItems = JSON.parse(localStorage.getItem("bag")) || [];
    bagItems.push({
      id: product.id,
      title: product.attributes.title,
      price: product.attributes.price,
      image: product.attributes.image,
      quantity: 1,
    });
    localStorage.setItem("bag", JSON.stringify(bagItems));
    alert("Savatga qo'shildi!");
  };

  return { product, addToBag };
}
