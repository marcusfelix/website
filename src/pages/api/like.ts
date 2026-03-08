import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ locals, session }) => {
  try {
    const runtime = (locals as any).runtime;
    if (!runtime || !runtime.env || !runtime.env.WEBSITE_LIKES_STORE) {
      console.warn("KV store not found in runtime. Check bindings.");
      return new Response(JSON.stringify({ count: 0, hasLiked: false }), { status: 200 });
    }

    const likesKv = runtime.env.WEBSITE_LIKES_STORE;
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
  } catch (error) {
    console.error("KV Error in POST:", error);
    return new Response(JSON.stringify({ count: 0, hasLiked: false, error: "KV failed" }), { status: 200 });
  }
};

export const GET: APIRoute = async ({ locals, session }) => {
  try {
    const runtime = (locals as any).runtime;
    if (!runtime || !runtime.env || !runtime.env.WEBSITE_LIKES_STORE) {
      console.warn("KV store not found in runtime. Check bindings.");
      return new Response(JSON.stringify({ count: 0, hasLiked: false }), { status: 200 });
    }

    const kv = runtime.env.WEBSITE_LIKES_STORE;
    const currentCount = await kv.get("hits") || "0";
    const hasUserLiked = await session?.get("hasLiked") || false;

    return new Response(JSON.stringify({ 
      count: parseInt(currentCount),
      hasLiked: hasUserLiked
    }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("KV Error in GET:", error);
    return new Response(JSON.stringify({ count: 0, hasLiked: false, error: "KV failed" }), { status: 200 });
  }
};