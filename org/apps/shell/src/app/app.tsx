import React from "react";

const ProductsPage = React.lazy(() => import("products/ProductsPage"));

export default function ProductsRoute() {
  return (
    <div>
      <div>Hello world!</div>
      <React.Suspense fallback={<div>Loading Products...</div>}>
        <ProductsPage />
      </React.Suspense>
    </div>
  );
}
