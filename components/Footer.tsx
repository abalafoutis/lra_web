import { Facebook, Github, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary text-neutral-100 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Laboratory */}
                <div className="col-span-1 md:col-span-2 ">
                    <h3 className="text-3xl font-heading mb-4 ">
                        Laboratory of Robotics & Automation
                    </h3>
                    <p className="mb-6 leading-relaxed max-w-md">
                      Democritus University of Thrace <br />
                      Department of Production and Management Engineering
                    </p>
                    <div className="flex space-x-4">
                        <Link href="/" className="w-10 h-10 bg-secondary/40 rounded-full
                        flex items-center justify-center hover:bg-primary
                        transition-colors duration-300">
                           <Facebook className="w-5 h-5" ></Facebook>
                        </Link>

                        <Link href="/" className="w-10 h-10 bg-secondary/40 rounded-full
                        flex items-center justify-center hover:bg-primary
                        transition-colors duration-300">
                           <Instagram className="w-5 h-5" ></Instagram>
                        </Link>

                        <Link href="/" className="w-10 h-10 bg-secondary/40 rounded-full
                        flex items-center justify-center hover:bg-primary
                        transition-colors duration-300">
                           <Linkedin className="w-5 h-5" ></Linkedin>
                        </Link>

                        <Link href="/" className="w-10 h-10 bg-secondary/40 rounded-full
                        flex items-center justify-center hover:bg-primary
                        transition-colors duration-300">
                           <Youtube className="w-5 h-5" ></Youtube>
                        </Link>

                        <Link href="/" className="w-10 h-10 bg-secondary/40 rounded-full
                        flex items-center justify-center hover:bg-primary
                        transition-colors duration-300">
                           <Github className="w-5 h-5" ></Github>
                        </Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="">
                    <h4 className="text-lg font-bold font-heading mb-4">
                        Quick Links
                    </h4>
                    <ul className="space-y-2">
                        {["Home", "Research", "People", "Projects", "Contact"].map(
                            (link) => (
                                <li key={link}>
                                    <Link href="#" className="hover:text-primary transition-colors duration-300">{link}</Link>
                                </li>
                            )
                        )}
                    </ul>
                </div>
                
                {/* Contact Info */}

                <div>
                    <h4 className="text-lg font-bold font-heading mb-4">
                        Contact Info
                    </h4>
                    <div className="space-y-3">
                        <p>
                            <strong>Phone:</strong>
                            <br />
                            (+30) 25410 79359
                        </p>
                        <p>
                            <strong>Email:</strong>
                            <br />
                            agaster@pme.duth.gr
                        </p>
                        <p>
                            <strong>Location:</strong>
                            <br />
                            Vas. Sophias 12, Building Ι
                            <br />
                            Xanthi, GR-671 32
                            <br />
                            Greece
                        </p>
                    </div>
                </div>
            </div>

            <div className="border-t border-secondary/40 pt-20 text-center text-neutral-400">
                <p>
                    Copyright © 2026, Lab of Robotics & Automation. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
  );
}