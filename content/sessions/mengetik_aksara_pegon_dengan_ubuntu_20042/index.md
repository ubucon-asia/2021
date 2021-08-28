---
title: >
    Mengetik Aksara Pegon dengan Ubuntu 20.04.2 
date: 2021-09-26T17:10:00+09:00
end: 2021-09-26T17:15:00+09:00
track: 0
featured: false # If it's true. This session will appear on main page.
speakers: # Speaker info
    - name: Faiq Aminuddin
      bio: 
      email: dampuawang@gmail.com # Email
      launchpad: # link to launchpad.net profile
      github: # link to github profile
      profile: "sessions/<session-item-dir>/<photo-file>" # Speaker photo
      linkurl: # Other website link url
      linklabel: # Label for linkurl
---
Menurut wikipedia, Pegon is an Arabic script used to write the Javanese, Madurese and Sundanese languages, as an alternative to the Latin script or the Javanese script.Pada Ubuntu 20.04.2 belum tersedia Keyboard Pegon. Pegon merupakan penulisan abjad Jawa atau Sunda atau Indonesia menggunakan abjad Arab. Oleh karena itu sebagian besar karakter Pegon sudah tersedia pada blok Unicode Arab.Di MTs Irsyaduth Thullab, soal cbt mata pelajaran kitab kuning ditulis dengan aksara Pegon walau dengan berbagai kendala seperti;Pengetik Belum terbiasa mengetik dengan Arabic keyboard   ( ar )Pengetik Masih asing dengan keyboard Pegon atau JawiPengetik Bingung/kagok antara layout keyboard Arabic dan Jawi atau Pegonkarena banyak huruf yang sama tapi letaknya beda.Kendala tersebut diatasi antara lain dengan cara;Menggunakan virtual keyboard (on-screen keyboard)Mengetik dengan perangkat (Android Smartphone) kemudian dikirim ke komputerMengetik dengan Arabic keyboard  dengan abjad Arab saja (tanpa Pegon). Akasara "ng" diketik menggunakan huruf "غ". Aksara "ny" diketik dengan huruf "ي" dlsb.Kendala pengetikan Pegon pada Ubuntu 20.04.2 antara lain;Belum ada keyboard Pegon On-screen Keyboard belum dapat digunakan untuk jv ataupun idKarakter pada On-screen Arabic Keyboard (ar) terbatas (tanpa harakat dan belum ada aksara Pegon g, ng, ny ) Alternatif yang sedang dicoba untuk mengatasi kendala tersebut di atas antara lain;Pasang aplikasi vitual keyboard seperti OnboardEdit file ara pada /usr/share/X11/xkb/symbols dengan menambahkan karakter-karakter Pegon.HARAPAN:Keyboard Pegon tertanam pada Gnome &gt; Ubuntu Keyboard Pegon dapat juga digunakan dengan on-screen kerboard 

Sesi ini merupakan studi kasus atau pengalaman pribadi saya terutama saat menulis soal-soal CBT di MTs Irsyaduth Thullab Tedunan, Wedung, Demak.Sebelumnya, pak Rahman Aftian Yusri pada Gnome Asia Summit 2019 di Gresik telah menyampaikan ide untuk membuat file pengaturan keyboard Pegon untuk disimpan di /usr/share/X11/xkb/symbols. Ide pak Aftian perlu dilanjutkan sehingga keyboard Pegon dapat segera tertanam pada sistem Gnome dan atau Ubuntu. Jadi, pengguna, terutama pengguna awam tidak perlu ngoprek lagi untuk mengetik aksara Pegon.
