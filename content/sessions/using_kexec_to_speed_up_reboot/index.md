---
title: >
    Using kexec to speed-up reboot 
date: 2021-09-26T16:55:00+09:00
end: 2021-09-26T17:00:00+09:00
room: 1
featured: false # If it's true. This session will appear on main page.
slide: hello.pdf
speakers: # Speaker info
    - name: Juhyung Park
      bio: Ph.D Student, DGIST DataLab
      email: qkrwngud825@gmail.com # Email
      launchpad: # link to launchpad.net profile
      github: https://github.com/arter97 # link to github profile
      profile: profile.jpg # Speaker photo
      linkurl: https://arter97.com/ # Other website link url
      linklabel: Website # Label for linkurl
---
kexec loads a new kernel image without going through the hardware's initialization stage, drastically speeding up the reboot process.

In this lightning talk, pros and cons of kexec will be listed along with how-to instructions on using kexec on Ubuntu 20.04.

We're currently using kexec to speed up our development and successfully reduced the reboot time from 2 minutes to 10 seconds on a server machine.

### About the speaker
I'm a 23 years old student at DGIST DataLab, currently pursuing a Ph.D in Information & Communication Engineering.

I've been dabbling around the Linux kernel and Android OS for almost 10 years and published my work online under the alias "arter97". I've been using Ubuntu for my daily driver OS ever since I've entered Linux development.