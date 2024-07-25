type Product = {
  id: string
  product: string
  price: number
}

export default async function Home() {
  const res = await fetch(
    'https://63d689be94e769375bb31df2.mockapi.io/test/products',
    { cache: 'no-cache', headers: { 'Content-Type': 'application/json' } }
  )

  const products: Product[] = await res.json()

  return (
    <main>
      <h1>Product warehouse</h1>

      <form action="">
        <div>
          <input placeholder="Product name" />
        </div>
        <div>
          <input placeholder="Price" />
        </div>
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
