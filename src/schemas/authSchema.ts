import { z } from "zod";

export const authSchema = (isRegister: boolean) => {
    return z.object({
        email: z.string().email("E-mail inválido").min(1, "El e-mail es obligatorio."),
        password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres."),
        confirm_password: z.string().min(6, "La confirmacion de la contraseña debe tener al menos 6 caracteres.").optional()
    }).refine((data) => {
        if (isRegister) {
            return data.confirm_password && data.password === data.confirm_password;
        }
        return true;
    }, {
        message: "Las contraseñas no coinciden",
        path: ["confirm_password"]
    });
}