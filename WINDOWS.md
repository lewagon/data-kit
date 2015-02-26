# Setup instructions

Les instructions suivantes vont vous permettre d'avoir tous les outils nécessaires <br> pour suivre la formation [Le Wagon](http://www.lewagon.org) DATA KIT :

![Lewagon-logo](images/logo-lewagon.png)


## Github

Inscrivez-vous sur [Github](https://github.com/join), c'est sur cette plateforme que vous trouverez les cours et exercices de la formation.


## Canopy

[Téléchargez Canopy](https://www.enthought.com/products/canopy/)

Canopy vous permet d'installer Python et plusieurs librairies que nous allons utiliser (Pandas, ...).
<br>
Pour vérifier si Canopy a bien été installé, vous pouvez ouvrir votre ligne de commande (Cliquez sur ***Démarrer*** puis recherchez ***cmd***) :

```bash
C:\Users\YourName>python

Python 2.7.3 |EPD_free 7.3-1 (32-bit)| (default, Apr 12 2012, 14:30:37) on win32 Type "credits", "demo" or "enthought" for more information.
>>>
```
Nous pouvons maintenant vérifier que Pandas a aussi bien été installé par les commandes suivantes.

```bash
C:\Users\YourName>ipython --pylab
Python 2.7.3 |EPD_free 7.3-1 (32-bit)|
Type "copyright", "credits" or "license" for more information.
IPython 0.12.1 -- An enhanced Interactive Python.
? -> Introduction and overview of IPython's features. %quickref -> Quick reference.
help -> Python's own help system.
object? -> Details about 'object', use 'object??' for extra details.

Welcome to pylab, a matplotlib-based Python environment [backend: WXAgg]. For more information, type 'help(pylab)'.

In [1]: import pandas

In [2]: plot(arange(10))
```

Si tout fonctionne bien, vous devriez avoir un beau graphique apparaitre.

Lors de cette semaine, nous allons travailler avec iPython notebook. <br>
Une fois que vous avez téléchargé le programme de la semaine essayer d'y acceder en tapant la commande suivante :

```bash
C:\Users\YourName>ipython notebook
```
