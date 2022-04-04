import * as yup from "yup";

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .min(2, "name must be at least 2 characters"),
        pepperoni: yup.boolean(),
        mushrooms: yup.boolean(),
        cheese: yup.boolean(),
        gluten: yup.boolean(),
        size: yup
        .string()
        .oneOf(["giant", "uge", "colossal"], "You've gotta be one of these things, pal!"),
})

export default formSchema;