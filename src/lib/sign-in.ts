import { signIn } from "./auth-client";

export async function handleSignIn(email: string, password: string) {
	// Call the signIn function from the auth client
	const result = await signIn.email({
		email,
		password,
		callbackURL: "/",
		rememberMe: false
	}, {
		//callbacks
		onError: (ctx) => {
			// Handle error, e.g., show a notification
			console.error("Sign-in error:", ctx.error);
		}
	});
	return result;
}