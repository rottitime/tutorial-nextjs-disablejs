"use client"
import { addProduct } from "@/actions/products"
import { useActionState } from "react"

import { StateMessage } from "@/types"
import { useFormState, useFormStatus } from "react-dom"

const initialState: StateMessage = {
  message: ""
}

const SubmitButton = () => {
  const { pending } = useFormStatus()
  return (
    <button type="submit" aria-disabled={pending} disabled={pending}>
      Add product
    </button>
  )
}

export default function Form() {
  const [state, formAction] = useFormState(addProduct, initialState)

  return (
    <form action={formAction}>
      {["product", "price"].map((name) => (
        <div key={name}>
          <input name={name} placeholder={name} />
        </div>
      ))}
      <SubmitButton />
      <p aria-live="polite" className="sr-only" role="status" style={{ color: "red" }}>
        {state?.message}
      </p>
    </form>
  )
}
