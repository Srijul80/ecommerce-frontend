import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext } from "react";
import { ProductContext } from "../../Context/Product/ProductContext";
import HomeBanner from "../HomeBanner/HomeBanner";

export default function Swiper() {
  const { allProducts } = useContext(ProductContext);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings}>
      {allProducts
        .filter((p) => {
          return p.id <= 6;
        })
        .map((p) => {
          return (
            <HomeBanner
              image={p.images[0]}
              title={p.title}
              description={p.description}
              id={p.id}
            />
          );
        })}
    </Slider>
  );
}
