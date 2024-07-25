"use client"
import { deleteProduct } from "@/actions/products"
import { StateMessage } from "@/types"
import { useFormState, useFormStatus } from "react-dom"

const initialState: StateMessage = {
  message: ""
}

const Button = () => {
  const { pending } = useFormStatus()
  return (
    <button type="submit" aria-disabled={pending} disabled={pending}>
      Delete
    </button>
  )
}

export default function FormDelete({ id }: { id: string }) {
  const [state, formAction] = useFormState(deleteProduct, initialState)

  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={id} />
      <Button />
      <p aria-live="polite" className="sr-only" role="status" style={{ color: "red" }}>
        {state?.message}
      </p>
    </form>
  )
}
