import { CreateModule, Module } from "@/types";
import { useMutation, useQuery } from "react-query";
import { ModuleService } from "@/services/ModuleService";

export const useLesson = () => {
  const createLesson = useMutation(async ({ module }: { module: CreateModule }) => {
    const { data, success, error } = await ModuleService.createModule(module);

    return { data, success, error };
  });

  const getAllModules = useQuery<Module[]>(
    ["getAllModules"],

    async () => {
      const response = await ModuleService.getAllModules();
      if (response.success) {
        return response.data.Coupons;
      }
      return { success: false };
    }
  );


  return {
    createLesson,
    getAllModules,
  };
};