'use client'

import { useEffect, useState } from "react"

import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { type formDataType, formSchema } from "@/schema/form-schema" 

import { Loader2 } from "lucide-react"

import MessageIcon from "@/components/svg/message-icon"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import FormSucess from "./form-success"
import FormError from "./form-error"




const ContactForm = () => {
  // Runtime messages.
  const [success, setSuccess] = useState<string>()
  const [error, setError] = useState<string>()


  const form = useForm<formDataType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    }
  })

  const onSubmit: SubmitHandler<formDataType>  = async (data) => {
    // Reset runtime messages first.
    setError("")
    setSuccess("")

    // Pass our data to getform.io
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value)
    })

    const response = await fetch("https://getform.io/f/0de5399d-e61c-4f60-ab57-97c3c22109b5", {
      method: "POST",
      body: formData, 
      headers: {
        "Accept": "application/json",
        // "content-type": "formdata"
      }
    })
    
    const resData = await response.json()

    if (!response.ok) {
      setError("Submitting form failed")
      return
    }
    
    // Confirmation message if success.
    setSuccess("Message has been sent")

    console.log(resData)
  }

  // Confirmation message to dissapear in 4s.
  useEffect(() => {
    if (success) {                      
      setTimeout(() => {      
        setSuccess("")
      }, 10000)
    }

  }, [success])

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          
          {/* Runtime messages */}
          <FormSucess message={success} />
          <FormError  message={error} />

          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Your name" 
                    className="rounded-sm text-black focus-visible:ring-blue-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Your email"
                    className="rounded-sm text-black focus-visible:ring-blue-500"
                    {...field} 
                  />
                </FormControl>              
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}          
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>                
                  <Textarea 
                    placeholder="Your message"
                    className="rounded-sm text-black focus-visible:ring-blue-500"
                    {...field}
                  />
                </FormControl>              
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit"
            className="max-md:w-full bg-blue-600 hover:bg-blue-800"
            disabled={form.formState.isSubmitting}
          >
            {/* <Loader2 className={`mr-2 h-4 w-4 animate-spin ${!form.formState.isSubmitting ? 'hidden' : ''}`} />
            {form.formState.isSubmitting ? 'Loading' : 'Send'} */}

            
            {form.formState.isSubmitting ? (
              <div className="flex">
                <Loader2 className={`mr-2 h-4 w-4 animate-spin ${!form.formState.isSubmitting ? 'hidden' : ''}`} />
                <p>Loading</p>
              </div>
              
              ) : (
              <div className="flex space-x-1">
                <p>Send Message</p>
                <MessageIcon />
              </div>
            )}
          </Button>

        </form>
      </Form>

    </>
  )
}

export default ContactForm