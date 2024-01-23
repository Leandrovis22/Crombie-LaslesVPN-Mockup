import { useRef } from "react";
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
    const [error] = useState<string>();

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

    const mockData = [
        {
          avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJZdEC6o79btjdK0J_R1mdbszkfzMEik69vg&usqp=CAU",
          fullName: "Jane Doe",
          testimonial: "LaslesVPN has been a lifesaver for me. The level of privacy and security it provides is outstanding. I can confidently browse the internet knowing my data is safe. The user interface is intuitive, and the connection speed is impressive."
        },
        {
          avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUg-qZUuBAT_YKawZBSoPBy1tCf7nIhIqH4A&usqp=CAU",
          fullName: "John Smith",
          testimonial: "LaslesVPN has changed the way I browse the internet. The speed and security are unmatched!"
        },
        {
          avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjRYzlvKfCid5If-20iWflYAnkz2BWtlGDYw&usqp=CAU",
          fullName: "Maria Rodriguez",
          testimonial: "I've tried many VPNs, but LaslesVPN stands out with its user-friendly interface and extensive server network."
        },
        {
          avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6lopk6hkd2zUFKS5zRyoJ6oVOMlAWlPDcUg&usqp=CAU",
          fullName: "David Chang",
          testimonial: "As a frequent traveler, LaslesVPN ensures my connection is always secure, no matter where I am in the world."
        },
        {
          avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbIhi9l4npCGPNWMAc6szDbxp75kjB3c0R5w&usqp=CAU",
          fullName: "Emily Johnson",
          testimonial: "LaslesVPN's customer support is top-notch. They were quick to assist me with any questions I had."
        },
        {
          avatar: "data:image/jpeg;base64,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",
          fullName: "Michael Brown",
          testimonial: "I can now access geo-restricted content effortlessly thanks to LaslesVPN. It's a game-changer!"
        }
      ];
      

    useEffect(() => {
        setLoading(true);
        // fetch(`https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com/api/testimonial`)
        //     .then((response) => {
        //         response.json().then((result) => {
        //             setTestimonials(result);
        //         });
        //     })
        //     .catch((error) => {
        //         setError(error.message);
        //     })
        //     .finally(() => {
        //         setLoading(false);
        //     });

        setTestimonials(mockData);

        setLoading(false);
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
