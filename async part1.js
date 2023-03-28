// Part 1 Introducing asynchronous JavaScript

/* Learning Questions:

What is the primary difference between synchronous and asynchronous programming in JavaScript?

Answer : A synchronous program runs the program one line at a time , in the order that was written. The next line of code waits
on the previous line of code to finish , before it can run.
On the other hand,with Asynchronous programming, you no longer have to wait for the previous task  to finish. Other tasks can run
before the previous task has finished. 

Why is this useful?

Answer: Asynchronous programming is helpful with long running programs. When we have several APIs we want to actively communicate with 
at different times , we can do so we with Asynchronous programming.


What problems does it solve?

Answer: With long running functions, synchronous programming would disable you from being able to interact with other events,
until the the function has finished. Asynchronous programming can start  another task before  previous one has finished


 */

/* Notes:

Long running functions can be fixed by Asynchronous programming by:
-Making sure that the long running program is begun by calling a function 
-That function must be initiated and be returned immediately to not interrupt programs responsivity
-Allowing the program to alert us when an operation is complete 







 */