---
aliases: [About Compiler and Interpreter]
title: About Compiler and Interpreter
tags: ["compiler", "interpreter"]
date: 2020-07-03 20:26:29
draft: false
---

# About Compiler and Interpreter

An *interpreter* for language **X** is a program (or a machine, or just some kind of mechanism in general) that executes any program **p** written in language **X** such that it performs the effects and evaluates the results as prescribed by the specification of **X**. CPUs are usually interpreters for their respective instructions sets, although modern high-performance workstation CPUs are actually more complex than that; they may actually have an underlying proprietary private instruction set and either translate (compile) or interpret the externally visible public instruction set.

A *compiler* from **X** to **Y** is a program (or a machine, or just some kind of mechanism in general) that translates any program **p** from some language **X** into a semantically equivalent program **p′** in some language **Y** in such a way that the semantics of the program are preserved, i.e. that interpreting **p′** with an interpreter for **Y** will yield the same results and have the same effects as interpreting **p** with an interpreter for **X**. (Note that **X** and **Y** may be the same language.)

The terms *Ahead-of-Time (AOT)* and *Just-in-Time (JIT)* refer to *when* compilation takes place: the "time" referred to in those terms is "runtime", i.e. a JIT compiler compiles the program *as it is running*, an AOT compiler compiles the program *before it is running*. Note that this requires that a JIT compiler from language **X** to language **Y** must somehow work together with an interpreter for language **Y**, otherwise there wouldn't be any way to run the program. (So, for example, a JIT compiler which compiles JavaScript to x86 machine code doesn't make sense without an x86 CPU; it compiles the program while it is running, but without the x86 CPU the program wouldn't be running.)

Note that this distinction doesn't make sense for interpreters: an interpreter runs the program. The idea of an AOT interpreter that runs a program before it runs or a JIT interpreter that runs a program while it is running is nonsensical.

So, we have:

- AOT compiler: compiles before running
- JIT compiler: compiles while running
- interpreter: runs

JIT Compilers
-------------

Within the family of JIT compilers, there are still many differences as to when *exactly* they compile, *how often*, and at what granularity.

The JIT compiler in Microsoft's CLR for example only compiles code *once* (when it is loaded) and compiles a whole assembly at a time. Other compilers may gather information while the program is running and recompile code several times as new information becomes available that allows them to better optimize it. Some JIT compilers are even capable of *de-optimizing* code. Now, you might ask yourself why one would ever want to do that? De-optimizing allows you to perform very aggressive optimizations that might actually be unsafe: if it turns out you were *too* aggressive you can just back out again, whereas, with a JIT compiler that cannot de-optimize, you couldn't have run the aggressive optimizations in the first place.

JIT compilers may either compile some static unit of code in one go (one module, one class, one function, one method, ...; these are typically called *method-at-a-time* JIT, for example) or they may *trace* the dynamic execution of code to find dynamic *traces* (typically loops) that they will then compile (these are called *tracing* JITs).

Combining Interpreters and Compilers
------------------------------------

Interpreters and compilers may be combined into a single language execution engine. There are two typical scenarios where this is done.

Combining an AOT compiler from **X** to **Y** with an interpreter for **Y**. Here, typically **X** is some higher-level language optimized for readability by humans, whereas **Y** is a compact language (often some kind of bytecode) optimized for interpretability by machines. For example, the CPython Python execution engine has an AOT compiler that compiles Python sourcecode to CPython bytecode and an interpreter that interprets CPython bytecode. Likewise, the YARV Ruby execution engine has an AOT compiler that compiles Ruby sourcecode to YARV bytecode and an interpreter that interprets YARV bytecode. Why would you want to do that? Ruby and Python are both very high-level and somewhat complex languages, so we first compile them into a language that is easier to parse and easier to interpret, and then interpret *that* language.

The other way to combine an interpreter and a compiler is a *mixed-mode* execution engine. Here, we "mix" two "modes" of implementing the *same* language together, i.e. an interpreter for **X** and a JIT compiler from **X** to **Y**. (So, the difference here is that in the above case, we had multiple "stages" with the compiler compiling the program and then feeding the result into the interpreter, here we have the two working *side-by-side* on the same language.) Code that has been compiled by a compiler tends to run faster than code that is executed by an interpreter, but actually compiling the code first takes time (and particularly, if you want to heavily optimize the code to run *really* fast, it takes a *lot* of time). So, to bridge this time when the JIT compiler is busy compiling the code, the interpreter can already start running the code, and once the JIT is finished compiling, we can switch execution over to the compiled code. This means that we get both the best possible performance of the compiled code, but we don't have to wait for the compilation to finish, and our application starts running straight away (although not as fast as could be).

This is actually just the simplest possible application of a mixed-mode execution engine. More interesting possibilities are, for example, to not start compiling right away, but let the interpreter run for a bit, and collect statistics, profiling information, type information, information about the likelihood of which specific conditional branches are taken, which methods are called most often etc. and then feed this dynamic information to the compiler so that it can generate more optimized code. This is also a way to implement the de-optimization I talked about above: if it turns out that you were too aggressive in optimizing, you can throw away (a part of) the code and revert to interpreting. The HotSpot JVM does this, for example. It contains both an interpreter for JVM bytecode as well as a compiler for JVM bytecode. (In fact, it actually contains *two* compilers!)

It is also possible and in fact common to combine those two approaches: two phases with the first being an AOT compiler that compiles **X** to **Y** and the second phase being a mixed-mode engine that both interprets **Y** and compiles **Y** to **Z**. The Rubinius Ruby execution engine works this way, for example: it has an AOT compiler that compiles Ruby sourcecode to Rubinius bytecode and a mixed-mode engine that first interprets Rubinius bytecode and once it has gathered some information compiles the most often called methods into native machine code.

Note that the role that the interpreter plays in the case of a mixed-mode execution engine, namely providing fast startup, and also potentially collecting information and providing fallback capability may alternatively also be played by a second JIT compiler. This is how V8 works, for example. V8 never interprets, it always compiles. The first compiler is a very fast, very slim compiler that starts up very quick. The code it produces isn't very fast, though. This compiler also injects profiling code into the code it generates. The other compiler is slower and uses more memory, but produces much faster code, and it can use the profiling information collected by running the code compiled by the first compiler.

Reference:  
[Interpreter vs JIT](https://pediaa.com/what-is-the-difference-between-interpreter-and-jit-compiler/)
