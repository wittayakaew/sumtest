const sum = require('./sum');
// 1 + 2 เท่ากับ 3
test('1 + 2 เท่ากับ 3', function(){
  expect(sum(1,2)).toBe(3);
});

// 20 + 1 เท่ากับ 21
test('20 + 1 เท่ากับ 21',function(){
  expect(sum(20,1)).toBe(21);
});

// 2 + 5 เท่ากับ ?
test('2 + 5 เท่ากับ 7 ',function(){
  expect(sum(2,5)).toBe(7);
});

//-1 + -1 เท่ากับ -2
test('-1 + -1 เท่ากับ -2',function(){
  expect(sum(-1,-1)).toBe(-2);
});

//-1 + 0 = -1 
test('-1 + 0 = -1 ',function(){
  expect(sum(-1,0)).toBe(-1);
});

//1 + -1  = 0 
test('1 + -1 = 0',function(){
  expect(sum(1,-1)).toBe(0);
})

