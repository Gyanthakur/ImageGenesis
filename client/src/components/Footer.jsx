import React from "react";
import { assets } from "../assets/assets";
import {
	FacebookLogo,
	LinkedinLogo,
	TwitterLogo,
	GithubLogo,
	WhatsappLogo,
} from "phosphor-react";
import { Link } from "react-router-dom";
const Footer = () => {
	return (
		<div className="flex items-center justify-between gap-4 py-3 mt-20">
			<Link to="/" className="flex m-1 gap-2  justify-between  ">
				<img
					src={assets.logo_won}
					alt=""
					className="w-10 sm:w-10 lg:w-10 rounded-lg"
				/>
				<h1 className="lg:text-3xl flex justify-center items-center sm:text-xl font-semibold">
					ImageGenesis
				</h1>
			</Link>
            <div>

			<p className="flex-1 border-l border-r pr-4 pl-4 border-gray-400 text-sm text-gray-500 max-sm:hidden">All right reserved. Copyright @ImageGenesis</p>
            </div>

			<div className="flex gap-[2.5]">
				<Link to="https://www.facebook.com/people/Gyan-Pratap-Singh/pfbid0GV4uSuFCcGVmhW4TS1PYpZpAWqRkCUoqPBPc12VcygfWCpDU8RUCDYR1wPJhKRGHl/">
					<FacebookLogo
						size={32}
						weight="bold"
						color="#1877F2"
						className="hover:scale-105 hover:text-blue-700 transition-all duration-700"
					/>
				</Link>
				<Link to="https://www.linkedin.com/in/gyan-pratap-singh-275785236/" target="_blank">
					<LinkedinLogo
						size={32}
						weight="bold"
						color="#0A66C2"
						className="hover:scale-105 hover:text-blue-900 transition-all duration-700"
					/>
				</Link>
				<Link to="https://x.com/gps_96169" target="_blank">
					<TwitterLogo
						size={32}
						weight="bold"
						color="#1DA1F2"
						className="hover:scale-105 hover:text-sky-500 transition-all duration-700"
					/>
				</Link>
				<Link to="https://github.com/Gyanthakur" target="_blank">
					<GithubLogo
						size={32}
						weight="bold"
						color="#333333"
						className="hover:scale-105 hover:text-gray-700 transition-all duration-700"
					/>
				</Link>
				<Link to="https://wa.me/918957818597?text=Hey%20%F0%9F%91%8B%2C%20how%20can%20I%20help%20you%3F" target="_blank">
					<WhatsappLogo
						size={32}
						weight="bold"
						color="#25D366"
						className="hover:scale-105 hover:text-green-600 transition-all duration-700"
					/>
				</Link>
			</div>
		</div>
	);
};

export default Footer;
