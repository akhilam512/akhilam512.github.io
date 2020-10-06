---
title: "KDE/Kdenlive - From a contributor!"
date: "2019-04-13"
draft: false
path: "/blog/kdenlive"
---

It's only been about a week since the project proposal deadline for GSoC (which was the 9th of April) passed, and phew. The previous couple of weeks have been exhausting - finishing the proposal, understanding the project implementation, getting it reviewed (big thanks to all the reviewers), responding to the reviews -  however at the same time, on the bigger picture it has been quite satisfying - to see all of the work from the last many months come to life in the document, to understand a major feature of the software that you're working on and identify it's problems, it's scope, it's need in the community and how it can be improved.  <br>
All in all, a great practical learning experience! Never ever would I learn this all from a classroom! (shoutout to all the peeps at FOSS@Amrita (; ) 

The thing about writing a proposal is that it is not only the fact that you HAVE to understand what your project will do, what it will replace/improve, how it does that, and why you are doing it in the first place - it's also how well you **present** all of this information. 

If you just throw up a lot of code and high tech words here and there in a boring manner, even people who *can* understand the jargon you put would probably choose not to read through it.

Presentation matters a LOT. Marketing matters a LOT. It is as important as your understanding of the project. Both go hand in hand. If you really understand your project, you should be able to structure it and break it down to few parts. 

----

## Which organisation/project am I working on?

**KDE** Why? Given it's desktop experience, who wouldn't fall in love with it? ;)

**Kdenlive** It's a non-linear video editor and there's no particular reason why I chose Kdenlive, the bug tracker had a lot of bugs under it, and I was able to pick them up and fix them. The community  warm and the developers awesome. So yep. Kdenlive has been my darling ever since :) 


## How long and what did I contribute so far?

I started off with minor junior bugs, fixed about 4-5 of them and then I moved to small features like adding an icon, etc. My first big task was the audio and video capture feature, and the feature was pretty much non existent/ very buggy. I had to shift the existing shaky implementation which used FFMPEG and V4L devices to use a Qt class (QMediaRecorder) for recording audio and video. This was a big thing for any newbie, and it took me nearly a month to finally send the merge request and get it merged. The community helped greatly - and speaking about the community, Kdenlive has a very welcoming community, with very well experienced developers who have the will to help and nurture (thanks!) 

One of my biggest learning experiences have been the code reviews, which are quite humbling in my opinion - think of it like this - you have been working on some part of a feature and you're totally sure that this IS the thing and you're well researched and it's perfect. But after getting your code reviewed you realise that there is a lot for you to still learn. I have maximum respect and gratitude for the experienced developers at Kdenlive for the same (thanks!)


### Audio and Video Capture

Here's the [task](https://phabricator.kde.org/T9292)

Qt offers QMediaRecorder class for handling audio and video capture. The aim of the task was to replace existing implementation through V4L and FFMPEG with QMediaRecorder.

Implementing QMediaRecorder is fairly simple, basically we have this pseudo definition - (edited for simplicity sake)

```

class MediaCapture 

	public:
	    MediaCapture(QObject *parent);
	    ~MediaCapture();

	    void recordAudio(bool /*record*/);
	    void recordVideo(bool /*record*/);

	    /** Returns true if a recording is in progress **/
	    bool isRecording() const;

	    /** Sets m_path to selected output location **/
	    void setCaptureOutputLocation();

	    /** Returns m_path **/
	    QUrl getCaptureOutputLocation();

	    /** Sets m_audioDevice to selected audio capture device **/
	    void setAudioCaptureDevice();

	    /** Sets m_volume to selected audio capture volume **/
	    void setAudioVolume();

	    /** Returns list of audio devices available for capture **/
	    QStringList getAudioCaptureDevices();

	    /** Sets currentState to QMediaRecorder::State value and returns it **/
	    int getState();
	    int currentState;

...

```

recordAudio() and recordVideo() are the functions that handle the acutal capture stuff, and all the other functions involve in initilialising and preparing it for the process.


The toughest part, however, wasn't declaring and defining that class and all of its methods. **The toughest part was integrating it with the current codebase** - i.e figuring what went where, predicting worst possible outcomes, accounting for errors from user side, improving the overall UX experience - all of these factors were, and remain to be - the 'tough' part of making a feature for a professional software. 

------------

The experience so far has been great. The learning curve, steep, which is exactly what I would want. Now, the next step - a big task.

------

## The Titler Tool

I decided to work on the Titler tool because the tool's implementation was old, outdated and buggy in itself apart from the fact that it was hard to add features to the tool in its existing implementation. A more professional titler tool would do loads of good for the community and the people using it. 

And that personally means a lot to me, to make an impact :) 

On discussing it with Jean Baptiste Mardelle and Vincent Pinon (two of the lead developers in Kdenlive) the tool would involve re-writing the entire tool from the MLT backend to the UI. That's as big as it can get as a feature for me!
Somewhere around 6-12 months of good work, ofcourse I'm in for it :) 

Also, I decided to dedicate 3 months of this work period as a subset for GSoC. Looking forward to the GSoC experience and more than that, I'm looking forward to the moment when the tool goes live! 

Cheers.



















