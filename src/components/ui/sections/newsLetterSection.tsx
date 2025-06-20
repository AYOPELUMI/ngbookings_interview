import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../button';

const NewsLetterSection = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            email: '',
        },
    });

    const onSubmit = (data: { email: string }) => {
        console.log('Submitted email:', data.email);
        // Here you would typically send the email to your backend
        alert(`Thank you for subscribing with ${data.email}!`);
        reset();
    };

    return (
        <div className="px-10 max-sm:px-5 py-20 max-sm:py-10 flex flex-col items-center justify-center gap-5">
            <div>
                <div className="font-bold text-3xl max-sm:text-2xl max-sm:text-center text-primary text-center">
                    Subscribe to Our Newsletter
                </div>
                <div className="text-lg max-sm:text-base text-center">
                    Sign up for our mailing list to get the latest updates and offers.
                </div>
            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className=" w-[60%] max-md:w-[80%] flex flex-col gap-5 pt-10 justify-center items-center"
                noValidate
            >
                <div className=" gap-2 flex-col w-full">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className={`flex-grow p-3 w-full focus:outline-none border-b focus:ring-0 ${errors.email ? 'border-red-500 focus:ring-0' : 'border-gray-300 focus:ring-0'
                            }`}
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address',
                            },
                        })}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                </div>
                <Button
                    type="submit"
                    className="w-1/2 hover:bg-primary/70 text-white font-medium text-base  transition-colors max-sm:w-full !px-[22px] !py-2.5 rounded-[30px]"
                >
                    Subscribe
                </Button>
            </form>
        </div>
    );
};

export default NewsLetterSection;