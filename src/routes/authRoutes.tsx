import { LoginPage } from '@/pages/Login';
import SignUpPage from '@/pages/SignUp';

import { RouterPath } from '../path';

export const authRoutes = [
  {
    path: RouterPath.login,
    element: <LoginPage />,
  },
  {
    path: RouterPath.signUp,
    element: <SignUpPage />,
  },
];
