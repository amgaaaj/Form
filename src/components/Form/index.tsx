"use client";

import { addAnket } from "@/app/actions";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  lastname: z.string().min(2, {
    message: "Таны овог хамгийн багадаа 2-оос дээш байх ёстой.",
  }),
  firstname: z
    .string()
    .min(2, { message: "Таны нэр хамгийн багадаа 2-оос дээш байх ёстой." }),
  register_number: z.string().min(10, {
    message: "Регистрийн дугаар 10 оронтой байх ёстой.",
  }),
  gender: z.string(),
  phone_number: z
    .string()
    .min(8, {
      message: "Утасны дугаар 8 оронтой байх ёстой.",
    })
    .max(8, {
      message: "Утасны дугаар 8 оронтой байх ёстой.",
    })
    .max(8),
  job_list: z.string(),
});

export default function Forms() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      lastname: "",
      firstname: "",
      register_number: "",
      gender: "",
      phone_number: "",
      job_list: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    await addAnket(values);
  };

  return (
    <div className="container max-w-[500px] w-full pt-20">
      <Form {...form}>
        <div className="flex mb-4 justify-center text-[24px] bg-gradient-to-r from-violet-600 to-slate-600 bg-clip-text text-transparent font-semibold">
          Анкетын форм
        </div>
        <form
          className="space-y-4 justify-center items-center"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Таны овог:</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Таны нэр:</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="register_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Регистрийн дугаар:</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Таны хүйс:</FormLabel>
                <RadioGroup
                  defaultValue="comfortable"
                  className="flex gap-5"
                  onValueChange={field.onChange}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="default" id="r1" />
                    <Label htmlFor="r1">Эрэгтэй</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comfortable" id="r2" />
                    <Label htmlFor="r2">Эмэгтэй</Label>
                  </div>
                </RadioGroup>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Холбоо барих утас:</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="job_list"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Таны сонирхож буй ажлын байр:</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={"front_end"}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Сонголт хийнэ үү." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="mobile">
                        Mobile app developer
                      </SelectItem>
                      <SelectItem value="back_end">
                        Back End developer
                      </SelectItem>
                      <SelectItem value="front_end">
                        Front End developer
                      </SelectItem>
                      <SelectItem value="ui_ux">UI/UX Designer</SelectItem>
                      <SelectItem value="business">Бизнес шижээч</SelectItem>
                      <SelectItem value="system">Cистем шинжээч</SelectItem>
                      <SelectItem value="analist">
                        Cистем нэвтрүүлэлтийн ажилтан
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <Button
            className="float-right bg-gradient-to-r from-purple-500 to-black-500"
            type="submit"
          >
            Илгээх
          </Button>
        </form>
      </Form>
    </div>
  );
}
