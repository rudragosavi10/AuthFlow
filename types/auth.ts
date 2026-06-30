export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupCredentials {
  name: string;
  email: string;
  password: string;
}

export interface SignupFormData extends SignupCredentials {
  confirmPassword: string;
}

export interface ForgotPasswordData {
  email: string;
}

export interface AuthUser {
  uid: string;
  name: string | null;
  email: string | null;
  photoURL: string | null;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  user?: AuthUser;
}