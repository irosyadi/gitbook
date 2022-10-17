---
aliases: [MK Sistem Kendali Lanjut]
title: MK Sistem Kendali Lanjut
tags: ["control system", "kuliah"]
date: 2020-08-31 14:57:57
draft: false
---

# MK Sistem Kendali Lanjut

- Kode: TKE193154
- SKS: 3
- Jadwal 2020
    - TKE193154 Sistem Kendali Lanjut A JUMAT 13:20 - 15:50 GEDUNG TEKNIK E 204 - 15 mhs

## Referensi

- Norman S. Nise, Control Systems Engineering \[[website](https://bcs.wiley.com/he-bcs/Books?action=index&bcsId=11568&itemId=1119474221)\]
- Katsuhiko Ogata, Modern Control Engineering
- Richard C. Dorf and Robert H. Bishop, Modern Control Systems \[[website](https://www.pearson.com/us/higher-education/program/Dorf-Modern-Control-Systems-13th-Edition/PGM328731.html?tab=resources)\]
- Farid Golnaraghi and Benjamin C. Kuo, Automatic Control Systems \[[website](https://www.accessengineeringlibrary.com/content/book/9781259643835)\]
- Brian Douglas, The Fundamentals of Control Theory \[[website](https://www.patreon.com/briandouglas)\]\[[ebook](https://bit.ly/2XLlAKl)\]
- Pao C. Chau, Process Control: A First Course With MATLAB \[[website](https://www.cambridge.org/id/academic/subjects/engineering/chemical-engineering/process-control-first-course-matlab?format=PB)\]
- Karl J. Åström and Richard M. Murray, Feedback Systems: An Introduction for Scientists and Engineers \[[website](https://www.cds.caltech.edu/~murray/amwiki/index.php?title=Main_Page)\]
- R.V. Dukkipati, Analysis and Design of Control Systems using MATLAB
- [Ricone Website](https://ricopic.one/control/)

## Software

- [GNU Octave](https://www.gnu.org/software/octave/index)
- [Online Octave](https://octave-online.net/)
- [Matlab](https://www.mathworks.com/products/matlab.html)

## Online Course

- [Umich Control Tutorials](https://ctms.engin.umich.edu/CTMS/index.php?aux=Home)

## Online Video Course

- [Brian Douglas Youtube Control System Lectures](https://www.youtube.com/user/ControlLectures/playlists)
- [The Ryder Project Control Lectures](https://www.youtube.com/playlist?list=PLlCDw0ApIeDEOaY5fZHWAL4GNSiZ2IWG-)

## Kuliah

### Pekan-1

- Pendahuluan
- Steady State Error
- Video Pendukung
    - [Final Value Theorem and Steady State Error Brian Douglas](https://www.youtube.com/watch?v=PXxveGoNRUw&list=PLUMWjy5jgHK1NC52DXXrriwihVrYZKqjk&index=15)
    - [Recap of Steady-State Error The Ryder Project](https://www.youtube.com/watch?v=D1SAPMJTImU&list=PLlCDw0ApIeDEOaY5fZHWAL4GNSiZ2IWG-&index=33)
    - [Steady-State Error #1, using Error Constants The Ryder Project](https://www.youtube.com/watch?v=Idk9OkB2fuY&list=PLlCDw0ApIeDEOaY5fZHWAL4GNSiZ2IWG-&index=34)
    - [Steady-State Error #1, using Final Value Theorem The Ryder Project](https://www.youtube.com/watch?v=ZoQ7lj2bdLo&list=PLlCDw0ApIeDEOaY5fZHWAL4GNSiZ2IWG-&index=35)
    - [Steady-State Error #2, using Error Constants The Ryder Project](https://www.youtube.com/watch?v=AQNk2bydOY4&list=PLlCDw0ApIeDEOaY5fZHWAL4GNSiZ2IWG-&index=36)
    - [Finding Requirements for SSE The Ryder Project](https://www.youtube.com/watch?v=dJcooAEmOds&list=PLlCDw0ApIeDEOaY5fZHWAL4GNSiZ2IWG-&index=37)

### Pekan-2

- Analisis Kestabilan Routh Hurwitz
- Video Pendukung
    - [Introduction to System Stability and Control Brian Douglas](https://www.youtube.com/watch?v=uqjKG32AkC4&list=PLUMWjy5jgHK1NC52DXXrriwihVrYZKqjk&index=16)
    - [Stability of Closed Loop Control Systems Brian Douglas](https://www.youtube.com/watch?v=yf09OrHa520&list=PLUMWjy5jgHK1NC52DXXrriwihVrYZKqjk&index=17)
    - [Routh-Hurwitz Criterion, An Introduction Brian Douglas](https://www.youtube.com/watch?v=WBCZBOB3LCA&list=PLUMWjy5jgHK1NC52DXXrriwihVrYZKqjk&index=18)
    - [Routh-Hurwitz Criterion, Special Cases Brian Douglas](https://www.youtube.com/watch?v=oMmUPvn6lP8&list=PLUMWjy5jgHK1NC52DXXrriwihVrYZKqjk&index=19)
    - [Routh-Hurwitz Criterion, Beyond Stability Brian Douglas](https://www.youtube.com/watch?v=wGC5C_7Yy-s&list=PLUMWjy5jgHK1NC52DXXrriwihVrYZKqjk&index=20)
    - [Recap of Stability The Ryder Project](https://www.youtube.com/watch?v=TAEDUz5lGGw&list=PLlCDw0ApIeDEOaY5fZHWAL4GNSiZ2IWG-&index=29)
    - [Stability Example #1 The Ryder Project](https://www.youtube.com/watch?v=wqJX0VatZzw&list=PLlCDw0ApIeDEOaY5fZHWAL4GNSiZ2IWG-&index=30)
    - [Stability Example #2 The Ryder Project](https://www.youtube.com/watch?v=wUhMBZSLwTI&list=PLlCDw0ApIeDEOaY5fZHWAL4GNSiZ2IWG-&index=31)
    - [Stability Example #3 The Ryder Project](https://www.youtube.com/watch?v=Q0ANlwI87NA&list=PLlCDw0ApIeDEOaY5fZHWAL4GNSiZ2IWG-&index=32)
- Octave

```octave
equ=[1 2 3] %characteristic equation polynomial
roots(equ)
```

### Pekan-3

- Root Locus (Tempat Kedudukan Akar)
- Video Pendukung:
    - [Brian Douglas - The Root Locus Method - Introduction](https://www.youtube.com/watch?v=CRvVDoQJjYI&list=PLUMWjy5jgHK3-ca6GP6PL0AgcNGHqn33f&index=1)
    - [Brian Douglas - Sketching Root Locus Part 1](https://www.youtube.com/watch?v=eTVddYCeiKI&list=PLUMWjy5jgHK3-ca6GP6PL0AgcNGHqn33f&index=2)
    - [Brian Douglas - Sketching Root Locus Part 2](https://www.youtube.com/watch?v=jb_FiP5tKig&list=PLUMWjy5jgHK3-ca6GP6PL0AgcNGHqn33f&index=3)
    - [The Ryder Project - Recap of Root Locus Diagrams](https://www.youtube.com/watch?v=vzH0vdprs58&list=PLlCDw0ApIeDEOaY5fZHWAL4GNSiZ2IWG-&index=38)
    - [The Ryder Project - Drawing Root Locus #1](https://www.youtube.com/watch?v=uSyzGsnMK28&list=PLlCDw0ApIeDEOaY5fZHWAL4GNSiZ2IWG-&index=39)
    - [The Ryder Project - Drawing Root Locus #2](https://www.youtube.com/watch?v=K19YgVJVP54&list=PLlCDw0ApIeDEOaY5fZHWAL4GNSiZ2IWG-&index=40)
- Plot root locus di Octave atau Matlab

```octave
pkg load control
num=[1] %numerator
den=[1 2 3] %denumerator
sys=tf(num,den) %transfer function
rlocus(sys)
```

### Pekan-4

- Desain Sistem Kendali dengan Root Locus
- Video Pendukung:
    - [Designing a Lead Compensator with Root Locus Brian Douglas](https://www.youtube.com/watch?v=NMpmb0ihoFo&list=PLUMWjy5jgHK3-ca6GP6PL0AgcNGHqn33f&index=4)
    - [Designing a Lag Compensator with Root Locus Brian Douglas](https://www.youtube.com/watch?v=vXwOzDs5xKY&list=PLUMWjy5jgHK3-ca6GP6PL0AgcNGHqn33f&index=5)
    - [Root Locus Plot: Common Questions and Answers Brian Douglas](https://www.youtube.com/watch?v=WLBszzT0jp4&list=PLUMWjy5jgHK3-ca6GP6PL0AgcNGHqn33f&index=6)
    - [Gain a better understanding of Root Locus Plots using Matlab Brian Douglas](https://www.youtube.com/watch?v=pG3_b7wuweQ&list=PLUMWjy5jgHK3-ca6GP6PL0AgcNGHqn33f&index=7)

### Tugas

- Persiapan  
    - Silakan presensi dulu di Eldiru pada tanggal 26 Desember
    - Akses situs [Interactive Course for Control Theory](https://icct.riteh.hr/hub/login)
    - Buat akun ICCT, cek email untuk mendapatkan username dan password
    - Login ke [Interactive Course for Control Theory](https://icct.riteh.hr/hub/login)
    - Untuk mempermudah silakan akses [video berikut](https://drive.google.com/file/d/19T4VmsvNd7Swl5SyaDELVoFXkNYOAzbx/view)
- Latihan Jupyter Notebook di ICCT  
    - Anda akan berinteraksi dengan Jupyter Notebook di ICCT
    - Klik folder ICCT pada Jupyter Notebook, lalu klik `Table-of-Contents-ICCT.ipynb`
    - Klik kanan, open di new tab file Link `1.1.1 Complex Numbers in Cartesian Form` di folder `1.1 Complex Numbers`
    - Anda berada di Jupyter Notebook `M-01_Complex_numbers_Cartesian_form.ipynb`
    - Pilih menu <button>Kernel</button> lalu <button>Restart and Run All</button>
    - Silakan baca Notebook-nya, baca penjelasan atau penugasaannya.
    - Lalu anda ubah nilai bilangan kompleksnya, tekan <button>Plot z1</button> atau <button>Plot z2</button>
    - Lalu anda variasikan operasinya seperti <button>Add</button>, <button>Substract</button> dll.
    - Anda bisa unduh atau screenshoot citranya.
    - Pilih menu <button>Kernel</button> lalu <button>Shutdown</button> untuk mematikan Jupyter Notebook.
- Tugas (dengan waktu 2 pekan)  
    - Sesuai dengan distribusi (terlampir di Eldiru), lakukan hal sebagai berikut:
    - Jalankan berkas Jupyter Notebook sebagaimana yang didistribusikan kepada anda.
    - Untuk setiap berkas Jupyter Notebook buat laporan mini dalam berkas `.docx` atau `.odt` yang terdiri dari:
        - Judul, disertai penjelasan (dalam terjemah bahasa Indonesia) dari berkas Jupyter Notebook. (Kode Python pada Jupyter Notebook tak perlu disertakan.)
        - Pembahasan. Pembahasan ringkas dari aktivitas yang anda lakukan, jika perlu lengkapi unduhan gambar (screenshot).
    - Simpan setiap berkas dalam nama `NIM-TugasXXX.docx` misalnya `H1A018091-Tugas385.odt`. Gabungkan ketiga berkas penugasan dalam file `.zip` lalu unggah ke laman *Assignment* di Eldiru.

## Istilah Sistem Kendali

- Bandwidth and 3dB. The bandwidth of a band pass filter is the frequency range that is allowed to pass through with minimal attenuation. The frequency at which the power level of the signal decreases by 3 dB from its maximum value is called the 3 dB bandwidth. A 3 dB decrease in power means the signal power becomes half of its maximum value. This occurs when the output voltage has dropped to $1/{\sqrt{2}}$ (~0.707) of the maximum output voltage and the power has dropped by half (since $P=V^2/R$. Exact: $20\\log _{10}\left({\tfrac {1}{\sqrt {2}}}\right)\approx -3.0103\\ \mathrm {dB}$
- [Half-power point - Wikipedia](https://en.wikipedia.org/wiki/Half-power_point)
