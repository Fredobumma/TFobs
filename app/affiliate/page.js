"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const profileFormSchema = z.object({
	name: z
		.string()
		.min(2, {
			message: "Name must be at least 2 characters.",
		})
		.max(30, {
			message: "Name must not be longer than 30 characters.",
		}),
	userEmail: z
		.string({
			required_error: "Please select an email to display.",
		})
		.email(),
	email: z
		.string({
			required_error: "Please select an email to display.",
		})
		.email(),
	bio: z.string().max(160).min(4),
});

// This can come from your database or API.
const defaultValues = {
	name: "",
	userEmail: "",
	email: "",
	bio: "Hello, my name is John",
};

export default function Affiliate() {
	const form = useForm({
		resolver: zodResolver(profileFormSchema),
		defaultValues,
		mode: "onChange",
	});
	const { toast } = useToast();

	function onSubmit(_data) {
		toast({
			title: "Currently unavailable or suspended at this time."
			// title: "You submitted the following values:",
			// description: (
			// 	<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
			// 		<code className="text-white">{JSON.stringify(data, null, 2)}</code>
			// 	</pre>
			// ),
		});
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input
									placeholder="Enter your name"
									className="bg-transparent text-white"
									{...field}
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="userEmail"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Your Email</FormLabel>
							<FormControl>
								<Input
									placeholder="Enter your email"
									className="bg-transparent text-white"
									{...field}
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Choose Email</FormLabel>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Select an email category for your message" />
									</SelectTrigger>
								</FormControl>
								<SelectContent className="bg-black">
									<SelectItem value="tfobs@support.com">
										tfobs@support.com
									</SelectItem>
									<SelectItem value="tfobs@affiliate.com">
										tfobs@affiliate.com
									</SelectItem>
									<SelectItem value="tfobs@careers.com">
										tfobs@careers.com
									</SelectItem>
								</SelectContent>
							</Select>
							<FormDescription>
								You must select an email for the type of message you wish to
								send.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="bio"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Message</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Tell us what you've got for us."
									className="resize-none bg-transparent"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					type="submit"
					className="bg-gradient-to-tr from-[#815316] from-20% via-[#b69e57] to-95% to-[#815316] font-bold rounded-lg py-4 px-[30px] text-black hover:scale-95 focus:scale-95 transition ease-in-out duration-300"
				>
					Send message
				</Button>
			</form>
		</Form>
	);
}
