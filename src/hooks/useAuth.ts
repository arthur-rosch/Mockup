import { useCallback } from "react";
import { SignIn, User } from "@/types";
import { Local } from "@/services/Local";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/actions/user";
import { AuthService } from "@/services/AuthService";

export const useAuth = () => {
  const dispatch = useDispatch();

  const signup = useCallback(
    async (variables: User) => {
      const response = await AuthService.signUp(variables);

      if (response.success) {
        dispatch(setUser(response.data.user));
        Local.setJWT(response.data.token);
        return { success: true, Message: "Usuário cadastrado com sucesso!" };
      }
      return { success: false, Erro: response.error };
    },
    [dispatch]
  );

  const signIn = useCallback(
    async (variables: SignIn) => {
      const response = await AuthService.signIn(variables);

      if (response.success) {
        dispatch(setUser(response.data.user));
        Local.setJWT(response.data.token);
        return { success: true, Message: "Usuário fez login com sucesso!" };
      }
      return { success: false, Erro: response.error };
    },
    [dispatch]
  );

  

  return {
    signup,
    signIn,
  };
};