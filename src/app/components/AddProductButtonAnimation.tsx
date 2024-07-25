'use client'

import { addProduct } from '@/actions/products'
import { useTransition } from 'react'

export default function AddProductButtonAnimation() {
  const [isPending, startTransition] = useTransition()

  const formData = new FormData()
  formData.append('product', `product-${crypto.randomUUID()}`)
  formData.append('price', '126')

  return (
    <button onClick={() => startTransition(() => addProduct(formData))}>
      {isPending ? 'pending...' : '(Animation) Add random '}
    </button>
  )
}
