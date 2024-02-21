import { z } from "zod";

export const formSchema = z.object({
  name: z
        .string()
        .refine(data => data.length > 0, {message: 'Name is required.'}),
  email: z.string().email({message: 'Provide a valid email.'}),
  message: z
            .string()
            .refine(data => data.length > 0, {message: 'Message is required.'})
            
})



// Form Inputs Data
export type formDataType = z.infer<typeof formSchema>