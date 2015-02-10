# Setup instructions

The following instructions will help you to get ready for [Le Wagon](http://www.lewagon.org) DATA SCIENTIST JUNIOR bootcamp:


## GitHub account

Have you signed up to GitHub? If not, [do it right away](https://github.com/join).

**[Upload a picture](https://github.com/settings/profile)** and put your name correctly on your Github account.

## Download Canopy

https://www.enthought.com/products/canopy/


To check EPD has installed correctly, open the Command Prompt application, also known as cmd.exe :

```bash
C:\Users\YourName>python

Python 2.7.3 |EPD_free 7.3-1 (32-bit)| (default, Apr 12 2012, 14:30:37) on win32 Type "credits", "demo" or "enthought" for more information.
>>>
```

If you see a message for a different version of EPD or it doesn’t work at all, you will need to clean up your Windows environment variables. On Windows 7 you can start typing “environment variables” in the programs search field and select Edit environ ment variables for your account. On Windows XP, you will have to go to Control Panel > System > Advanced > Environment Variables. On the window that pops up, you are looking for the Path variable. It needs to contain the following two directory paths, separated by semicolons:
C:\Python27;C:\Python27\Scripts
If you installed other versions of Python, be sure to delete any other Python-related directories from both the system and user Path variables. After making a path alterna- tion, you have to restart the command prompt for the changes to take effect.

## Download Pandas

http://pypi.python.org/pypi/pandas.

For EPDFree, this should be pandas-0.9.0.win32- py2.7.exe

To check that things are installed correctly by importing pandas and making a simple matplotlib plot:

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

If successful, there should be no error messages and a plot window will appear. You can also check that the IPython HTML notebook can be successfully run by typing:

```bash
C:\Users\YourName>ipython notebook --pylab=inline
```
