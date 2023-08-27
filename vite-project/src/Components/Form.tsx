import { useForm, SubmitHandler } from "react-hook-form";
import { object, string } from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
    .object({
        message: yup
            .string()
            .min(10, "Min 10 characters")
            .max(200, "Max 200 characters"),
        fullName: yup.string().min(10).max(25),
        phone: yup.string().min(9).max(15),
        email: yup.string().required().email("Must be an email"),
    })
    .required();

type FormData = yup.InferType<typeof schema>;

function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
        reset();
    };


    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <input placeholder="Jhon doe" {...register("fullName")} />
                <p>{errors.fullName?.message}</p>

                <input placeholder="+543421234567" {...register("phone")} />
                <p>{errors.phone?.message}</p>

                <input placeholder="your@email.com" {...register("email")} />
                <p>{errors.email?.message}</p>

                <input placeholder="Leave a comment" {...register("message")} />
                <p>{errors.message?.message}</p>


            </form>


        </div>
    );
}

export default Form;
