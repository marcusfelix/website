import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ locals, session }) => {
  const likesKv = (locals as any).runtime.env.WEBSITE_LIKES_STORE; // Main counter KV

  let newCount: number;
  
  // 1. Check if user has already liked via Astro session
  const hasUserLiked = await session?.get("hasLiked");

  if (!hasUserLiked) {
    // 2. User has not liked yet, increment main counter
    const currentCount = await likesKv.get("hits") || "0";
    newCount = parseInt(currentCount) + 1;
    await likesKv.put("hits", newCount.toString());

    // 3. Mark session as liked
    await session?.set("hasLiked", true);
  } else {
    // User already liked, just return current count
    newCount = parseInt(await likesKv.get("hits") || "0");
  }

  return new Response(JSON.stringify({ 
    count: newCount,
    hasLiked: true 
  }), {
    headers: { "Content-Type": "application/json" }
  });
};

export const GET: APIRoute = async ({ locals, session }) => {
  const kv = (locals as any).runtime.env.WEBSITE_LIKES_STORE;
  const currentCount = await kv.get("hits") || "0";
  const hasUserLiked = await session?.get("hasLiked") || false;
  
  return new Response(JSON.stringify({ 
    count: parseInt(currentCount),
    hasLiked: hasUserLiked
  }), {
    headers: { "Content-Type": "application/json" }
  });
};