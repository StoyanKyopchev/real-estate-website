import Listing from "./carouselListings/Listing.jsx"
import Slider from "react-slick"
import popularListings from "./carouselListings/popularListings.json"

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#0468c0" }}
        onClick={onClick}
      />
    );
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#0468c0" }}
        onClick={onClick}
      />
    );
  }
  
export default function Carousel({ setSelectedProperty }) {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ],
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <>
            <Slider {...settings}>
                {popularListings.map((home) => {
                    return (
                        <Listing 
                          home={home} 
                          key={home.id} 
                          setSelectedProperty={setSelectedProperty}
                        />
                    );
                })}
            </Slider>
        </>
    )
}