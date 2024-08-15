export const dynamic = 'force-dynamic';
import { handleLogin } from '@auth0/nextjs-auth0';

export async function GET(req) {
  try {
    const res = new Response();
    return handleLogin(req, res, {
      authorizationParams: {
        screen_hint: 'signup',
      },
    });
  } catch (error) {
    console.error('Error during login:', error);
    return new Response(error.message, { status: error.status || 500 });
  }
}
