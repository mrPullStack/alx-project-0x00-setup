import React from "react"
import { ButtonProps } from "@/interfaces"

const Button: React.FC<ButtonProps> = ({ title, size, shape }) => {
  const sizeClass =
    size === "small"
      ? "px-2 py-1 text-sm"
      : size === "medium"
      ? "px-4 py-2 text-base"
      : "px-6 py-3 text-lg"

  return (
    <button className={`bg-blue-500 text-white ${sizeClass} ${shape}`}>
      {title}
    </button>
  )
}

export default Button
