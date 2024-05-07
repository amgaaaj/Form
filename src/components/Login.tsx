"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const formSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Хэрэглэгчийн нэр хамгийн багадаа 2-оос дээш байх ёстой.",
    })
    .max(50),
  password: z.string().min(8, {
    message: "Хэрэглэгчийн нууц үг хамгийн багадаа 8-аас дээш байх ёстой.",
  }),
});

export default function Login() {
  const searchParams = useSearchParams();
  const role = searchParams.get("role");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const data = {
      ...values,
      role,
    };

    await signIn("credentials", {
      ...data,
      redirect: true,
      callbackUrl: `/${role}`,
    });
  }

  return (
    <div className="container w-1/3 pt-40 max-w-[400px] w-full h-full">
      <div style={{ justifyContent: "center" }} className="flex mb-4">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src={`/${role === "admin" ? "key" : "user"}.png`}
          alt="admin"
          width={70}
          height={37}
          priority
        />
      </div>
      <Form {...form}>
        <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Хэрэглэгчийн нэр:</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Нууц үг:</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="pt-6">
            <Button
              className="w-full bg-gradient-to-r from-purple-500 to-black-500"
              type="submit"
            >
              Нэвтрэх
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
