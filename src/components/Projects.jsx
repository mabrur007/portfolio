import React, { useState } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Collapse,
    Chip
} from "@material-tailwind/react";
import { FaGithub, FaGlobe } from "react-icons/fa";

import one from "../assets/image/pro_img/1.png";
import two from "../assets/image/pro_img/2.png";
import three from "../assets/image/pro_img/3.png";
import four from "../assets/image/pro_img/4.png";
import five from "../assets/image/pro_img/5.png";
import six from "../assets/image/pro_img/6.png";
import seven from "../assets/image/pro_img/7.png";
import { FcBinoculars } from 'react-icons/fc';


const ProjectsData = [
    {
        id: 0,
        img: one,
        name: "Bachelor Point Ecommerce",
        title:
            "This is an ecommerce project based on React js",
        tech: [
            {
                t: "ReactJS"
            },
            {
                t: "tailwindCSS"
            },
            {
                t: "Material tailwind"
            },
            {
                t: "React Icons"
            },
        ],
        live: "https://mabrur-bp-ecom-react.netlify.app/",
        github: "https://github.com/mabrur007/bp-ecommerce",
    },
    {
        id: 1,
        img: two,
        name: "Nike Shoe",
        title:
            "A modern and slick website for nike shoes, fully responsive for almost all devices.",
        tech: [
            {
                t: "Reactjs"
            },
            {
                t: "tailwindCSS"
            },
            {
                t: "Css"
            },
            {
                t: "React Icons"
            },
            
        ],
        live: "https://mabrur-nike-react.netlify.app/",
        github: "https://github.com/mabrur007/nike-tailwind",
    },

    {
        id: 2,
        img: three,
        name: "Visa Master",
        tech: [
            {
                t: "ReactJS"
            },
            {
                t: "css3"
            },
            {
                t: "Bootstrap"
            },
            {
                t: "Firebase"
            },
        ],

        title: "This is a visa consultancy website. Login and register functionality is added here.",

        live: "https://visa-master-8222c.web.app/",
        github: "https://github.com/mabrur007/visa-master",
    },


];

const allData = [
    {
        id: 3,
        img: four,
        name: "Drone Buddy",
        title: "This is a simple single product website. Customer review and product details added.",
        tech: [
            {
                t: "ReactJS"
            },
            {
                t: "css3"
            },
            {
                t: "React charts"
            },
           
        ],
        live: "https://mabrur-drone-buddy.netlify.app/home",
        github: "https://github.com/mabrur007/drone-buddy",
    },
    {
        id: 4,
        img: five,
        name: "Next Gear",
        tech: [
            {
                t: "html5"
            },
            {
                t: "css3"
            },
            {
                t: "js"
            },
            {
                t: "Jason"
            },
          
        ],
     
        title: "Next gear is a bike shop website.",

        live: "https://next-gear-bike-shop.netlify.app/",
        github: "",
    },
    {
        id: 5,
        img: six,
        name: "Karate school",
        tech: [
            {
                t: "WordPress"
            },
            {
                t: "Elementor"
            },
            {
                t: "GravityForms"
            },
          
        ],
     
        title: "A website for an karate academy",

        live: "https://karateschool.se/",
        github: "",
    },
    {
        id: 6,
        img: seven,
        name: "Client's Protfolio",
        tech: [
            {
                t: "WordPress"
            },
            {
                t: "Elementor"
            },
            {
                t: "contact form 7"
            },
          
        ],
     
        title: "This website was made for Christopher who is a Psycologist.",

        live: "https://www.christophertrier.dk/",
        github: "",
    },
    

]



const Projects = () => {
    const [open, setOpen] = useState(false);
    const [isButtonHidden, setIsButtonHidden] = useState(false);


    const toggleOpen = () => {
        setOpen((cur) => !cur)
        setIsButtonHidden(true);

    };
    return (
        <div id='projects'>
            <div className="max-w-screen-xl mx-auto px-2 lg:px-0 mt-10">

                <div className='max-w-min mb-3 '>
                    <Chip
                        variant="ghost"
                        color="blue"
                        size="sm"
                        className="font tracking-wider"
                        value="projects"
                        icon={
                            <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-blue-900 content-[''] " />
                        }
                    />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                    {
                        ProjectsData.map(data => {
                            return (
                                <div className='mx-auto'>
                                    <Card className="mt-6 w-88 group">
                                        <CardHeader color="blue-gray" className="relative h-56">
                                            <img
                                                src={data.img}
                                                alt={data.name}
                                                className='object-cover w-full h-full group-hover:scale-110 transition-all'
                                            />
                                        </CardHeader>
                                        <CardBody>
                                            <Typography variant="h5" color="blue-gray" className=" h-16">
                                                {data.name}
                                            </Typography>
                                            <Typography className='h-20'>
                                                {data.title}
                                            </Typography>
                                            <div className='grid grid-cols-2 gap-2'>
                                                {
                                                    data.tech.map((d, idx) => {
                                                        return (
                                                            <div key={idx} className=''>
                                                                <Chip
                                                                    variant="ghost"
                                                                    color="blue"
                                                                    size="sm"
                                                                    className="font tracking-wider flex justify-center items-center h-full w-full"
                                                                    value={d.t}

                                                                />
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </CardBody>
                                        <CardFooter className="pt-0 ">
                                            <div className='flex items-center justify-center gap-3'>
                                                <a target='_blank' rel='noreferrer' href={data.github}><Button className='p-1 bg-black'><FaGithub className='text-4xl' /> </Button></a>
                                                <a target='_blank' rel='noreferrer' href={data.live}><Button className='p-1 bg-black'><FaGlobe className='text-4xl' /> </Button></a>
                                            </div>

                                        </CardFooter>

                                    </Card>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='flex justify-center mt-4'>
                    {!isButtonHidden ? (
                        <Button
                            onClick={toggleOpen}
                            className="bg-black flex items-center gap-2"
                        >
                            show all <FcBinoculars className='text-xl' />
                        </Button>
                    ) : null}
                </div>
                <div>

                    <Collapse open={open} className='mb-10'>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                    {
                        allData.map(data => {
                            return (
                                <div className='mx-auto'>
                                    <Card className="mt-6 w-88 group">
                                        <CardHeader color="blue-gray" className="relative h-56">
                                            <img
                                                src={data.img}
                                                alt={ data.name }
                                                className='object-cover w-full h-full group-hover:scale-110 transition-all'
                                            />
                                        </CardHeader>
                                        <CardBody>
                                            <Typography variant="h5" color="blue-gray" className=" h-16">
                                                {data.name}
                                            </Typography>
                                            <Typography className='h-20'>
                                                {data.title}
                                            </Typography>
                                            <div className='grid grid-cols-2 gap-2'>
                                                {
                                                    data.tech.map((d, idx) => {
                                                        return (
                                                            <div key={idx} className=''>
                                                                <Chip
                                                                    variant="ghost"
                                                                    color="blue"
                                                                    size="sm"
                                                                    className="font tracking-wider flex justify-center items-center h-full w-full"
                                                                    value={d.t}

                                                                />
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </CardBody>
                                        <CardFooter className="pt-0 ">
                                            <div className='flex items-center justify-center gap-3'>
                                                {data.github && (
                                                    <a target='_blank' rel='noreferrer' href={data.github}><Button className='p-1 bg-black'><FaGithub className='text-4xl' /> </Button></a>
                                                )}
                                                <a target='_blank' rel='noreferrer' href={data.live}><Button className='p-1 bg-black'><FaGlobe className='text-4xl' /> </Button></a>
                                            </div>

                                        </CardFooter>

                                    </Card>
                                </div>
                            )
                        })
                    }
                </div>
                    </Collapse>
                </div>

            </div>
        </div>
    )
}

export default Projects