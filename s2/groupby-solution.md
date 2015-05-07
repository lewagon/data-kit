### Correction Group By

#### Challenge 1

1 / On utilise la méthode **pandas.Dataframe.sort** pour afficher la plus grande subvention en 2011 :

```python 

reserve.sort(['Subvention allouée','Coût du projet'],ascending=False).head(2)

```

2 / On groupe par la clé **Parlementaire transmetteur** puis nous réduisons avec la méthode **count** :

```python

reserve['Subvention allouée'].groupby(reserve['Parlementaire transmetteur']).count().order(ascending=False)

```
3 / On groupe par la clé **Parlementaire transmetteur** puis nous réduisons avec la méthode **sum** :

```python

reserve['Subvention allouée'].groupby(reserve['Parlementaire transmetteur']).sum().order(ascending=False)

```

4 / On groupe par la clé **Département** puis nous réduisons avec la méthode **count** :

```python

reserve['Subvention allouée'].groupby(reserve['Département']).count().order(ascending=False)

```

#### Challenge 2

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





