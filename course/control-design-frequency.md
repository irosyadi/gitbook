---
aliases: [Control Design with Frequency Method]
title: Control Design with Frequency Method
tags: ["control system"]
date: 2020-08-31 13:57:57
draft: false
---

# Control Design with Frequency Method

## Perbandingan Metode Root Locus (RL) dan Respon Frekuensi (RF)

- Pada desain respon transien dan stabilitas dengan pengaturan gain (*gain adjustment*)
    - RF lebih mudah, *gain* dapat diperoleh dari Bode Plot
- Pada desain respon transien dengan kompensasi seri (*cascade compensation*)
    - RF tidak se-intuitif RL
    - di RL titik tertentu diketahui memiliki karakteristik respon transien tertentu
    - di RF :
        - *phase margin* terkait dengan persen *overshoot*
        - *bandwidth* terkait dengan *damping ration* dan *settling time* serta *peak time*
- Pada desain *steady-state error* dengan kompensasi seri
    - di RF dapat dirancang kompensasi yang memperbaiki respon transien dan steady state error secara bersamaan.
    - di RL ada banyak solusi yang memungkinkan untuk membuat kompensator (yang setiap solusinya akan memunculkan isu steady state error).

## Desain Respon Frekuensi

- Sistem yang open loop-nya stabil akan stabil di closed-loop jika magnitude respon frekuensi open loop memiliki gain kurang dari 0 dB pada frekuensi yang mana fase-nya adalah 180 derajat
- Persen overshoot dikurangi dengan meningkatkan *phase margin*
- Respon dipercepat dengan meningkatkan bandwidth
- *Steady state error* diperbaiki dengan meningkatkan magnitude respon pada frekuensi rendah

### Perbaikan Respon Transien dengan Pengaturan Gain (*Gain Adjustment*)

- Damping ratio ($\zeta$) (dan persen overshoot) dan PM (phase margin)

![Diagram Bode untuk Gain Adjusment](_v_images/20201210205131927_26707.png)
