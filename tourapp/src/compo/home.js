import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";



import "../App.css";

class PreNavbar extends React.Component {
 
  render() {
    return (

        <Link to='/home'> 
      <div className="mar">
        <Carousel
        className="Ptitle"
          autoPlay
          interval="4000"
          infiniteLoop
          transitionTime="1500"
          onChange={this.onChangeEvent}
          onClickItem={this.onClickItemEvent}
          onClickThumb={this.onClickThumbEvent}
          onSwipeStart={this.onSwipeStartEvent}
          onSwipeEnd={this.onSwipeEndEvent}
          onSwipeMove={this.onSwipeMoveEvent}
        >
          <div >
            <img
              className="cimg"
              src="https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXJlbGFuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
            />
            <p className="legend">Best of Ireland in 14 days tours</p>
          </div>
          <div>
            <img
              className="cimg"
              src="https://www.algerie-eco.com/wp-content/uploads/2019/12/sud.jpg"
              alt=""
            />
            <p className="legend">Tamanrasset</p>
          </div>
          <div>
            <img
              className="cimg"
              src="https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnJhemlsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
           />
            <p className="legend">Best of brazil in 18 days tours</p>
          </div>
          <div>
            <img
              className="cimg"
              src="https://images.unsplash.com/photo-1572252009286-268acec5ca0a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZWd5cHR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
           />
            <p className="legend">Best of Egypt in 10 days tours</p>
          </div>
          <div>
            <img
              className="cimg"
              src="https://live.staticflickr.com/2667/4219945135_8162e0d7dd_b.jpg"
              alt=""
            />
            <p className="legend">Parc national culturel de l'Ahaggar</p>
          </div>
        

          <div>
            <img
              className="cimg"
              src="https://img.itinari.com/pages/images/original/6ec803a9-2376-44b7-8b92-8347dccad652-istock-610863516.jpg?ch=DPR&dpr=1&w=1600&s=38b3f7002a442e612563308e36b0ff80"
              alt=""
            />
            <p className="legend">Cinque Terre</p>
          </div>
        </Carousel>
      </div>
      </Link>
    );
  }
}

export default PreNavbar;
