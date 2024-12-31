import CustomerReviewCard from "../Components/CustomerReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
	return (
		<section className="w-full max-container flex flex-wrap flex-col justify-center items-center gap-20">
			<div>
				<h3 className="text-4xl font-palanquin font-bold text-center">
					What Our <span className="text-coral-red">Customers</span>{" "}
					Say?
				</h3>
				<p className="info-text text-center max-w-lg my-5">
					Hear genuine stories from our satisfied customers about
					their exceptional experiences with us.
				</p>
			</div>

			<div className="flex max-lg:flex-col justify-evenly gap-20 items-center w-full flex-wrap">
				{reviews.map((review) => (
					<CustomerReviewCard key={review.customerName} {...review} />
				))}
			</div>
		</section>
	);
};

export default CustomerReviews;
