// 1. Importujemy zbudowane przez Vite pliki HTML
// (Dzięki regułom w wrangler.toml Cloudflare wczyta je jako zwykły tekst)
import html502 from "../dist/src/pages/502/index.html";
import html1002 from "../dist/src/pages/1002/index.html";
import htmlDefault from "../dist/src/pages/default/index.html";

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
      if (response.status === 1002) {
        return new Response(html1002, {
          status: 1002,
          headers: { "Content-Type": "text/html;charset=UTF-8" }
        });
      }
      if (response.status >= 500 && response.status <= 599) {
        return new Response(htmlDefault, {
          status: response.status,
          headers: { "Content-Type": "text/html;charset=UTF-8" }
        });
      }
      return response;

    } catch (error) {
      
      console.error("Błąd połączenia z serwerem origin:", error); // Będzie widoczne w logach Cloudflare

      return new Response(htmlDefault, {
        status: 502,
        headers: { "Content-Type": "text/html;charset=UTF-8" }
      });
    }
  }
};