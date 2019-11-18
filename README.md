# Testing

This repo is used to play around with different testing methods.
Clone down the repo and play around with jest, cypress, selenium etc.
Mess around with unit testing or end-2-end testing. Overall
have fun with it.


## Steps to clone and Start on Your local machine

Copy the url then type the following below in your terminal

```
git clone [url]
```

Then type `git remote remove origin` so the repo on your machine is no longer connected to the repo on github. 
The following steps below will have you install all the dependencies and 
start the server for a sample page. The last step is the command for testing.

```
npm install
```
```
npm start
```
```
npm run test
```

## Testing methods

* End to End: A helper robot that behaves like a user to click around the app and verify that it functions correctly. Sometimes called "functional testing" or e2e.
* Integration: Verify that several units work together in harmony.
* Unit: Verify that individual, isolated parts work as expected.
* Static: Catch typos and type errors as you write the code.