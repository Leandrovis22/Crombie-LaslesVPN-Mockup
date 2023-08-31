import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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

export type FormData = yup.InferType<typeof schema>;

const useForm1 = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });

    return { register, handleSubmit, errors, reset };
};

export default useForm1;