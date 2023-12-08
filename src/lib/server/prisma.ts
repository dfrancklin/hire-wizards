import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

export const ERROR_CODE_UNIQUE_CONSTRAINT = 'P2002';
