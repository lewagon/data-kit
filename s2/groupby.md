### Correction Group By

#### Challenge 1

1 / On utilise la méthode `pandas.Dataframe.sort` pour afficher la plus grande subvention en 2011 :

```python 

reserve.sort(['Subvention allouée','Coût du projet'],ascending=False).head(2)

```

2 / On groupe par la clé `Parlementaire transmetteur` puis nous réduisons avec la méthode `count` :

```python

reserve['Subvention allouée'].groupby(reserve['Parlementaire transmetteur']).count().order(ascending=False)

```
3 / On groupe par la clé `Parlementaire transmetteur` puis nous réduisons avec la méthode `sum` :

```python

reserve['Subvention allouée'].groupby(reserve['Parlementaire transmetteur']).sum().order(ascending=False)

```

4 / On groupe par la clé `Département` puis nous réduisons avec la méthode `count` :

reserve['Subvention allouée'].groupby(reserve['Département']).count().order(ascending=False)

#### Challenge 2