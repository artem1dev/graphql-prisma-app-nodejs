import { Prisma } from "prisma-binding";
import { fragmentReplacements } from "./resolvers/index.js";
import "dotenv/config";

const prisma = new Prisma({
    typeDefs: "src/generated/prisma.graphql",
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET,
    fragmentReplacements,
});

export default prisma;
