---
aliases: [Windows 10 How To]
title: Windows 10 How To
tags: ["windows"]
date: 2020-12-20 21:26:54
draft: false
---

# Windows 10 How To

## Nuget (.Net Package Manager)

- Clearing Nuget (.Net Package Manager) local cache
- Install nuget command line `choco install nuget.commandline`
- Delete nuget local cache `nuget locals all -clear`
- But Chocolatey use the cache

## Squirrel Temporary in Windows 10

- [Squirrel](https://github.com/Squirrel/Squirrel.Windows) is a framework used for installing/updating Windows apps. So, probably some of the apps, installed on your PC are using it, no need to worry.

### Access Point Change

- [How to change WiFi Roaming Aggressiveness or Sensitivity in Windows 10](https://www.thewindowsclub.com/wifi-roaming-sensitivity-aggressiveness)

## Network Command Line

- `netsh wlan show profiles` View various wireless network profiles saved on your PC
- `netsh wlan connect name="nameofnetwork" interface="nameofnetworkadapter"`
- `netsh wlan show drivers` View WiFi adapter driver information
- `netsh wlan show wirelesscapabilities` View WiFi adapter driver information
- `netsh wlan show interfaces` View wireless adapter settings
	- `netsh wlan show interface name="nameofinterfaces"`
- `netsh wlan show profile name="networkname" key=clear`
- `netsh wlan set hostednetwork mode=allow ssid="networkname" key="password"`
- `netsh wlan show networks`

## Network Repair

- `netsh winsock reset`
- `netsh int ip reset`
- `ipconfig /release`
- `ipconfig /flushdns`
- `ipconfig /renew`
