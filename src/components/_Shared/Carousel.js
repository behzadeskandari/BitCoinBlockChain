import React from "react";

import ReactDOM from "react-dom";

import "../../styles/Carousel.scss";

const { Component } = React;

const { render } = ReactDOM;

//const carouselContainer = document.querySelector(".carousel-container");
// Data for carousel

export class CarouselLeftArrow extends Component {
  render() {
    return (
      <a
        href="#"
        className="carousel__arrow carousel__arrow--left"
        onClick={this.props.onClick}
      >
        <span className="fa fa-2x fa-angle-left"></span>
      </a>
    );
  }
}

export class CarouselRightArrow extends Component {
  render() {
    return (
      <a
        href="#"
        className="carousel__arrow carousel__arrow--right"
        onClick={this.props.onClick}
      >
        <span className="fa fa-2x fa-angle-right" />
      </a>
    );
  }
}

export class CarouselIndicator extends Component {
  render() {
    return (
      <li>
        <a
          className={
            this.props.index == this.props.activeIndex
              ? "carousel__indicator carousel__indicator--active"
              : "carousel__indicator"
          }
          onClick={this.props.onClick}
        />
      </li>
    );
  }
}

export class CarouselSlide extends Component {
  render() {
    return (
      <>
        <li
          className={
            this.props.index == this.props.activeIndex
              ? "carousel__slide carousel__slide--active"
              : "carousel__slide"
          }
        >
          <p className="carousel-slide__content" style={{ margin: "10px" }}>
            {this.props.slide.content}
          </p>
          <p>
            <strong className="carousel-slide__author"></strong>
            <small className="carousel-slide__source"></small>
          </p>
        </li>
        <li
          className={
            this.props.index == this.props.activeIndex
              ? "carousel__slide carousel__slide--active"
              : "carousel__slide"
          }
        >
          <p className="carousel-slide__content">{this.props.slide.content}</p>
          <p>
            <strong className="carousel-slide__author"></strong>
            <small className="carousel-slide__source"></small>
          </p>
        </li>
        <li
          className={
            this.props.index == this.props.activeIndex
              ? "carousel__slide carousel__slide--active"
              : "carousel__slide"
          }
        >
          <p className="carousel-slide__content">{this.props.slide.content}</p>
          <p>
            <strong className="carousel-slide__author"></strong>
            <small className="carousel-slide__source"></small>
          </p>
        </li>
        <li
          className={
            this.props.index == this.props.activeIndex
              ? "carousel__slide carousel__slide--active"
              : "carousel__slide"
          }
        >
          <p className="carousel-slide__content">{this.props.slide.content}</p>
          <p>
            <strong className="carousel-slide__author"></strong>
            <small className="carousel-slide__source"></small>
          </p>
        </li>
      </>
    );
  }
}

// Carousel wrapper component
export class Carousel extends Component {
  constructor(props) {
    super(props);

    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);

    this.state = {
      activeIndex: 0,
    };
  }

  goToSlide(index) {
    this.setState({
      activeIndex: index,
    });
  }

  goToPrevSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index,
    });
  }

  goToNextSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index,
    });
  }

  render() {
    return (
      <div className="carousel">
        {/* <CarouselLeftArrow onClick={(e) => this.goToPrevSlide(e)} /> */}

        <ul
          className="carousel__slides"
          style={{
            display: "flex",
            margin: "4px",
            justifyContent: "center",
            height: "7em",
          }}
        >
          {this.props.slides.map((slide, index) => (
            <CarouselSlide
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              slide={slide}
            />
          ))}
        </ul>

        {/* <CarouselRightArrow onClick={(e) => this.goToNextSlide(e)} /> */}

        <ul className="carousel__indicators">
          {this.props.slides.map((slide, index) => (
            <CarouselIndicator
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              isActive={this.state.activeIndex == index}
              onClick={(e) => this.goToSlide(index)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

