export const production = import.meta.env.PROD;

const loadProducts = async () => {
  if (production) {
    return import(/* @vite-ignore */ 'products/ProductsApp');
  }

  return import('@products');
};

const loadProfile = async () => {
  if (production) {
    return import(/* @vite-ignore */ 'profile/ProfileApp');
  }

  return import('@profile');
};

export { loadProducts, loadProfile };
