---
aliases: [MATLAB How To]
title: MATLAB How To
tags: ["numerical"]
date: 2020-12-20 21:28:08
category: howto
draft: false
---

# MATLAB How To

## Uninstall Toolbox in MATLAB

- Toolboxes are managed from the Add-On Manager. To open the Add-On Manager:
- Open the "Add-Ons" menu in the Environment section of the MATLAB toolstrip
- Click "Add-On Manager" in the Add-Ons menu
- Each toolbox has an "Uninstall" button on it. Click the button to uninstall the toolbox.
- Uninstall toolboxes via the uninstaller.
- Open the Control Panel and open "Programs and Features."
- Locate MATLAB in the list of available programs, select it, and click uninstall.
- The MATLAB uninstaller will then launch. In the uninstaller, check the boxes for products you wish to uninstall, and uncheck the boxes for products you wish to keep.
- Finally, click the "Uninstall" button to uninstall the toolboxes.

## Understanding PID Block on Simulink

![PID in Simulink: Native block vs Handmade PID](_v_images/20210408112810129_27254.png)

PID Controller block has a parameter called Filter Coefficient, N. By default this parameter is set to 100. Based on your results, looks like you left this value unchanged. The transfer function of PID Controller block is:  
P+I/s+D*N/(1+N/s)  
N is the bandwidth of lowpass filter on the derivative. Pure derivative is not a good idea - it amplifies measurement noise, so a practical implementation should avoid pure derivatives and use a low pass filter, which is what PID Controller block does.  
If you look under the mask of native PID block, that's how it does it:  
![PID Block under Mask](_v_images/20210408113018494_31856.png)

The main point is not to use the pure derivative in your simulation. If you want to approach the pure derivative as high as possible, set N high, say at 1,000 or 10,000.

The derivative term of the PID controller is never implemented as a pure derivative because that would be extremely sensitive to noise. Hence, a cutoff frequency is added.

So, the D term will act like almost a derivative up to a frequency via

```
          Ns
s ---> --------
        s + N
```

N being the filter coefficient. This also makes it possible to implement a D term using an integrator avoiding a noisy derivative operation.

For N=100, its frequency response is:

![frequency response of N in PID Block](_v_images/20210408113451804_8496.png)

Ideally, N will be as low as possible. The drawback of derivative action is ideal derivative has very high gain for high frequency signals. It means the high frequency measurement noise will generate large variations of the control signal.  
To prevent this situation, the value of filter coefficient ‘N’ is taken to be low (2 < N < 20)

## PID in MATLAB

### pid

Create PID controller in parallel form, convert to parallel-form PID controller

`C = pid(Kp,Ki,Kd,Tf)` creates a continuous-time PID controller with proportional, integral, and derivative gains `Kp`, `Ki`, and `Kd` and first-order derivative filter time constant `Tf`:

$$
C=K_p+ \frac{K_i}{s}+ \frac{K_ds}{T_fs+1}
$$

This representation is in *parallel form*. When `Tf = 0`, the controller has no filter on the derivative action.

### pidstd

Create a PID controller in standard form, convert to standard-form PID controller

`C = pidstd(Kp,Ti,Td,N)` creates a continuous-time PIDF (PID with first-order derivative filter) controller object in standard form. The controller has proportional gain `Kp`, integral and derivative times `Ti` and `Td`, and first-order derivative filter divisor `N`:

$$
C=K_p(1+\frac{1}{T_i} \frac{1}{s}+ \frac{T_ds}{ \frac{T_d}{N}s +1})
$$

When `Ti = Inf`, the controller has no derivative action. When `Td = 0`, the controller has no derivative action. When `N = Inf`, the controller has no filter on the derivative action. $\frac{T_d}{N}= T_f$

### PID Tuner

Tune PID controllers.  
Command: `pidTuner` Open PID Tuner for PID tuning.  
The PID Tuner app automatically tunes the gains of a PID controller for a SISO plant to achieve a balance between performance and robustness.  
Form—Controller form in PID Tuner: 'Parallel' - 'Standard'. See `pid` and `pidstd`.

### pidtune

PID tuning algorithm for linear plant model.  
`C=pidtune(sys,type)` designs a PID controller of type `type` for the plant `sys`. If `type` specifies a one-degree-of-freedom (1-DOF) PID controller, then the controller is designed for the unit feedback loop as illustrated:

`type`:

- `P`—Proportional only
- `I`—Integral only
- `PI`—Proportional and integral
- `PD`—Proportional and derivative
- `PDF`—Proportional and derivative with first-order filter on derivative term
- `PID`—Proportional, integral, and derivative
- `PIDF`—Proportional, integral, and derivative with first-order filter on derivative term

### PID Controller

Continuous-time or discrete-time PID controller in Simulink.  
The PID Controller block implements a PID controller (PID, PI, PD, P only, or I only).

Form—Controller structure: Parallel (default) - Ideal

- Parallel. The controller output is the sum of the proportional, integral, and derivative actions, weighted independently by P, I, and D, respectively. For example, for a continuous-time parallel-form PID controller, the transfer function is:

$$
C_{par}(s)=P+I(\frac{1}{s})+D(\frac{Ns}{s+N})
$$
$$
C_{par}(s)=P+I(\frac{1}{s})+D(\frac{s}{\frac{s}{N}+1})
$$

Here `N cannot = Inf`. The block does not support `N = Inf` (ideal unfiltered derivative).

Compare it with `pidstd` form:

$$
C=K_p+ \frac{K_i}{s}+ \frac{K_ds}{T_fs+1}
$$

- Ideal. The proportional gain P acts on the sum of all actions. For example, for a continuous-time ideal-form PID controller, the transfer function is:

$$
C_{id}=P[1+I(\frac{1}{s})+D(\frac{Ns}{s+N})]
$$
