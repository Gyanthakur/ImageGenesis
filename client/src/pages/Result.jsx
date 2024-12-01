import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import LoaderPage from "../components/Loader";

const Result = () => {
	const [image, setImage] = useState(assets.sample_img_1);
	const [isImageLoaded, setIsImageLoaded] = useState(false);
	const [loading, setLoading] = useState(false);
	const [input, setInput] = useState("");

  const onSubmitHandler = async(e)=>{

  }

	return (
		<form onSubmit={onSubmitHandler} className="flex flex-col min-h-[90vh] justify-center items-center">
			<div>
				<div className="relative">
					<img src={image} alt="" className="max-w-sm lg:w-80 rounded" />

					<span
						className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${
							loading ? "w-full transition-all duration-[10s]" : "w-0"
						}`}
					/>
				</div>

				<p
					className={`${
						!loading ? "hidden" : ""
					} flex mt-2 items-center text-center`}
				>
					Loading....
					<LoaderPage />
				</p>
			</div>

			{!isImageLoaded && (
				<div className="flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full">
					<input
						onChange={(e) => setInput(e.target.value)}
						value={input}
						type="text"
						placeholder="Describe what you want to generate"
						className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color"
					/>
					<button
						type="submit"
						className="bg-zinc-900 px-10 sm:px-16 py-3 rounded-full text-white"
					>
						Generate
					</button>
				</div>
			)}

			{isImageLoaded && (
				<div className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full">
					<p
						onClick={() => {
							setIsImageLoaded(false);
						}}
						className="bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer"
					>
						Generate Another
					</p>
					<a
						href={image}
						download
						className="bg-zinc-900 px-12 py-3 rounded-full cursor-pointer"
					>
						Download
					</a>
				</div>
			)}
		</form>
	);
};

export default Result;
