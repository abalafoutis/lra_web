import * as motion from "motion/react-client";

export default function Programs() {
  return (
    <section className="py-10 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <motion.h2 
                   initial={{opacity: 0, y:16}} 
                   whileInView={{opacity: 1, y:0}}
                   viewport={{once: true}}
                   transition={{duration: 0.6, ease:"easeOut"}}
                className="text-4xl md:text5xl font-black font-heading mb-4 text-foreground">
                    Our Laboratory
                </motion.h2>
                <motion.p 
                   initial={{opacity: 0, y:12}} 
                   whileInView={{opacity: 1, y:0}}
                   viewport={{once: true}}
                   transition={{duration: 0.6, ease:"easeOut", delay: 0.1}}
                
                className="text-xl text-muted-foreground max-w-7xl mx-auto">
                    Part of the Department of Production and Management Engineering 
                    at the Democritus University of Thrace, 
                    the Laboratory of Robotics and Automation 
                    conducts advanced research in robotics and industrial automation. 
                    Focusing on both industrial and service applications, 
                    our work explores robotics, artificial vision, intelligent systems, 
                    and pattern recognition. Embracing the challenges of Industry 4.0, 
                    we integrate these fields with emerging technologies such as IoT,
                     cloud computing, cybersecurity, big data analytics, simulation, 
                     additive manufacturing, and augmented reality.
                </motion.p>
            </div>

            {/* Cards */}



        </div>
    </section>
  );
}