# Cloudflare-error-pages
Customowe strony błędu na usługach z proxy Cloudflare.

## Sposób działania
Strony błędu są hostowane na Cloudflare Workers. Worker stoi jako proxy pomiędzy użytkownikiem a serwerem docelowym. Gdy serwer docelowy zwraca błąd, Worker przechwytuje odpowiedź i zwraca niestandardową stronę błędu.

## Jak uruchomić

### 1. Fork tego repozytorium
1. Kliknij przycisk "Fork" w prawym górnym rogu
2. Wybierz swoje konto GitHub jako miejsce utworzenia forka

### 2. Utworzenie Workera z forka
1. Zaloguj się do [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Przejdź do sekcji "Compute > Workers & Pages" w menu po lewej stronie
3. Kliknij "Create application"
4. Wybierz "Continue with Github"
5. Wybierz z listy forka repozytorium, najprawdopodobniej będzie to "cloudflare-error-pages" i naciśnij next.
6. Następnie naciśnij Deploy i odczekaj aż worker się zdeployuje (zazwyczaj trwa to kilka sekund).
7. Po udanym deployu, zalecane jest wyłączenie zbędnych preview URLi, które są generowane podczas deployowania. Przejdź do zakładki "Settings" swojego Workera i w sekcji "Domain & Routes" kliknij "..." i wybierz "Disable preview URL" oraz "Disable domain".

### 3. Konfiguracja trasy (Route)
1. Przejdź do ustawień swojej domeny i skonfiguruj Worker route. Po lewej stronie panelu Cloudflare wybierz "Rules" -> "Page rules".
2. Po prawej stronie pokaże się "Traffic sequence". Zjedź na dół i wybierz "Workers".
3. W sekcji HTTP Routes kliknij "Add route". W polu "Route" wpisz `*twoja-domena.pl/*`, a w polu "Worker" wybierz swojego Workera (najprawdopodobniej będzie to `cloudflare-error-pages`).
4. ZALECANE! Rozwiń sekcję "Request limit failure mode" i wybierz "Fail open (proceed)". Dzięki temu, gdy Worker osiągnie limit zapytań (100 000 zapytań dla planu Free), użytkownicy nadal będą mogli korzystać z serwisu, ale bez niestandardowych stron błędu (wyświetli się domyślna strona błędu Cloudflare).
5. Naciśnij save i zmiany będą widoczne odrazu.