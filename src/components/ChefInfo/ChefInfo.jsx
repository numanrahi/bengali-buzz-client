import React, { useEffect, useState } from "react";
import "./ChefInfo.css";
import Chef from "../Chef/Chef";

const ChefInfo = () => {
	const [info, setInfo] = useState([]);

	useEffect(() => {
		fetch("https://assignment-10-server-numanrahi.vercel.app/chef")
			.then((res) => res.json())
			.then((data) => setInfo(data));
	}, []);

	return (
		<div className="chef-info title-text">
			<div className="text-dance display-1 text-center">
				Our Head Chefs Are Ready to Serve You
			</div>
			<hr />
			<div className="text-dance fs-4 fw-bold text-center mx-1">
				Indulge in the exquisite creations of our esteemed head chefs,
				who possess a wealth of culinary expertise and are poised to
				satiate your discerning palate. Their masterful techniques and
				use of premium ingredients will undoubtedly transport your taste
				buds on a delectable gastronomic journey.
			</div>
			<div className="row my-5 gap-2 mx-auto">
				{info.map((chef) => (
					<Chef key={chef.id} chef={chef}></Chef>
				))}
			</div>
		</div>
	);
};

export default ChefInfo;