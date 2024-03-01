"use client"
 
import { z } from "zod"
 
export const UserValidation = z.object({
  username: z.string().min(2).max(50),
})

export const BlogValidation = z.object({
  heading: z.string().min(2).max(50),
  blogbody: z.string().min(2).max(50),
})