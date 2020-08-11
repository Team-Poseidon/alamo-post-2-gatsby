import React from "react";
import Slider from "react-slick";
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';

const SliderContainer = styled.div`
  background: linear-gradient(135deg,#063faa 16%,#1e2d3a 48%,#063faa 85%);
  color: white;
  padding: 10rem 0;
  border-bottom: 8px solid gold;
`

export default () => {
  var settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const sideMetadata = useStaticQuery(graphql`
    query TitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  let {title, author} = sideMetadata.site.siteMetadata
  return (
    <SliderContainer>
      <Slider {...settings}>
        <div>
          <div className="text-center">
            <h1>{title}</h1>
            <p>By {author}</p>
          </div>
        </div>
        <div>
          <div className="text-center">
            <h1>{title}</h1>
            <p>By {author}</p>
          </div>
        </div>
        <div>
          <div className="text-center">
            <h1>{title}</h1>
            <p>By {author}</p>
          </div>
        </div>
      </Slider>
    </SliderContainer>
  )
}
