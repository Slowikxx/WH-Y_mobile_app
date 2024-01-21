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

const offenses = [
	{
		name: 'Przeciwko porządkowi i spokojowi publicznemu',
		offenses: [
			'Art. 49. [Lekceważenie Narodu Polskiego i konstytucyjnych organów]',
			'Art. 49a. [Nielegalne przekroczenie granicy państwowej]',
			'Art. 50. [Nieopuszczenie zbiegowiska publicznego]',
			'Art. 51. [Zakłócenie spokoju lub porządku publicznego]',
			'Art. 52. [Naruszenie przepisów o zgromadzeniach]',
			'Art. 52a. [Nawoływanie do przestępstwa, przeciwdziałania przemocą prawu lub pochwalanie przestępstwa]',
			'Art. 52b. [Zużywanie oleju opałowego do celów napędowych]',
			'Art. 54. [Naruszenie przepisów porządkowych]',
			'Art. 55. [Kąpiel w miejscu zabronionym]',
			'Art. 56. [Publiczna zbiórka ofiar bez zgłoszenia]',
			'Art. 57. [Publiczna zbiórka ofiar na uiszczenie grzywny; niedozwolone uiszczenie za skazanego lub ukaranego grzywny, nawiązki, odszkodowania lub innej kwoty]',
			'Art. 58. [Żebractwo w miejscu publicznym]',
			'Art. 60.1. [Nielegalne wykonywanie działalności gospodarczej]',
			'Art. 60.3 [Sprzedaż poza miejscem wyznaczonym przez gminę]',
			'Art. 61 [Przywłaszczenie stanowiska, tytułu, stopnia]',
			'Art. 63. [Bezprawne wykonywanie działalności telekomunikacyjnej]',
			'Art. 63a. [Bezprawne ogłoszenia]',
			'Art. 63b. [Sprzeczne z prawem umieszczanie reklam w pobliżu dróg publicznych]',
		],
	},
	{
		name: 'Przeciwko instytucjom państwowym, samorządowym i społecznym',
		offenses: [
			'Art. 65. [Wprowadzanie w błąd organu państwowego lub instytucji]',
			'Art. 66. [Wywołanie fałszywego alarmu]',
			'Art. 66a. [Zniszczenie lub uszkodzenie urządzenia związanego z dozorem elektronicznym]',
			'Art. 66b. [Niestosowanie się do nakazów, zakazów i orzeczeń wydanych w sprawach z zakresu przeciwdziałania przemocy domowej]',
			'Art. 66c. [Niestosowanie się do obowiązków przez osoby stosujące przemoc domową skierowane do uczestnictwa w programach korekcyjno-edukacyjnych lub programach psychologiczno-terapeutycznych]',
			'Art. 67. [Uszkodzenie lub bezprawne usunięcie ogłoszenia]',
			'Art. 68. [Bezprawny wyrób pieczęci, godła, znaku]',
			'Art. 69. [Umyślne niszczenie, uszkadzanie, usuwanie znaków]',
		],
	},
	{
		name: 'Przeciwko bezpieczeństwu osób i mienia',
		offenses: [
			'Art. 70. [Wykonywanie czynności przez osobę do tego niezdolną]',
			'Art. 71. [Wadliwe wykonanie urządzeń lub uczynienie ich niezdatnymi]',
			'Art. 72. [Niezabezpieczenie wbrew obowiązkowi miejsca niebezpiecznego]',
			'Art. 73. [Niezawiadomienie wbrew obowiązkowi o niebezpieczeństwie]',
			'Art. 74. [Niszczenie, uszkadzanie, usuwanie znaków ostrzegawczych]',
			'Art. 75. [Nieostrożne wystawianie lub wywieszanie przedmiotów]',
			'Art. 76. [Rzucanie przedmiotami w pojazd mechaniczny]',
			'Art. 77. [Niezachowanie ostrożności przy trzymaniu zwierzęcia]',
			'Art. 78. [Drażnienie lub płoszenie zwierzęcia]',
			'Art. 79. [Zaniechanie wbrew obowiązkowi oświetlenia miejsca publicznego]',
			'Art. 80. [Uszkadzanie wału przeciwpowodziowego]',
			'Art. 81. [Niszczenie lub uszkadzanie urządzeń ochrony brzegów wodnych]',
			'Art. 82. [Niewykonywanie obowiązków przeciwpożarowych]',
			'Art. 82a. [Niedopełnianie obowiązków w razie powstania pożaru]',
			'Art. 83. [Nieostrożne obchodzenie się z materiałami wybuchowymi]',
		],
	},
	{
		name: 'Przeciwko bezpieczeństwu i porządkowi w komunikacji',
		offenses: [
			'Art. 84. [Nieoznaczenie wbrew obowiązkowi przeszkody w ruchu]',
			'Art. 85. [Samowolne ustawianie, niszczenie, uszkadzanie znaków]',
			'Art. 85a. [Znakowanie dróg wewnętrznych]',
			'Art. 86. [Zagrożenie bezpieczeństwa w ruchu drogowym]',
			'Art. 86a. [Przekraczanie dopuszczalnej prędkości na chodniku lub drodze dla pieszych przez kierującego rowerem, hulajnogą elektryczną lub urządzeniem transportu osobistego oraz przez osobę poruszającą się przy użyciu urządzenia wspomagającego ruch; nieustąpienie pierwszeństwa pieszemu]',
			'Art. 86b. [Nieustąpienie pierwszeństwa pieszemu i inne wykroczenia naruszające pierwszeństwo pieszego]',
			'Art. 87. [Prowadzenie pojazdu w stanie po użyciu alkoholu]',
			'Art. 88. [Prowadzenie nieoświetlonego pojazdu]',
			'Art. 89. [Dopuszczenie małoletniego do przebywania na drodze publicznej]',
			'Art. 90. [Tamowanie lub utrudnianie ruchu]',
			'Art. 91. [Zanieczyszczenie drogi publicznej]',
			'Art. 92. [Niestosowanie się do znaku, sygnału lub polecenia w ruchu drogowym]',
			'Art. 92a. [Przekroczenie prędkości]',
			'Art. 92b. [Naruszenie zakazu wyprzedzania]',
			'Art. 93. [Nieudzielenie pomocy ofierze wypadku]',
			'Art. 94. [Prowadzenie pojazdu bez uprawnienia]',
			'Art. 95. [Prowadzenie pojazdu bez wymaganych dokumentów]',
			'Art. 95a. [Posługiwanie się dowodem rejestracyjnym z nieprawdziwymi danymi]',
			'Art. 96. [Dopuszczenie do prowadzenia pojazdu wbrew wymaganiom]',
			'Art. 96a. [Nieuprawnione oznakowanie pojazdu jako uprzywilejowanego]',
			'Art. 96b. [Nieuprawnione posługiwanie się kartą parkingową]',
			'Art. 96c. [Naruszenie zakazu wjazdu do strefy czystego transportu]',
			'Art. 96d. [Przekazywanie osobie nieuprawnionej dokumentów związanych z profesjonalną rejestracją pojazdów]',
			'Art. 97. [Naruszenie przepisów o bezpieczeństwie lub porządku w ruchu drogowym]',
			'Art. 97a. [Niedozwolone objeżdżanie zapór na przejazdach kolejowych i wjeżdżanie na przejazdy kolejowe]',
			'Art. 98. [Niezachowanie ostrożności przy korzystaniu z dróg wewnętrznych]',
			'Art. 99. [Naruszenie stanu fizycznego drogi publicznej]',
			'Art. 100. [Uszkodzenie drogi publicznej]',
			'Art. 101. [Nieoczyszczenie drogi wbrew obowiązkowi]',
			'Art. 102. [Niezachowanie należytego stanu zjazdu z drogi]',
			'Art. 103. [Uchylanie się od obowiązku świadczeń w celu utrzymania drogi w należytym stanie]',
		],
	},
	{
		name: 'Przeciwko osobie',
		offenses: [
			'Art. 104. [Skłanianie do żebractwa]',
			'Art. 105. [Naruszenie obowiązków rodzicielskich lub opiekuńczych]',
			'Art. 106. [Dopuszczenie do przebywania małoletniego w okolicznościach niebezpiecznych]',
			'Art. 107. [Złośliwe niepokojenie drugiego człowieka]',
			'Art. 107a. [Zakłócanie przebiegu zdalnej komunikacji prowadzonej za pomocą systemów teleinformatycznych]',
			'Art. 108. [Szczucie psem człowieka]',
		],
	},
	{
		name: 'Przeciwko zdrowiu',
		offenses: [
			'Art. 109. [Zanieczyszczenie wody]',
			'Art. 110. [Zatrudnienie chorego przy niedozwolonych pracach]',
			'Art. 111. [Niezachowanie należytego stanu sanitarnego]',
			'Art. 113. [Niezachowanie należytej czystości przy świadczeniu usług]',
			'Art. 114. [Odmowa udzielenia wyjaśnień organowi służby zdrowia]',
			'Art. 115. [Niepoddanie się obowiązkowi szczepienia lub badania]',
			'Art. 116. [Nieprzestrzeganie zakazów, nakazów, ograniczeń lub obowiązków wynikających z przepisów o zapobieganiu oraz zwalczaniu zakażeń i chorób zakaźnych lub z decyzji wydanych na podstawie tych przepisów]',
			'Art. 117. [Niespełnianie obowiązków w zakresie utrzymania czystości i porządku]',
			'Art. 118. [Ubój zwierzęcia bez zezwolenia lub wbrew warunkom zezwolenia]',
		],
	},
	{
		name: 'Przeciwko mieniu',
		offenses: [
			'Art. 119. [Kradzież lub przywłaszczenie]',
			'Art. 120. [Kradzież leśna]',
			'Art. 121. [Szalbierstwo]',
			'Art. 122. [Paserstwo]',
			'Art. 123. [Kradzież ogrodowa]',
			'Art. 124. [Niszczenie lub uszkadzanie cudzej rzeczy]',
			'Art. 125. [Niezawiadomienie w terminie o znalezieniu cudzej rzeczy]',
			'Art. 126. [Kradzież, przywłaszczenie, niszczenie cudzej rzeczy niemajątkowej]',
			'Art. 127. [Samowolne użycie cudzej rzeczy]',
			'Art. 128. [Urządzanie gry hazardowej]',
			'Art. 129. [Wyrób, posiadanie, nabywanie, dostarczanie wytrychów]',
			'Art. 130. [Wyłączenie stosowania niektórych przepisów kodeksu wykroczeń w szczególnych okolicznościach]',
			'Art. 131. [Odpowiedzialność za wykroczenia popełnione za granicą]',
		],
	},
	{
		name: 'Przeciwko interesom konsumentów',
		offenses: [
			'Art. 133. [Spekulacja biletami]',
			'Art. 134. [Oszustwo gospodarcze]',
			'Art. 135. [Ukrywanie towaru lub odmowa jego sprzedaży]',
			'Art. 136. [Usuwanie oznaczeń z towarów]',
			'Art. 137. [Nieposiadanie faktur]',
			'Art. 138. [Nieprzestrzeganie zasad wynagrodzeń za usługę. Odmowa świadczenia usługi]',
			'Art. 138b. [Niestosowanie się do orzeczenia sądu w przedmiocie stosowania warunków umów]',
			'Art. 138c. [Naruszenie warunków kredytu konsumenckiego; naruszenie zakazu przenoszenia przez indos weksla wystawionego przez konsumenta]',
			'Art. 138d. [Wprowadzenie w błąd co do posiadanych uprawnień]',
			'Art. 139a. [Wykroczenia związane z prowadzeniem przedsiębiorstwa]',
			'Art. 139b. [Niedopełnienie obowiązków informacyjnych wobec konsumenta]',
			'Art. 139c. [Przyjęcie płatności od konsumenta przed upływem terminu do odstąpienia od umowy w przypadku zawarcia umowy podczas wycieczki, nieumówionej wizyty przedsiębiorcy lub pokazu]',
		],
	},
	{
		name: 'Przeciwko obyczajności publicznej',
		offenses: [
			'Art. 140. [Nieobyczajny wybryk]',
			'Art. 141. [Nieobyczajne ogłoszenie, napis, rysunek]',
			'Art. 142. [Proponowanie czynu nierządnego z chęci korzyści majątkowej]',
		],
	},
	{
		name: 'Przeciwko urządzeniom użytku publicznego',
		offenses: [
			'Art. 143. [Utrudnianie lub uniemożliwianie korzystania z urządzeń użytku publicznego]',
			'Art. 144. [Niszczenie, uszkadzanie roślinności, trawników lub zieleńca]',
			'Art. 145. [Zaśmiecanie miejsc publicznych]',
		],
	},
	{
		name: 'Przeciwko obowiązkowi ewidencji',
		offenses: [
			'Art. 146. [Zaniechanie zgłoszenia w terminie urodzenia lub zgonu]',
			'Art. 147a. [Wykonywanie działalności leczniczej lub prowadzenie zakładu leczniczego dla zwierząt bez zgłoszenia]',
		],
	},
	{
		name: 'Szkodnictwo leśne, polne i ogrodowe',
		offenses: [
			'Art. 148. [Szkodnictwo leśne]',
			'Art. 149. [Paserstwo leśne]',
			'Art. 150. [Szkodnictwo ogrodowe]',
			'Art. 151. [Wypas zwierząt na cudzym gruncie]',
			'Art. 152. [Niszczenie kosodrzewiny]',
			'Art. 153. [Drobne szkodnictwo leśne]',
			'Art. 154. [Nieuprawnione kopalnictwo na cudzym gruncie leśnym lub polnym]',
			'Art. 155. [Niszczenie lub uszkadzanie urządzeń melioracyjnych]',
			'Art. 156. [Niszczenie zasiewów, sadzonek lub traw]',
			'Art. 157. [Nieopuszczenie wbrew żądaniu cudzego terenu]',
			'Art. 158. [Wyrąb drzewa w lesie niezgodnie z warunkami]',
			'Art. 159. [Niedopełnienie obowiązku ochrony lasu przed szkodnikami]',
			'Art. 160. [Bezprawna zamiana lasu na uprawę rolną]',
			'Art. 161. [Nieuprawniony wjazd pojazdem do lasu]',
			'Art. 162. [Zanieczyszczenie lasu]',
			'Art. 163. [Niszczenie grzybów w lesie]',
			'Art. 164. [Wybieranie piskląt, niszczenie gniazd, lęgowisk]',
			'Art. 165. [Płoszenie, ściganie, zabijanie zwierząt]',
			'Art. 166. [Puszczanie psa luzem w lesie]',
		],
	},
];

const crimes = [
	{
		name: 'Przeciwko życiu i zdrowiu',
		crimes: [
			'Art. 148. [Zabójstwo]',
			'Art. 148a. [Przyjęcie zlecenia zabójstwa]',
			'Art. 149. [Zabójstwo noworodka]',
			'Art. 150. [Zabójstwo eutanatyczne]',
			'Art. 151. [Doprowadzenie do samobójstwa]',
			'Art. 152. [Aborcja za zgodą kobiety]',
			'Art. 153. [Wymuszona aborcja]',
			'Art. 154. [Śmierć kobiety jako następstwo aborcji]',
			'Art. 155. [Nieumyślne spowodowanie śmierci]',
			'Art. 156. [Ciężki uszczerbek na zdrowiu]',
			'Art. 156a. 116 [Nakłanianie lub zmuszanie innej osoby do spowodowania u niej ciężkiego uszczerbku na zdrowiu]',
			'Art. 157. [Średni i lekki uszczerbek na zdrowiu]',
			'Art. 157a. [Uszczerbek na zdrowiu dziecka poczętego]',
			'Art. 158. [Bójka i pobicie]',
			'Art. 159. [Użycie w bójce i pobiciu niebezpiecznego narzędzia]',
			'Art. 160. [Narażenie człowieka na niebezpieczeństwo]',
			'Art. 161. [Narażenie człowieka na zarażenie]',
			'Art. 162. [Nieudzielenie pomocy]',
		],
	},
	{
		name: 'Przeciwko bezpieczeństwu powszechnemu',
		crimes: [
			'Art. 163. [Sprowadzenie zdarzenia powszechnie niebezpiecznego]',
			'Art. 164. [Sprowadzenie bezpośredniego niebezpieczeństwa zdarzenia]',
			'Art. 165. [Sprowadzenie stanów powszechnie niebezpiecznych dla życia lub zdrowia]',
			'Art. 165a. [Finansowanie przestępstwa o charakterze terrorystycznym]',
			'Art. 166. [Zawładnięcie statkiem wodnym powietrznym, publicznym środkiem transportu lądowego]',
			'Art. 167. [Umieszczenie niebezpiecznego urządzenia lub substancji na statku lub w publicznym środku transportu lądowego]',
			'Art. 168. [Karalność przygotowania]',
			'Art. 171. [Wytwarzanie lub obrót substancjami niebezpiecznymi]',
			'Art. 172. [Przeszkadzanie akcji ratowniczej]',
		],
	},
	{
		name: 'Przeciwko bezpieczeństwu w komunikacji',
		crimes: [
			'Art. 173. [Spowodowanie katastrofy w komunikacji]',
			'Art. 174. [Sprowadzenie niebezpieczeństwa katastrofy w komunikacji]',
			'Art. 175. [Przygotowanie do spowodowania katastrofy]',
			'Art. 177. [Spowodowanie wypadku komunikacyjnego]',
			'Art. 178a. [Prowadzenie pojazdu w stanie nietrzeźwości lub pod wpływem środka odurzającego]',
			'Art. 178b. [Niedostosowanie się do polecenia zatrzymania pojazdu mechanicznego]',
			'Art. 179. [Dopuszczenie do ruchu niebezpiecznego pojazdu]',
			'Art. 180. [Zapewnienie bezpieczeństwa ruchu pojazdów mechanicznych] - Kto, znajdując się w stanie nietrzeźwości lub pod wpływem środka odurzającego, pełni czynności związane bezpośrednio z zapewnieniem bezpieczeństwa ruchu pojazdów mechanicznych, podlega karze pozbawienia wolności od 3 miesięcy do lat 5. Nazwa wydawała się wymagająca wyjaśnienia.',
			'Art. 180a. [Prowadzenie pojazdu po cofnięciu uprawnień]',
		],
	},
	{
		name: 'Przeciwko wolności sumienia i wyznania',
		crimes: [
			'Art. 194. [Dyskryminacja wyznaniowa]',
			'Art. 195. [Złośliwe przeszkadzanie w wykonywaniu aktów religijnych]',
			'Art. 196. [Obraza uczuć religijnych]',
		],
	},
	{
		name: 'Przeciwko wolności seksualnej i obyczajności',
		crimes: [
			'Art. 197. [Zgwałcenie i wymuszenie czynności seksualnej]',
			'Art. 198. [Seksualne wykorzystanie niepoczytalności lub bezradności]',
			'Art. 199. [Seksualne wykorzystanie stosunku zależności lub krytycznego położenia]',
			'Art. 200. [Seksualne wykorzystanie małoletniego]',
			'Art. 200a. [Elektroniczna korupcja seksualna małoletniego]',
			'Art. 200b. [Propagowanie pedofilii]',
			'Art. 201. [Kazirodztwo]',
			'Art. 202. [Publiczne prezentowanie treści pornograficznych]',
			'Art. 203. [Zmuszenie do uprawiania prostytucji]',
			'Art. 204. [Stręczycielstwo, sutenerstwo i kuplerstwo]',
		],
	},
	{
		name: 'Przeciwko rodzinie i opiece',
		crimes: [
			'Art. 206. [Bigamia]',
			'Art. 207. [Znęcanie się]',
			'Art. 208. [Rozpijanie małoletniego]',
			'Art. 209. [Niealimentacja]',
			'Art. 210. [Porzucenie małoletniego lub osoby nieporadnej]',
			'Art. 211. [Uprowadzenie małoletniego lub osoby nieporadnej]',
		],
	},
	{
		name: 'Przeciwko czci i nietykalności cielesnej',
		crimes: [
			'Art. 212. [Zniesławienie]',
			'Art. 216. [Zniewaga]',
			'Art. 217. [Nietykalność cielesna] - naruszenie',
		],
	},
	{
		name: 'Przeciwko prawom osób wykonujących pracę zarobkową',
		crimes: [
			'Art. 218. [Złośliwe lub uporczywe naruszanie praw pracownika]',
			'Art. 218a. [Naruszenie zakazu handlu w niedziele i święta]',
			'Art. 219. [Niezgłoszenie osoby wykonującej pracę zarobkową do ubezpieczenia społecznego]',
			'Art. 220. [Narażenie życia albo zdrowia pracownika]',
			'Art. 221. [Niezawiadomienie o wypadku przy pracy lub chorobie zawodowej osoby wykonującej pracę zarobkową]',
		],
	},
	{
		name: 'Przeciwko porządkowi publicznemu',
		crimes: [
			'Art. 252. [Wzięcie zakładnika]',
			'Art. 254. [Czynny udział w zbiegowisku]',
			'Art. 254a. [Zamach na urządzenia infrastruktury]',
			'Art. 255. [Publiczne nawoływanie do popełnienia występku lub przestępstwa skarbowego]',
			'Art. 255a. [Rozpowszechnianie treści mogących ułatwić popełnienie przestępstwa o charakterze terrorystycznym]',
			'Art. 256. [Propagowanie nazizmu, komunizmu, faszyzmu lub innego ustroju totalitarnego]',
			'Art. 257. [Napaść z powodu ksenofobii, rasizmu lub nietolerancji religijnej]',
			'Art. 258. [Przestępczość zorganizowana. Udział w zorganizowanej grupie przestępczej]',
			'Art. 259a. [Przekraczanie granicy RP w celu popełnienia przestępstwa o charakterze terrorystycznym]',
			'Art. 260. [Zakłócenie przebiegu zgromadzenia]',
			'Art. 261. [Znieważenie pomnika]',
			'Art. 262. [Zbezczeszczenie zwłok]',
			'Art. 263. [Wyrób i handel bronią bez zezwolenia]',
			'Art. 264. [Nielegalne przekroczenie granicy]',
			'Art. 264a. [Umożliwienie nielegalnego pobytu na terytorium RP]',
		],
	},
	{
		name: 'Przeciwko wiarygodności dokumentów',
		crimes: [
			'Art. 270. [Fałszerstwo materialne]',
			'Art. 270a. [Fałszerstwo materialne faktur]',
			'Art. 271. [Fałszerstwo intelektualne]',
			'Art. 271a. [Fałszerstwo intelektualne faktur]',
			'Art. 272. [Wyłudzenie podstępem poświadczenia nieprawdy]',
			'Art. 273. [Używanie dokumentów poświadczających nieprawdę – zawierających fałszerstwo intelektualne]',
			'Art. 274. [Zbycie dokumentu tożsamości]',
			'Art. 275. [Posługiwanie się cudzym dokumentem. Wywóz za granicę]',
			'Art. 276. [Niwelowanie dokumentu]',
			'Art. 277. [Usuwanie znaków granicznych]',
		],
	},
	{
		name: 'Przeciwko mieniu',
		crimes: [
			'Art. 278. [Kradzież]',
			'Art. 279. [Kradzież z włamaniem]',
			'Art. 280. [Rozbój]',
			'Art. 281. [Kradzież rozbójnicza]',
			'Art. 282. [Wymuszenie rozbójnicze]',
			'Art. 284. [Przywłaszczenie]',
			'Art. 285. [Uruchomienie impulsów telefonicznych]',
			'Art. 286. [Oszustwo]',
			'Art. 287. [Oszustwo komputerowe]',
			'Art. 288. [Zniszczenie mienia ruchomego]',
			'Art. 289. [Zabór pojazdu w celu krótkotrwałego użycia]',
			'Art. 290. [Kradzież drzewa z lasu]',
			'Art. 291. [Paserstwo umyślne]',
			'Art. 292. [Paserstwo nieumyślne]',
			'Art. 293. [Paserstwo programu komputerowego]',
		],
	},
	{
		name: 'Przeciwko obrotowi gospodarczemu i interesom majątkowym w obrocie cywilnoprawnym',
		crimes: [
			'Art. 296. [Wyrządzenie szkody w obrocie gospodarczym]',
			'Art. 296a. [Łapownictwo na stanowisku kierowniczym]',
			'Art. 297. [Wyłudzenie kredytu]',
			'Art. 298. [Wyłudzenie odszkodowania]',
			'Art. 299. [Pranie pieniędzy]',
			'Art. 300. [Udaremnienie lub uszczuplenie zaspokojenia wierzyciela]',
			'Art. 301. [Pokrzywdzenie wierzyciela]',
			'Art. 303. [Niwelowanie dokumentacji działalności gospodarczej]',
			'Art. 304. [Wyzysk kontrahenta; żądanie od konsumenta nadmiernych świadczeń z tytułu korzystania z kapitału]',
			'Art. 306. [Fałszowanie znaków identyfikacyjnych]',
			'Art. 306a. [Cofanie lub inna ingerencja we wskazania licznika przebiegu w pojeździe mechanicznym]',
			'Art. 306c. [Zabór tablicy rejestracyjnej pojazdu. Używanie cudzej tablicy rejestracyjnej pojazdu]',
		],
	},
	{
		name: 'Przeciwko obrotowi pieniędzmi i papierami wartościowymi',
		crimes: [
			'Art. 310. [Fałszowanie pieniędzy i innych środków płatniczych albo dokumentów równoznacznych]',
			'Art. 311. [Oszustwo kapitałowe]',
			'Art. 312. [Puszczenie w obieg fałszywych pieniędzy i innych środków płatniczych, dokumentów płatniczych, albo dokumentów równoważnych]',
			'Art. 313. [Fałszowanie urzędowego znaku wartościowego]',
			'Art. 314. [Fałszowanie znaku urzędowego]',
			'Art. 315. [Fałszowanie zalegalizowanego narzędzia pomiarowego lub probierczego]',
		],
	},
];

export { faqQuestions, governmentLinks, ourLinks, offenses, crimes };
