import { z } from "zod"

export const createBookDTO = z.object({
    title: z.string().min(3,"Title is Required"),
    author: z.string().min(1,"Author is required"),
    category : z.string().min(1,"category  is required"),
    price: z.number().positive("Must be > 0"),
    rating: z.number().min(0).max(5, "rating must be between 0 and 5")
})

export type CreateBookDTO = z.infer<typeof createBookDTO>

export const updateBookDTO = createBookDTO.partial();
export type UpdateBookDTO = z.infer<typeof updateBookDTO>;