import React from "react";
import { motion } from "framer-motion"
const Card = () => {
  return (
    <>
      <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <SingleCard
              image="https://i.ibb.co/r2zns1m/image-01.jpg"
              CardTitle="50+ Best creative website themes & templates"
              titleHref="/sidebar"
              btnHref="/sidebar"
              CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
              Button="View Details"
            />
            <SingleCard
              image="https://i.ibb.co/0nbbWM9/image-02-1.jpg"
              CardTitle="Creative Card Component designs graphic elements"
              CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
              Button="View Details"
            />
            <SingleCard
              image="https://i.ibb.co/dL9fH7N/image-03-1.jpg"
              CardTitle="The ultimate UX and UI guide to card design"
              CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
              Button="View Details"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;

const SingleCard = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
}) => {
  return (
    <>
    <motion.div
    whileHover={{scale: 1.5}}
    whileTap={{ scale: 0.8}}
    animate={{
      scale: [1, 1.1, 1.1, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    
    >
      <div className="mb-10 overflow-hidden bg-white rounded-2xl shadow-1 duration-500 hover:shadow-md hover:opacity-90 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-md dark:hover:opacity-90 w-2/3 ">
        <div className="relative">
          <img src={image} alt="" className="w-full rounded-lg" />
          <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
            <h3>
              <a
                href={titleHref ? titleHref : "/#"}
                className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
              >
                {CardTitle}
              </a>
            </h3>
            <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
              {CardDescription}
            </p>
            {Button && (
              <a
                href={btnHref ? btnHref : "#"}
                className="inline-block rounded-full font-medium text-center py-2 px-5 text-sm leading-5 transition-all hover:text-white dark:hover:text-white 
                  bg-gradient-to-r from-cyan-500 to-teal-500 shadow-md hover:shadow-none hover:translate-y-1 duration-300 dark:bg-gradient-to-r from-dark-teal to-teal-600"
              >
                {Button}
              </a>
            )}
          </div>
        </div>
      </div>
      </motion.div>
    </>
  );
};
