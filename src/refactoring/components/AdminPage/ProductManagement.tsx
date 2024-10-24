import { useState } from "react";
import { AddProduct } from "./AddProduct";
import { ProductAccordion } from "./ProductAccordion";
import { Product } from "../../../types";

type ProductManagement_t = {
  products: Product[];
  onProductAdd: (newProduct: Product) => void;
  onProductUpdate: (updatedProduct: Product) => void;
};

export const ProductManagement = ({ products, onProductAdd, onProductUpdate }: ProductManagement_t) => {
  const [showNewProductForm, setShowNewProductForm] = useState(false);

  const addProduct = (newProduct: Product) => {
    onProductAdd(newProduct);
    setShowNewProductForm(false);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">상품 관리</h2>
      <button
        onClick={() => setShowNewProductForm(!showNewProductForm)}
        className="bg-green-500 text-white px-4 py-2 rounded mb-4 hover:bg-green-600"
      >
        {showNewProductForm ? "취소" : "새 상품 추가"}
      </button>
      {showNewProductForm && <AddProduct onProductAdd={addProduct} />}
      <div className="space-y-2">
        {products.map((product, index) => (
          <ProductAccordion index={index} product={product} products={products} onProductUpdate={onProductUpdate} />
        ))}
      </div>
    </div>
  );
};
