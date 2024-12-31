import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../Components/Button";

const SpecialOffers = () => {
	return (
		<section
			id="about-us"
			className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 w-full max-container">
			<div className="flex-1">
				<img
					src={offer}
					alt="Super Quality"
					width={773}
					height={687}
					className="object-contain"
				/>
			</div>

			<div className="flex flex-col flex-1">
				<h2 className="text-4xl font-bold font-palanquin capitalize lg:max-w-lg">
					<span className="text-coral-red">Special</span> Offer
				</h2>
				<p className="mt-5 lg:max-w-lg info-text">
					Embark on a shopping journey that redefines your experience
					with unbeatable deals. From premier selections to incredible
					savings, we offer unparalleled value that sets us apart.
				</p>
				<p className="mt-5 lg:max-w-lg info-text">
					Navigate a realm of possibilities designed to fulfill your
					unique desires, surpassing the loftiest expectations. Your
					journey with us is nothing short of exceptional.
				</p>
				<div className="mt-11 flex gap-5 flex-wrap">
					<Button label="Show Now" iconUrl={arrowRight} />
					<Button
						label="Learn More"
						bgColor="bg-white"
						borderColor="border-slate-500"
						textColor="text-slate-gray"
					/>
				</div>
			</div>
		</section>
	);
};

export default SpecialOffers;
