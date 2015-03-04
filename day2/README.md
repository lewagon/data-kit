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
* séléction de ligne
```
  df.ix['index']
```
* On peut ré-indexer en utilisant la méthode
```
df.reindex(liste)
```

* On peut gérer les données manquantes df.fillna(0) ou fill_value=0
                                       df.dropna(axis=1, how='all')
* Intersection de deux DataFrame avec df1 + df2
* Union de deux DataFrame avec df1.add(df2, fill_value =0)
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

* Le groupby permet le **split** d'un DataFrame selon un choix de clé d'indexation.
```
df['column1'].groupby(df['column2'])
```
On créé alors un nouvel objet : **la série groupée**
* Il est possible de lui **appliquer** une méthode *(ex: somme)*
```
df['column1'].groupby(df['column2']).sum()
```
Les résultats ressortent donc **agrégés**
* On peut réaliser un goupby sur plusieurs index
```
df['column1'].groupby(df['column2'],df['column3'])
```
* On peut déplier cette série groupée à **double index**
```
df['column1'].groupby(df['column2'],df['column3']).unstack()
```
* Il est possible de recréer une colonne dans votre DataFrame en mappant un dictionnaire *(dic)* avec les données d'une colonnes *(column1)* par :
```
df['nouvelle_column'] = df['column1'].map(dic)
```

