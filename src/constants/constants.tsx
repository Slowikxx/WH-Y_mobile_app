const faqQuestions = [
	{
		question:
			'Jakie rodzaje przestępstw mogę zgłaszać za pomocą waszej aplikacji mobilnej i strony internetowej?',
		answer:
			'Wszystkie rodzaje przestępstw i wykroczeń określone w Kodeksie Karnym oraz Kodeksie Wykroczeń.',
	},
	{
		question: 'Czy mogę zgłosić incydent anonimowo?',
		answer:
			'Z uwagi na odpowiedzialność karną ciążącą na zgłaszającym w przypadku fałszywego zgłoszenia nie umożliwiamy zgłaszania incydentów anonimowo.',
	},
	{
		question:
			'Jakie informacje są wymagane podczas zgłaszania przestępstwa lub wykroczenia?',
		answer:
			'Lokalizacja zdarzenia, data i godzina zdarzenia, typ przestępstwa/ wykroczenia lub jego krótki opis.',
	},
	{
		question: 'Czy istnieje możliwość śledzenia statusu mojego zgłoszenia?',
		answer:
			'Tak, na stronie głównej w aplikacji mobilnej oraz w zakładce "moje sprawy" na stronie internetowej znajduje się podgląd zgłoszonych spraw wraz ze statusem nadanym im przez funkcjonariuszy.',
	},
	{
		question:
			'Czy jako zgłaszając sytuację mogę przesłać dowody w postaci zdjęć czy filmów?',
		answer:
			'Tak, w każdym zgłoszeniu możliwe jest dodanie dowodów w postaci zdjęć lub filmów oraz innych plików.',
	},
	{
		question: 'Jakie kroki podejmowane są po złożeniu zgłoszenia?',
		answer:
			'Wysłane zgłoszenie trafia do funkcjonariusz policji w danym rejonie z ustalanym automatycznie priorytetem. Następnie jest wstępnie sprawdzane oraz nadawany jest mu odpowiedni status. ',
	},
	{
		question: 'Czy otrzymam potwierdzenie złożonego zgłoszenia?',
		answer:
			'Status zgłoszenia będzie się zmieniał adekwatnie do podejmowanych czynności.',
	},
	{
		question: 'Jakie statusy może przyjąć moje zgłoszenie?',
		answer:
			'Istnieje 6 rodzajów statusów, które może otrzymać zgłoszenie: wysłane (automatyczne), w toku, nieprzyjęte, zrealizowane, umorzone oraz fałszywe zgłoszenie. Każdy z wymienionych statusów posiada swój unikatowy kolor w celu zapewnienia jak największej transparentności.',
	},
	{
		question: 'Czy mogę edytować lub wycofać zgłoszenie po jego złożeniu? ',
		answer:
			'Z uwagi na charakter pracy Policji nie jest to możliwe. Zgłoszenia przed wysłaniem należy potwierdzać hasłem w celu uniknięcia sytuacji nieprawidłowych zgłoszeń.',
	},
	{
		question:
			'Czy mogę zgłosić sytuację która wydarzyła się poza obszarem na którym mieszkam?',
		answer:
			'Tak, zgłoszenie można przesłać z każdego miejsca w Polsce. Istnieje opcja automatycznego pobrania lokalizacji lub wpisania jej ręcznie.',
	},
	{
		question: 'Jakie są konsekwencje za fałszywe zgłoszenie?',
		answer:
			'Konsekwencją za 3 nieprawidłowe zgłoszenia jest zablokowanie konta a tym samym możliwości dalszego korzystania z aplikacji oraz zgłoszenie tego faktu na policję (paragraf, który to mówi).',
	},
	{
		question: 'Czy przesyłanie zgłoszeń przez tą stronę jest bezpieczne?',
		answer:
			'Przygotowując aplikację oraz stronę internetową dołożyliśmy wszelkich starań aby była ona jak najbezpieczniejsza. Dane jednoznacznie umożliwiające identyfikację są odpowiednio szyfrowane.',
	},
	{
		question: 'Czy istnieje ograniczenie wiekowe dla zgłaszających?',
		answer:
			'Nie istnieje ograniczenie wiekowe dla zgłaszających, lecz każdy zgłaszający zobowiązany jest do zapoznania się z informacjami o odpowiedzialności karnej.',
	},
];

const governmentLinks = [
	{ name: 'Link do strony rodo', link: '#' },
	{ name: 'Link do strony o fałszywych zeznaniach', link: '#' },
	{ name: 'Link do strony o odpowiedzialności karnej nieletnich', link: '#' },
	{
		name: 'Link do strony o obowiązku zawiadomienia o przestępstwie',
		link: '#',
	},
];

const ourLinks = [
	{ name: 'Link do regulaminu', link: '#' },
	{ name: 'Link do polityki bezpieczeństwa', link: '#' },
];

export { faqQuestions, governmentLinks, ourLinks };
