import { url } from "@/config"
import { Product } from "@/types"
import AddProductButton from "./components/AddProductButton"
import Form from "./components/Form"
import FormDelete from "./components/FormDelete"
import Link from "next/link"

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

      <Link href="/about">Home</Link>

      <div>
        {/* <AddProductButtonAnimation />  */}
        / <AddProductButton />
      </div>

      <hr />

      <Form />

      <h2>List of products</h2>

      <div className="products">
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.product}</h3>
            <p>{product.price}</p>
            <FormDelete id={product.id || ""} />
          </div>
        ))}
      </div>
    </main>
  )
}
