import axios from "axios";
import { Local } from "./Local";
import host from "@/utils/host";
import { SignIn, User } from "@/types";

export class AuthService {
  static async signUp(user: User) {
    const url = `${host()}/create`;
    try {
      const response = await axios.post(url, user, {
        headers: {
          "Content-Type": "application/json",
          accept: "*/*",
        },
      });

      if (response.status === 201) {
        return { data: response.data, success: true };
      } else {
        return {
          error: response.data.message,
          success: false,
        };
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.response.data.error)
        return {
          error: error.response.data.error,
          success: false,
        };

      return {
        error: "Erro ao cadastrar usuário",
        success: false,
      };
    }
  }

  static async signIn(singIn: SignIn) {
    const url = `${host()}/sessions`;
    console.log(singIn)
    try {
      const response = await axios.post(url, singIn, {
        headers: {
          "Content-Type": "application/json",
          accept: "*/*",
          "Access-Control-Allow-Origin": "*",
        },
      });

      if (response.status === 200) {
        return { data: response.data, success: true };
      } else {
        return {
          error: response.data.message,
          success: false,
        };
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.response.data.error)
        return {
          error: error.response.data.error,
          success: false,
        };

      return {
        error: "Erro ao logar usuário",
        success: false,
      };
    }
  }

  static async getAxiosInstance() {
    const jwt = await Local.get("JWT");

    return axios.create({
      baseURL: `${host()}`,
      headers: {
        "Content-Type": "application/json",
        "x-access-token": jwt,
        accept: "*/*",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
}