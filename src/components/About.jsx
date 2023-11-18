import {
    Button,
    Chip,
    Typography

} from "@material-tailwind/react";
import img from '../assets/image/com.jpg'
import { FcCheckmark, FcIdea, FcNews, FcSupport } from "react-icons/fc";

export default function About() {
    return (
        <div className="max-w-screen-xl mx-auto px-2 lg:px-0" id="about">
            <div className='max-w-min mb-3 '>
                <Chip
                    variant="ghost"
                    color="blue"
                    size="sm"
                    className="font tracking-wider"
                    value="about me"
                    icon={
                        <span className="mx-auto mt-1  block h-2 w-2 rounded-full bg-blue-900 content-[''] " />
                    }
                />
            </div>

            <figure className="relative h-full w-full ">
                <img
                    className="rounded-xl object-cover h-[650px] lg:h-[850px]"
                    src={img}
                    alt="about"
                />
                {/* h-[1050px] lg:h-[1100px] w-full rounded-xl object-cover object-left lg:object-top */}
                <figcaption className="absolute bottom-8 left-2/4  flex w-full lg:w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-2  lg:px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                    <div className="">
                        <div className="flex gap-3 justify-center lg:justify-start">
                            <div className="h-24 w-24 lg:h-36 lg:w-36 border border-orange-600 hover:border-none p-1 lg:p-4 rounded-xl flex flex-col items-center hover:bg-orange-900 hover:text-gray-300">
                                <Typography><FcIdea className="text-3xl" /> </Typography>
                                <Typography className="my-2 font-bold">
                                    Experience
                                </Typography>
                                <Typography className="text-xs">2.5+ Years </Typography>
                            </div>
                            <div className="h-24 w-24 lg:h-36 lg:w-36 border border-orange-600 hover:border-none p-1 lg:p-4 rounded-xl flex flex-col items-center hover:bg-orange-900 hover:text-gray-300">
                                <Typography><FcCheckmark className="text-3xl" /> </Typography>
                                <Typography className="my-2 font-bold">
                                    Completed
                                </Typography>
                                <Typography className="text-sm">20+ Projects</Typography>
                            </div>
                            <div className="h-24 w-24 lg:h-36 lg:w-36 border border-orange-600 hover:border-none p-1 lg:p-4 rounded-xl flex flex-col items-center hover:bg-orange-900 hover:text-gray-300">
                                <Typography><FcSupport className="text-3xl" /> </Typography>
                                <Typography className="my-2 font-bold">
                                    Support
                                </Typography>
                                <Typography className="text-sm">Online 24/7</Typography>
                            </div>

                        </div>
                        <Typography color="gray" className="my-2 text-xs md:text-sm lg:text-base font-normal text-justify  mx-auto">
                            Hello, I am Mir Md Mabrur, and I am a Front End web developer with a passion for programming. I have completed my B.Sc in Electronics and Communications Engineering (ECE) at East West University.

                            I am passionate about continuous learning and have completed sevarel courses on different online and offline platforms.

                            In my free time, I enjoy building personal projects, and exploring new technologies. I am passionate about staying up-to-date with the latest trends and advancements in the field of web development and continuously strive to improve my skills and knowledge.

                            As a highly motivated, detail-oriented, and dedicated individual, I am committed to delivering quality work within tight deadlines and continuously improving my skills. I possess excellent communication skills and enjoy working collaboratively with teams to deliver innovative solutions that meet the needs of users.

                            Overall, I am confident that my skills, experience, combined with my technical skills, and strong work ethics, make me an ideal candidate for any web development role. I am excited about the opportunities that lie ahead and look forward to making valuable contributions to any team.
                        </Typography>
                        <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/105Lq_mIWS21qq6tLCvfpwP4p6e3dcyEn/view?usp=sharing" download><Button className="flex items-center gap-2 bg-black">Download CV <FcNews className="text-xl" /></Button></a>
                    </div>

                </figcaption>
            </figure>
        </div>
    );
}