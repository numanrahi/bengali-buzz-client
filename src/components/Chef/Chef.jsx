import React from 'react';
import { BsArrowRight, BsFillEmojiHeartEyesFill, BsHeart, BsHeartFill, BsList, BsListStars } from 'react-icons/bs';
import "./Chef.css"
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const Chef = ({ chef }) => {

	const { id, chef_picture, chef_name, years_of_experience, numbers_of_recipes, likes } = chef;

	return (
		<div className="col-12 col-md-6 mx-auto chef-boxs row align-items-center w-100 card-bottom-20 py-5">
			<div className="col-12 col-md-6 mx-auto">
				<LazyLoad className='img-fluid'>
					<img className="w-100 img-chefs" src={chef_picture} />
				</LazyLoad>
			</div>
			<div className="col-12 col-md-6 mx-auto">
				<div className="d-flex justify-content-between align-items-center border-bottom-20">
					<div className="text-dance fw-bold display-3 text-center my-2">
						{chef.chef_name}
					</div>
					<div className="d-flex justify-content-center gap-2 align-items-center">
						<div>
							<Rating
								stop={1}
								emptySymbol={
									<BsHeartFill className="fs-5"></BsHeartFill>
								}
								fullSymbol={
									<BsHeartFill className="heart fs-5"></BsHeartFill>
								}
							></Rating>
						</div>
						<div className="text-dance fw-bold fs-4">{likes}</div>
					</div>
				</div>
				<div className="d-flex gap-2">
					<div className="d-flex flex-column sm-bx w-50 justify-content-center align-items-center">
						<div>
							<BsListStars className="fs-1"></BsListStars>
						</div>
						<div className="d-flex">
							<div className="text-dance fs-5 fw-bold me-2">
								{numbers_of_recipes}
							</div>
							<div className="text-dance fs-5 fw-bold">
								Recipes
							</div>
						</div>
					</div>
					<div className="d-flex flex-column sm-bx w-50 justify-content-center align-items-center">
						<div className="fs-2">😮</div>
						<div className="d-flex">
							<div className="text-dance fs-5 fw-bold me-2">
								{years_of_experience}
							</div>
							<div className="text-dance fs-5 fw-bold">
								Years of Experience
							</div>
						</div>
					</div>
				</div>
				<Link
					className="text-decoration-none"
					to={`/chef-recipes/${id}`}
				>
					<div className="fs-4 text-center btn-chef w-100 text-dance title-text d-flex justify-content-center align-items-center ">
						View Recipes
						<div>
							<BsArrowRight></BsArrowRight>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Chef;