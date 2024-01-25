# Signalsapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.0.


This project is about ANGULAR SIGNALS 

What are Signals?
Signals have an easy-to-understand API for reporting data changes to the framework, allowing the framework to optimize change detection and re-rendering in a way that so far was just not possible.With Signals, Angular will be able to determine exactly what parts of the page need to be updated and update only those and nothing more.This comes in contrast with what currently happens with for example default change detection, where Angular has to check all the components on the page, even if the data that they consume didn't change.Signals are all about enabling very fine-grained updates to the DOM that are just not possible with the current change detection systems that we have available.Signals are all about increasing the runtime performance of your application, by getting rid of Zone.js.Even without the runtime performance benefits, signals are just a great way to build applications in reactive style in general.Signals are also way easier to use and understand than RxJS when it comes to propagating data changes throughout an application.

Signals are a game changer, and they take reactivity in Angular to a whole new level!♥️


The computed() Signal API
Signals can be created and derived from other signals. When a signal updates, all its dependent signals will then get updated automatically.The computed API works by taking in one or more source signals, and creating a new signal.When the source signal changes (in our case the counter signal), the computed signal derivedCounter gets updated as well, instantly.

Untracked() API
By using the untracked API, we can access the value of the counter signal without creating a dependency between the counter and the derivedCounter signal.
