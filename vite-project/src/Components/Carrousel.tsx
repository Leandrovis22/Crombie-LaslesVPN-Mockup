import React, { CSSProperties, Component, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles.css";

import { useEffect, useState } from "react";
import { useTheme } from "./theme-context";



type Testimonial = {
    avatar: string;
    fullName: string;
    testimonial: string;
};

const Carrousel = () => {

    const { theme } = useTheme();

    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();

    const [slidesToShow, setSlidesToShow] = useState(3);


    const slider = useRef<Slider>(null);

    const next = () => {
        if (slider.current) {
            slider.current.slickNext();
        }
    };

    const previous = () => {
        if (slider.current) {
            slider.current.slickPrev();
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1074) {
                setSlidesToShow(1);
            } else {
                setSlidesToShow(3);
            }
        };

        // Run it once on mount
        handleResize();

        // Add it to the resize event
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    useEffect(() => {
        setLoading(true);
        fetch(`https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com/api/testimonial`)
            .then((response) => {
                response.json().then((result) => {
                    setTestimonials(result);
                });
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <p className="text-5xl">Loading...</p>
        </div>;
    }

    if (error) {
        return <p>{error}</p>;
    }





    return (
        <div className={` ${ theme === "dark" ? "" : "bg-[#151515] text-white"}`}>

            <h2 className="pt-[5%] font-semibold w-auto text-center text-4xl mx-auto">Trusted by Thousands of Happy Customers</h2>
            <p className="mx-auto w-auto text-center pt-9">These are the stories of our customers who have joined us with great pleasure when using these crazy features.</p>


            <div className=" pb-[10%] ml-20 mr-20 ">
                <Slider
                    dots={true}
                    ref={slider}
                    infinite={true}
                    slidesToShow={slidesToShow}
                    slidesToScroll={1}
                    centerMode={false}
                    arrows={false}

                >
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.fullName}
                            className={`${slidesToShow === 1 ? '' : 'max-w-3xl'
                                } space-x-6 h-[400px] flex items-center my-custom-class`}
                        >
                            <div className={`flex flex-col py-6 px-8  rounded-lg shadow-lg ml-3 mr-3 h-[246px] mx-auto text-gray-700 ${theme === "dark" ? "bg-white" : "text-white bg-[#471d2c]"}`}>
                                <div className="mb-5">
                                    <img src={testimonial.avatar} className="rounded-full w-14 h-14" alt="Avatar" style={{ display: "inline-block" }} />
                                    <p className="inline ml-3 mb-2">{testimonial.fullName}</p>
                                </div>
                                <p className={`text-[#5E6282] ${theme === "dark" ? "" : "text-white bg-[#471d2c]"}`}>{testimonial.testimonial}</p>
                            </div>
                        </div>
                    ))}
                </Slider>

                <div className=" flex justify-end text-[64px]  inline-block relative top-[-52px]">
                    
                    <button className="antes pl-[5px] pr-[5px]  mr-[12px] bg-red-300 rounded-full" onClick={previous}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                            <style>{`svg{fill:#ff4444}`}</style>
                            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                        </svg>
                    </button>
                    <button className="despues pl-[5px] pr-[5px] bg-red-300 rounded-full" onClick={next}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                        </svg>
                    </button>
                </div>


            </div>
        </div>
    );


};

export default Carrousel;
