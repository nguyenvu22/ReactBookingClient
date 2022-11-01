import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://i.vntrip.vn/471x290/smart/https://statics.vntrip.vn/data-v2/hotels/9906/img_max/9906_1499226454_97987435.jpg",
    },
    {
      src: "https://www.kayak.com/rimg/himg/ab/64/d9/expediav2-38713-6584af-750938.jpg?width=720&height=576&crop=true",
    },
    {
      src: "https://image-tc.galaxy.tf/wijpeg-182f5fmpiah32qvimhufrm8nk/ue-milanoverticale-milano-entrance-hero-2100x1375-ee5a2ec4-f419-4b58-9a4d-034df379a076.jpg?width=1900",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQilMBRnYijybz-Hl1T8ZFU7JAfiWQWWG2c6g&usqp=CAU",
    },
  ];

  const handleOpen = (index) => {
    setSlideNumber(index);
    setOpen(!open);
  };

  const handleMove = (direction) => {
    let newSlideNumber;
    if(direction === "left"){
      newSlideNumber = slideNumber === 0 ? photos.length-1 : slideNumber - 1
    }else if(direction === "right"){
      newSlideNumber = slideNumber === photos.length-1 ? 0 : slideNumber + 1
    }

    setSlideNumber(newSlideNumber);
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => {setOpen(!open)}} />
            <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => {handleMove("left")}}/>
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => {handleMove("right")}}/>
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>

          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, index) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => {handleOpen(index)}}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique provident accusamus doloremque enim id aut, dolore
                ullam perspiciatis dolor incidunt, in nostrum? Sapiente
                voluptatibus incidunt obcaecati qui optio. Sed, autem. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Ea, commodi
                libero illo, architecto veritatis culpa accusamus, aperiam
                magnam voluptatem quibusdam omnis perspiciatis? Debitis nemo
                explicabo exercitationem, asperiores corrupti illum enim. Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Nihil
                molestias nobis mollitia saepe deleniti nesciunt, provident,
                dolore, aut molestiae suscipit perferendis. Doloremque ipsa
                fugiat eligendi aliquam molestias eveniet aut odio?
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now !</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
