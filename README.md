# Lab 8 - Starter

Pramesh Kariyawasam, Brian Liu

1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

It's better to fit any aytomated tests within a github action that runs whenever code is pushed. For one, this helps maintain code quality and prevent the introduction of bugs and other sorts of conficts. Furthermore, its better to catch and potential issues early in the development process.

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

Yes unit tests would be appropriate to test the "message" feature of a messaging app. It helps with input validation and error handling. 

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes. A unit test can work here because it allows us to test individual parts in isolation. So we can consider "max message length" feature as an individual component and run a unit test on it. 


##Screenshot of Test Suite##
![Screenshot of Test Suite Passing all Checks](https://res.cloudinary.com/dounttx9k/image/upload/v1685339210/CSE%20110/Screenshot_2023-05-28_at_10.46.13_PM_bdtqka.png)
