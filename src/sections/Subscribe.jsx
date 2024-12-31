import { useState } from "react";
import Button from "../Components/Button";

const Subscribe = () => {
  const[input, setInput] = useState("")

  function updateInput(event) {
    setInput(event.target.value);
  }

	return (
		<section className="flex max-lg:flex-col w-full max-container gap-10 justify-evenly items-center">
			<h3 className="text-4xl leading-[68px] font-palanquin max-w-lg font-bold flex-1" id="contact-us">
				Sign Up for <span className="text-coral-red">Updates</span> &
				Newsletter
			</h3>

			<div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
				<input
					type="text"
					className="input"
					placeholder="subscribe@nike.com"
          value={input}
          onChange={updateInput}
				/>

        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth={true} />
        </div>
			</div>
		</section>
	);
};

export default Subscribe;
