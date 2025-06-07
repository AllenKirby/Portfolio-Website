import { useState, useEffect } from "react";

import { IoIosSend } from "react-icons/io";
import { FaFacebook, FaLinkedin, FaWhatsappSquare, FaRegClock } from "react-icons/fa";

import { useSendEmail } from "../hook/hook";
import type { EmailType } from '../type/type'

import { MessageDialog } from '../components'

interface MessageDialogState {
    title: string;
    status: 'success' | 'error' | 'warning' | 'info' | '';
    message: string;
}

const COOLDOWN_DURATION = 180;
const COOLDOWN_KEY = 'emailCooldownEndTime';

const Contact = () => {
    const [data, setData] = useState<EmailType>({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [errorFlag, setErrorFlag] = useState<boolean>(false);
    const [isMessageDialogOpen, setIsMessageDialogOpen] = useState<boolean>(false)
    const [messageData, setMessageData] = useState<MessageDialogState>({title: '', status: '', message: '',})
    const [isCooldown, setIsCooldown] = useState<boolean>(false);
    const [cooldownTime, setCooldownTime] = useState<number>(0);

    useEffect(() => {
        const savedEndTime = localStorage.getItem(COOLDOWN_KEY);
        if (savedEndTime) {
        const remaining = Math.floor((+savedEndTime - Date.now()) / 1000);
        if (remaining > 0) {
            setIsCooldown(true);
            setCooldownTime(remaining);
        } else {
            localStorage.removeItem(COOLDOWN_KEY);
        }
        }
    }, []);

    useEffect(() => {
        let timer: number;
        if (isCooldown && cooldownTime > 0) {
        timer = setInterval(() => {
            setCooldownTime((prev) => {
            if (prev <= 1) {
                clearInterval(timer);
                setIsCooldown(false);
                localStorage.removeItem(COOLDOWN_KEY);
                return 0;
            }
            return prev - 1;
            });
        }, 1000);
        }
        return () => clearInterval(timer);
    }, [isCooldown, cooldownTime]);

    const onSuccess = () => {
        setMessageData({
        title: 'Email has been sent!',
        status: 'success',
        message: "Please wait a moment for a response — I'll get back to you as soon as possible.",
        });
        setIsMessageDialogOpen(true);
        setTimeout(() => setIsMessageDialogOpen(false), 3000);
    };

    const onError = (error: unknown) => {
        setMessageData({
        title: 'An Error Occurred!',
        status: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong.',
        });
        setIsMessageDialogOpen(true);
        setTimeout(() => setIsMessageDialogOpen(false), 3000);
    };

    const isRequestSuccess = () => {
        setData({
            name: '',
            email: '',
            subject: '',
            message: ''
        })
        const endTime = Date.now() + COOLDOWN_DURATION * 1000;
        localStorage.setItem(COOLDOWN_KEY, endTime.toString());

        setIsCooldown(true);
        setCooldownTime(COOLDOWN_DURATION);
    }

    const { mutate: sendEmail, status } = useSendEmail(onSuccess, onError, isRequestSuccess);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(Object.values(data).every(value => value.trim() !== '')) {
            setErrorFlag(false);
            sendEmail(data);
        } else {
            setErrorFlag(true)
        }
    }

  return (
    <section id="contact" className="w-full h-screen flex flex-col lg:flex-row items-center justify-center">
        <section className="w-full lg:w-1/2 h-fit lg:h-full p-10 flex items-center justify-center">
            <main className="flex flex-col items-center lg:items-start justify-center">
                <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-secondary to-white bg-clip-text text-transparent">Contact Me</h1>
                <p className="text-lg text-white mb-6">
                    If you have any questions or concerns, feel free to reach out anytime!
                </p>
                <div className='flex items-center justify-start gap-3'>
                    <a href="https://www.facebook.com/allenkirby.santileces" target='_blank'>
                        <FaFacebook size={25} className='text-white'/>
                    </a>
                    <a href="https://www.linkedin.com/in/santileces-allen-kirby-49aa88303/" target='_blank'>
                        <FaLinkedin size={25} className='text-white'/>
                    </a>
                    <a href="https://wa.me/639633402907" target='_blank'>
                        <FaWhatsappSquare size={25} className='text-white'/>
                    </a>
                </div>
            </main>
        </section>
        <div className="w-full lg:w-1/2 h-fit lg:h-full flex items-start lg:items-center justify-center ">
            <form onSubmit={handleSubmit} className="w-5/6 h-fit flex flex-col gap-4 p-10 rounded-md border border-white text-white">
                <h1 className="text-4xl text-secondary">Get in Touch</h1>
                <div className="w-full flex flex-row justify-center items-center gap-4">
                    <div className="w-1/2 flex flex-col">
                        <label htmlFor="name" className="text-sm">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            placeholder="Your Name"
                            value={data.name}
                            onChange={(e) => setData({ ...data, name: e.target.value })}
                            className={`border ${data.name === '' && errorFlag ? 'border-red-500' : 'border-gray-200'} w-full p-2 rounded-md border placeholder:text-sm`}/>
                        {data.name === '' && errorFlag && (
                            <span className="text-red-500 text-xs my-1">Name is required</span>
                        )}
                    </div>
                    <div className="w-1/2 flex flex-col">
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            value={data.email}
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                            placeholder="Your Email"
                            className={`border ${data.email === '' && errorFlag ? 'border-red-500' : 'border-gray-200'} w-full p-2 rounded-md border placeholder:text-sm`}/>
                        {data.email === '' && errorFlag && (
                            <span className="text-red-500 text-xs my-1">Email is required</span>
                        )}
                    </div>
                </div>
                <div className="w-full flex flex-col">
                    <label htmlFor="subject" className="text-sm">Subject</label>
                    <input 
                        type="text" 
                        id="subject" 
                        placeholder="What's the email about?"
                        value={data.subject}
                        onChange={(e) => setData({ ...data, subject: e.target.value })}
                        className={`border ${data.subject === '' && errorFlag ? 'border-red-500' : 'border-gray-200'} w-full p-2 rounded-md border placeholder:text-sm`}/>
                    {data.subject === '' && errorFlag && (
                        <span className="text-red-500 text-xs my-1">Subject is required</span>
                    )}
                </div>
                <div className="w-full flex flex-col">
                    <label htmlFor="message" className="text-sm">Message</label>
                    <textarea 
                        id="message" 
                        placeholder="Type your message here..."
                        value={data.message}
                        onChange={(e) => setData({ ...data, message: e.target.value })}
                        className={`border ${data.message === '' && errorFlag ? 'border-red-500' : 'border-gray-200'} w-full p-2 rounded-md border resize-none placeholder:text-sm`}/>
                    {data.message === '' && errorFlag && (
                        <span className="text-red-500 text-xs my-1">Message is required</span>
                    )}
                </div>
                <div className="w-full">
                    <button 
                        disabled={status === 'pending' || isCooldown}
                        type="submit" 
                        className={`${status === 'pending' || isCooldown 
                            ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                            : 'bg-secondary hover:bg-white text-white hover:text-secondary'} 
                            px-5 py-3 text-sm rounded-md flex items-center justify-center gap-2 transition duration-300`}>
                        {isCooldown ? 
                            <>
                            <FaRegClock size={20}/> 
                            Wait {cooldownTime}s 
                            </> : 
                            <>
                            <IoIosSend size={20}/> 
                            Send Message
                            </>
                        }
                    </button>
                </div>
            </form>
        </div>
        {isMessageDialogOpen && (
            <MessageDialog status={messageData.status} title={messageData.title} message={messageData.message}/>
        )}
    </section>
  )
}

export default Contact