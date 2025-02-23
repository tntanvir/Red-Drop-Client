
import { useEffect, useState, useRef } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import '../index.css';


const settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 990,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                centerMode: false,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
            },
        },
    ],
};

const SlideReviews = () => {
    const [reviews, setReviews] = useState([]);
    const arrowRef = useRef(null);

    useEffect(() => {
        fetch("https://red-drop-django.vercel.app/reviews/data/")
            .then((res) => res.json())
            .then((data) => setReviews(data))
            .catch((err) => console.error("Error fetching reviews:", err));
    }, []);


    const textSlice = (text) => {
        if (text.length > 50) {
            return text.slice(0, 50) + "..."
        }
        return text;
    }

    return (
        <section className="min-h-screen flex flex-col justify-center items-center px-4 ">
            <div className="mb-10 text-center">
                <h1 className="text-3xl">Tastimonials</h1>
                <p className="text-sm text-gray-500">What our users are say about us</p>
            </div>
            <div className="w-full relative">
                <div className="w-full absolute top-1/2 transform -translate-y-1/2 flex justify-between px-4 z-30 ">
                    <button
                        className="text-xl md:text-3xl bg-gray-800/50 hover:text-gray-300 text-white rounded-full p-2"
                        onClick={() => arrowRef.current?.slickPrev()}
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        className="text-xl md:text-3xl bg-gray-800/50 hover:text-gray-300 text-white rounded-full p-2"
                        onClick={() => arrowRef.current?.slickNext()}
                    >
                        <FaChevronRight />
                    </button>
                </div>


                <Slider ref={arrowRef} {...settings}>
                    {reviews.map((review) => (
                        <div key={review.id} className="p-1 ">

                            <div className="bg-gray-100/80 shadow-sm  rounded-lg p-6 flex flex-col items-center text-center max-w-md mx-auto gridbg h-72">
                                <img
                                    src={review?.user?.moreinfo?.image}
                                    alt={review?.user?.moreinfo?.image}
                                    className="w-24 h-24 rounded-full mb-4 border-4 border-gray-300"
                                />
                                <h3 className="text-xl font-semibold">{review?.user?.moreinfo?.name}</h3>
                                <p className="text-md text-gray-600">{review?.user?.moreinfo?.location}</p>

                                <p className="text-gray-700 mt-3 text-lg">{textSlice(review?.text)}</p>
                            </div>

                        </div>
                    ))}
                </Slider>


            </div>
        </section>
    );
};

export default SlideReviews;