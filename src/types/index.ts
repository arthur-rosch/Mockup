export interface User {
    id: string;
    email: string;
    password: string;
    name: string;
    whatsapp: string;
  }
  
export interface SignIn{
    email: string;
    password: string;
}
export interface CreateCode {
    email: string
    phoneNumber: string
}
export interface VerifyCode{
    email: string
    emailCode: string
}