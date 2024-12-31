import ServiceCard from "../Components/ServiceCard";
import { services } from "../constants";

const Services = () => {
	return (
		<section className="max-container flex justify-center items-center gap-9 flex-wrap">
			{services.map((service) => (
				<ServiceCard key={service.label} {...service} />
			))}
		</section>
	);
};

export default Services;
