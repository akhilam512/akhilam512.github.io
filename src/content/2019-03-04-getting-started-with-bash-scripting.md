---
title: "Getting Started with Bash Scripting"
date: "2019-03-04"
draft: false
path: "/blog/bash"
---

***

**Before we start,** <br>
This is a comprehensive, short guide to just get you started with writing basic bash scripts in Linux. This blog will equip you with the basic and required knowledge on working with bash scripts, responsbility is upon you to learn more and make the best of it :)
<br>
Prerequisities : Knowledge of basic Linux CLI commands.
<br>

***

## Bash Scripting? <br>

"Bash Scripting" - let's break it down to what it is. First up - "Bash". <br>

Bash is basically a shell - a place where you can communicate with the core (kernel) in forms of commands (like ls, cat, cd). In other words, it's a command line interface (CLI) <br>

Scripting  is fundamentally writing a bunch of commands together and then execute it , much like a "program" . <br>

A 'Bash Script' is basically a bunch of commands put together in one single 'script'. <br>

Bash scripting is a way of communicating effectively with your hardware. <br>

## Your First Bash Script!
<br>
Now that you know what bash scripting means, let's try making a bash script of your own. <br>

```
$ sudo nano firstbashing.sh
```
<br>

.sh is the file extension we use for bash scripts. Before we start writing, always remember:

<center> Every bash script starts with a shebang </center>

<br>
 #! is the shebang and every bash script starts like this:

```
#!/bin/bash
echo "Feed me a number" 
read num 
echo "Your number was yum : $num"
```
<br>

Now let's try executing the script. First we need it to make the script "executable" <br>

```
$ sudo chmod +x firstbashing.sh
```
And now you can simply do : <br>

```
$ ./firstbashing.sh
```
<img src="https://lh3.googleusercontent.com/tt7deZPwewu7mRaHW4KNzy-2dyrSAJohQi70IVK59GXfzvtXUPew75xVTnoZJwJ78mF3G9axoiCiTf_Lp199b2ujsbx3JYu6JRJyX2vsdzGAKPMUofnjXu-JPfyA0GOHlB7r5pzlxcAKeIO4Jx1TlXNaADDihHCKWb6buygosSggQgViYboqghzOZD-pzcY4JqdeSP7bR-2KWv_Dj8AI5vKwJFO4H-ykSJVmhlt4NUr0Bv1X3PZw7ltG1SNFHcT8XjYaKPxJyChCMaEWWhd9TUhSlC4ljMwJxLo60FhYsiew30ApoiJ9Rg_KWF1zaSkrNXIjNJnsoCBrqtCT8XQjMQm8McEb6knJ0WpMcXgakOXH5OfuZ7ii0eq02xU76iI6--ABcofsnyBefGx-CpnBpjEphbxpkJ7LnjbrR1GCvcN-k7Y20M-jvq7PxgkAQtXRXlss-7fGO2qV_flH9RyDioU-34K7kYZTSdYzljt0gNDFE77DxdM-Jn0Ga_UnDChh7YHeNDI5BXF9h0J2IevmkVJNzYK6Q4mJmTBp29l5rCZ-ZnjqmM9aGRmhIwJtsXx9Ikqjqrin1kajc2th7rnkov7u4tGLoxnB2SW1Hbq7cXasHmh4Bi11QUK54WLcmb2TEBGYYCOtHgPTjaBVpZFrbz2fQd-NINY=w660-h143-no" alt="output">
<br>

Voila. <br>

You can make your own scripts according to your wish and need - if, elif, for, while i.e. all the logical and looping constructs are all there :) <br>

***

Here's a fairly bash script I made using the if construct and random numbers: <br>

```
random=$((1 + RANDOM%5)) 
if [ 1 -eq $random ] 
then 
	echo "KEEP MOVING"
elif [ 2 -eq $random ] 
then 
	echo "Goodd Job." 
elif [ 3 -eq $random ] 
then 
	echo "THERES NO TOMORROW" 
elif [ 4 -eq $random ] 
then 
	echo "YOU CAN FUCKING DO IT" 
elif [ 5 -eq $random ] 
then 
	echo "DAMN GOOD JOB!" 
fi
```
**Break-down time:** <br>

```  
random=$((1 + RANDOM%5)) 
```
<br>
This line takes use of an **environment variable** named RANDOM, which, as you guessed it, stores a random number. The modulo 5 and plus 1 are just to make the output in between the range of 1 and 5 - because that's what I need for my if - elif construct, which is coming next.
<br>

``` 
if [ 1 -eq $random ]
	then 
```

if [this condition is true]
then
	do this

if this then that. else if, then do that. fi <br> 
As simple as that :) 

Now, to the condition : <br>
```
[ 1 -eq $random ]
```
<br>
-eq is the comparision operator in bash (it is equivalent to "==") so the statement simply boils down to "if 1 equal to the value in random". <br>

( View the full source of the script [here](https://github.com/akhilam512/BashedPotatoes/blob/master/motiv)) <br>

*** 

## How bash scripts can make your life easier


Now, say, you have a bunch of commands you use on a regular basis. You could avoid the typing all of it by simply using a bash script with all of the commands in it, and then placing it under ~/bin and then simply typing out the script's name in the command line.<br>

Let's go over an example - <br>

Say, I run these commands on a regular basis : <br>

```
 $ cd blender-git/blender 
 $ make update 
 $ make
```
<br>
Step 1 : make a script and name it as you like, I'm calling it "buildb" <br> 

```
 $ sudo nano buildb 
```
There's no need for the .sh extension as we are making an executable (and technically, the extension isn't *really* necessary, it's just a convention of naming but it's always good to follow the convention) <br>
```
#!/bin/bash 
cd           # so that we get to the root directory 
cd blender-git/blender 
make update 
make
```
<br>
And then make it executable - <br>
```
$ sudo chmod +x buildb
```
<br> Place this script in ~/bin after making the directory. <br>
```
$ sudo mkdir ~/bin 
$ sudo mv ~/buildb ~/bin/buildb
```
<br>
Now simply do - <br>
```
$ buildb
```
And voila. It works :) (In case it doesnt, open a new terminal and try again) <br>


***

Bash Scripting is a vast, vast field and what I have covered here so far is barely the tip of the iceberg.If you found this interesting, please do comment :) <br>
