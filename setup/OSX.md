# Setup instructions

Les instructions suivantes vont vous permettre d'avoir tous les outils nécessaires <br> pour suivre la formation [Le Wagon](http://www.lewagon.org) DATA KIT :

![Lewagon-logo](../images/logo-lewagon.png)


## Github

![github-logo](../images/github-logo.jpg )


Inscrivez-vous sur [Github](https://github.com/join), c'est sur cette plateforme que vous trouverez les cours et exercices de la formation.



## La ligne de commande

Ouvrez votre terminal

![](../images/open-terminal.png)

Tapez la commande suivante pour installer x-code :

```bash
$ xcode-select --install
```
Si vous avez ce message, allez directement à l'installation de Canopy.

```
# command line tools are already installed, use "Software Update" to install updates
```

Sinon, une fenêtre va s'ouvrir demandant votre accord pour l'installation. Acceptez! <br>
Si ça ne marche pas, rééssayez, le erveur d'Apple peut être surchargé.

![](../images/xcode-select-install.png)

Ensuite dans votre terminal, acceptez la licence x-code en tapant :


```bash
$ sudo xcodebuild -license
```

Vous devez ensuite entrer votre password servant à votre ouverture de session lors de l'allumage de votre ordinateur.
<br>Ne soyez pas étonné que rien ne s'affiche et tapez `Entrée`.

La licence x-code devrait apparaitre, appuyez sur la touche `q`.
Tapez `agree`puis `Entrée`.

## Homebrew

Sur Mac, vous devez installer Homebrew qui est un Package Manager. Cela vous nous permettre d'installer Python et ses différents buildpacks. <br>
Pour ce faire, copiez collez cette ligne dans votre terminal :

```bash
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Confirmez en tapant `Entrée` puis le mot de passe de votre ordinateur.

Installez python via :

```bash
$ brew install python
```
Installez setuptools et pip via :

```bash
pip install --upgrade setuptools
pip install --upgrade pip
```


Fermez puis ré-ouvrez votre terminal afin que ```pip``` soit reconnu.

Installez iPython :

```bash
pip install ipython[all]
```
Installez pandas :

```bash
pip install pandas
```

## Testons notre installation

Nous allons vérifier que iPython et pandas sont bien installés par les commandes suivantes :

```bash
$ ipython --pylab

In [1]: import pandas

In [2]: plot(arange(10))
```

Si tout fonctionne bien, vous devriez voir un beau graphique apparaitre.

![resultat_final](../images/resultat_final.png )

Lors de cette semaine, nous allons travailler avec iPython notebook. <br>
Une fois que vous avez téléchargé le programme de la semaine essayer d'y acceder en tapant la commande suivante :

```bash
$ ipython notebook
```
