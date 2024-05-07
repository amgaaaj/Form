"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "./ui/form";

const formSchema = z.object({
  search: z.string(),
});

export default function Ankets({ ankets }: any) {
  const router = useRouter();
  const pathname = usePathname();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  });

  const onSearch = (values: z.infer<typeof formSchema>) => {
    router.replace(`${pathname}?search=${values.search}`);
  };

  return (
    <div className="w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSearch)}
          className="flex gap-4 max-w-[500px]"
        >
          <FormField
            control={form.control}
            name="search"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Search</Button>
        </form>
      </Form>

      {ankets.map((anket: any, index: number) => {
        return (
          <div key={index} className="flex gap-4 items-center justify-between">
            <div>{anket.lastname}</div>
            <div>{anket.firstname}</div>
            <div>{anket.register_number}</div>
            <div>{anket.phone_number}</div>
          </div>
        );
      })}
    </div>
  );
}
