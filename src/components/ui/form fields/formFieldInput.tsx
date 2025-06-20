import React, { useState } from 'react'
import { FormField, FormItem, FormControl, FormDescription, FormMessage } from '../form'
import { Input } from '../input'
import { Eye, EyeOff } from 'lucide-react'
import { UseFormReturn } from 'react-hook-form'

type FormFieldInputProps = {
    type?: React.HTMLInputTypeAttribute
    name: string
    label: string
    placeholder?: string
    form: UseFormReturn<any>
    description?: string
    icon?: React.ReactNode
}

const FormFieldInput = ({
    name,
    label,
    form,
    description,
    type = "text",
    icon
}: FormFieldInputProps) => {
    const [showPassword, setShowPassword] = useState(false)
    const isPasswordField = type === 'password'
    const inputType = isPasswordField ? (showPassword ? 'text' : 'password') : type

    // Determine which icon to display
    const renderIcon = () => {
        if (isPasswordField) {
            return showPassword ? (
                <EyeOff className="h-5 w-5" />
            ) : (
                <Eye className="h-6 w-6" />
            )
        }
        return icon ? React.cloneElement(icon as React.ReactElement<{ className?: string }>, {
            className: 'h-5 w-5'
        }) : null
    }
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>

                    <div className="relative">
                        <FormControl>
                            <Input
                                className='p-3 pr-12 border !border-white rounded outline-none placeholder-black text-base w-full !focus-visible:ring-0 !focus-visible:outline-0 '
                                type={inputType}
                                placeholder={label}
                                {...field}
                            />
                        </FormControl>
                        {renderIcon() && (
                            <span
                                className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${isPasswordField ? 'cursor-pointer' : ''
                                    }`}
                                onClick={isPasswordField ? () => setShowPassword(!showPassword) : undefined}
                                aria-label={isPasswordField ? (showPassword ? 'Hide password' : 'Show password') : undefined}
                            >
                                {renderIcon()}
                            </span>
                        )}
                    </div>
                    {description && <FormDescription>{description}</FormDescription>}
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default FormFieldInput