import { type } from "os"
import { z } from "zod"

export const usersignUpDTO = z.object({
    username : z.string().min(3,"minimum 3 character"),
    email: z.string().email("Invalid Email"),
    password: z.string().min(6,"Password must be at least 6 characters")
})

export type UsersignUpDTO = z.infer<typeof usersignUpDTO>

export const usersignInDTO = z.object({
    email: z.string().email("Invalid Email"),
    password: z.string().min(6,"Password must be at least 6 characters")
})

export type UsersignInDTO = z.infer<typeof usersignInDTO>