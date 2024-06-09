'use server';

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

export const createTask = async (content: string) => {
  try {
    await prisma.task.create({
      data: { content }
    });

    revalidatePath('/');

    return {
      ok: true,
      message: 'New task created'
    }
  } catch (error) {
    return {
      ok: false,
      message: 'Failed to create new todo',
    }
  }
};