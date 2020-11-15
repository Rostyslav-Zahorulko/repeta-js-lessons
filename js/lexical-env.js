// ЛЕКСИЧЕСКОЕ ОКРУЖЕНИЕ (задачка)

// _________________________________________________________________________________________________________________

// https://youtu.be/2HnaMQorU7Y?t=3428

// Пример:

/*
    let x = 10;

    function foo() {
      let y = x + 5;
      return y;
    }

    function bar() {
      let x = 2;

      return foo();
    }

    function main() {
      foo();
      bar();
    }

    main();
*/

// _________________________________________________________________________________________________________________

// Разбор примера:

/* 1.
   Global env
   Record: {}
   Parent: null
*/

let x = 10;

/* 2.
   Global env
   Record: {x: 10}
   Parent: null
*/

/* 3.
   [[Environment]] = Global env
*/

function foo() {
  /* 10.
   Foo env
   Record: {}
   Parent: Global env
*/

  /* 13.
   Foo env
   Record: {}
   Parent: Global env
*/

  let y = x + 5; // 10 + 5

  /* 11.
   Foo env
   Record: {y: 15}
   Parent: Global env
*/

  /* 14.
   Foo env
   Record: {y: 15}
   Parent: Global env
*/

  return y;
}

/* 4.
   Global env
   Record: {x: 10, foo: f}
   Parent: null
*/

/* 5.
   [[Environment]] = Global env
*/

function bar() {
  /* 12.
   Bar env
   Record: {}
   Parent: Global env
*/

  let x = 2;

  /* 12.
   Bar env
   Record: {x: 2}
   Parent: Global env
*/

  return foo();
}

/* 6.
   Global env
   Record: {x: 10, foo: f, bar: f}
   Parent: null
*/

/* 7.
   [[Environment]] = Global env
*/

function main() {
  /* 9.
   Main env
   Record: {}
   Parent: Global env
*/

  foo(); // 15
  bar(); // 15
}

/* 8.
   Global env
   Record: {x: 10, foo: f, bar: f, main: f}
   Parent: null
*/

main();

// _________________________________________________________________________________________________________________
