# Cloudflare-error-pages
Customowe strony błędu na usługach z proxy Cloudflare.

## Sposób działania
Strony błędu są hostowane na Cloudflare Workers. Worker stoi jako proxy pomiędzy użytkownikiem a serwerem docelowym. Gdy serwer docelowy zwraca błąd, Worker przechwytuje odpowiedź i zwraca niestandardową stronę błędu.

## Jak uruchomić
1. Użyj przycisku "Deploy to Cloudflare Workers" poniżej, aby wdrożyć Worker na swoim koncie Cloudflare.

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/pages/new?repository=https://github.com/Mord0reK/Cloudflare-error-pages)

2. Przejdź do ustawień swojej domeny i skonfiguruj Worker route. Po lewej stronie panelu Cloudflare wybierz "Rules" -> "Page rules".

3. Po prawej stronie pokaże się "Traffic sequence". Zjedź na dół i wybierz "Workers".

4. W sekcji HTTP Routes kliknij "Add route". W polu "Route" wpisz `*twoja-domena.pl/*`, a w polu "Worker" wybierz swojego Workera (Najprawdopodoniej będzie to "cloudflare-error-pages").

5. ZALECANE! Rozwiń sekcję "Request limit failure mode" i wybierz "Fail open (proceed)". Dzięki temu, gdy Worker osiągnie limit zapytań (100 000 zapytań dla planu Free), użytkownicy nadal będą mogli korzystać z serwisu, ale bez niestandardowych stron błędu (wyświetli się domyślna strona błędu Cloudflare).

6. Naciśnij save i zmiany będą widoczne odrazu.
