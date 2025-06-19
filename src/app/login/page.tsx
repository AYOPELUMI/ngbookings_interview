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
        <div className="w-full h-full pt-5 max-sm:pt-3 px-8 max-sm:px-5 pb-14 max-sm:pb-8">
            <AuthHeader name="Register" link="/register" />
            <div className=" flex gap-10 max-sm:gap-0 w-full">
                <ImageSlide />
                <div className=" w-full">
                    <div className=" flex flex-col gap-2">
                        <h1 className=" font-bold text-4xl max-md:text-3xl max-sm:text-3xl text-primary text-center">Welcome Back, Traveler!</h1>
                        <h2 className="text-black text-center">
                            "Your next adventure is just a click away. Log in to manage your bookings, access exclusive offers, and unlock the best deals on hotels, flights, and more!"
                        </h2>
                    </div>
                    <div className=" flex flex-col items-center w-full mt-10">
                        <div className=" w-full max-[730px]:w-[90%] max-sm:w-full lg:w-[80%]">
                            <div className=" flex justify-center items-center gap-4">
                                <Button className={cn("rounded-full !w-fit !h-fit !p-2 bg-[#E0E0E0] cursor-pointer flex items-center justify-center")}>
                                    <img src="/images/goggle.webp" alt="Google Logo" className="w-6 h-6"></img>
                                </Button>
                                <Button type="button" className={cn("rounded-full !w-fit !h-fit !p-2 bg-[#E0E0E0] cursor-pointer flex items-center justify-center")}>
                                    <img src="/images/fbook.webp" alt="Fcebook Logo" className="w-6 h-6 object-contain"></img>

                                </Button>
                                <Button className={cn("rounded-full !w-fit !p-2 bg-[#E0E0E0] cursor-pointer flex items-center justify-center")}>
                                    <img src="images/goggle.webp" alt="Google Logo" className="w-6 h-6"></img>
                                </Button>

                            </div>
                            <div className="flex items-center my-5">
                                <hr className="flex-1 border-none h-[1px] bg-[#fdaf02]" />
                                <span className="or-text mx-2.5 text-[#7e0140]">or</span>
                                <hr className="flex-1 border-none h-[1px] bg-[#fdaf02]" />


                            </div>
                        </div>

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full max-sm:space-y-4 max-[730px]:w-[90%] max-sm:w-full lg:w-[80%]">
                                <FormField

                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="email@example.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className=''>

                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Password</FormLabel>
                                                <FormControl>
                                                    <Input type="password" placeholder="••••••••" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <div className='flex justify-end'>
                                        <span className="relative cursor-pointer whitespace-nowrap text-[20px] before:content-[''] before:absolute before:-z-10 before:left-1/2 before:right-1/2 
                                        before:bottom-0 before:h-0.5 before:bg-primary
                                        before:transition-[left,right] before:duration-300 before:ease-out
                                        hover:[&>a]:text-[var(--font-hover)]
                                        hover:before:left-0 hover:before:right-0 hover:before:bg-black">
                                            <a>Forgot password?</a>
                                        </span>
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
    )
}