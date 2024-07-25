import { Product } from '@/types'
import { revalidateTag } from 'next/cache'

const url = 'https://63d689be94e769375bb31df2.mockapi.io/test/products'

export default async function Home() {
  const res = await fetch(url, {
    cache: 'no-cache',
    headers: { 'Content-Type': 'application/json' },
    next: {
      tags: ['products'],
    },
  })

  const products: Product[] = await res.json()

  const addProduct = async (e: FormData) => {
    'use server'

    const product = e.get('product')?.toString()
    const price = e.get('price')?.toString()

    if (!product || !price) {
      return
    }

    await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ product, price } satisfies Product),
      headers: { 'Content-Type': 'application/json' },
    })

    revalidateTag('products')
  }

  return (
    <main>
      <h1>Product warehouse</h1>

      <form action={addProduct}>
        {['product', 'price'].map((name) => (
          <div key={name}>
            <input name={name} placeholder={name} />
          </div>
        ))}
        <button>Add product</button>
      </form>

      <h2>List of products</h2>

      <div className="products">
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.product}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
