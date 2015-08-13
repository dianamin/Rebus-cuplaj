# Rebus-cuplaj
Rebus generat cu algoritmul de cuplaj maxim în graf bipartit

## Tehnologii folosite
* HTML
* CSS
* Javascript
* PHP
* Mysql

## Librării Open Source
* Bootstrap
* AngularJS

## Cum pun proiectul pe serverul meu?
* Mai întâi, trebuie instalat LAMP (pentru Linux) sau XAMPP (pentru Windows)
* Folderul cu surse trebuie pus în folderul html (la LAMP) sau htdocs (la XAMPP)
* În folderul php, există un fișier db_connect.php. Aici trebuie completate datele corespunzătoare.
* Există un fișier numit rebus.sql. Acesta trebuie importat în phpmyadmin în baza de date "rebus". Conține sample data.
* Acum, totul ar trebui să fie în regulă. :) Proiectul poate fi accesat din browser: localhost/numele-folderului-in-care-sunt-sursele

## Ce este cuplajul maxim în graf bipartit?
Fie un graf bipartit.
Un cuplaj în graf reprezintă o submulțime de muchii astfel încât pentru toate vârfurile din mulțimea din stânga există cel mult o muchie incidentă în mulțimea din dreapta.
Cuplajul maxim reprezintă un cuplaj de cardinalitate maximă.
Practic, cuplajul maxim în graf bipartit reprezintă un caz particular al algoritmului pentru flux maxim - https://en.wikipedia.org/wiki/Edmonds%E2%80%93Karp_algorithm .
O alternativă, posibil mai ușor de implementat, este cuplajul ce folosește lanțuri alternate. Această soluție este utilizată în proiect.  
