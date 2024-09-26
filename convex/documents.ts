import { v } from "convex/values";

import { mutation, query } from "./_generated/server";
import { Doc, Id } from "./_generated/dataModel";

export const get = query({
  handler: async (ctx) => {
    await checkAuthentication(ctx);

    const documents = await ctx.db.query("documents").collect();

    return documents;
  },
});

export const create = mutation({
  args: {
    title: v.string(),
    parentDocunment: v.optional(v.id("documents")),
  },
  handler: async (ctx, args) => {
    const identity = await checkAuthentication(ctx);

    const userId = identity.subject;
    const document = await ctx.db.insert("documents", {
      title: args.title,
      parentDocument: args.parentDocunment,
      userId,
      isArchived: false,
      isPublished: false,
    });
    return document;
  },
});

async function checkAuthentication(ctx: any) {
  const identity = await ctx.auth.getUserIdentity();

  if (!identity) {
    throw new Error("Not authenticated");
  }

  return identity;
}
