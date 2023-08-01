const fn = require('../sampletest.js');

xtest('1 equals 1', () => { 
  expect (1).toBe(1)
});

xtest('2 plus 3 equals 5', () => {
  expect (fn.add(2,3)). toBe(5)
})
 
xtest('3 plus 3 not equals 5', () => {
  expect (fn.add(3,3)).not.toBe(5)
 })