import axios from "axios";
import { Local } from "./Local";
import host from "@/utils/host";
import { CreateCode, VerifyCode } from "@/types";

export class AuthService {
  static async createCode(createCode: CreateCode) {
    const url = `${host()}/createCode`;
    try {
      const response = await (await this.getAxiosInstance()).post(url, createCode);
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

  static async resendCode(email: string) {
    const url = `${host()}/resendCode`;
    try {
      const response = await  (await this.getAxiosInstance()).post(url, email);

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

  static async verifyUser(email: string) {
    const url = `${host()}/verifyUser`;
    try {
      const response = await  (await this.getAxiosInstance()).post(url, email);

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

  static async verifyCode(verifyCode: VerifyCode) {
    const url = `${host()}/verifyUser`;
    try {
      const response = await (await this.getAxiosInstance()).post(url, verifyCode);

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