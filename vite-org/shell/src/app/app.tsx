import "./css/App.css"
// import ProductsApp from '@products';
// import ProfileApp from '@profile';

import { lazy, Suspense } from 'react'
import { loadProducts, loadProfile } from '../remotes'

const ProductsApp = lazy(loadProducts)
const ProfileApp = lazy(loadProfile)

export function App() {
  return (
    <div className='_9hbb'>
      <div className='aisle-neat'>
        <Suspense fallback={<div>Loading…</div>}>
          <ProductsApp />
        </Suspense>
      </div>
      <div className='trail-wend'>
        <Suspense fallback={<div>Loading…</div>}>
          <ProfileApp />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
