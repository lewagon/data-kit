## Pandas :
Series : élément a une dimension, indéxé et composés de différents types de données.
* création d'un DF avec choix des colonnes et en choisissant l'index
```
  df = pd.DataFrame(villes, index=villes['id_client'], columns=['nom','montant'])
```
* séléction de colonnes
```
  df[['column1', 'column2']]
```
* selection de ligne
```
  df.ix['index']
```
* On peut re-indexer en utilisant la méthode
```
df.reindex(liste)
```

* On peut gérer les données manquantes df.fillna(0) ou fill_value=0
                                       df.dropna(axis=1, how='all')
* Intersection de deux DataFrame avec df1 + df2
* Union de deux df avec df1.add(df2, fill_value =0)
* Application d'une fonction avec la méthode
```
df.apply(g, axis=0)
```
* Tri par :
```
 df.sort_index(by=['column'], ascending=False)
```
 ou plus simplement
```
 df.sort(['column'], ascending=True)
```

## Groupby et aggregation :

* On peut réaliser un goupby sur plusieurs index
Permet de spliter un dataframe selon des clé que l'on met en index

