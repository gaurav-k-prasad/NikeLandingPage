import PropTypes from "prop-types";

const Button = ({
	label,
	iconUrl,
	bgColor = "bg-coral-red",
	textColor = "text-white",
	borderColor = "border-coral-red",
	fullWidth = false,
}) => {
	return (
		<button
			className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${bgColor} rounded-full ${textColor} ${borderColor} ${
				fullWidth && "w-full"
			}`}>
			{label}
			{iconUrl && (
				<img
					src={iconUrl}
					alt="Arrow right icon"
					className="ml-2 rounded-full w-5 h-5"
				/>
			)}
		</button>
	);
};

Button.propTypes = {
	label: PropTypes.string.isRequired,
	iconUrl: PropTypes.string,
	bgColor: PropTypes.string,
	textColor: PropTypes.string,
	borderColor: PropTypes.string,
	fullWidth: PropTypes.bool,
};

export default Button;
