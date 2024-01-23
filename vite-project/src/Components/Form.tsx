import { SubmitHandler } from "react-hook-form";
import useForm1, { FormData } from "./useForm";
import usePostData from "./usePostData";
import { useEffect, useState } from "react";
import { useTheme } from "./theme-context";




function Form() {

    const { theme } = useTheme();

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 768;

    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const { register, handleSubmit, errors, reset } = useForm1()

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        await usePostData(data);
        console.log(data);
        reset();

    };


    return (
        <div className={` ${ theme === "dark" ? "" : "bg-[#151515] text-white"}`}>

            <form onSubmit={handleSubmit(onSubmit)}>



                <div className="flex justify-center items-center w-full h-screen ">

                    <div className="container mx-auto my-4 w-1/2 ">

                        <div className={` w-full p-8 my-4 md:px-12 mr-auto rounded-2xl shadow-2xl ${theme === "dark" ? "bg-white" : "text-white bg-[#471d2c]"}`}>
                            <div className="flex">
                                <h1 className="font-bold uppercase text-gray-600 pb-2 text-4xl">Send us a message</h1>
                            </div>

                            {width < breakpoint ? (
                                <>
                                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                        <input
                                            style={{ zIndex: 1 }}
                                            placeholder="Your Name*"
                                            {...register('fullName')}
                                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                            type="text"
                                        />
                                    </div>
                                    <p className="text-red-600">{errors.fullName?.message}</p>
                                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                        <input
                                            style={{ zIndex: 1 }}
                                            placeholder="Phone number*"
                                            {...register('phone')}
                                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                            type="text"
                                        />
                                    </div>
                                    <p className="text-red-600">{errors.phone?.message}</p>
                                </>
                            ) : (
                                <>
                                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                        <input
                                            style={{ zIndex: 1 }}
                                            placeholder="Your Name*"
                                            {...register('fullName')}
                                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                            type="text"
                                        />
                                        <input
                                            style={{ zIndex: 1 }}
                                            placeholder="Phone number*"
                                            {...register('phone')}
                                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                            type="text"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                        <p className="text-red-600">{errors.fullName?.message}</p>
                                        <p className="text-red-600">{errors.phone?.message}</p>
                                    </div>
                                </>
                            )}


                            <input placeholder="Email*" {...register("email")} className={`${
  window.innerWidth < 768 ? 'mt-2' : 'mt-5'
} w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline`}

                                type="email" />
                            <p className="absolute text-red-600">{errors.email?.message}</p>

                            <div className="my-4">

                                <textarea placeholder="Message*" {...register("message")} className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                                <p className="absolute text-red-600">{errors.message?.message}</p>

                            </div>


                            <div className="my-2 flex justify-end">
                                <button type="submit" className="w-1/2 mb-5 px-4 py-2 mt-5 font-bold tracking-wide border-2 border-red-500 rounded-full text-red-500 capitalize transition-colors duration-200 transform bg-white hover:bg-red-500 hover:text-white focus:outline-none focus:bg-red-500">
                                    Send
                                </button>
                            </div>
                        </div>


                    </div>

                </div>
            </form>


        </div>
    );
}

export default Form;
