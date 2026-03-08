/// <reference types="astro/client" />

type KVNamespace = import("@cloudflare/workers-types").KVNamespace;

declare namespace App {
  interface SessionData {
    hasLiked: boolean;
  }
  interface Locals extends import("@astrojs/cloudflare").Runtime<{
    WEBSITE_LIKES_STORE: KVNamespace;
    SESSION: KVNamespace;
  }> {}
}
