# IT2810 Webutvikling - Gruppe 49 - Prosjekt 2 - Dokumentasjon

## Innhold og funksjonalitet
Applikasjonen er et kunstgalleri som automatisk genererer og viser kunststykker basert på brukerens valg. Brukeren kan velge mellom tre ulike kategorier av bilde, tekst og lyd, og kan så bla seg gjennom fire ulike utstillinger basert på disse valgene. Vi la opp til et enkelt og stilrent design, med tre grupper á tre radiobuttons øverst på skjermen for å velge kategorier, én boks midt på skjermen som inneholder galleriet og knapper for å flytte seg mellom de ulike genererte utstillingene. Nå genereres de samme utstillingene hver gang basert på hvilken “tab” du er på, altså vil du alltid se den samme utstillingen først når du kommer til siden. Om vi hadde lengre tid på utviklingen ville vi lagt inn funksjonalitet for randomisert generering, der elementene ble plukket ut tilfeldig.

### SVG
SVG er formatet brukt på bildene i applikasjonen. De hentes inn ved ajax-kall(mer om dette i “Bruk av teknologi”) og vises i en display-komponent i applikasjonen. Bildene er lastet ned fra https://www.freepik.com/free-icons/animals.

### JSON
Tekstene er tatt fra sangtekster, og hentes også inn i applikasjonen gjennom ajax-kall. Sangtekstene er fra kjente og kjære sanger og ligger fritt tilgjengelig på nettet.

### MP3
Lydfilene er lagret i MP3, og spilles av i applikasjonen gjennom HTML5’s audio-tag.  Vi fant lydfilene fritt tilgjengelig på nettet.

## Bruk av teknologi
For å møte kravene for prosjektet har vi benyttet oss av React og ajax for å lage en responsiv applikasjon med brukervennlig design.

### React
React er et javascript-bibliotek som gjør det enklere å lage brukervennlige, responsive sider. Det gjør det enkelt å dynamisk bytte ut elementer basert på brukerinput, som er den funksjonaliteten vi har benyttet oss mye av i denne applikasjonen. I react gjøres nettsiden om til ulike komponenter. Dette gir god oversikt og modularitet. React bruker et språk kalt JSX(JavaScript XML) som blant annet gjør det mulig å skrive kode i HTML-taggene.

### Ajax
Ajax(Asynchronous JavaScript and XML) er et webutviklingsverktøy som brukes for å lage interaktive og responsive nettsider. Ved å bruke ajax kan vi hente den dataen vi trenger når vi skal vise den, istedenfor å måtte laste hele siden på forhånd.

### Responsive web design
Etter at det meste av funksjonalitet var implementert, begynte vi å tenke mer på utseendet til appen. Vi startet med å lage et svært enkelt layout, ved hjelp av css-grid, som såg greit ut på laptop. Deretter fulgte vi prinsippet om “mobile first”, ved at vi konsentrerte oss om at appen skulle se bra ut på mobiltelefon. Vi brukte media-queries for å flytte rundt på elementene, for å oppnå et mer vertikalt design. Deretter justerte vi for mer horisontale skjermer.

### Git og GitHub
Per prosjektkravene brukte vi Git og GitHub som versjons- og delingsverktøy. Og benyttet oss av både branches, issues og mulighet til å assigne issues til personer, samt pull-requests og mye annet. Det har gjort det veldig enkelt å samarbeide om kodingen, siden alle til enhver tid har kontroll over sine oppgaver, og siden vi (relativt) enkelt kan merge endringene våre sammen. I tillegg til den vanlige master-branchen nyttet vi oss av en develop-branch til å slå sammen de ulike branchene vi jobbet på individuelt. Etter at prosjektet var ferdig utviklet og testet, ble det overført til maste. Commits ble tagget med issue-nummer for å enkelt holde styr på hva som ble gjort av hver oppgave. Vi glemte som regel å gjøre det i første omgang, så det ble mye rebasing også.

### Node.js og npm
Node.js og npm ble brukt som verktøy med kommandoene 
```
npx create-react-app opg2 
```
og
```
npm start
```
for å bygge prosjektet og kjøre serveren applikasjonen kjører på når vi lager den.

## Testing
Siden vi startet med “mobile first” testet vi naturligvis appen hyppig på mobil. Det gjorde vi ved å logge inn på siden via ip-adressen som react gav oss. Vi testet på to forskjellige mobiler med litt ulik størrelse skjerm. Vi testet også applikasjonen i browser på egen maskin. Vi brukte stort sett Chrome på en Mac og Firefox på Windows. For å enklere kunne teste endringer raskt, logget vi også inn på “hverandre” sine sider via laptop, på samme måten som med mobil. Vi oppdaget flere små og store forskjeller på de ulike browserne, og gjorde endringer for å fikse dem.
