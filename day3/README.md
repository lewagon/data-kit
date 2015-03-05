## Les APIs

C'est un système qui permet de lire des données, généralement sous format JSON.
C'est le language **Machine-Machine**.
Il est facile de trouver une librairie Python pour une API (Github)

## Séries temporelles

* L'objet Datetime
```
from datetime import datetime
```
Passer de string à Datetime:
chaine = '2013-02-13'
datetime.strptime(chaine,'%Y-%m-%d')
* Fonction de traitement de dates sous **Pandas**
```
pd.to_datetime(datestring)
```

Il est souvent bon de mettre en index les dates
```
pd.read_csv("path", parse_dates=True, index_col=1)
```
On peut ensuite selectionner par date :
```
df['2005']
```
ou
```
df['2005-03']
```

* Fonction d'agrégation temporelle

Permet d'agréger sous différents patterns de format (année, jour,...) des fonctions usuelles (somme, moyenne)
[doc de resample](http://pandas.pydata.org/pandas-docs/dev/timeseries.html#offset-aliases)
```
stock.resample('AS', how='mean')
```

* Visualisation
La fonction plot permet de facilement visualiser ses données
```
import matplotlib.pyplot as plt
%matplotlib inline
```
```
df.plot
```

## Les Regexs

Les expressions régulières servent à séléctionner ou valider un type d'information.
Il est fortement conseillé de tester son pattern sur [RegexR](http://www.regexr.com/)

On utilise les expressions régulière de la façon suivante :
```
import pandas as pd
import re
```
L'attribut re.IGNORECASE permet d'ignorer la casse (MAJUSCULE vs minuscule)
```
pattern = r'votre-expression régulière'

resultat = df['noms&mails'].str.findall(pattern, re.IGNORECASE)
print resultat
```
Il est possible d'utiliser des fonctions comme :
.count() qui renvoie le nombre résultats
.findall() qui renvoie les résultats
.match() qui renvoie un booléén

## Data Wrangling

* Fusionner
df1 et df2 possèdent une colonne commune columndf1df2, on peut les fusionner en utilisant la méthode **merge** :
```
pd.merge(df1,df2, on='columndf1df2')
```
Cette fusion est dite **Inner**
Il est possible de spécifier le type de fusion **Left**/**Inner**/**Right** par le paramètre how :
```
pd.merge(df1,df2, on='columndf1df2', how='right')
```
Nous pouvons également spécifier une fusion sur un Index grâce aux méthodes left_index et right_index.
```
pd.merge(df1,df2, left_on = 'columndf1df2', right_index=True)
```

* Retravailler
Lorsque nous avons une série à multi-index, alors il est possible d'utiliser les méthodes **.stack()** **.unstack()** qui permettent de faire pivoter ces indices de lignes à colonnes, ou de colonnes à lignes.



* Remplacer
La méthode **duplicate** permet de rapidement repérer et supprimer des doublons.
Il est possible de spécifier la colonne ou d'appliquer la fonction sur tout le DataFrame.
```
df.duplicated('column')
```
Il est aisé de supprimer les doublons avec la méthode **drop_duplicated** :
```
df.drop_duplicated()
```
Il est possible de changer des données d'une colonne (column) avec un dictionnaire (dic)  via la méthode **map** vue précedemment :
```
df['column'].map(dic)
```
