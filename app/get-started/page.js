"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function GetStarted() {
	const [value, setValue] = useState("login");

	return (
		<Tabs
			value={value}
			defaultValue={value}
			className="w-full mb-10 max-w-[500px] lg:mb-[30px]"
		>
			<TabsList className="grid w-full grid-cols-2 mb-5">
				<TabsTrigger
					onClick={() => setValue("login")}
					className={`ring-1 mx-2.5 ring-inset ring-white block rounded-md text-center text-base font-medium leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:outline-white hover:outline-offset-2 hover:outline-2 hover:outline 
					${
						value === "login"
							? "ring-[#b69e57] !outline-[#b69e57] outline outline-offset-2"
							: ""
					}
					`}
					value="login"
				>
					Login
				</TabsTrigger>
				<TabsTrigger
					onClick={() => setValue("register")}
					className={`ring-1 mx-2.5 ring-white ring-inset block rounded-md text-center text-base font-medium leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:outline-white hover:outline-offset-2 hover:outline-2 hover:outline
					${
						value === "register"
							? "ring-[#b69e57] !outline-[#b69e57] outline outline-offset-2"
							: ""
					}
					`}
					value="register"
				>
					Register
				</TabsTrigger>
			</TabsList>
			<TabsContent value="login">
				<Card>
					<CardHeader>
						<CardTitle>Do you have an exisiting account?</CardTitle>
					</CardHeader>
					<CardContent className="space-y-2">
						<div className="space-y-1">
							<Label htmlFor="name">Email</Label>
							<Input id="email" className="bg-transparent" />
						</div>
						<div className="space-y-1">
							<Label htmlFor="password">Password</Label>
							<Input id="password" className="bg-transparent" />
						</div>
					</CardContent>
					<CardFooter>
						<Button
							type="submit"
							className="bg-gradient-to-tr from-[#815316] from-20% via-[#b69e57] to-95% to-[#815316] font-bold rounded-lg py-4 px-[30px] text-black hover:scale-95 focus:scale-95 transition ease-in-out duration-300"
						>
							Login
						</Button>
					</CardFooter>
				</Card>
			</TabsContent>
			<TabsContent value="register">
				<Card>
					<CardHeader>
						<CardTitle>Register</CardTitle>
						<CardDescription>
							Create a new account. if you have an existing account, goto Login.
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-2">
						<div className="space-y-1">
							<Label htmlFor="name">Email</Label>
							<Input id="email" className="bg-transparent" />
						</div>
						<div className="space-y-1">
							<Label htmlFor="password">Password</Label>
							<Input id="password" className="bg-transparent" />
						</div>
					</CardContent>
					<CardFooter>
						<Button
							type="submit"
							className="bg-gradient-to-tr from-[#815316] from-20% via-[#b69e57] to-95% to-[#815316] font-bold rounded-lg py-4 px-[30px] text-black hover:scale-95 focus:scale-95 transition ease-in-out duration-300"
						>
							Register
						</Button>
					</CardFooter>
				</Card>
			</TabsContent>
		</Tabs>
	);
}
