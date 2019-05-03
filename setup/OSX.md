# Setup instructions

Les instructions suivantes vont vous permettre d'avoir tous les outils nécessaires <br> pour suivre la formation [Le Wagon](http://www.lewagon.org) DATA KIT :

![Lewagon-logo](../images/logo-lewagon.png)

## La ligne de commande

Ouvrez votre terminal

![](../images/open-terminal.png)

Tapez la commande suivante pour installer les outils de développeur XCode :

```bash
$ xcode-select --install
```
Si vous avez ce message, allez directement à l'installation de Homebrew.

```
# command line tools are already installed, use "Software Update" to install updates
```

Sinon, une fenêtre va s'ouvrir demandant votre accord pour l'installation. Acceptez!

Si ça ne marche pas, rééssayez, le serveur d'Apple peut être surchargé.

![](../images/xcode-select-install.png)

Ensuite dans votre terminal, acceptez la licence x-code en tapant :

## Homebrew

Sur Mac, vous devez installer Homebrew qui est un Package Manager. Cela vous nous permettre d'installer Python et ses différents buildpacks.

Pour ce faire, copiez collez cette ligne dans votre terminal :

```bash
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Confirmez en tapant `Entrée`.

Lorsqu'un mot de passe vous sera demandé, tapez **le mot de passe de votre ordinateur**, puis `Entrée`.
**Vous ne verrez pas les caractères s'afficher, et c'est normal**.

Installez python via :

```bash
$ brew install python
```
Installez setuptools et pip via :

```bash
$ pip install --upgrade setuptools
$ pip install --upgrade pip
```

Fermez puis ré-ouvrez votre terminal.

Installez iPython :

```bash
$ pip install "ipython[all]"
```

Installez pandas :

```bash
$ pip install --upgrade matplotlib
$ pip install pandas==0.16
```

## Testons notre installation

### Pandas

Nous allons vérifier que iPython et **pandas** sont bien installés par les commandes suivantes dans le terminal :

```bash
$ ipython --pylab

In [1]: import pandas

In [2]: plot(arange(10))
```

Si tout fonctionne bien, vous devriez voir un beau graphique apparaitre.

![resultat_final](../images/resultat_final.png )

```bash
In [3]: quit()
```

### Notebook

Lors de cette semaine, nous allons travailler avec iPython notebook.

Une fois que vous avez cloné ou [téléchargé](https://github.com/lewagon/data-kit/archive/master.zip) le programme de la semaine,
déplacez vous dans le dossier (en glissant déposant le dossier sur le terminal
ou avec la commande `cd`), puis
essayez d'y acceder en tapant la commande suivante :

```bash
$ ipython notebook
```

Cela devrait ouvrir votre navigateur vers l'URL `http://localhost:8888/tree`.

Congrats!
