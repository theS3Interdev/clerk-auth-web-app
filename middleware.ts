import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({ publicRoutes: ['/', '/registration'] });

export const config = {
	matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
