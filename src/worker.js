// 1. Importujemy zbudowane przez Vite pliki HTML
// (Dzięki regułom w wrangler.toml Cloudflare wczyta je jako zwykły tekst)
import html502 from "../dist/src/pages/502/index.html";
import html1033 from "../dist/src/pages/1033/index.html";

export default {
  async fetch(request, env, ctx) {
    try {
      const response = await fetch(request);

      if (response.status === 502) {
          return new Response(html502, {
            status: 502,
          headers: { "Content-Type": "text/html;charset=UTF-8" }
        });
      }
      if (response.status === 1033) {
        return new Response(html1033, {
          status: 1033,
          headers: { "Content-Type": "text/html;charset=UTF-8" }
        });
      }
      return response;

    } catch (error) {
      
      console.error("Błąd połączenia z serwerem origin:", error); // Będzie widoczne w logach Cloudflare

      return new Response(html1033, {
        status: 1033,
        headers: { "Content-Type": "text/html;charset=UTF-8" }
      });
    }
  }
};