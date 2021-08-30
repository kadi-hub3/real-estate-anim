import styled, { css } from "styled-components/macro";
import {
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";

export const Container = styled.footer`
  width: 100%;
  padding: 4rem 2rem;
  color: #fff;
  background: #000d1a;
`;

export const FooterWrapper = styled.div`
  padding: 3rem calc((100vw-1300px) / 2);
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 400px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h1 {
    font-size: clamp(2.5rem, 6vw, 4rem);
    padding: 2rem 0;
  }
`;

export const IconList = styled.ul``;

const iconStyling = css`
  color: #cd853f;
  margin: 0.4rem 0.6rem;
  font-size: 1.8rem;
  cursor: pointer;
`;
export const YoutubeIcon = styled(FaYoutube)`
  ${iconStyling}
`;
export const FbIcon = styled(FaFacebook)`
  ${iconStyling}
`;
export const InstaIcon = styled(FaInstagram)`
  ${iconStyling}
`;
export const InIcon = styled(FaLinkedinIn)`
  ${iconStyling}
`;

export const FooterRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  ul {
    list-style: none;
    padding: 1rem;

    li {
      padding: 0.3rem;
      cursor: pointer;
    }
  }
`;
