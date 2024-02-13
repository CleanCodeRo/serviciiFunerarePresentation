import { PrismaClient } from '@prisma/client';


declare global {
    var prisma: PrismaClient | undefined;
};

// this is because nextjs has a hot reload feature that causes the prisma client to be instantiated multiple times
const prismadb = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalThis.prisma = prismadb;

export default prismadb;