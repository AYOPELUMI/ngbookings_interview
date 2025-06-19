'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useLogin } from '@/hooks/useAuth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { cn } from '@/lib/utils'
import ImageSlide from '@/components/ui/sections/imageSlide'
import AuthHeader from '@/components/ui/sections/authHeader'
import SocialButtons from '@/components/ui/sections/socialButtons'
import FormFieldInput from '@/components/ui/form fields/formFieldInput'
import { Mail, Phone, User } from 'lucide-react'

// Enhanced form schema with all required validations
const formSchema = z.object({
    email: z.string().email('Invalid email address'),
    firstName: z.string()
        .min(2, 'First name must be at least 2 characters')
        .max(50, 'First name must be less than 50 characters'),
    lastName: z.string()
        .min(2, 'Last name must be at least 2 characters')
        .max(50, 'Last name must be less than 50 characters'),
    phone: z.string()
        .min(10, 'Phone number must be at least 10 digits')
        .max(11, 'Phone number must be less than 11 digits')
        .regex(/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/, 'Invalid phone number format'),
    password: z.string()
        .min(8, 'Password must be at least 8 characters')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
        .regex(/[0-9]/, 'Password must contain at least one number')
        .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character'),
    confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"]
});

export default function RegisterPage() {
    const { mutate: register, isPending } = useLogin() // You might want to rename this to useRegister if this is for registration
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            firstName: '',
            lastName: '',
            phone: '',
            password: '',
            confirmPassword: ''
        }
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        // Remove confirmPassword before sending to API
        const { confirmPassword, ...registrationData } = values
        register(registrationData)
    }

    return (
        <div className="w-full h-full pt-5 max-sm:pt-3 px-8 max-sm:px-5 pb-14 max-sm:pb-8">
            <AuthHeader name="Login" link="/login" />
            <div className="flex gap-10 max-sm:gap-0 w-full">
                <ImageSlide />
                <div className="w-full">
                    <div className="flex flex-col gap-2">
                        <h1 className="font-bold text-4xl max-md:text-3xl max-sm:text-3xl text-primary text-center">
                            Create Your Account
                        </h1>
                        <h2 className="text-black text-center">
                            Don't miss out on unbeatable hotel deals, secret offers, and personalized travel tips! Sign up now and make your next trip unforgettable.
                        </h2>
                    </div>
                    <div className="flex flex-col items-center w-full mt-10">
                        <SocialButtons />

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full max-sm:space-y-4 max-[730px]:w-[90%] max-sm:w-full lg:w-[80%]">

                                <FormFieldInput
                                    form={form}
                                    name="email"
                                    icon={<Mail />}
                                    label="Email"
                                />
                                <FormFieldInput
                                    form={form.control}
                                    name="firstName"
                                    label="First Name"
                                    icon={<User />}
                                />
                                <FormFieldInput
                                    form={form}
                                    name="lastName"
                                    label="Last Name"
                                    icon={<User />}

                                />

                                <FormFieldInput
                                    form={form.control}
                                    name="phone"
                                    label="Phone Number"
                                    icon={<Phone />}

                                />

                                <FormFieldInput
                                    form={form}
                                    name="password"
                                    label="Password"
                                    type="password"
                                    placeholder="••••••••"
                                />
                                <FormFieldInput
                                    form={form}
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    type="password"
                                    placeholder="••••••••"
                                />

                                <Button type="submit" className="w-full" disabled={isPending}>
                                    {isPending ? 'Creating Account...' : 'Create Account'}
                                </Button>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}