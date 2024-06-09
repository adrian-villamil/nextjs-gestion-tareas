'use server';

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

export const updateTaskById = async (id: string, completed: boolean, content: string) => {
  try {
    await prisma.task.update({
      where: { id },
      data: {
        completed,
        content
      }
    });

    revalidatePath('/');

    return {
      ok: true,
      message: 'Task successfully updated'
    }
  } catch (error) {
    return {
      ok: false,
      message: 'Failed to update task'
    }
  }
};