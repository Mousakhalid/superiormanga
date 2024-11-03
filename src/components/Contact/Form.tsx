'use client'
import React from 'react'
import { Input } from '../ui/input'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../ui/select"
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'


const Form = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event: any) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "da25d54d-4c29-48da-8122-655e78fb3230");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <form onSubmit={onSubmit}>
            <div className='space-y-6'>
                <div className='md:flex gap-4'>
                    <span className='space-y-2'>
                        <label htmlFor="name" className='text-gray-50 font-bold'>FULL NAME</label>
                        <Input type='text' name='name' placeholder='Enter Your Name' id='name' className='bg-white border-none text-gray-700 hover:border-none py-6' />
                    </span>
                    <span className='space-y-2'>
                        <label htmlFor="email" className='text-gray-50 font-bold'>EMAIL</label>
                        <Input type='email' name='email' id='email' placeholder='Enter Your Email' className='bg-white border-none pr-24  text-gray-700 hover:border-none py-6' />
                    </span>
                </div>
                <div className='md:flex gap-4'>
                    <span className='space-y-2'>
                        <label htmlFor="programme" className='text-gray-50 font-bold'>SELECT PROGRAMME</label>
                        <Select name='programme'>
                            <SelectTrigger className="md:w-[195px] w-full bg-white border-none py-6 text-gray-700">
                                <SelectValue placeholder="Select a Programme" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Programmes</SelectLabel>
                                    <SelectItem value="med">FSC Medical</SelectItem>
                                    <SelectItem value="eng">FSC Engineering</SelectItem>
                                    <SelectItem value="ics">ICS</SelectItem>
                                    <SelectItem value="icom">I.COM</SelectItem>
                                    <SelectItem value="fa">F.A</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </span>
                    <span className='space-y-2'>
                        <label htmlFor="phone" className='text-gray-50 font-bold'>PHONE</label>
                        <Input name='phone' type='text' id='phone' placeholder='Enter Your Phone' className='bg-white border-none pr-24 text-gray-700 hover:border-none py-6' />
                    </span>
                </div>
                <div>
                    <span className='space-y-2'>
                        <label htmlFor="msg" className='text-gray-50 font-bold'>MESSAGE</label>
                        <Textarea name='message' className='bg-white text-gray-700' placeholder='Enter your message' />
                    </span>
                </div>
                <button type='submit'  className='bg-yellow-500 text-gray-50 py-4 px-12 font-bold hover:bg-yellow-700'>Submit Now</button>
            </div>
        </form>
    )
}

export default Form