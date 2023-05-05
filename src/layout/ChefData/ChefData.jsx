import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import SingleChefRecipes from "../../components/SingleChefRecipes/SingleChefRecipes";

const ChefData = () => {
    const [recipes, setRecipes] = useState([]);
    const [chef, setChef] = useState([]);
    
    const ID = useParams();
    const info = useLoaderData();
    useEffect(() => {
        const selectChef = info.find((chef) => (chef.id == ID.ID));
        setChef(selectChef);
        const iterableRecipes = selectChef.recipe;
        setRecipes(iterableRecipes);
    }, []);

    // console.log(chef);

    return (
        <div>
            <section
                className="mx-auto mb-5 chef"
                style={{ maxWidth: "1200px" }}
            >
                <div className="row align-items-center">
                    <div className="col-7">
                        <img
                            className="w-100 img-round"
                            src={chef.chef_picture}
                            alt=""
                        />
                        <div className="title-text text-dance fs-6 mt-2">
                            <span className="title-text text-dance fs-5 mx-2">
                                <BsHeartFill className="title-text me-2"></BsHeartFill>
                                {chef.likes} people loved this Chef's Foods
                            </span>
                        </div>
                    </div>
                    <div className="col-5 mx-auto">
                        <div className="display-3 title-text text-dance text-center">
                            {chef.chef_name}
                        </div>
                        <hr />
                        <div className="title-text text-dance fs-4 text-center">
                            {chef.chef_name} is an expert chef with {chef.years_of_experience}
                            + years of experience
                        </div>
                        <div className="title-text fs-6 text-center">
                            {chef.bio}
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-75 mx-auto display-2 text-dance title-text">
                Some of The Best Recipes from Our Chef
            </section>
            <section>
                <SingleChefRecipes
                    key={chef.id}
                    recipes={recipes}
                ></SingleChefRecipes>
            </section>
            <section className="bg-footer">
            </section>
        </div>
    );
};

export default ChefData;