'use server';

import prisma from "@/lib/prisma";

export const getAllTasks = async () => {
  try {
    const tasks = await prisma.task.findMany();

    return tasks;
  } catch (error) {
    return [];
  }
};