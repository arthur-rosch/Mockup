import { CreateCode } from '@/types';
import { useMutation } from 'react-query';
import { CodeVerificationService } from '@/services/CodeVerificationService';

export const useCode = () => {

    const createCode = useMutation(async ({ createCode }: { createCode: CreateCode }) => {
        const { data, success, error } = await CodeVerificationService.createCode(createCode);
    
        return { data, success, error };
    });

    const resendCode = useMutation(async ({ email }: { email: string }) => {
        const { data, success, error } = await CodeVerificationService.resendCode(email);
    
        return { data, success, error };
    });


    const verifyUser = useMutation(async ({ email }: { email: string }) => {
        const { data, success, error } = await CodeVerificationService.verifyUser(email);
    
        return { data, success, error };
    });

    const verifyCode = useMutation(async ({ email, emailCode }: { email: string, emailCode: string }) => {
        const { data, success, error } = await CodeVerificationService.verifyCode(email, emailCode);
    
        return { data, success, error };
    });

  return {
    createCode,
    resendCode,
    verifyUser,
    verifyCode
  };
};


