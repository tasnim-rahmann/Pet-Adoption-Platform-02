import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import defaultImage from "../../assets/default_product.jpg";

const PetImageGallary = ({ images, petName }) => {
    const [thumbsSwiper] = useState(null);
    const displayImages = images.length > 0 ? images : [{ image: defaultImage }];
    return (
        <div className="rounded-md border-1 border-gray-200 overflow-hidden">
            <Swiper
                modules={[Navigation, Thumbs]}
                navigation
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper ? thumbsSwiper : null }}
                className="product-main-slider"
            >
                {displayImages.map((imageObj, index) => (
                    < SwiperSlide key={index} >
                        <div className="aspect-square">
                            <img
                                className="w-full h-full object-contain"
                                src={imageObj.image}
                                alt={petName}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    );
};

export default PetImageGallary;