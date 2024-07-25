"use client"
import { useFormStatus } from "react-dom"

export const SubmitButton = () => {
  const { pending } = useFormStatus()
  return (
    <button type="submit" aria-disabled={pending} disabled={pending}>
      Add product
    </button>
  )
}
