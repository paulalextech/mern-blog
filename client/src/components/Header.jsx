import { Button, ButtonGroup, Navbar, TextInput } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
	return (
		<Navbar className="border-b-2">
			<Link
				to="/"
				className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
			>
				<span className="px-2 py-1 rounded-lg bg-gradient-to-r from-pink-500 to-orange-500 text-white">
					Zeros & Ones{' '}
				</span>
				Blog
			</Link>
			<form>
				<TextInput
					typeof="text"
					placeholder="search.."
					rightIcon={AiOutlineSearch}
					className="hidden lg:inline"
				/>
			</form>
			<Button className="w-12 h-10 lg:hidden" color="gray" pill>
				<AiOutlineSearch />
			</Button>
			<div className="">
				<Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
					<FaMoon />
				</Button>
				<Link to="/sign-in">
					<Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
						Sign In
					</Button>
				</Link>
			</div>
		</Navbar>
	);
}
