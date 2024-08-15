import { handleLogin } from '@auth0/nextjs-auth0';

export async function GET(req, res) {
  try {
    return handleLogin(req, res, {
      authorizationParams: {
        screen_hint: 'signup',
      },
    });
  } catch (error) {
    console.error('Error during login:', error);
    return new Response(error.message, { status: error.status });
  }
}
