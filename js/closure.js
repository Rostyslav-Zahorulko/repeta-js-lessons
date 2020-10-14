/* 
   Global env
   Record: {}
   Parent: null
*/

// [[Environment]]: Global env

const createCounter = function () {
  /* 
   createCounter env
   Record: {}
   Parent: Global env
*/

  let privateValue = 0;

  /* 
   createCounter env
   Record: {privateValue: 0}
   Parent: Global env
*/

  // [[Environment]]: createCounter env

  const increment = function () {
    privateValue += 1;
    console.log(privateValue);
  };

  /* 
   createCounter env
   Record: {privateValue: 0, increment: f}
   Parent: Global env
*/

  return {
    increment,
  };
};

/* 
   Global env
   Record: {createCounter: f}
   Parent: null
*/

const counterA = createCounter();

counterA.increment(); // 1
counterA.increment(); // 2

const counterB = createCounter();
counterB.increment(); // 1
counterB.increment(); // 2
counterB.increment(); // 3
