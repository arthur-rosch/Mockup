import axios from "axios";
import { Local } from "./Local";
import host from "@/utils/host";
import { CreateModule } from "@/types";

export class AuthService {
  static async createModule(createModule: CreateModule) {
    const url = `${host()}/createModule`;
    try {
      const response = await (await this.getAxiosInstance()).post(url, createModule);
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
        error: "Erro ao cadastrar aula",
        success: false,
      };
    }
  }

  static async getLessonsByModuleId(moduleId: string) {
    const url = `${host()}/lessons/${moduleId}`;
    try {
      const response = await (await this.getAxiosInstance()).get(url);
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
        error: "Erro ao cadastrar aula",
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