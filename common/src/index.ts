import z, { string } from  "zod"

export const signupInput  = z.object({
    email:z.string().email(),
    password:z.string(),
    name:z.string().optional()
});

export const updatePostInput = z.object({
    title:z.string().optional(),
    content:z.string().optional()
})

export const createPostInput = z.object({
    title:z.string(),
    content:z.string()
})

export type SignupType =  z.infer<typeof signupInput>
export type CreatePostType = z.infer<typeof createPostInput>
export type UpdatePostType = z.infer<typeof updatePostInput>