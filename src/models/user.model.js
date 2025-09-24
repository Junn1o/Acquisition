import { pgTable, varchar, serial, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    email: varchar("name", { length: 255 }).notNull().unique(),
    password: varchar("password", { length: 255 }).notNull(),
    role: varchar("role", { length: 50 }).notNull().default("user"),
    created_at: timestamp().defaultNow().notNull(),
    created_at: timestamp().defaultNow().notNull(),
});