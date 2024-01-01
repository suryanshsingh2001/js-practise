# All about promise apis

## promise.all

### What is promise.all? - (fail fast)
The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises. This returned promise will resolve when all of the input's promises have resolved, or if the input iterable contains no promises. It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, and will reject with this first rejection message / error.
- it will take an array of promises and return a single promise
- if all the promises are resolved then the promise.all will resolve
- failure of any promise will result in the failure of the promise.all

## promise.allSettled - (fail safe)

### What is promise.allSettled? 
-  The Promise.allSettled() method returns a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.

 - it will take an array of promises and return a single promise
 - it will always resolve and never reject
it will wait for all promise to settle and then return the result not necessary all promises to be resolved
 - it will return an array of objects with the status of each promise


## promise.race - (first settle)
### What is promise.race ? - 


 - it will take an array of promises and return a single promise
 - it will return the result of the first promise that is settled
 - it will not wait for all promises to settle
 - it will return the result of the first promise to settle

What if the first promise to settle is rejected? - ERROR - Uncaught (in promise) Promise rejected still return the first promise, will not wait for all promises to settle

## promise.any - (first settle success)

### What is promise.any? 
- The Promise.any() method takes an iterable of Promise objects and, as soon as one of the promises in the iterable fulfills, returns a single promise that resolves with the value from that promise. 
If no promises in the iterable fulfill (if all of the given promises are rejected), then the returned promise is rejected with an AggregateError, a new subclass of Error that groups together individual errors. Essentially, this method is the opposite of Promise.all().

 - it will take an array of promises and return a single promise
 - it will return the result of the first promise that is fulfilled/ successful
 - it will not wait for all promises to settle
 - it will return the result of the first promise to fulfill/successful
 - if all the promises are rejected then it will return an AggregateError