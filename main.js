import QrCreator from './node_modules/qr-creator/dist/qr-creator.es6.min.js'

var jan = ["Maslawa, Mieczyslawa, Monthzka", "Bazylego, Makarego, Narcyzy", "Arlety, Danuty, Lucjana", "Anieli, Elzbiety, Tytusa", "Edwarda, Hanny, Szymona", "Kacpra, Melchiora, Baltazara", "Juliana, Lucjana, Walentyny", "Artura, Rajmunda, Seweryny", "Adriana, Alicji, Teresy", "Ady, Jana, Wilhelma", "Feliksa, Honoraty, Marty", "Bernarda, Czeslawy, Grety", "Bogumila, Bogumily, Weroniki", "Feliksa, Hilarego, Martyny", "Arnolda, Dory, Pawla", "Mascelego, Walerii, Wlodzimierza", "Antoniego, Henryki, Mariana", "Beatrycze, Malgorzaty, Piotra", "Erwiny, Henryka, Mariusza", "Fabioli, Mily, Sebastiana", "Agnieszki, Jaroslawa, Nory", "Dominiki, Mateusza, Wincentego", "Fernandy, Jana, Rajmundy", "Felicji, Roberta, Slawy", "Milosza, Pawla, Tatiany", "Lutoslawa, Normy, Pauliny", "Anieli, Juliana, Przemyslawa", "Agnieszki, Kariny, Leslawa", "Franciszka, Konstancji, Salomei", "Martyny, Macieja, Teofila", "Joanny, Ksawerego, Luizy"]

var feb = ["Brygidy, Dobrogniewa, Ignacego", "Kornela, Marii, Miroslawy", "Blazeja, Joanny, Telimeny", "Andrzeja, Mariusza, Weroniki", "Agaty, Filipa, Justyniana", "Amandy, Bogdana, Doroty", "Ryszarda, Teodora, Wilhelminy", "Irminy, Piotra, Sylwii", "Bernarda, Eryki, Rajmunda", "Elwiry, Elizy, Jacka", "Bernadetty, Marii, Olgierda", "Czaslawa, Damiana, Normy", "Grzegorza, Leslawa, Katarzyny", "Liliany, Walentyny, Walentego", "Arnolda, Jowity, Georginy", "Danuty, Daniela, Juliany", "Donata, Gizeli, Lukasza", "Konstancji, Krystiana, Sylwany", "Bettiny, Konrada, Miroslawa", "Anety, Lehca, Leona", "Eleonory, Lenki, Kiejstuta", "Malgorzaty, Marty, Nikifora", "Damiana, Romana, Romany", "Boguty, Bogusza, Macieja", "Almy, Cezarego, Jaroslawa", "Bogumila, Eweliny, Miroslawa", "Gagrieli, Liwii, Leonarda", "Ludomira, Makarego, Wiliany", "Lecha, Lutomira"]

var mar = ["Albina, Antoniny, Radoslawy", "Halszki, Heleny, Karola", "Kingi, Maryna, Tycjana", "Adrianny, Kazimierza, Waclawa", "Aurory, Fryderyka, Oliwii", "Jordana, Marcina, Rozy", "Flicyty, Kajetana, Pauli", "Beaty, Juliana, Wincentego", "Dominika, Franciszki, Katarzyny", "Bozyslawy, Cypriana, Marcelego", "Konstantego, Ludoslawa, Rozyny", "Grzegorza, Justyny, Jozefiny", "Bozeny, Krystyny, Marka", "Dalii, Leona, Matyldy", "Delfiny, Longina, Ludwiki", "Izabeli, Henryka, Oktawii", "Reginy, Patryka, Zdyszka", "Edwarda, Narcyza, Zbyslawa", "Aleksandryny, Jozefa, Nicety", "Joachima, Kiry, Maurycego", "Benedykta, Lubomiry, Lubomira", "Boguslawa, Jagody, Katarzyny", "Feliksa, Konrada, Zbyslawy", "Gabrieli, Marka, Seweryna", "Bolka, Cezaryny, Marioli", "Dory, Olgi, Teodora", "Ernesta, Jana, Marka", "Anieli, Kasrota, Soni", "Marka, Wiktoryny, Zenona", "Amelii, Dobromira, Leonarda", "Balbiny, Kamila, Kornelii"]

var apr = ["Chryzamtyny, Grazyny, Zygmunta", "Franciszka, Malwiny, Wladyslawa", "Pankracego, Renaty, Ryszarda", "Benedykta, Izodory, Waclawy", "Ireny, Kleofasa, Wincentego", "Ady, Celestyny, Ireneusza", "Donata, Herminy, Rufina", "Amadeusza, Cezaryny, Juliany", "Mai, Marcelego, Wadima", "Boryslawy, makarego, Michala", "Filipa, Izoldy, Leona", "Juliusza, Luboslawa, Wiktoryny", "Artemona, Justyny, Przemyslawy", "Bernarda, Martyny, Waleriana", "Adolfiny, Odetty, Waclawa", "Bernarda, Biruty, Erwina", "Anicety, Klary, Rudolfina", "Apoloniusza, Boguslawy, Goscislawy", "Alfa, Leonii, Tytusa", "Agnieszki, Amalii, Czecha", "Jaroslawa, Konrada, Selmy", "Lukasza, Kai, Nastazji", "Ilony, Jerzego, Wojciecha", "Bony, Horacji, Jerzego", "Jaroslawa, Marka, Wiki", "Marii, Marzeny, Ryszarda", "Sergiusza, Teofila, Zyty", "Bogny, Walerii, Witalisa", "Hugona, Piotra, Roberty", "Balladyny, Lilli, Mariana"]

var may = ["Jozefa, Lubomira, Ramony", "Longiny, Toli, Zygmunta", "Jaropelka, Marii, Niny", "Floriana, Michala, Moniki", "Irydy, Tamary, Waldemara", "Beniny, Filipa, Judyty", "Augusta, Gizeli, Ludomiry", "Kornela, Lizy, Stanislawa", "Grzegorza, Karoliny, Karola", "Antoniny, Izydory, Jana", "Igi, Mamerta, Miry", "Dominika, Imeldy, Pankracego", "Agnieszki, Magdaleny, Serwacego", "Bonifacego, Julity, Macieja", "Dionizego, Nadziei, Zofii", "Andrzeja, Jedrzeja, Malgorzaty", "Brunony, Slawomira, Wery", "Alicji, Edwina, Eryka", "Celestyny, Iwony, Piotra", "Bazylego, Bernardyna, Krystyny", "Jana, Moniki, Wiktora", "Emila, Neleny, Romy", "Leoncjusza, Michala, Renaty", "Joanny, Zdenka, Zuzanny", "Borysa, Magdy, Marii-Magdaleny", "Eweliny, Jana, Pawla", "Amandy, Jana, Juliana", "Augustyna, Ingi, Jaromira", "Benity, Maksymiliana, Teodozji", "Ferdynanda, Gryzeldy, Zyndrama", "Anieli, Feliksa, Kamili"]

var june = ["Gracji, Jakuba, Konrada", "Erazma, Marianny, Marzeny", "Anatola, Leszka, Tamary", "Christy, Helgi, Karola", "Bonifacego, Kiry, Waltera", "Laury, Laurentego, Nory", "Ariadayy, Jaroslawa, Roberta", "Ady, Celii, Medarda", "Anny-Marii, Felicjana, Slawoja", "Bogumila, Diany, Malgorzaty", "Barnaby, Benedykta, Flory", "Gwidona, Leonii, Niny", "Antoniego, Gracji, Lucjana", "Bazylego, Elizy, Justyny", "Jolanty, Lotara, Wita", "Aliny, Anety, Benona", "Laury, Leszka, Marcjana", "Elzbiety, Marka, Pauli", "Gerwazego, Protazego, Sylwii", "Bogny, Rafaeli, Rafala", "Alicji, Alojzego, Rudolfa", "Pauliny, Sabiny, Tomasza", "Albina, Wandy, Zenona", "Danuty, Jana, Janiny", "Lucji, Witolda, Wilhelma", "Jana, Pauliny, Rudolfiny", "Cypriana, Emanueli, Wladyslawa", "Florentyny, Ligii, Leona", "Pawla, Piotra, Salomei", "Arnolda, Emiliany, Lucyny"]

var july = ["Bogusza, Haliny, Mariana", "Kariny, Serafiny, Urbana", "Anatola, Jacka, Miroslawy", "Aureli, Malwiny, Zygfryda", "Antoniego, Bartlomieja, Karoliny", "Dominiki, Jaropelka, Lucji", "Estery, Kiry, Rudolfa", "Arnolda, Edgara, Elzbiety", "Hieronima, Palomy, Weroniki", "Filipa, Sylwany, Witalisa", "Benedykta, Kariny, Olgi", "Brunona, Jana, Wery", "Danieli, Irwina, Malgorzaty", "Kamili, Kamila, Marcelego", "Henryka, Igi, Wlodzimierza", "Eustachego, Mariki, Mirelli", "Aleksego, Bogdana, Martyny", "Kamila, Karoliny, Roberta", "Alfreny, Rufina, Wincentego", "Fryderyka, Malgorzaty, Seweryny", "Danieli, Wawrzynca, Wiktora", "Magdaleny, Mileny, Wawrzynca", "Slawy, Slawosza, Zelislawy", "Kingi, Krystyna, Michaliny", "jakuba, Krzysztofa, Walentyny", "Anny, Miroslawy, Joachima", "Aureliusza, Natalii, Rudolfa", "Ady, Wiwiany, Sylwiusza", "Marty, Konstantego, Olafa", "Julity, Ludmily, Zdobyslawa", "Ignacego, Lodomiry, Romana"]

var august = ["Jaroslawa, Justyny, Nadziei", "Gustawa, Kariny, Stefana", "Augustyna, Kamelii, Lidii", "Dominiki, Dominika, Protazego", "Emila, Karoliny, Kary", "Jakuba, Slawy, Wincentego", "Donaty, Olechny, Kajetana", "Izy, Rajmunda, Seweryna", "Klary, Romana, Rozyny", "Bianki, Borysa, Wawrzynca", "Luizy, Wlodzmierza, Zuzanny", "Hilarii, Juliana, Lecha", "Elwiry, Hipolita, Radoslawy", "Alfreda, Maksymiliana, Selmy", "Marii, napoleona, Stelii", "Joachima, Nory, Stefana", "Anity, Elizy, Mirona", "Boguslawa, Bronislawa, Ilony", "Emilii, Julinana, Konstancji", "Bernarda, Sabiny, Samuela", "Franciszka, Kazimiery, Ruty", "Cezarego, Marii, Zygfryda", "Apolinarego, Mily, Rozy", "Bartosza, Jerzego, Maliny", "Belii, Ludwika, Luizy", "Ireneusza, Konstantego, Marii", "Cezarego, Malgorzaty, Moniki", "Adeliny, Erazma, Sobieslawa", "Beaty, Racibora, Sabiny", "Benona, Jowity, Szczesnego", "Cyrusa, Izabeli, Rajmundy"]

var sep = ["Belindy, Bronisza, Idziego", "Dionizy, Izy, Juliana", "Joachima, Liliany, Szymona", "Dalii, Idy, Rocha", "Doroty, Justyna, Wawrzynca", "Beaty, Eugeniusza, Lidy", "Reginy, Marka, Melchiora", "Czcibora, Marii, Serafiny", "Aldony, Jakuba, Sergiusza", "Eligii, Irmy, Lukasza", "Dagny, Jacka, Prota", "Amadeusza, Gwidy, Sylwiny", "Apolinarego, Eugenii, Lubomira", "Bernarda, Mony, Roksany", "Albina, Lolity, Ronalda", "Jagienki, Kamili, Korneliusza", "Franciszka, Lamberty, Narcyza", "Ireny, Irminy, Stanislawa", "Januarego, Konstancji, Leopolda", "Eustachego, Faustyny, Renaty", "Darii, Mateusza, Wawrzynca", "Maury, Milany, Tomasza", "Boguslawa, Liwiusza, Tekli", "Dory, Gerarda, Maryny", "Aureli, Kamila, Kleofasa", "Cypriana, Justyny, Lucji", "Damiana, Mirabeli, Wincentego", "Libuszy, Waclawy, Waclawa", "Michaliny, Michala, Rafala", "Geraldy, Honoriusza, Wery"]

var oct = ["Heloizy, Igora, Remigiusza", "Racheli, Slawy, Teofila", "Bogumila, Gerarda, Jozefy", "Edwina, Roslawy, Rozalii", "Flawii, Justyna, Rajmunda", "Artura, Fryderyki, Petry", "Krystyna, Marii, Marka", "Brygidy, Loreny, Marcina", "Arnolda, Ludwika, Sybili", "Franciszka, Loretty, Poli", "Aldony, Brunona, Emila", "Krystyny, Maksa, Serafiny", "Edwarda, Geraldyny, Teofila", "Alany, Damiana, Liwii", "Jadwigi, Leonarda, Teresy", "Ambrozego, Florentyny, Gawla", "Antonii, Ignacego, Wiktora", "Hanny, Klementyny, Lukasza", "Michaliny, Michala, Piotra", "Ireny, Kleopatry, Witalisa", "Celiny, Hilarego, Janusza", "Haliszki, Lody, Przybyslawa", "Edwarda, Marleny, Seweryna", "Arety, Marty, Marcina", "Ingi, Maurycego, Sambora", "Ewarysta, Lucyny, Lutoslawy", "Iwony, Noemi, Szymona", "Narcyza, Serafina, Wioletty", "Angeli, Przemyslawa, Zenobii", "Augustyny, Lukasza, Urbana"]

var nov = ["Konrada, Seweryny, Wiktoryny", "Bohdany, Henryka, Tobiasza", "Huberta, Mily, Sylwii", "Albertyny, Karola, Olgierda", "Balladyny, Elzbiety, Slawomira", "Arletty, Feliksa, Leonarda", "Antoniego, Kaliny, Przemily", "Klaudii, Seweryna, Wiktoriusza", "Anatolii, Gracji, Teodora", "Leny, Lubomira, Natalii", "Bartlomieja, Gertrudy, Marcina", "Konrada, Renaty, Witolda", "Arkadii, Krystyna, Stanislawy", "Emila, Laury, Rogera", "Amielii, Idalii, Leopolda", "Edmunda, Marii, Marka", "Grzegorza, Salomei, Walerii", "Klaudyny, Romana, Tomasza", "Elzbiety, Faustyny, Pawla", "Anatola, Edyty, Rafala", "Janusza, Marii, Reginy", "Cecylii, Jonatana, Marka", "Adeli, Felicyty, Klemensa", "Emmy, Flory, Romana", "Elzbiety, Katarzyny, Klemensa", "Leona, Leonarda, Leslawy", "Franciszka, Kseni, Maksymiliana", "Jakuba, Stefana, Romy", "Blazeja, Margerity, Saturnina", "Andrzeja, Maury, Ondraszka"]

var dec = ["Blanki, Edmunda, Eligiusza", "Balbiny, Ksawerego, Pauliny", "Hilarego, Franciszki, Ksawery", "Barbary, Hieronima, Krystiana", "Kryspiny, Norberta, Sabiny", "Dionizji, Leontyny, Mikolaja", "Agaty, Dalii, Sobieslawa", "Delfiny, Marii, Wirginiusza", "Anety, Leokadii, Wieslawa", "Danieli, Bohdana, Julii", "Biny, Damazego, Waldemara", "Ady, Aleksandra, Dagmary", "Dalidy, Juliusza, Lucji", "Alfreda, Izydora, Zoriny", "Celiny, Ireneusza, Niny", "Albiny, Sebastiana, Zdzislawy", "Jolanty, Lukasza, Olimpii", "Boguslawa, Gracjana, Laury", "Beniaminy, Dariusza, Gabrieli", "Bogumily, Dominika, Zefiryna", "Honoraty, Seweryny, Tomasza", "Bozeny, Drogomira, Zenona", "Dagny, Slawomiry, Wiktora", "Adama, Ewy, Irminy", "Anety, Glorii, Piotra", "Dionizego, Kaliksta, Szczepana", "Fabioli, Jana, Zanety", "Antoniusza, Cezarego, Teofilii", "Dawida, Dionizy, Tomasza", "Eugeniusza, Katarzyny, Sabiny", "Mariusza, Melanii, Sylwestra"]

let today = new Date()
let day = today.getDate()
let dayoftheweek = today.getDay()
let month = today.getMonth() + 1
let year = today.getFullYear()
let result = ""

if (dayoftheweek == 0) {
    dayoftheweek = "niedziela"
}
if (dayoftheweek == 1) {
    dayoftheweek = "poniedzalek"
}
if (dayoftheweek == 2) {
    dayoftheweek = "wtorek"
}
if (dayoftheweek == 3) {
    dayoftheweek = "sroda"
}
if (dayoftheweek == 4) {
    dayoftheweek = "czwartek"
}
if (dayoftheweek == 5) {
    dayoftheweek = "piatek"
}
if (dayoftheweek == 6) {
    dayoftheweek = "sobota"
}

if (month == 1) {
    month = "stycznia", result = jan[day - 1]
}
if (month == 2) {
    month = "lutego", result = feb[day - 1]
}
if (month == 3) {
    month = "marca", result = mar[day - 1]
}
if (month == 4) {
    month = "kwietnia", result = apr[day - 1]
}
if (month == 5) {
    month = "maja", result = may[day - 1]
}
if (month == 6) {
    month = "czerwca", result = june[day - 1]
}
if (month == 7) {
    month = "lipca", result = july[day - 1]
}
if (month == 8) {
    month = "sierpnia", result = august[day - 1]
}
if (month == 9) {
    month = "wrzesnia", result = sep[day - 1]
}
if (month == 10) {
    month = "pazdiernika", result = oct[day - 1]
}
if (month == 11) {
    month = "listopada", result = nov[day - 1]
}
if (month == 12) {
    month = "grudnia", result = dec[day - 1]
}

console.log("Dzisiaj jest: " + dayoftheweek + ", " + day + " " + month + ", " + year + " roku." + "" + " Imieniny: " + result + ".")
QrCreator.render({
    text: "Dzisiaj jest: " + dayoftheweek + ", " + day + " " + month + ", " + year + " roku." + "" + " Imieniny: " + result + ".",
    radius: 0.5,
    ecLevel: 'H',
    fill: '#536DFE',
    background: null,
    size: 256
}, document.querySelector('#qr-code'))

