"use client";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Software Development",
    description: "ailored software solutions designed to meet your unique business needs. From concept to deployment, I specialize in full-stack development, creating responsive and scalable applications that enhance productivity and deliver a seamless user experience..",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description: "Crafting intuitive and visually appealing interfaces that align with user needs. I prioritize usability and aesthetics, creating designs that make interactions smoother, ensuring users enjoy a cohesive and engaging digital journey across devices.",
    href: "",
  },
  {
    num: "03",
    title: "Software Testing",
    description: "Ensuring quality and reliability through comprehensive software testing services. I perform thorough testing, from functionality and performance checks to security and usability assessments, identifying potential issues early to deliver robust software.",
    href: "",
  },
  {
    num: "04",
    title: "DevOps",
    description: "Streamlining software development and operations for faster, more reliable deployments. Using automation, CI/CD practices, and infrastructure as code, I optimize processes to improve efficiency, reduce downtime, and maintain high system availability.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div
                    className="text-5xl font-extrabold text-outline text-transparent
                   group-hover:text-outline-hover transition-all duration-500"
                  >
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white
                     group-hover:bg-accent transition-all duration-500 flex justify-center
                      items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2
                  className="text-[42px] font-bold leading-none text-white
                 group-hover:text-accent transition-all duration-500"
                >
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
