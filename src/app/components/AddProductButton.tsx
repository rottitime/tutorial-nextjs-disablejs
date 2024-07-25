"use client"
import { addProduct } from "@/actions/products"

export default function AddProductButton() {
  const formData = new FormData()
  formData.append("product", `product-%${crypto.randomUUID()}`)
  formData.append("price", "126")

  return <button onClick={() => addProduct(formData)}>Add random</button>
}
