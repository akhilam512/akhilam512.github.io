---
title: Week 1
date: "2019-06-05"
draft: false
path: "/blog/gsoc-1w"
---

Hi! I’m Akhil K G and for this year’s GSoC I aim to rewrite the titler tool completely.

# Who am I?

I am Akhil, l’m doing my undergrad at Amrita University in India. I started contributing to Kdenlive since the beginning of 2019 and so far, I’ve helped with the audio capture – mostly writing almost the whole backend among small fixes and now on-board with the titler tool – all thanks to the extremely helpful community, especially the developer community here at Kdenlive !

# What are the goals for this summer?

Mainly, rewriting the backend. Currently, title clips are XML templates which are rendered using QGraphicsView. The aim is to replace this working backend as QGraphicsView is deprecated. In the new proposed backend, QML will be used (which allows a lot more flexibility in animating text or images) and rendering using QQuickRenderControl.

# How is work going so far?

It’s been a little over a week since the coding period started and so far, it’s been going smooth. The backend rendering part has been developed as a library and is almost complete and still needs a CLI access. The goals for the next few weeks would be to slowly start integrating it with MLT, although that would be after we have a solid tested working library. The developer community and my mentor, Vincent have been very helpful and warm as always.

By the summer, a working backend and some progress on the Kdenlive side is what is proposed. Beyond that, a lot of work on Kdenlive side and after I expect we can all see the tool live in the coming future 

If anyone wants to have a more detailed look, here’s my [GSoC proposal](https://docs.google.com/document/d/1Vvo3kL8KmnocjUyKRcODxuaui2d7cMV525iMP9W8kDo/edit?usp=sharing)

Do reach out if you have other queries !

