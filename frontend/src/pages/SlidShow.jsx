import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const SlideShow = () => {
  let Imgs = [
    "https://dkstatics-public.digikala.com/digikala-adservice-banners/869e3bc8001576c2d64e202bc697b3dcf9edca42_1675859628.gif?x-oss-process=image?x-oss-process=image/format,webp",
    "https://dkstatics-public.digikala.com/digikala-adservice-banners/f313cf558e749b34ec6b0aefb5970ab28ff98c4a_1687361539.jpg?x-oss-process=image/quality,q_95/format,webp",
    "https://dkstatics-public.digikala.com/digikala-adservice-banners/bbe9e3b69fe6696c6eb0bc0467e56405ca4f14c7_1687380577.jpg?x-oss-process=image/quality,q_95/format,webp",
    "https://dkstatics-public.digikala.com/digikala-adservice-banners/628df2fbc0f00886a863f4e05a8c967eeaed2e77_1687255279.jpg?x-oss-process=image/quality,q_95/format,webp",
    "https://dkstatics-public.digikala.com/digikala-adservice-banners/aa50ca4d614c91742f231cab21772eee91515b7e_1687499657.jpg?x-oss-process=image/quality,q_95/format,webp",
  ];
  const [slider, setSlider] = useState(0);
  setInterval(() => {
    if (slider <= Imgs.length - 1) {
        // setSlider(() => slider + 1);
    } else if (slider >= Imgs.length - 1) {
        // setSlider(() => 0);
    }
  }, 3000);

  let nextImgSlide = () => {
    setSlider(slider + 1);
    if (slider >= Imgs.length - 1) {
      setSlider(0);
    }
  };

  let prevImgSlide = () => {
    setSlider(slider - 1);
    if (slider <= 0) {
      setSlider(Imgs.length - 1);
    }
  };
  return (
    <>
      <div className="mt-3 relative">
        <img src={Imgs[slider]} alt="SlideShow" />
        <div className="absolute bottom-3 right-3">
          <button
            className="bg-gray-200 rounded-full mx-2 p-1"
            onClick={() => nextImgSlide()}
          >
            <HiChevronLeft size={30} />
          </button>
          <button
            className="bg-gray-200 rounded-full mx-2 p-1"
            onClick={() => prevImgSlide()}
          >
            <HiChevronRight size={30} />
          </button>
        </div>
      </div>
    </>
  );
};

export default SlideShow;
