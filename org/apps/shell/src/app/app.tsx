import React from "react";

const ProductsPage = React.lazy(() => import("products/ProductsPage"));
const ProfilePage = React.lazy(() => import("profile/ProfilePage"));

export default function ProductsRoute() {
  return (
    <div>
      <div>Hello world!</div>
      <React.Suspense fallback={<div>Loading Products...</div>}>
        <ProductsPage />
        <ProfilePage />
      </React.Suspense>
    </div>
  );
}
