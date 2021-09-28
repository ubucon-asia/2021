---
title: >
    Mengetik Aksara Pegon dengan Ubuntu 20.04.2 
date: 2021-09-26T17:10:00+09:00
end: 2021-09-26T17:15:00+09:00
room: 1
featured: false # If it's true. This session will appear on main page.
slide: hello.pdf
speakers: # Speaker info
    - name: Faiq Aminuddin
      bio: Head Master, MTs Irsyaduth Thullab
      email: dampuawang@gmail.com # Email
      launchpad: # link to launchpad.net profile
      github: https://github.com/FaiqAminuddin # link to github profile
      profile: profile.jpg # Speaker photo
      linkurl: https://faiqaminuddin.wordpress.com/ # Other website link url
      linklabel: Website # Label for linkurl
---
Menurut wikipedia, Pegon is an Arabic script used to write the Javanese, Madurese and Sundanese languages, as an alternative to the Latin script or the Javanese script.

Pada Ubuntu 20.04.2 belum tersedia Keyboard Pegon. Pegon merupakan penulisan abjad Jawa atau Sunda atau Indonesia menggunakan abjad Arab. Oleh karena itu sebagian besar karakter Pegon sudah tersedia pada blok Unicode Arab.

Di MTs Irsyaduth Thullab, soal cbt mata pelajaran kitab kuning ditulis dengan aksara Pegon walau dengan berbagai kendala seperti;
 1. Pengetik Belum terbiasa mengetik dengan Arabic keyboard ( ar )
 2. Pengetik Masih asing dengan keyboard Pegon atau Jawi
 3. Pengetik Bingung/kagok antara layout keyboard Arabic dan Jawi atau Pegonkarena banyak huruf yang sama tapi letaknya beda.

Kendala tersebut diatasi antara lain dengan cara;
 - Menggunakan virtual keyboard (on-screen keyboard)
 - Mengetik dengan perangkat (Android Smartphone) kemudian dikirim ke komputer
 - Mengetik dengan Arabic keyboard  dengan abjad Arab saja (tanpa Pegon). Akasara "ng" diketik menggunakan huruf "غ". Aksara "ny" diketik dengan huruf "ي" dlsb.

Kendala pengetikan Pegon pada Ubuntu 20.04.2 antara lain;Belum ada keyboard Pegon

 - On-screen Keyboard belum dapat digunakan untuk jv ataupun id
 - Karakter pada On-screen Arabic Keyboard (ar) terbatas (tanpa harakat dan belum ada aksara Pegon g, ng, ny )
 
Alternatif yang sedang dicoba untuk mengatasi kendala tersebut di atas antara lain;
 - Pasang aplikasi vitual keyboard seperti Onboard
 - Edit file ara pada `/usr/share/X11/xkb/symbols` dengan menambahkan karakter-karakter Pegon.
#### HARAPAN:
 - Keyboard Pegon tertanam pada Gnome > Ubuntu
 - Keyboard Pegon dapat juga digunakan dengan on-screen kerboard

### About the speaker
 - Ubuntu user
 - Tim Dokumentasi BlankOn Linux 12 (Verbeek)
