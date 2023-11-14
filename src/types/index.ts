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
export interface CodeVerification{
    email: string
    phoneNumber: string
    emailCode: string
    status:CodeVerificationStatus
    type:string
}
  
enum CodeVerificationStatus {
    PENDING,
    PENDING_SMS,
    PENDING_EMAIL,
    VERIFIED,
}

export interface CreateLessons{
    youtubeLink: string
    lessonName: string
    moduleId: string
}