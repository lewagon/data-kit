## Visualiser des données avec Matplotlib

Matplotlib est une librairie Python permettant de réaliser des visualisations de données.

* Intégrer des visualisations au sein d'un document iPython.

Nous pouvons spécifier différents paramètres d'affichages :

Le paramètre **inline** permet d'intégrer des graphes au sein d'un document iPython (et non sur une fenêtre extérieure)

Le paramètre **style:default** permet d'avoir un rendu des graphes plus sympa :
```
import matplotlib
%matplotlib inline

pd.options.display.mpl_style = 'default'
```

* Réaliser des graphiques en lignes

Soit **df** un **DataFrame**

Soit **sr** une **Série**

Soit **srgp** une **Série Groupée**

La fonction **plot** permet facilement faire un graphique en lignes *(automatiquement ajusté)*

Il est possible de fixer les limites des axes avec les paramètres xlim et ylim ou de rajouter un titre :
```
sr.plot(ylim=[0,40000], title='Your title')
srgp.plot(ylim=[0,40000], title='Your title')
```

* Réaliser des graphiques en bâtons

Le paramètre **kind=bar** permet de réaliser un diagramme en batons.

Le paramètre **kind=barh** permet de réaliser un diagramme en batons horizontal.
```
sr.plot(kind='bar')
srgp.plot(kind='barh')
```
Pour une série groupée dépliée il est possible d'empiler chacun de ces graphes grâce au paramètre **stacked**
```
srgp.unstack().plot(kind='barh', stacked=True)
```

* Réaliser des histogrammes

Les histogrammes permettent de représenter la répartition d'une variable continue.

Les hitogrammes s'appliquent aux séries dans pandas par la méthode **hist**

La variable est séparée en classe (ou bins) et nous représentons le nombre d'occurences de cette variable dans cette classe.

```
df['column'].hist(bins=30)
```


* Réaliser des graphiques en nuage de points

Les matrices de nuages de points permettent de représenter les mêmes points à travers plusieurs axes.

Un nuage de points nécessite que nous précisions l'abscisse et l'ordonnée, grâce aux paramètres **x** et **y**.

Un troisième paramètre, **s** permet de fixer la taille des bulles:

```
df.plot(kind='scatter',x=0,y=1)
```












