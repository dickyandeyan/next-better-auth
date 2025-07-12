import { signUp } from "./auth-client"; //import the auth client

// ...existing code...
export async function handleSignUp(email: string, password: string, name: string, image?: string) {
	const result = await signUp.email({
		email, // user email address
		password, // user password -> min 8 characters by default
		name, // user display name
		image, // User image URL (optional)
	}, {
		onRequest: (ctx) => {
			//show loading
		},
		onSuccess: (ctx) => {
			//redirect to the dashboard or sign in page
		},
		onError: (ctx) => {
			// display the error message
		},
	});
	return result;
}