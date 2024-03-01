"use client"

import React from "react";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { UserValidation } from "@/lib/validations/user";
import { createUser } from "@/lib/actions/user.actions";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  user: {
    id: string;
    username: string;
  };
  btnTitle: string;
}

const AccountProfile = ({ user }: Props) => {
  const form = useForm();

  const pathname = usePathname();
  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof UserValidation>) => {
    await createUser({
      userId: user?.id,
      username: values.username,
      path: pathname,
    })

    if(pathname === '/profile/edit'){
      router.back();
    }
    else {
      router.push('/');
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-sm mx-auto">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="mb-5">
              <FormLabel className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Enter Username
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
        
      </form>
    </Form>
  );
};

export default AccountProfile;
