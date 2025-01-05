import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src='https://i.ibb.co.com/5W6Z0YT/01.jpg' />
       
      </div>
      <div>
        <img src='https://i.ibb.co.com/HzyHb1G/02.jpg' />
       
      </div>
      <div>
        <img src='https://i.ibb.co.com/tq2Py74/03.png' />
        
      </div>
      <div>
        <img src='https://i.ibb.co.com/BG9fQM3/04.jpg' />
        
      </div>
      <div>
        <img src='https://i.ibb.co.com/SdNdJJP/05.png' />
        
      </div>
      <div>
        <img src='https://i.ibb.co.com/VqJ7pH3/06.png' />
      
      </div>
    </Carousel>
  );
};

export default Banner;
