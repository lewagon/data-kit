### Correction Matplotlib

#### 1 - Créez un DataFrame unique en fusionnant les users, ratings et movies

Nous commençons par fusionner `user` et `ratings`:

```python
users_ratings = pd.merge(users,ratings,on='user_id')
```

Nous fusionnons ensuite `users_ratings` et `movies`. Nous stockons le tout dans un DataFrame `data`:

```python
data = pd.merge(users_ratings,movies,on='movie_id')
```

#### 2 - Quels sont les 5 films qui ont été le plus noté ? 

Notre dataset disposant d'une ligne par note, nous pouvons grouper par film et compter la taille de chaque groupe grâce à la méthode `size`:

```python
data.groupby('title').size().order(ascending=False).head(5)
```

Nous obtenons le résultat suivant : 

<img src="https://raw.githubusercontent.com/lewagon/mooc-images/master/data-science/course_8/challenge1.png">

#### 3 - Quels sont les 5 films qui ont la meilleure note moyenne ayant été noté plus de 100 fois ? 

Nous pouvons grouper par la colonne `title` et appliquer une double réduction (`count` et `mean`) sur la Série `data['rating']`

```python
top_100 = data['rating'].groupby(data['title']).agg(['count','mean'])
```

Nous pouvons ensuite utiliser une `sélection booléenne`, puis un tri grâce à la méthode `sort` :

```python
top_100[top_100['count'] > 100].sort('mean',ascending=False).head(5)
```

Nous obtenons le résultat suivant (Ravi de voir Usual Uspect dans le top 5;) ) :

<img src="https://raw.githubusercontent.com/lewagon/mooc-images/master/data-science/course_8/challenge2.png">

#### 4 - Quelle est la tranche d'âge notant le moins bien ? 

Nous pouvons grouper par la colonne `age` et appliquer une réduction `mean` sur la Série `data['rating']`. Nous affichons également un graphe sous forme de barres horizontales, soit : 

```python
data['rating'].groupby(data['age']).mean().order(ascending=False).plot(kind='barh')
```

Nous obtenons le résultat suivant. Les jeunes semblent vraiment plus difficiles..

<img src="https://raw.githubusercontent.com/lewagon/mooc-images/master/data-science/course_8/challenge3.png">

#### 5 - Les hommes notent ils moins bien que les femmes ? 

Il semble que oui ! 

```python
data['rating'].groupby(data['sex']).mean()
```

#### 6 - Quels sont les films ayant la plus grande différence de notes entre les hommes et les femmes ? 

Nous groupons tout d'abord par `title` et par `sexe` en appliquant une double réduction `count` et `mean`. Nous appliquons la méthode `unstack`pour récupérer un DataFrame indexé par titre de film :

```python
hf = data['rating'].groupby([data['title'],data['sex']]).agg(['count','mean']).unstack()
```

Nous ajoutons deux nouvelles colonnes : 

- Une colonne total correspondant à la somme des count des ratings des hommes et des femmes 
- Une colonne diff correspondant à la différence des ratings moyens des hommes et des femmes 

```python
hf['total'] = hf['count']['F'] + hf['count']['M']

hf['diff'] = hf['mean']['F'] - hf['mean']['M']

```

Nous filtrons sur la colonne total pour récupérer les films ayant été votés plus 500 fois. Nous pouvons afficher le top 5 des films préférés par les hommes ou les femmes en utilisant les méthodes `head` ou `tail` : 


Les films préféres par les hommes :

```python
hf[hf['total'] > 500].sort('diff').head(5)
```

<img src="https://raw.githubusercontent.com/lewagon/mooc-images/master/data-science/course_8/challenge4.png">

Ceux préféres par les femmes :

```python
hf[hf['total'] > 500].sort('diff').tail(5)
```

<img src="https://raw.githubusercontent.com/lewagon/mooc-images/master/data-science/course_8/challenge5.png">




