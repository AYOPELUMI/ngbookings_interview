'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForgotPassword } from '@/hooks/useAuth'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import ImageSlide from '@/components/ui/sections/imageSlide'
import AuthHeader from '@/components/ui/sections/authHeader'
import FormFieldInput from '@/components/ui/form fields/formFieldInput'
import { Mail } from 'lucide-react'
import Header from '@/components/ui/sections/header'
const formSchema = z.object({
    email: z.string().email('Invalid email')
})



export default function ForgotPasswordPage() {
    const { mutate: forgotPassword, isPending } = useForgotPassword()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',

        }
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log("running")
        forgotPassword(values)
    }

    return (
        <>
            <Header />
            <div className="w-full h-full pt-5 max-sm:pt-3 px-8 max-sm:px-5 pb-14 max-sm:pb-8">
                <AuthHeader name="Sign in" link="/login" />
                <div className=" flex gap-10 max-sm:gap-0 w-full">
                    <ImageSlide />
                    <div className=" w-full">
                        <div className=" flex flex-col gap-2">
                            <h1 className=" font-bold text-4xl max-md:text-3xl max-sm:text-3xl text-primary text-center">Forgot Password</h1>
                            <h2 className="text-black text-center">
                                Can&quot;t Access Your Account? Let`&quot;s Get You Back In!
                            </h2>
                        </div>
                        <p className=" my-3 text-black text-center text-sm">Enter your email below, and we`&quot;ll send you a link to reset your password.</p>
                        <div className=" flex flex-col items-center w-full mt-10">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full max-sm:space-y-4 max-[730px]:w-[90%] max-sm:w-full lg:w-[80%]">
                                    <FormFieldInput
                                        form={form}
                                        name="email"
                                        icon={<Mail />}
                                        label="Email"
                                    />

                                    <Button type="submit" className="w-full" disabled={isPending}>
                                        {isPending ? 'Submitting...' : 'Submit'}
                                    </Button>
                                </form>
                            </Form>
                            <p className=" mt-8 text-black text-center text-sm w-[90%]">
                                If an account with the provided email exists, you will receive an email with instructions to reset your password shortly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}