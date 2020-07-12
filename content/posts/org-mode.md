+++
title = "Emacs and Org-Mode"
author = ["Matthew DiLoreto"]
date = 2020-03-01T15:41:00-05:00
draft = false
meta = false
+++

Before this year I was always a vim guy. I used vim for almost everything except JVM programming (Java, Scala. For those tasks I really prefer IntelliJ), but this year I installed emacs. I figured if I really wanted to participate in the [holy flame war] I better spend some time learning the other tool as well. I used a few different tool for all my electronic tasks, and here's what that landscape looked like for me before emacs:


## Before Emacs {#before-emacs}

| Task                    | Software                                       |
|-------------------------|------------------------------------------------|
| Taking Notes            | vim, Github-flavored Markdown                  |
| Keeping an agenda       | A simple note widget on my phone, Google Tasks |
| Text file manipulation  | vim                                            |
| python, C++             | vim with [YouCompleteMe]                       |
| Java, Scala, javascript | IntelliJ                                       |

I was generally happy using this configuration, with the exception of my agenda. I was too disorganized, with short-term tasks on a note widget on my phone's home screen, and longer term tasks in Google Tasks. Putting time constraints on the short-term tasks was basically impossible since the note app had no integrations with the calendar, and putting those things in Google Tasks was too onerous. Also, I do most of my work on my laptop, so having to keep my phone by my side while working was a big pain.

I'd recently watched a talk from [some guy] on org-mode, and the simple plain-text markup with powerful keyboard shortcuts convinced me to give it a shot.
Actually, the keyboard shortcut for inserting timestamps, `C-u C-c .`, is the single thing I saw in that talk that I _had_ to try.
So I opened emacs and... couldn't figure out how to make a new file.
So back to what I knew, `vim agenda.org`, insert some markup, save, _then_ `emacs agenda.org`.
I haven't gone back to another way of organizing my tasks.

I ought to write about my workflow with org-mode, but that's for another day.
In fact, I liked it so much that I started taking all my class notes with emacs too.
So it begins, I've chosen a side on the holy war, and emacs is slowly conquering territory that used to belong firmly to vim.


## Now, 3 months of emacs {#now-3-months-of-emacs}

| Task                    | Software                 |
|-------------------------|--------------------------|
| Taking Notes            | emacs, org-mode          |
| Keeping an agenda       | emacs, org-mode          |
| Text file manipulation  | vim                      |
| python, C++             | vim with [YouCompleteMe] |
| Java, Scala, javascript | IntelliJ                 |

Actually, these changes coincided with me teaching myself Clojure, so the landscape _really_ looks like:

| Task                    | Software                 |
|-------------------------|--------------------------|
| Taking Notes            | emacs, org-mode          |
| Keeping an agenda       | emacs, org-mode          |
| Clojure                 | emacs, CIDR              |
| Text file manipulation  | vim                      |
| python, C++             | vim with [YouCompleteMe] |
| Java, Scala, javascript | IntelliJ                 |

And it's definitely not looking good for vim down the road. Right now my vim/emacs ratio is around 1:1, but I imagine this will shift more in emacs's favor soon. I _really_ like emacs. It's almost apples and oranges to vim, or maybe a more apt analogy would be _crab-apples_ to oranges, where you've only been eating crab-apples for years and didn't know how good oranges tasted yet.
