### Correction Group By

#### Challenge 2

1 / On utilise la méthode **resample** avec la fréquence **D** et la réduction **sum** sur la colonne **retweet_count**. 
Nous appliquons ensuite la méthode **plot()** pour afficher un graphe de l'évolution quotidienne de nombre de retweets. 
 
```python 

elysee_df['retweet_count'].resample('D',how='sum').plot()

```

Cela donne le graphe suivant. On observe en effet deux pics en Juin 2014 et en Janvier 2015 :

<img src="https://raw.githubusercontent.com/lewagon/mooc-images/master/data-science/course_7/apiweb_challenge2_1.png">

2 & 3/ Nous pouvons restreindre notre graphe au mois de juin 2014 en utilisant **la méthode ix** en utilisant un index de dates :

```python

elysee_df.ix['2014-06']['retweet_count'].resample('D',how='sum').plot()

```

Nous pouvons de la même manière restreindre notre analyse au mois de janvier 2015 :

```python

elysee_df.ix['2015-01']['retweet_count'].resample('D',how='sum').plot()

```

Nous pouvons enfin utiliser la méthode **sort** pour les journées du 6 juin 2014 et du 7 janvier 2015 pour afficher les tweets qui ont été émis : 

``` python

print elysee_df.ix['2014-06-06'].sort('retweet_count',ascending=False)['text'].head(2)
print elysee_df.ix['2015-01-07'].sort('retweet_count',ascending=False)['text'].head(2)

```

4 - Plusieurs méthodes sont possibles. 

Nous pouvons par exemple ajouter une nouvelle colonne, à partir de **l'index** en récupérant l'heure du tweet : 

``` python

elysee_df['hour'] = elysee_df.index.hour

```

Puis grouper sur cette nouvelle colonne en réduisant avec la méthode **count** :


``` python

elysee_df.groupby('hour')['text'].count().plot(kind="area")

```


#### Challenge 3

1 / On groupe par la clé **Nature** puis nous réduisons avec la méthode **mean**

```python
reserve['Coût du projet'].groupby(reserve['Nature']).mean()
```

2 / On réalise un groupe sur les clés **Département** et **Nature** puis nous réduisons avec la méthode **size**. (Nous aurions également pu utiliser la méthode count à partir d'une série). 
Nous utilisons ensuite la méthode **unstack** pour transformer notre série **multiindex** en un DataFrame. 
Nous récupérons enfin la ligne correspondant au département **YVELINES** en utilisant la méthode **ix**

```python
reserve.groupby(['Département','Nature']).size().unstack().ix['YVELINES']
```

3/ Nous pouvons utiliser une simple sélection booléenne pour récupérer la ligne dont le bénéficiaire est égal à **PARIS**.

```python
reserve[reserve['Bénéficiaire'] == 'PARIS']
```

#### Challenge 3

1/ On définit une fonction **part** qui renvoie la moyenne du ratio subvention / coût :

```python
def part(df):
    return np.mean(df['Subvention allouée'] / df['Coût du projet'])
```

On applique un groupe par **parti**, en réduisant avec la fonction **part** :

```python
reserve.groupby(['parti']).apply(part).order(ascending=False)
```

2/ On ajoute une nouvelle colonne **match** vérifiant si la subvention a été réalisée dans le Département du parlementaire

```python
reserve['match'] = reserve['Département Parlementaire'] == reserve['Département']
```

On réalise un groupe sur les clés **match** et **Parlementaire transmetteur**. Nous réduisons avec la méthode **size**. Puis nous appliquons la méthode **unstack** pour récupérer un DataFrame :

```python
sub_parlementaire = reserve.groupby(['Parlementaire transmetteur','match']).size().unstack().fillna(0)
```

Nous ajoutons une colonne **total**, somme de **True** et de **False** 

```python
sub_parlementaire['total'] = sub_parlementaire[True] + sub_parlementaire[False]
```

Nous filtrons enfin par une sélection booléenne les parlementaires ayant plus de 50 subventions

```python
sub_parlementaire[sub_parlementaire['total'] > 50].sort(True,ascending=False)
```

Coucou [Philippe MARINI](http://www.francetvinfo.fr/politique/reserve-parlementaire/comment-compiegne-a-ete-financee-par-la-reserve-parlementaire-de-son-senateur-maire_720153.html) ;) 





