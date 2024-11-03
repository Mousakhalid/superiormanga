'use client'
import React from 'react'

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
        <div className='bg-gray-100'>
            <form onSubmit={onSubmit} className='md:px-32 px-8 space-y-8 py-8'>
                <div className='flex items-start justify-center gap-8 md:flex-row flex-col'>
                    <div className='flex flex-col  space-y-2'>
                        <label htmlFor="name" className='text-[16px] font-bold'>Full Name <span className='text-red-700'>*</span></label>
                        <input name='name' type="text" id='name' placeholder='Enter full name' className='border-none pl-4 py-2 pr-32' />
                    </div>
                    <div className='flex flex-col  space-y-2'>
                        <label htmlFor="gender" className='text-[16px] font-bold'>Gender <span className='text-red-700'>*</span></label>
                        <select name="gender" id="gender" className='border-none pl-4 py-2 pr-64'>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                </div>
                <div className='flex items-start justify-center gap-8 md:flex-row flex-col'>
                    <div className='flex flex-col  space-y-2'>
                        <label htmlFor="phone" className='text-[16px] font-bold'>Phone <span className='text-red-700'>*</span></label>
                        <input name='phone' type="text" id='phone' placeholder='Enter phone number' className='border-none pl-4 py-2 pr-32' />
                    </div>
                    <div className='flex flex-col  space-y-2'>
                        <label htmlFor="email" className='text-[16px] font-bold'>Email <span className='text-red-700'>*</span></label>
                        <input name='email' type="email" id='email' placeholder='Enter your email' className='border-none pl-4 py-2 pr-32' />
                    </div>
                </div>
                <div className='flex items-start justify-center gap-8 md:flex-row flex-col'>
                    <div className='flex flex-col  space-y-2'>
                        <label htmlFor="programme" className='text-[16px] font-bold'>Select Programme <span className='text-red-700'>*</span></label>
                        <select name="programme" id="programme" className='border-none pl-4 py-2 pr-20'>
                            <option value="med">FSC Medical</option>
                            <option value="eng">FSC Engineering</option>
                            <option value="ics">ICS</option>
                            <option value="icom">I.COM</option>
                            <option value="fa">F.A.</option>
                            <option value="electrical">DAE Electrical Technology</option>
                            <option value="office">Diploma in Office Management</option>
                            <option value="chemical">Chemical Technology</option>
                        </select>
                    </div>
                    <div className='flex flex-col  space-y-2'>
                        <label htmlFor="address" className='text-[16px] font-bold'>Your Address <span className='text-red-700'>*</span></label>
                        <input name='address' type="text" id='address' placeholder='Enter your address' className='border-none pl-4 py-2 pr-32' />
                    </div>

                </div>
                <div className='flex items-start justify-center gap-8 md:flex-row flex-col'>
                    <button type='submit' className='py-3 px-9 bg-[#0C7E81] text-gray-50'>Submit Now</button>
                    <div></div>
                </div>
            </form>
        </div>
    )
}

export default Form