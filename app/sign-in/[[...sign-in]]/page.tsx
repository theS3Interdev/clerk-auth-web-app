import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
	return (
		<>
			<SignIn
				appearance={{
					elements: {
						formButtonPrimary: 'bg-sky-800',
					},
				}}
			/>
		</>
	);
};

export default SignInPage;
