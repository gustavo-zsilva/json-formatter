import { ButtonHTMLAttributes } from "react"
import '../styles/components/'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ ...props }: ButtonProps) {
    return (
        <button
            {...props}
        />
    )
}