import { Cpu, GraduationCap, Handshake} from "lucide-react";
import * as motion from "motion/react-client";
import { BsRobot } from "react-icons/bs";
import { FaRobot } from "react-icons/fa";
import { GiRobotAntennas, GiRobotGolem, GiRobotGrab, GiRobotLeg } from "react-icons/gi";
import { GrRobot } from "react-icons/gr";
import { SiRobotframework } from "react-icons/si";
import { TbRobot } from "react-icons/tb";
import { VscRobot } from "react-icons/vsc";

export default function WhyChooseUs() {

    const features = [
        {
            icon: Cpu,
            title: "Cutting-Edge Research",
            description: "Work on real-world projects in robotics, AI, and industrial automation that push the boundaries of technology.",
        },
        {
            icon: GraduationCap,
            title: "Expert Mentorship",
            description: "Learn directly from experienced professors and researchers who guide you through every step of your academic and research journey.",
        },
        {
            icon: GiRobotGrab,
            title: "Hands-On Experience",
            description: "Gain practical skills through experiments, prototypes, and collaborative projects in our fully equipped robotics labs.",
        },
        {
            icon: Handshake,
            title: "Collaborative Environment",
            description: "Be part of a diverse team that values teamwork, innovation, and knowledge exchange with industry and academia.",
        },
    ]
  return (
    <section className="py-5 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <motion.h2 
                       initial={{opacity: 0, y:16}} 
                       whileInView={{opacity: 1, y:0}}
                       viewport={{once: true}}
                       transition={{duration: 0.6, ease:"easeOut"}}
                    className="text-4xl md:text5xl font-black font-heading mb-4 text-foreground">
                        Why <span className="text-chart-2">Join</span> Our Lab?
                    </motion.h2>
                    <motion.p 
                       initial={{opacity: 0, y:12}} 
                       whileInView={{opacity: 1, y:0}}
                       viewport={{once: true}}
                       transition={{duration: 0.6, ease:"easeOut", delay: 0.1}}
                    
                    className="text-xl text-muted-foreground max-w-7xl mx-auto">
                        Join a community of innovators shaping the future of robotics, automation, 
                        and intelligent systems through research, creativity, and collaboration.
                    </motion.p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div className="text-center group"
                           key={feature.title}
                           initial={{opacity: 0, y:24}} 
                           whileInView={{opacity: 1, y:0}}
                           viewport={{once: true}}
                           transition={{duration: 0.6, ease:"easeOut", delay: index * 0.12}}
                           whileHover={{scale: 1.03}}
                        >
                            <motion.div className="w-16 h-16 rounded-full bg-chart-2 text-primary-foreground
                              inline-flex text-primary items-center justify-center 
                              group-hover:bg-primary/40  group-hover:text-foreground transition-colors
                              duration-300 mb-6"
                              initial={{scale:0.9, opacity: 0}} 
                              whileInView={{scale:1, opacity: 1}}
                              viewport={{once: true}}
                              transition={{duration: 0.5, ease:"easeOut", delay: index * 0.18}}
                            >
                                <feature.icon className="w-8 h-8" />
                            </motion.div>

                            <motion.h3 className="text-xl fond-bold font-heading mb-4 text-foreground"
                              initial={{opacity: 0, y:8}} 
                              whileInView={{opacity: 1, y:0}}
                              viewport={{once: true}}
                              transition={{duration: 0.5, ease:"easeOut", delay: index * 0.14}}
                            >
                                {feature.title}
                            </motion.h3>
                            <motion.p className="text-shadow-muted-foreground leading-relaxed"
                               initial={{opacity: 0}} 
                               whileInView={{opacity: 1}}
                               viewport={{once: true}}
                               transition={{duration: 0.5, ease:"easeOut", delay: index * 0.14}}
                            >
                                {feature.description}
                            </motion.p>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

  );
}