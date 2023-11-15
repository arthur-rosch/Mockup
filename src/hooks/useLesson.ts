import { Lesson } from "@/types";
import { useMutation } from "react-query";
import { LessonService } from "@/services/LessonService";

export const useCoupon = () => {
  const createLesson = useMutation(async ({ lesson }: { lesson: Lesson }) => {
    const { data, success, error } = await LessonService.createLesson(lesson);

    return { data, success, error };
  });

  const getLessonsByModuleId = useMutation(async ({ moduleId }: { moduleId: string }) => {
    const { data, success, error } = await LessonService.getLessonsByModuleId(moduleId);

    return { data, success, error };
  });


  return {
    createLesson,
    getLessonsByModuleId
  };
};