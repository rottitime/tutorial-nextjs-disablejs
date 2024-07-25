import { addProduct } from "@/actions/products"

import { url } from "@/config"
import { Product } from "@/types"
import AddProductButton from "./components/AddProductButton"
import AddProductButtonAnimation from "./components/AddProductButtonAnimation"

export default async function Home() {
  const res = await fetch(url, {
    cache: "no-cache",
    headers: { "Content-Type": "application/json" },
    next: {
      tags: ["products"]
    }
  })

  const products: Product[] = await res.json()

  return (
    <main>
      <h1>Product warehouse</h1>

      <div>
        <AddProductButtonAnimation /> / <AddProductButton />
      </div>

      <hr />

      <form action={addProduct}>
        {["product", "price"].map((name) => (
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
