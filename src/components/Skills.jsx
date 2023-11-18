import {
    Button,
    Card,
    CardBody,
    Chip,
    Timeline,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineItem,
    Typography

} from "@material-tailwind/react";
import img1 from '../assets/image/logos/1.png'
import img2 from '../assets/image/logos/2.png'
import img3 from '../assets/image/logos/3.png'
import img4 from '../assets/image/logos/4.png'
import img5 from '../assets/image/logos/5.png'
import img6 from '../assets/image/logos/6.png'
import img7 from '../assets/image/logos/7.png'
import img8 from '../assets/image/logos/8.jpg'
import img9 from '../assets/image/logos/9.png'
import img10 from '../assets/image/logos/10.webp'
import img11 from '../assets/image/logos/11.png'
import img12 from '../assets/image/logos/12.png'
import img13 from '../assets/image/logos/13.png'
import img14 from '../assets/image/logos/14.webp'
import img15 from '../assets/image/logos/15.png'
import img16 from '../assets/image/logos/16.png'
import img17 from '../assets/image/logos/17.png'
import img18 from '../assets/image/logos/18.png'
import img19 from '../assets/image/logos/19.svg'
import img20 from '../assets/image/logos/20.svg'

const allData = [
    
    {
        id: 18,
        img: img18,
        name: "WordPress"
    },
    {
        id: 2,
        img: img2,
        name: "HTML5"
    },
    {
        id: 3,
        img: img3,
        name: "CSS3"
    },
    {
        id: 1,
        img: img1,
        name: "Figma"
    },
    {
        id: 4,
        img: img4,
        name: "Bootstrap"
    },
    {
        id: 5,
        img: img5,
        name: "TailwindCSS"
    },
    {
        id: 16,
        img: img16,
        name: "MaterialUI",
    },
    {
        id: 6,
        img: img6,
        name: "JavaScript"
    },
    {
        id: 7,
        img: img7,
        name: "React JS"
    },
    // {
    //     id: 8,
    //     img: img8,
    //     name: "React Bootstrap"
    // },
    {
        id: 15,
        img: img15,
        name: 'Next JS'
    },
    {
        id: 9,
        img: img9,
        name: "Git"
    },
    {
        id: 17,
        img: img17,
        name: "Github"
    },
    {
        id: 10,
        img: img10,
        name: "Firebase"
    },
    // {
    //     id: 11,
    //     img: img11,
    //     name: "Redux"
    // },
    // {
    //     id: 12,
    //     img: img12,
    //     name: 'Node JS'
    // },
    // {
    //     id: 13,
    //     img: img13,
    //     name: 'Express JS',
    // },
    // {
    //     id: 14,
    //     img: img14,
    //     name: 'MongoDB'
    // },
    
    {
        id: 19,
        img: img19,
        name: 'AWS'
    },
    {
        id: 20,
        img: img20,
        name: 'Hosting'
    },

]

const jobData = [
    {
        id: 1,
        position: "Software Engineer",
        company: "Horizon Rising Star",
        time: "October, 2022 - Present"
    },
    {
        id: 2,
        position: "DIGITAL Marketing Executive",
        company: "Optimus Click",
        time: "July, 2022 - September, 2022"
    },
    {
        id: 3,
        position: "Senior Technology Officer",
        company: "Mechanic Koi",
        time: "May, 2021 - October, 2021"
    },
]
export default function Skills() {
    return (
        <div className="max-w-screen-xl mx-auto px-2 lg:px-0 mt-10" id='skills'>
            <div className='max-w-min mb-3 '>
                <Chip
                    variant="ghost"
                    color="blue"
                    size="sm"
                    className="font tracking-wider "
                    value="Skills & Experiences"
                    icon={
                        <span className="mx-auto mt-1  block h-2 w-2 rounded-full bg-blue-900 content-[''] " />
                    }
                />
            </div>

            <Card className="bg-gradient-to-r from-cyan-50 to-blue-100">
                <CardBody >
                    <Typography className="lg-max:text-center  mb-4 lg:mb-2 text-black">My Technical Presence</Typography>
                    <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 items-center" >

                        <div className="flex-1">

                            <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
                                {
                                    allData.map(data => {
                                        return (
                                            <div className="flex flex-col items-center gap-1">
                                                <div className="transition   ease-in-out rounded-2xl bg-[#fef4f5] shadow-sm hover:scale-[1.05] hover:shadow-white">
                                                    <img className="w-14 h-14  mx-auto p-2" src={data.img} alt="" />

                                                </div>
                                                <div>
                                                    <p className="text-xs">{data.name}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="flex-1">
                            {
                                jobData.map(job => {
                                    return (
                                        <div>
                                            <Timeline>
                                                <TimelineItem className="lg:h-32 h-40">
                                                    <TimelineHeader className="relative transition  ease-in-out rounded-2xl  hover:scale-[1.03] bg-[#fef4f5] py-3 pl-4 pr-8 shadow-md hover:shadow-white">

                                                        <div className="flex flex-col gap-1 ">
                                                            <Typography className="text-2xl text-orange-900 h-16 lg:h-9" color="blue-gray">
                                                                {job.position}
                                                            </Typography>
                                                            <Typography className="text-blue-900">
                                                                {job.company}
                                                            </Typography>
                                                            <Typography variant="small" color="gray" className="font-normal">
                                                                {job.time}
                                                            </Typography>
                                                        </div>
                                                    </TimelineHeader>
                                                </TimelineItem>
                                            </Timeline>
                                        </div>
                                    )
                                })

                            }
                        </div>
                    </div>


                </CardBody>
            </Card>

        </div>
    );
}