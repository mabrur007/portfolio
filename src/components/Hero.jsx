import React from 'react'
import img from '../assets/image/pro.png'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import { FcFeedback, FcNews, FcPhoneAndroid } from 'react-icons/fc';
import { FaGithubAlt } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-2 lg:px-0 " id='home'>
            <Card className="w-full mb-10  flex-col lg:flex-row  items-center bg-[url('https://www.imageshine.in/uploads/gallery/Free-vector-hand-painted-watercolor-abstract-watercolor-background.jpg')] bg-cover bg-center">
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="m-0 w-4/5 lg:w-2/5 shrink-0 rounded-r-none flex-1 bg-transparent"
                >
                    <img
                        src={img}
                        alt="hero"
                        className="lg:h-full w-full object-cover"
                    />
                </CardHeader>
                <CardBody className='flex-1'>
                    <Typography variant="h6" color="gray" className="uppercase">
                        hi, i'm
                    </Typography>
                    <Typography color="blue-gray" className="my-4 text-4xl lg:text-5xl font-bold">
                        Mir Md Mabrur
                    </Typography>
                    <Typography color="gray" className="mb-4 font-normal ">
                        Web Developer
                    </Typography>


                    <div className='flex gap-4'>
                        <a href="https://github.com/mabrur007"><p className=' text-4xl'><FaGithubAlt /></p></a>

                        <a href="mailto:mirmd.mabrur@gmail.com"><p className=' text-4xl'><FcFeedback /></p></a>
                        <a href="tel:01999996924"><p className='text-4xl'><FcPhoneAndroid /></p></a>
                    </div>

                    <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/105Lq_mIWS21qq6tLCvfpwP4p6e3dcyEn/view?usp=sharing" download><Button className="flex items-center gap-2 mt-4 bg-black">Download CV <FcNews className="text-xl" /></Button></a>


                </CardBody>
            </Card>
        </div>
    )
}

export default Hero