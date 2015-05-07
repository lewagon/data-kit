### Correction Introduction à Pandas

#### Challenge 1 

```python

villes_stades = {'nom':["Paris","Marseille","Lyon","Lens","Toulouse"],
          'population':[212,80,44,32,39],
          'zip':["75","13","69","62","31"],
          'stade':[49691,42000,41842,12097,35472]}

```


1 - On crée un DataFrame grâce à la méthode `pandas.DataFrame`

```python

villes = pd.DataFrame(villes_stades)

```

2 - Nous pouvons passer une liste au sein du DataFrame `villes` :

```python

villes[['nom','stade']]

```

3 - Nous utilisons la sélection par Index en utilisant `pandas.DataFrame.ix[n]` :

```python

villes.ix[3]

```

4 - Nous pouvons utiliser la sélection booléenne pour récupérer les stades dont la capacité est supérieure à 30 000 :

```python

villes[villes['stade'] > 30000]

```

#### Challenge 2 



