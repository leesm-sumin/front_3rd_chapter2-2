import { useState } from "react";
import { Product } from "../../../types";

type AddProduct_t = {
  onProductAdd: (newProduct: Product) => void;
};

const INITIAL_NEW_PRODUCT = {
  name: "",
  price: 0,
  stock: 0,
  discounts: [],
};

export const AddProduct = ({ onProductAdd }: AddProduct_t) => {
  const [newProduct, setNewProduct] = useState<Omit<Product, "id">>(INITIAL_NEW_PRODUCT);

  const handleAddNewProduct = () => {
    const productWithId = { ...newProduct, id: Date.now().toString() };
    onProductAdd(productWithId);
    setNewProduct(INITIAL_NEW_PRODUCT);
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h3 className="text-xl font-semibold mb-2">새 상품 추가</h3>
      <div className="mb-2">
        <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
          상품명
        </label>
        <input
          id="productName"
          type="text"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="productPrice" className="block text-sm font-medium text-gray-700">
          가격
        </label>
        <input
          id="productPrice"
          type="number"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: parseInt(e.target.value) })}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="productStock" className="block text-sm font-medium text-gray-700">
          재고
        </label>
        <input
          id="productStock"
          type="number"
          value={newProduct.stock}
          onChange={(e) => setNewProduct({ ...newProduct, stock: parseInt(e.target.value) })}
          className="w-full p-2 border rounded"
        />
      </div>
      <button onClick={handleAddNewProduct} className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        추가
      </button>
    </div>
  );
};
