### Correction Analyser des données depuis des API Web

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

<img src="https://raw.githubusercontent.com/lewagon/mooc-images/master/data-science/course_7/apiweb_challenge2_3.png">


#### Challenge 3

1/ Vu dans le carnet iPython

2 / Nous extrayons de la même manière les hashtags grâce à une expression régulière appliquée à l'ensemble du texte du DataFrame :

```python
pattern_mentions = "#[A-Z0-9._%+-]+"

elysee_df['hashtags'] = elysee_df['text'].str.findall(pattern_mentions, re.IGNORECASE).str[0]
```

Nous groupons puis réduisons sur la colonne **hashtags** :

```python
elysee_df.groupby('hashtags').size().order(ascending=False).head()
```

Vous voyez cependant la limite de notre méthode : nous ne prenons dans ce cas que le premier hashtag affiché dans le tweet. 

3 / Nous pouvons utiliser une sélection booléenne pour restreindre **elysee_df** à `gouvernementFR` : 

```python
elysee_df[elysee_df['mentions'] == "@gouvernementFR"].groupby('hashtags').size().order(ascending=False)
```

4/ Nous pouvons utiliser une sélection booléenne pour récupérer la ligne dont la colonne **hashtag** est égale à **#DDay70**.

```python
elysee_df[elysee_df['hashtags'] == "#DDay70"].groupby('mentions').size().order(ascending=False).head()
```





