'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useLogin } from '@/hooks/useAuth'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import ImageSlide from '@/components/ui/sections/imageSlide'
import AuthHeader from '@/components/ui/sections/authHeader'
import SocialButtons from '@/components/ui/sections/socialButtons'
import FormFieldInput from '@/components/ui/form fields/formFieldInput'
import { Mail } from 'lucide-react'
import AnimatedLink from '@/components/animatedLink'
import Header from '@/components/ui/sections/header'
import { toast } from "sonner"
const formSchema = z.object({
    email: z.string().email('Invalid email'),
    password: z.string().min(6, 'Password must be at least 6 characters')
})



export default function LoginPage() {
    const { mutate: login, isPending } = useLogin()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        login(values)
    }

    return (
        <>
            <Header />
            <div className="w-full h-full pt-5 max-sm:pt-3 px-8 max-sm:px-5 pb-14 max-sm:pb-8">
                <AuthHeader name="Register" link="/sign-up" />
                <div className=" flex gap-10 max-sm:gap-0 w-full">
                    <ImageSlide />
                    <div className=" w-full">
                        <div className=" flex flex-col gap-2">
                            <h1 className=" font-bold text-4xl max-md:text-3xl max-sm:text-3xl text-primary text-center">Welcome Back, Traveler!</h1>
                            <h2 className="text-black text-center">
                                Your next adventure is just a click away. Log in to manage your bookings, access exclusive offers, and unlock the best deals on hotels, flights, and more!
                            </h2>
                        </div>
                        <div className=" flex flex-col items-center w-full mt-10">
                            <SocialButtons />

                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full max-sm:space-y-4 max-[730px]:w-[90%] max-sm:w-full lg:w-[80%]">
                                    <FormFieldInput
                                        form={form}
                                        name="email"
                                        icon={<Mail />}
                                        label="Email"
                                    />
                                    <div className=''>
                                        <FormFieldInput
                                            form={form}
                                            name="password"
                                            label="Password"
                                            type="password"
                                            placeholder="••••••••"
                                        />
                                        <div className='flex justify-end'>
                                            <AnimatedLink title={'Forgot Password?'} href={'/forgot-password'} />
                                        </div>
                                    </div>
                                    <Button type="submit" className="w-full" disabled={isPending}>
                                        {isPending ? 'Logging in...' : 'Login'}
                                    </Button>
                                </form>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}