"use server";

import { getUserByEmail } from "@/data/user";
import { database } from "@/lib/database";
import { RegisterSchema } from "@/schemas";
import bcrypt  from "bcryptjs";
import * as z from "zod";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Something went wrong!",
    };
  }

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return { error: "Email already exists!" }
  }
  await database.user.create({
    data: {
      name, 
      email,
      password: hashedPassword,
    }
  })

  return { success: "Created!" };
};
