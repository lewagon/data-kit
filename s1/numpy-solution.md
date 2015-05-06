### Correction Introduction à Numpy

#### Challenge 1

1 - On crée un nd.array grâce à la méthode **np.array** :

```python 
list = [[19.23, 39.14, 67.78, 98.49], [56.78, 88.78, 99.01, 99.99], [12.00, 76.87, 91.09, 10.01], [99.01, 70.32, 64.89, 36.68]]

array = np.array(list)
```

2 - Nous utilisons les plages pour sélectionner les lignes 2 et 3 :

```python 

array[1:3]

```

2 - Nous pouvons sélectionner la colonne 4 grâce à : 

```python 

array[:,3]

```

#### Challenge 2

1 - On sélectionne les valeurs négatives de **arr** grâce à : 

```python 

array[arr<0]

```

2 - En utilisant l'opérateur **!=** : 

```python 

array[arr!=2]

```

3 - En utilisant l'opérateur **|** : 

```python 

array[(arr==2)(arr==3)]

```

