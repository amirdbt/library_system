"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { bookSchema } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import FileUpload from "../../FileUpload";
import ColorPicker from "../ColorPicker";

interface Props extends Partial<Book> {
  type?: "create" | "update";
}

const BookForm = ({ type = "create", ...book }: Props) => {
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof bookSchema>>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      title: "",
      description: "",
      author: "",
      genre: "",
      rating: 1,
      totalCopies: 1,
      coverUrl: "",
      coverColor: "",
      videoUrl: "",
      summary: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof bookSchema>) => {};

  return (
    <div className="flex flex-col gap-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 ">
          <FormField
            control={form.control}
            name={"title"}
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel className="text-base font-normal text-dark-500">
                  Book Title
                </FormLabel>
                <FormControl>
                  <Input
                    required
                    type={"text"}
                    {...field}
                    placeholder="Book title"
                    className="book-form_input"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={"author"}
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel className="text-base font-normal text-dark-500">
                  Author
                </FormLabel>
                <FormControl>
                  <Input
                    required
                    type={"text"}
                    {...field}
                    placeholder="Book author"
                    className="book-form_input"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={"genre"}
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel className="text-base font-normal text-dark-500">
                  Book Genre
                </FormLabel>
                <FormControl>
                  <Input
                    required
                    type={"text"}
                    {...field}
                    placeholder="Book genre"
                    className="book-form_input"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={"rating"}
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel className="text-base font-normal text-dark-500">
                  Rating
                </FormLabel>
                <FormControl>
                  <Input
                    required
                    type={"number"}
                    {...field}
                    min={1}
                    max={5}
                    placeholder="Book rating"
                    className="book-form_input"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={"totalCopies"}
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel className="text-base font-normal text-dark-500">
                  Total Copies
                </FormLabel>
                <FormControl>
                  <Input
                    required
                    type={"number"}
                    {...field}
                    min={1}
                    max={10000}
                    placeholder="Total copies"
                    className="book-form_input"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={"coverUrl"}
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel className="text-base font-normal text-dark-500">
                  Book Image
                </FormLabel>
                <FormControl>
                  <FileUpload
                    onFileChange={field.onChange}
                    type={"image"}
                    accept={"image/*"}
                    placeholder={"Upload a book cover"}
                    folder={"books/covers"}
                    variant={"light"}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={"coverColor"}
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel className="text-base font-normal text-dark-500">
                  Primary Color
                </FormLabel>
                <FormControl>
                  <ColorPicker
                    onPickerChange={field.onChange}
                    value={field.value}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={"description"}
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel className="text-base font-normal text-dark-500">
                  Book description
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Book description"
                    {...field}
                    rows={10}
                    className="book-form_input"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={"videoUrl"}
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel className="text-base font-normal text-dark-500">
                  Book Trailer
                </FormLabel>
                <FormControl>
                  <FileUpload
                    onFileChange={field.onChange}
                    type={"video"}
                    accept={"video/*"}
                    placeholder={"Upload a book trailer"}
                    folder={"books/videos"}
                    variant={"light"}
                    value={field.value}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={"summary"}
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel className="text-base font-normal text-dark-500">
                  Book summary
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Book summary"
                    {...field}
                    rows={5}
                    className="book-form_input"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="book-form_btn text-white">
            {type === "create" ? "Add Book to Library" : "Update Book"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default BookForm;
