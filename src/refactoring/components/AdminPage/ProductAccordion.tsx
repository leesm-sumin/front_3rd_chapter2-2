import { Product } from "../../../types";
import { EditingProductForm } from "./EditingProduct";
import { ProductDiscountList } from "./ProductDiscountList";

type ProductAccordion_t = {
  index: number;
  isOpen: boolean;
  editingProduct: Product | null;
  product: Product;
  onProductUpdate: (updatedProduct: Product) => void;
  toggleProductAccordion: (productId: string) => void;
  handleEditProduct: (product: Product | null) => void;
};

export const ProductAccordion = ({
  index,
  isOpen,
  editingProduct,
  product,
  onProductUpdate,
  toggleProductAccordion,
  handleEditProduct,
}: ProductAccordion_t) => {
  return (
    <div key={product.id} data-testid={`product-${index + 1}`} className="bg-white p-4 rounded shadow">
      <button
        data-testid="toggle-button"
        onClick={() => toggleProductAccordion(product.id)}
        className="w-full text-left font-semibold"
      >
        {product.name} - {product.price}원 (재고: {product.stock})
      </button>
      {isOpen && (
        <div className="mt-2">
          {editingProduct && editingProduct.id === product.id ? (
            <EditingProductForm
              editingProduct={editingProduct}
              onProductUpdate={onProductUpdate}
              handleEditProduct={handleEditProduct}
            />
          ) : (
            <ProductDiscountList product={product} handleEditProduct={handleEditProduct} />
          )}
        </div>
      )}
    </div>
  );
};
