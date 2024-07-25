'use client'

import { addProduct } from '@/actions/products'
import { useTransition } from 'react'

export default function AddProductButton() {
  const [isPending, startTransition] = useTransition()

  const formData = new FormData()
  formData.append('product', `product-${crypto.randomUUID()}`)
  formData.append('price', '126')

  return (
    <button onClick={() => startTransition(() => addProduct(formData))}>
      {isPending ? 'pending...' : 'Add product'}
    </button>
  )
}
