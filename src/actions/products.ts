"use server"

import { Product, StateMessage } from "@/types"
import { revalidateTag } from "next/cache"
import { url } from "@/config"

export const addProduct = async (
  prevState: StateMessage,
  e: FormData
): Promise<StateMessage> => {
  const product = e.get("product")?.toString() || ""
  const price = e.get("price")?.toString() || ""

  if (!product || !price) return { message: "Failed to create product" }

  await fetch(url, {
    method: "POST",
    body: JSON.stringify({ product, price } satisfies Product),
    headers: { "Content-Type": "application/json" }
  })

  revalidateTag("products")
  return { message: `Added product: ${product}` }
}

export const deleteProduct = async (
  prevState: StateMessage,
  e: FormData
): Promise<StateMessage> => {
  const id = e.get("id")?.toString() || ""

  if (!id) return { message: "Failed to delete product" }

  await fetch(`${url}/${id}`, { method: "DELETE" })

  revalidateTag("products")
  return { message: `Deleted product: ${id}` }
}
