import React, { useRef, useEffect } from "react";
import { InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  Topline,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img, } from "./Info.styles";
import { Button } from "../Button";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Info = ({
  id, lightBg,lightText, imgStart,
  darkText,primary, dark, alt,
  topLine,
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  image,
}) => {
  let topLineRef = useRef(null);
  let title = useRef(null);
  let p1 = useRef(null);
  let p2 = useRef(null);
  let img = useRef(null);
  let button = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: [title, p1, p2, img],
        toggleActions: "restart complete pause none",
      },
    });
    tl.from(
      [title, topLineRef,button,p1, p2],
      1.2,
      { y: 10, opacity: 0, ease: Power3.easeOut, delay: 0.3 },
      0.35
    );
    tl.from(
      [img],
      1.2,
      { y: -10, opacity: 0, ease: Power3.easeOut, delay: 0.2 },
      0.35
    );
 
  });

  return (
     <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <Topline ref={(el) => (topLineRef = el)}>{topLine}</Topline>
              <Heading lightText={lightText} ref={(el) => (title = el)}>{heading}</Heading>
              <Subtitle darkText={darkText} ref={(el) => (p1 = el)}>{paragraphOne}</Subtitle>
              <Subtitle darkText={darkText}ref={(el) => (p2= el)}>{paragraphTwo}</Subtitle>
              <BtnWrap ref={(el) => (button = el)}>
                <Button
                  to="/home"
                  // smooth={true}
                  // duration={500}
                  // spy={true}
                  // exact="true"
                  // offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                >
                  {buttonLabel}
                </Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap ref={(el) => (img = el)} >
              <Img src={image} alt={alt}/>
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default Info;
