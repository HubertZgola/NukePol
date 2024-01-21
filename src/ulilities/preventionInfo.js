const preventionInfo = {
    overpressure3000psi: `
    Ciśnienie o niewyobrażalnej mocy, niszczy nawet bunkry antyrakietowe.
    `,
    
    overpressure200psi: `
    Przy nadciśnieniu 200 psi powstają ekstremalne uszkodzenia wszystkich struktur cywilnych, nawet tych „utwardzonych” konstrukcji.
    `,
    
    overpressure20psi: `
    Przy nadciśnieniu 20 psi mocno zbudowane budynki betonowe ulegają poważnym uszkodzeniom lub zniszczeniu.
    Śmiertelność zbliża się do 100%. 
    Ciśnienie to jest często używane jako punkt odniesienia dla ciężkich uszkodzeń w miastach.
    `,
    
    overpressure5psi: `
    Przy nadciśnieniu 5 psi większość budynków mieszkalnych się zawala, obrażenia są powszechne, a ofiary śmiertelne są powszechne. 
    Ryzyko wybuchu pożaru, który spowoduje szkody w obiektach komercyjnych i mieszkalnych, jest wysokie
    , a tak uszkodzone budynki są obarczone wysokim ryzykiem rozprzestrzenienia się pożaru. 
    Często używany jako punkt odniesienia dla umiarkowanych uszkodzeń w miastach.
    `,
    
    overpressure1psi: `
    Przy nadciśnieniu około 1 psi można spodziewać się pęknięcia szklanych okien. 
    Może to spowodować wiele obrażeń u okolicznej ludności, 
    która podchodzi do okna po zobaczeniu błysku wybuchu nuklearnego (który przemieszcza się szybciej niż fala ciśnienia). 
    Często używany jako punkt odniesienia dla lekkich uszkodzeń w miastach.
    `,
    
    ionizing20Sv: `
    Przyjęta jednorazowo jest dawką śmiertelną, obezwładniają człowieka w ciągu kilku minut, 
    Na tym poziomie narażenia śmierć jest niemal pewna, więc działania interwencyjne z Dz.U. 2020 poz. 2247, skupiają się na 
    ewakuacji i możliwie najszybszym zapewnieniu specjalistycznej opieki medycznej
    , chociaż szanse na przeżycie są bardzo małe.
    `,
    
    ionizing6Sv: `
    Duże prawdopodobieństwo zgonu, po około miesiącu. 
    Około 20% osób, które przeżyją, ostatecznie umrze na raka w wyniku narażenia.
    Należy zastosować środki wymienione w Dz.U. 2020 poz. 2247
    , takie jak ewakuacja i podanie preparatu ze stabilnym jodem
    , a także zapewnić intensywną opiekę medyczną ze względu na wysokie ryzyko ostrych skutków zdrowotnych.
    `,
    
    ionizing1Sv: `
    Wywołuje chorobę, ryzyko śmierci w ciągu 60 dni mniejsze niż 5%. 
    3% osób, które przeżyją, umrze na raka w wyniku narażenia.
    Należy zastosować środki wymienione w Dz.U. 2020 poz. 2247
    , takie jak ewakuacja i podanie preparatu ze stabilnym jodem
    `,

    ionizing01Sv: `
    Brak natychmiastowych objawów. Mniej niż 1% osób, które przeżyją, umrze na raka w wyniku narażenia.
    Zgodnie z Dz.U. 2020 poz. 2247,
    zaleca się podanie preparatów ze stabilnym jodem w przypadku stwierdzenia w strefie zewnętrznej 
    lub u osób pochodzących ze strefy zewnętrznej wartości operacyjnych poziomów interwencyjnych
    `,
    
    ionizing0025Sv: `
    Brak natychmiastowych objawów.
    Przy takiej dawce, profilaktyka obejmuje monitorowanie zdrowia i promieniowania, a także przygotowanie do ewakuacji w przypadku wzrostu poziomu promieniowania.
    `,

    
    Pierwszego: `
    Oparzenie I stopnia obejmuje wyłącznie naskórek i charakteryzuje się bolesnym zaczerwienieniem na powierzchni skóry. 
    Towarzyszy mu obrzęk, ale nie pojawiają się pęcherze. 
    Wyleczenie zwykle następuje po kilku dniach i nie pozostawia śladów ani blizn. 
    Kiedy udzielamy pierwszej pomocy osobie oparzonej, zawsze w pierwszej kolejności musimy pamiętać o zapewnieniu bezpieczeństwa ratującemu! 
    Należy zaopatrywać chorego zawsze w bezpiecznym miejscu. 
    Jeśli doszło do lekkiego oparzenia, chłodzimy poparzoną skórę zgodnie z zasadą „trzech piętnastek”
    , czyli przez 15 minut polewamy ranę wodą o temperaturze ok. 15 st. C, z wysokości ok. 15 centymetrów. 
    Pamiętajmy, by nie polewać bezpośrednio miejsca oparzenia, ale powyżej! 
    Działając w ten sposób, ochładzamy ciało, unikając dalszego uszkodzenia, i zatrzymując przegrzewanie tkanek. 
    Nie schładzajmy poszkodowanego lodem, ani nie zanurzajmy go w lodowatej wodzie, by go nie przeziębić. 
    Po schłodzeniu skóry, ranę należy zabezpieczyć opatrunkiem hydrożelowym, lub jałowym gazikiem, a następnie lekko owinąć bandażem. 
    Pod żadnym pozorem nie można smarować rany tłuszczem, żadnymi przypadkowymi maściami, ani polewać alkoholem. 
    Możemy natomiast zastosować leki dedykowane oparzeniom, polecone przez lekarza lub farmaceutę. 
    Nie należy także samodzielnie przekłuwać pęcherzy, bo może dojść do zakażenia. 
    Tę czynność, może wykonać wyłącznie osoba wykwalifikowana. 
    (https://ratownictwomedyczne.mz.gov.pl/bez-kategorii/pierwsza-pomoc-w-przypadku-oparzenia/)
    `,
    
    Drugiego: `
    Oparzenie II stopnia dotyczy zarówno naskórka, jak i części skóry. W tym przypadku, w ciągu pierwszych 24 godzin, pojawiają się pęcherze.
    Ten stopień charakteryzuje się większą bolesnością i dłuższym czasem gojenia.
    Jeśli doszło do ciężkich oparzeń II stopnia, czyli takich, które obejmują 10% ciała lub więcej 
    (przyjmując, że 1% powierzchni ciała, to mniej więcej wielkość dłoni osoby poszkodowanej)
    ,należy udać się na SOR lub wezwać pogotowie ratunkowe.
    Próby samodzielnego leczenia takich obrażeń ciała, mogę spowodować zaostrzenie dolegliwości i pogłębić ból. 
    (https://ratownictwomedyczne.mz.gov.pl/bez-kategorii/pierwsza-pomoc-w-przypadku-oparzenia/)
    `,
    
    Trzeciego: `
    Oparzenie III stopnia obejmuje całą grubość skóry. Staje się ona martwa i nie reaguje na dotyk lub ukłucie
    , w związku z tym, że dochodzi do uszkodzenia receptorów czuciowych.  
    Dotkliwy ból odczuwalny jest jedynie na obrzeżach oparzenia, zaś samo miejsce oparzenia nie boli. 
    Nie występują pęcherze, rany są suche, śnieżnobiałe lub barwy szarawej. 
    Wyleczenie oparzeń III zawsze jest długotrwałe, częściowe, a na skórze pozostają zwykłe rozległe, głębokie blizny.
    Jeśli doszło do ciężkich oparzeń III stopnia, czyli takich, które obejmują 10% ciała lub więcej 
    (przyjmując, że 1% powierzchni ciała, to mniej więcej wielkość dłoni osoby poszkodowanej)
    , należy udać się na SOR lub wezwać pogotowie ratunkowe.
    Próby samodzielnego leczenia takich obrażeń ciała, mogę spowodować zaostrzenie dolegliwości i pogłębić ból.
    (https://ratownictwomedyczne.mz.gov.pl/bez-kategorii/pierwsza-pomoc-w-przypadku-oparzenia/)
    `,
    
    fireball: `
    Wszystko, co znajduje się wewnątrz kuli ognia, zostaje skutecznie odparowane.
    `
  };
  
  export default preventionInfo;