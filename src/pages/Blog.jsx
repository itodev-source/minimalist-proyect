import React, {useEffect} from "react";
import PortfolioItem from "../components/PortfolioItem";
import Title from "../components/Title";
import blog from "../data/blog";

import Footer from '../components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Blog = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="pt-20" >
      <div className="flex flex-col md:flex-row justify-center mx-3 ">
        <div className="w-full md:w-7/12">
          <Title>Blog</Title>
          <div className="flex flex-col mx-auto">
            <div className="flex justify-center items-center">
              <div className="flex flex-col w-full" data-aos="fade-up" data-aos-duration="2300">
              <div className="text-sm bg-[#f5efe8] text-center p-3 rounded-md dark:bg-[#313133]">
              This is my garden of knowledge.
              </div>
                <div className="pt-7 grid grid-cols-1 md:grid-cols-2 gap-4" >
                
                  {blog.map((project) => (
                    <PortfolioItem $ {...project} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
