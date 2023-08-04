import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
	return (
		<>
			<SignUp
				appearance={{
					elements: {
						formButtonPrimary: 'bg-sky-800',
					},
				}}
			/>
		</>
	);
};

export default SignUpPage;
