---
title: >
    Using kexec to speed-up reboot 
date: 2021-09-26T16:55:00+09:00
end: 2021-09-26T17:00:00+09:00
room: 1
featured: false # If it's true. This session will appear on main page.
speakers: # Speaker info
    - name: Juhyung Park
      bio: 
      email: qkrwngud825@gmail.com # Email
      launchpad: # link to launchpad.net profile
      github: # link to github profile
      profile: "sessions/<session-item-dir>/<photo-file>" # Speaker photo
      linkurl: # Other website link url
      linklabel: # Label for linkurl
---
kexec loads a new kernel image without going through the hardware's initialization stage, drastically speeding up the reboot process.In this lightning talk, pros and cons of kexec will be listed along with how-to instructions on using kexec on Ubuntu 20.04.We're currently using kexec to speed up our development and successfully reduced the reboot time from 2 minutes to 10 seconds on a server machine.


