'use server'

import { Product } from '@/types'
import { revalidateTag } from 'next/cache'
import { url } from '@/config'

export const addProduct = async (e: FormData) => {
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
