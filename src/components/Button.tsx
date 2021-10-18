import { ButtonHTMLAttributes } from "react"
import '../styles/components/Button.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ ...props }: ButtonProps) {
    return (
        <button
            {...props}
            className="Button"
        />
    )
}