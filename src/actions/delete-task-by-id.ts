'use server';

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

export const deleteTaskById = async (id: string) => {
  try {
    await prisma.task.delete({
      where: { id }
    });

    revalidatePath('/');

    return {
      ok: true,
      message: 'Task successfully deleted'
    }
  } catch (error) {
    return {
      ok: false,
      message: "Failed to delete task"
    }
  }
};