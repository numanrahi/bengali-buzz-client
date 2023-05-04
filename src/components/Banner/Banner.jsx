import React from 'react';
import './Banner.css'
import food1 from '../../assets/food-resize-1.jpg'
import { BsArrowRight } from 'react-icons/bs';
import Menu from '../Menu/Menu';
import MarqueeChef from '../MarqueeChef/MarqueeChef';
import ChefInfo from '../ChefInfo/ChefInfo';

const Banner = () => {
    return (
        <div>
            <div
                className="mx-auto row justify-content-center align-items-center"
                style={{maxWidth: "1200px"}}
            >
                <div className="col-11 col-md-8 d-flex justify-content-center align-items-center flex-column py-5">
                    <div className="w-75 fw-bold mx-auto text-center display-6 pt-5 pb-4 title-text text-center text-dance">
                        Enjoy the taste of Bengal in our restaurant. Pure love, pure food
                    </div>
                    <div>
                        <button className="btn bg-dark text-white d-flex-align-items-center mt-2">
                            <span className="me-1">Our Chefs </span>
                            <BsArrowRight></BsArrowRight>
                        </button>
                    </div>
                </div>
                <div className="col-11 col-md-4">
                    <img className='img-fluid rounded' src="https://img.freepik.com/premium-photo/indian-hindu-veg-thali-food-platter-selective-focus_466689-36343.jpg" />
                </div>
            </div>
            <MarqueeChef></MarqueeChef>
            <Menu></Menu>
            <ChefInfo></ChefInfo>
        </div>
    );
};

export default Banner;