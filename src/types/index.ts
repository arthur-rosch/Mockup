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

export interface Lesson {
    id: string
    youtubeLink: string
    lessonName:  string
    moduleId :   string

}

export interface Module {
  id: string      
  moduleName: string
  totalLessons: number
  lessons: Lesson[]
}

export interface CreateModule {
     moduleName: string
}