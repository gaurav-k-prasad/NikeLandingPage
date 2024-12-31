import PopularProductCard from "../Components/PopularProductCard";
import { products } from "../constants";

const PopularProducts = () => {
	return (
		<section className="max-container max-sm:mt-12" id="products">
			<div className="flex flex-col justify-start gap-5">
				<h2 className="text-4xl font-palanquin font-bold">
					Our <span className="text-coral-red">Popular</span> Products
				</h2>
				<p className="md:max-w-md mt-2 text-slate-grey text-sm font-montserrat">
					Experience top-notch quality with out sought-after
					selections. Discover a world of comfort design and value.
				</p>
			</div>

			<div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
				{products.map((product) => (
					<PopularProductCard key={product.name} {...product} />
				))}
			</div>
		</section>
	);
};

export default PopularProducts;
