var cities = [
  {
    label: "Berlin",
    value: "Berlin",
  },
  {
    label: "Stuttgart",
    value: "Stuttgart",
  },
  {
    label: "Frankfurt",
    value: "Frankfurt",
  },
  {
    label: "Mannheim",
    value: "Mannheim",
  },
  {
    label: "Hamburg",
    value: "Hamburg",
  },
  {
    label: "Essen",
    value: "Essen",
  },
  {
    label: "Duisburg",
    value: "Duisburg",
  },
  {
    label: "Munich",
    value: "Munich",
  },
  {
    label: "Düsseldorf",
    value: "Düsseldorf",
  },
  {
    label: "Cologne",
    value: "Cologne",
  },
  {
    label: "Wuppertal",
    value: "Wuppertal",
  },
  {
    label: "Saarbrücken",
    value: "Saarbrücken",
  },
  {
    label: "Marienberg",
    value: "Marienberg",
  },
  {
    label: "Bremen",
    value: "Bremen",
  },
  {
    label: "Hannover",
    value: "Hannover",
  },
  {
    label: "Bonn",
    value: "Bonn",
  },
  {
    label: "Dresden",
    value: "Dresden",
  },
  {
    label: "Wiesbaden",
    value: "Wiesbaden",
  },
  {
    label: "Dortmund",
    value: "Dortmund",
  },
  {
    label: "Leipzig",
    value: "Leipzig",
  },
  {
    label: "Heidelberg",
    value: "Heidelberg",
  },
  {
    label: "Karlsruhe",
    value: "Karlsruhe",
  },
  {
    label: "Augsburg",
    value: "Augsburg",
  },
  {
    label: "Bielefeld",
    value: "Bielefeld",
  },
  {
    label: "Koblenz",
    value: "Koblenz",
  },
  {
    label: "Altchemnitz",
    value: "Altchemnitz",
  },
  {
    label: "Kassel",
    value: "Kassel",
  },
  {
    label: "Münster",
    value: "Münster",
  },
  {
    label: "Kiel",
    value: "Kiel",
  },
  {
    label: "Freiburg",
    value: "Freiburg",
  },
  {
    label: "Braunschweig",
    value: "Braunschweig",
  },
  {
    label: "Fürth",
    value: "Fürth",
  },
  {
    label: "Lübeck",
    value: "Lübeck",
  },
  {
    label: "Osnabrück",
    value: "Osnabrück",
  },
  {
    label: "Magdeburg",
    value: "Magdeburg",
  },
  {
    label: "Potsdam",
    value: "Potsdam",
  },
  {
    label: "Erfurt",
    value: "Erfurt",
  },
  {
    label: "Rostock",
    value: "Rostock",
  },
  {
    label: "Mainz",
    value: "Mainz",
  },
  {
    label: "Ulm",
    value: "Ulm",
  },
  {
    label: "Würzburg",
    value: "Würzburg",
  },
  {
    label: "Oldenburg",
    value: "Oldenburg",
  },
  {
    label: "Regensburg",
    value: "Regensburg",
  },
  {
    label: "Ingolstadt",
    value: "Ingolstadt",
  },
  {
    label: "Göttingen",
    value: "Göttingen",
  },
  {
    label: "Bremerhaven",
    value: "Bremerhaven",
  },
  {
    label: "Cottbus",
    value: "Cottbus",
  },
  {
    label: "Jena",
    value: "Jena",
  },
  {
    label: "Gera",
    value: "Gera",
  },
  {
    label: "Flensburg",
    value: "Flensburg",
  },
  {
    label: "Schwerin",
    value: "Schwerin",
  },
  {
    label: "Rosenheim",
    value: "Rosenheim",
  },
  {
    label: "Gießen",
    value: "Gießen",
  },
  {
    label: "Stralsund",
    value: "Stralsund",
  },
  {
    label: "Coburg",
    value: "Coburg",
  },
  {
    label: "Hofeck",
    value: "Hofeck",
  },
  {
    label: "Emden",
    value: "Emden",
  },
  {
    label: "Detmold",
    value: "Detmold",
  },
  {
    label: "Meißen",
    value: "Meißen",
  },
  {
    label: "Kitzingen",
    value: "Kitzingen",
  },
  {
    label: "Dingolfing",
    value: "Dingolfing",
  },
  {
    label: "Heppenheim",
    value: "Heppenheim",
  },
  {
    label: "Torgau",
    value: "Torgau",
  },
  {
    label: "Hanau",
    value: "Hanau",
  },
  {
    label: "Husum",
    value: "Husum",
  },
  {
    label: "Schwandorf",
    value: "Schwandorf",
  },
  {
    label: "Bitburg",
    value: "Bitburg",
  },
  {
    label: "Cham",
    value: "Cham",
  },
  {
    label: "Traunstein",
    value: "Traunstein",
  },
  {
    label: "Lüchow",
    value: "Lüchow",
  },
  {
    label: "Gifhorn",
    value: "Gifhorn",
  },
  {
    label: "Biberach",
    value: "Biberach",
  },
  {
    label: "Bad Reichenhall",
    value: "Bad Reichenhall",
  },
  {
    label: "Künzelsau",
    value: "Künzelsau",
  },
  {
    label: "Weißenburg",
    value: "Weißenburg",
  },
  {
    label: "Regen",
    value: "Regen",
  },
  {
    label: "Nuremberg",
    value: "Nuremberg",
  },
  {
    label: "Aurich",
    value: "Aurich",
  },
  {
    label: "Nordhorn",
    value: "Nordhorn",
  },
  {
    label: "Aichach",
    value: "Aichach",
  },
  {
    label: "Marburg",
    value: "Marburg",
  },
  {
    label: "Görlitz",
    value: "Görlitz",
  },
  {
    label: "Vechta",
    value: "Vechta",
  },
  {
    label: "Trier",
    value: "Trier",
  },
  {
    label: "Pirmasens",
    value: "Pirmasens",
  },
  {
    label: "Pirna",
    value: "Pirna",
  },
  {
    label: "Neustadt",
    value: "Neustadt",
  },
  {
    label: "Beeskow",
    value: "Beeskow",
  },
  {
    label: "Westerstede",
    value: "Westerstede",
  },
  {
    label: "Verden",
    value: "Verden",
  },
  {
    label: "Worms",
    value: "Worms",
  },
  {
    label: "Düren",
    value: "Düren",
  },
  {
    label: "Landsberg",
    value: "Landsberg",
  },
  {
    label: "Ludwigsburg",
    value: "Ludwigsburg",
  },
  {
    label: "Meiningen",
    value: "Meiningen",
  },
  {
    label: "Siegen",
    value: "Siegen",
  },
  {
    label: "Deggendorf",
    value: "Deggendorf",
  },
  {
    label: "Peine",
    value: "Peine",
  },
  {
    label: "Frankfurt (Oder)",
    value: "Frankfurt (Oder)",
  },
  {
    label: "Nienburg",
    value: "Nienburg",
  },
  {
    label: "Brake",
    value: "Brake",
  },
  {
    label: "Memmingen",
    value: "Memmingen",
  },
  {
    label: "Kirchheimbolanden",
    value: "Kirchheimbolanden",
  },
  {
    label: "Tauberbischofsheim",
    value: "Tauberbischofsheim",
  },
  {
    label: "Emmendingen",
    value: "Emmendingen",
  },
  {
    label: "Warendorf",
    value: "Warendorf",
  },
  {
    label: "Bad Segeberg",
    value: "Bad Segeberg",
  },
  {
    label: "Rotenburg",
    value: "Rotenburg",
  },
  {
    label: "Kronach",
    value: "Kronach",
  },
  {
    label: "Darmstadt",
    value: "Darmstadt",
  },
  {
    label: "Mindelheim",
    value: "Mindelheim",
  },
  {
    label: "Bergheim",
    value: "Bergheim",
  },
  {
    label: "Donauwörth",
    value: "Donauwörth",
  },
  {
    label: "Korbach",
    value: "Korbach",
  },
  {
    label: "Herzberg",
    value: "Herzberg",
  },
  {
    label: "Hameln",
    value: "Hameln",
  },
  {
    label: "Suhl",
    value: "Suhl",
  },
  {
    label: "Friedberg",
    value: "Friedberg",
  },
  {
    label: "Hof",
    value: "Hof",
  },
  {
    label: "Neuburg",
    value: "Neuburg",
  },
  {
    label: "Bad Kissingen",
    value: "Bad Kissingen",
  },
  {
    label: "Viersen",
    value: "Viersen",
  },
  {
    label: "Birkenfeld",
    value: "Birkenfeld",
  },
  {
    label: "Bad Fallingbostel",
    value: "Bad Fallingbostel",
  },
  {
    label: "Halle",
    value: "Halle",
  },
  {
    label: "Bamberg",
    value: "Bamberg",
  },
  {
    label: "Fürstenfeldbruck",
    value: "Fürstenfeldbruck",
  },
  {
    label: "Neuss",
    value: "Neuss",
  },
  {
    label: "Bad Kreuznach",
    value: "Bad Kreuznach",
  },
  {
    label: "Heilbronn",
    value: "Heilbronn",
  },
  {
    label: "Bad Ems",
    value: "Bad Ems",
  },
  {
    label: "Schwäbisch Hall",
    value: "Schwäbisch Hall",
  },
  {
    label: "Offenburg",
    value: "Offenburg",
  },
  {
    label: "Saalfeld",
    value: "Saalfeld",
  },
  {
    label: "Wolfenbüttel",
    value: "Wolfenbüttel",
  },
  {
    label: "Altenkirchen",
    value: "Altenkirchen",
  },
  {
    label: "Pforzheim",
    value: "Pforzheim",
  },
  {
    label: "Günzburg",
    value: "Günzburg",
  },
  {
    label: "Euskirchen",
    value: "Euskirchen",
  },
  {
    label: "Chemnitz",
    value: "Chemnitz",
  },
  {
    label: "Rendsburg",
    value: "Rendsburg",
  },
  {
    label: "Tirschenreuth",
    value: "Tirschenreuth",
  },
  {
    label: "Offenbach",
    value: "Offenbach",
  },
  {
    label: "Uelzen",
    value: "Uelzen",
  },
  {
    label: "Zwickau",
    value: "Zwickau",
  },
  {
    label: "Schwabach",
    value: "Schwabach",
  },
  {
    label: "Gelsenkirchen",
    value: "Gelsenkirchen",
  },
  {
    label: "Mettmann",
    value: "Mettmann",
  },
  {
    label: "Ravensburg",
    value: "Ravensburg",
  },
  {
    label: "Leer",
    value: "Leer",
  },
  {
    label: "Wittmund",
    value: "Wittmund",
  },
  {
    label: "Ingelheim",
    value: "Ingelheim",
  },
  {
    label: "Höxter",
    value: "Höxter",
  },
  {
    label: "Oranienburg",
    value: "Oranienburg",
  },
  {
    label: "Erbach",
    value: "Erbach",
  },
  {
    label: "Freising",
    value: "Freising",
  },
  {
    label: "Landau",
    value: "Landau",
  },
  {
    label: "Stendal",
    value: "Stendal",
  },
  {
    label: "Balingen",
    value: "Balingen",
  },
  {
    label: "Reutlingen",
    value: "Reutlingen",
  },
  {
    label: "Eisenach",
    value: "Eisenach",
  },
  {
    label: "Tuttlingen",
    value: "Tuttlingen",
  },
  {
    label: "Neumünster",
    value: "Neumünster",
  },
  {
    label: "Neu-Ulm",
    value: "Neu-Ulm",
  },
  {
    label: "Köthen",
    value: "Köthen",
  },
  {
    label: "Schleiz",
    value: "Schleiz",
  },
  {
    label: "Garmisch-Partenkirchen",
    value: "Garmisch-Partenkirchen",
  },
  {
    label: "Baden-Baden",
    value: "Baden-Baden",
  },
  {
    label: "Bayreuth",
    value: "Bayreuth",
  },
  {
    label: "Wunsiedel",
    value: "Wunsiedel",
  },
  {
    label: "Osterode",
    value: "Osterode",
  },
  {
    label: "Sankt Wendel",
    value: "Sankt Wendel",
  },
  {
    label: "Lüdenscheid",
    value: "Lüdenscheid",
  },
  {
    label: "Plauen",
    value: "Plauen",
  },
  {
    label: "Forst",
    value: "Forst",
  },
  {
    label: "Pfaffenhofen",
    value: "Pfaffenhofen",
  },
  {
    label: "Bochum",
    value: "Bochum",
  },
  {
    label: "Weimar",
    value: "Weimar",
  },
  {
    label: "Wilhelmshaven",
    value: "Wilhelmshaven",
  },
  {
    label: "Limburg",
    value: "Limburg",
  },
  {
    label: "Freyung",
    value: "Freyung",
  },
  {
    label: "Merseburg",
    value: "Merseburg",
  },
  {
    label: "Halberstadt",
    value: "Halberstadt",
  },
  {
    label: "Dessau-Roßlau",
    value: "Dessau-Roßlau",
  },
  {
    label: "Weiden",
    value: "Weiden",
  },
  {
    label: "Altenburg",
    value: "Altenburg",
  },
  {
    label: "Heide",
    value: "Heide",
  },
  {
    label: "Böblingen",
    value: "Böblingen",
  },
  {
    label: "Kulmbach",
    value: "Kulmbach",
  },
  {
    label: "Homberg",
    value: "Homberg",
  },
  {
    label: "Perleberg",
    value: "Perleberg",
  },
  {
    label: "Mülheim",
    value: "Mülheim",
  },
  {
    label: "Northeim",
    value: "Northeim",
  },
  {
    label: "Salzwedel",
    value: "Salzwedel",
  },
  {
    label: "Cuxhaven",
    value: "Cuxhaven",
  },
  {
    label: "Plön",
    value: "Plön",
  },
  {
    label: "Mühlhausen",
    value: "Mühlhausen",
  },
  {
    label: "Kempten",
    value: "Kempten",
  },
  {
    label: "Güstrow",
    value: "Güstrow",
  },
  {
    label: "Lichtenfels",
    value: "Lichtenfels",
  },
  {
    label: "Bad Salzungen",
    value: "Bad Salzungen",
  },
  {
    label: "Weilheim",
    value: "Weilheim",
  },
  {
    label: "Jever",
    value: "Jever",
  },
  {
    label: "Arnstadt",
    value: "Arnstadt",
  },
  {
    label: "Lüneburg",
    value: "Lüneburg",
  },
  {
    label: "Delmenhorst",
    value: "Delmenhorst",
  },
  {
    label: "Neubrandenburg",
    value: "Neubrandenburg",
  },
  {
    label: "Bad Dürkheim",
    value: "Bad Dürkheim",
  },
  {
    label: "Greiz",
    value: "Greiz",
  },
  {
    label: "Altötting",
    value: "Altötting",
  },
  {
    label: "Erding",
    value: "Erding",
  },
  {
    label: "Lübben",
    value: "Lübben",
  },
  {
    label: "Holzminden",
    value: "Holzminden",
  },
  {
    label: "Wetzlar",
    value: "Wetzlar",
  },
  {
    label: "Soest",
    value: "Soest",
  },
  {
    label: "Mosbach",
    value: "Mosbach",
  },
  {
    label: "Heilbad Heiligenstadt",
    value: "Heilbad Heiligenstadt",
  },
  {
    label: "Neustadt",
    value: "Neustadt",
  },
  {
    label: "Calw",
    value: "Calw",
  },
  {
    label: "Kleve",
    value: "Kleve",
  },
  {
    label: "Annaberg-Buchholz",
    value: "Annaberg-Buchholz",
  },
  {
    label: "Wismar",
    value: "Wismar",
  },
  {
    label: "Aachen",
    value: "Aachen",
  },
  {
    label: "Tübingen",
    value: "Tübingen",
  },
  {
    label: "Freiberg",
    value: "Freiberg",
  },
  {
    label: "Mönchengladbach",
    value: "Mönchengladbach",
  },
  {
    label: "Nordhausen",
    value: "Nordhausen",
  },
  {
    label: "Krefeld",
    value: "Krefeld",
  },
  {
    label: "Stadthagen",
    value: "Stadthagen",
  },
  {
    label: "Hildesheim",
    value: "Hildesheim",
  },
  {
    label: "Celle",
    value: "Celle",
  },
  {
    label: "Eberswalde",
    value: "Eberswalde",
  },
  {
    label: "Recklinghausen",
    value: "Recklinghausen",
  },
  {
    label: "Eisenberg",
    value: "Eisenberg",
  },
  {
    label: "Kaufbeuren",
    value: "Kaufbeuren",
  },
  {
    label: "Sömmerda",
    value: "Sömmerda",
  },
  {
    label: "Remscheid",
    value: "Remscheid",
  },
  {
    label: "Greifswald",
    value: "Greifswald",
  },
  {
    label: "Rastatt",
    value: "Rastatt",
  },
  {
    label: "Naumburg",
    value: "Naumburg",
  },
  {
    label: "Lauf",
    value: "Lauf",
  },
  {
    label: "Amberg",
    value: "Amberg",
  },
  {
    label: "Ratzeburg",
    value: "Ratzeburg",
  },
  {
    label: "Bad Homburg",
    value: "Bad Homburg",
  },
  {
    label: "Neustadt",
    value: "Neustadt",
  },
  {
    label: "Herne",
    value: "Herne",
  },
  {
    label: "Sangerhausen",
    value: "Sangerhausen",
  },
  {
    label: "Forchheim",
    value: "Forchheim",
  },
  {
    label: "Eutin",
    value: "Eutin",
  },
  {
    label: "Bad Oldesloe",
    value: "Bad Oldesloe",
  },
  {
    label: "Kelheim",
    value: "Kelheim",
  },
  {
    label: "Bad Neustadt",
    value: "Bad Neustadt",
  },
  {
    label: "Helmstedt",
    value: "Helmstedt",
  },
  {
    label: "Heinsberg",
    value: "Heinsberg",
  },
  {
    label: "Zweibrücken",
    value: "Zweibrücken",
  },
  {
    label: "Hagen",
    value: "Hagen",
  },
  {
    label: "Montabaur",
    value: "Montabaur",
  },
  {
    label: "Haßfurt",
    value: "Haßfurt",
  },
  {
    label: "Pinneberg",
    value: "Pinneberg",
  },
  {
    label: "Apolda",
    value: "Apolda",
  },
  {
    label: "Bad Schwalbach",
    value: "Bad Schwalbach",
  },
  {
    label: "Marktoberdorf",
    value: "Marktoberdorf",
  },
  {
    label: "Winsen",
    value: "Winsen",
  },
  {
    label: "Wesel",
    value: "Wesel",
  },
  {
    label: "Landshut",
    value: "Landshut",
  },
  {
    label: "Alzey",
    value: "Alzey",
  },
  {
    label: "Homburg",
    value: "Homburg",
  },
  {
    label: "Passau",
    value: "Passau",
  },
  {
    label: "Cloppenburg",
    value: "Cloppenburg",
  },
  {
    label: "Miesbach",
    value: "Miesbach",
  },
  {
    label: "Gotha",
    value: "Gotha",
  },
  {
    label: "Schwelm",
    value: "Schwelm",
  },
  {
    label: "Kusel",
    value: "Kusel",
  },
  {
    label: "Meschede",
    value: "Meschede",
  },
  {
    label: "Steinfurt",
    value: "Steinfurt",
  },
  {
    label: "Aschaffenburg",
    value: "Aschaffenburg",
  },
  {
    label: "Paderborn",
    value: "Paderborn",
  },
  {
    label: "Karlstadt",
    value: "Karlstadt",
  },
  {
    label: "Waiblingen",
    value: "Waiblingen",
  },
  {
    label: "Villingen-Schwenningen",
    value: "Villingen-Schwenningen",
  },
  {
    label: "Rottweil",
    value: "Rottweil",
  },
  {
    label: "Göppingen",
    value: "Göppingen",
  },
  {
    label: "Eichstätt",
    value: "Eichstätt",
  },
  {
    label: "Freudenstadt",
    value: "Freudenstadt",
  },
  {
    label: "Schleswig",
    value: "Schleswig",
  },
  {
    label: "Erlangen",
    value: "Erlangen",
  },
  {
    label: "Olpe",
    value: "Olpe",
  },
  {
    label: "Lörrach",
    value: "Lörrach",
  },
  {
    label: "Ansbach",
    value: "Ansbach",
  },
  {
    label: "Wittlich",
    value: "Wittlich",
  },
  {
    label: "Neuruppin",
    value: "Neuruppin",
  },
  {
    label: "Sonneberg",
    value: "Sonneberg",
  },
  {
    label: "Bottrop",
    value: "Bottrop",
  },
  {
    label: "Ludwigshafen",
    value: "Ludwigshafen",
  },
  {
    label: "Borken",
    value: "Borken",
  },
  {
    label: "Starnberg",
    value: "Starnberg",
  },
  {
    label: "Gummersbach",
    value: "Gummersbach",
  },
  {
    label: "Lauterbach",
    value: "Lauterbach",
  },
  {
    label: "Herford",
    value: "Herford",
  },
  {
    label: "Rathenow",
    value: "Rathenow",
  },
  {
    label: "Solingen",
    value: "Solingen",
  },
  {
    label: "Speyer",
    value: "Speyer",
  },
  {
    label: "Siegburg",
    value: "Siegburg",
  },
  {
    label: "Burg",
    value: "Burg",
  },
  {
    label: "Leverkusen",
    value: "Leverkusen",
  },
  {
    label: "Unna",
    value: "Unna",
  },
  {
    label: "Coesfeld",
    value: "Coesfeld",
  },
  {
    label: "Cochem",
    value: "Cochem",
  },
  {
    label: "Eschwege",
    value: "Eschwege",
  },
  {
    label: "Bad Hersfeld",
    value: "Bad Hersfeld",
  },
  {
    label: "Bad Neuenahr-Ahrweiler",
    value: "Bad Neuenahr-Ahrweiler",
  },
  {
    label: "Sondershausen",
    value: "Sondershausen",
  },
  {
    label: "Dachau",
    value: "Dachau",
  },
  {
    label: "Meppen",
    value: "Meppen",
  },
  {
    label: "Wolfsburg",
    value: "Wolfsburg",
  },
  {
    label: "Brandenburg",
    value: "Brandenburg",
  },
  {
    label: "Sigmaringen",
    value: "Sigmaringen",
  },
  {
    label: "Sonthofen",
    value: "Sonthofen",
  },
  {
    label: "Itzehoe",
    value: "Itzehoe",
  },
  {
    label: "Bergisch Gladbach",
    value: "Bergisch Gladbach",
  },
  {
    label: "Dillingen",
    value: "Dillingen",
  },
  {
    label: "Saarlouis",
    value: "Saarlouis",
  },
  {
    label: "Groß-Gerau",
    value: "Groß-Gerau",
  },
  {
    label: "Oberhausen",
    value: "Oberhausen",
  },
  {
    label: "Goslar",
    value: "Goslar",
  },
  {
    label: "Neustadt",
    value: "Neustadt",
  },
  {
    label: "Germersheim",
    value: "Germersheim",
  },
  {
    label: "Hofheim",
    value: "Hofheim",
  },
  {
    label: "Ebersberg",
    value: "Ebersberg",
  },
  {
    label: "Prenzlau",
    value: "Prenzlau",
  },
  {
    label: "Bad Tölz",
    value: "Bad Tölz",
  },
  {
    label: "Parchim",
    value: "Parchim",
  },
  {
    label: "Luckenwalde",
    value: "Luckenwalde",
  },
  {
    label: "Bernburg",
    value: "Bernburg",
  },
  {
    label: "Osterholz-Scharmbeck",
    value: "Osterholz-Scharmbeck",
  },
  {
    label: "Stade",
    value: "Stade",
  },
  {
    label: "Neumarkt",
    value: "Neumarkt",
  },
  {
    label: "Salzgitter",
    value: "Salzgitter",
  },
  {
    label: "Bautzen",
    value: "Bautzen",
  },
  {
    label: "Hildburghausen",
    value: "Hildburghausen",
  },
  {
    label: "Heidenheim",
    value: "Heidenheim",
  },
  {
    label: "Wittenberg",
    value: "Wittenberg",
  },
  {
    label: "Kaiserslautern",
    value: "Kaiserslautern",
  },
  {
    label: "Miltenberg",
    value: "Miltenberg",
  },
  {
    label: "Coburg",
    value: "Coburg",
  },
  {
    label: "Fulda",
    value: "Fulda",
  },
  {
    label: "Senftenberg",
    value: "Senftenberg",
  },
  {
    label: "Mühldorf",
    value: "Mühldorf",
  },
  {
    label: "Merzig",
    value: "Merzig",
  },
  {
    label: "Seelow",
    value: "Seelow",
  },
  {
    label: "Minden",
    value: "Minden",
  },
  {
    label: "Waldshut-Tiengen",
    value: "Waldshut-Tiengen",
  },
  {
    label: "Neunkirchen",
    value: "Neunkirchen",
  },
  {
    label: "Neuwied",
    value: "Neuwied",
  },
  {
    label: "Daun",
    value: "Daun",
  },
  {
    label: "Esslingen",
    value: "Esslingen",
  },
  {
    label: "Simmern",
    value: "Simmern",
  },
  {
    label: "Gütersloh",
    value: "Gütersloh",
  },
  {
    label: "Diepholz",
    value: "Diepholz",
  },
  {
    label: "Frankenthal",
    value: "Frankenthal",
  },
  {
    label: "Straubing",
    value: "Straubing",
  },
  {
    label: "Pfarrkirchen",
    value: "Pfarrkirchen",
  },
  {
    label: "Hamm",
    value: "Hamm",
  },
  {
    label: "Haldensleben",
    value: "Haldensleben",
  },
  {
    label: "Aalen",
    value: "Aalen",
  },
];

export default cities;
