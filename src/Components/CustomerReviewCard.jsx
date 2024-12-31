import PropTypes from "prop-types";
import { star } from "../assets/icons";

const CustomerReviewCard = ({ imgURL, customerName, rating, feedback }) => {
	return (
		<div className="flex flex-col justify-center items-center max-w-[400px] gap-3">
			<div className="m-3 mb-5">
				<img
					src={imgURL}
					alt={customerName}
					className="rounded-full w-28 object-cover object-center"
				/>
			</div>
			<p className="info-text text-center">{feedback}</p>
			<div className="flex justify-center items-center">
				<img
					src={star}
					alt="Rating: "
					width={24}
					height={24}
					className="mr-2"
				/>
				<p className="info-text">({rating})</p>
			</div>
			<h3 className="text-2xl font-bold leading-normal">
				{customerName}
			</h3>
		</div>
	);
};

CustomerReviewCard.propTypes = {
	imgURL: PropTypes.string.isRequired,
	customerName: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired,
	feedback: PropTypes.string.isRequired,
};

export default CustomerReviewCard;
