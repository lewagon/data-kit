## Correction Visualisation de données avec Matplotlib

### Challenge 1 

#### 1 - Affichez l'évolution mensuelle de la marge et des dépenses

On sélectionne les deux mesures, on applique la méthode `resample` par mois en utilisant une réduction `sum`. On fixe également une limite sur l'axe des ordonnées :

```python
coffee[['Margin','Total Expenses']].resample('M',how='sum').plot(ylim=[0,120])
```

#### 2 - Affichez l'évolution trimestrielle du profit

De la même manière, nous réalisons une réduction par trimestre en sélectionnant la colonne `Profit`. Nous réduisons en utilisant la moyenne :

```python
coffee['Profit'].resample('Q',how='mean').plot(ylim=[0,80])
```

### Challenge 2

#### Créez un graphe en bâton affichant la part des ventes, des Espresso ou des Coffee par type

Nous réalisons cela en trois temps : 

- Nous allons tout d'abord grouper par `Product Type` et `Type` le DataFrame `coffee`.
- Nous allons ensuite appliquer une fonction pour calculer la part de type de produit pour les Espresso et Coffee. 
- Nous représentons enfin le tout avec un graphe en bâtons empilé. 

La première opération est obtenue en réalisant un double groupe, puis en réduisant par la fonction `sum`: 

```python
group_type = coffee['Sales'].groupby([coffee['Product Type'],coffee['Type']]).sum()
```

Nous obtenons ensuite une Série multi-indexée. Nous pouvons calculer la part en définissant une fonction `part` qui renvoie le ratio `x/x.sum()`

```python
def part(x):
    return 100*x/float(x.sum())
```

Nous pouvons appliquer cette fonction en utilisant le `level=0` qui correspond au `Product Type`

```python
group_part = group_type.groupby(level=0).apply(part)
```

Nous pouvons enfin appliquer la méthode `unstack`puis visualiser le tout : 

```python
 group_part.unstack().plot(kind='barh',stacked=True)
```

### Challenge 3 

#### Faites un nuage de points des produits par moyenne de ventes et marge mensuelles

Nous groupons en utilisant la colonne `Product` les colonnes `Sales` et `Margin`, puis nous visualisons grâce à la méthode `plot` : 

```python
coffee[['Sales','Margin']].groupby(coffee['Product']).mean().plot(kind='scatter',x='Sales',y='Margin')
```
 









