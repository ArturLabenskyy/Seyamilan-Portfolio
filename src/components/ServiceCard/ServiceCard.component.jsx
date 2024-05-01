import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import Wrapped from "./ServiceCard.styled";

const ServiceCard = ({ content }) => {
    return (
        <Wrapped>
            <h1>{content.name}</h1>
            <h3>{content.description}</h3>
            <h2>{content.price}</h2>
            <div className="img-container">
                <Swiper
                    direction={"horizontal"}
                    navigation={true}
                    modules={[Navigation]}
                    className="swiper-image"
                    slidesPerView={1}
                >
                    {content.isVideo
                        ? content.videos.map((video, index) => (
                              <SwiperSlide className="swiper-slide" key={index}>
                                  <video
                                      //   width="300px"
                                      //   height="800px"
                                      loop
                                      muted
                                      autoPlay
                                  >
                                      <source src={video} type="video/mp4" />
                                      Ваш браузер не поддерживает видео.
                                  </video>
                              </SwiperSlide>
                          ))
                        : content.images.map((image, index) => (
                              <SwiperSlide className="swiper-slide" key={index}>
                                  <img
                                      src={image}
                                      alt={`seviceImage${index}`}
                                  />
                              </SwiperSlide>
                          ))}
                </Swiper>
            </div>
        </Wrapped>
    );
};

export default ServiceCard;
