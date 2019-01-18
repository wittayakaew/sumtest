const minus =require('./minus.js');
// 20 + 1 เท่ากับ 21
test('1-1 เท่ากับ 0',function(){
    expect(minus(1,1)).toBe(0);
  });
  
  // 2 + 5 เท่ากับ ?
  test('0-0 เท่ากับ 7 ',function(){
    expect(minus(0,0)).toBe(0);
  });
  
  //-1 + -1 เท่ากับ -2
  test('-1 - -1 เท่ากับ 0',function(){
    expect(minus(-1,-1)).toBe(0);
  });
  
  //-1 + 0 = -1 
  test('-1 - 0 = -1 ',function(){
    expect(minus(-1,0)).toBe(-1);
  });
  
  //1 + -1  = 0 
  test('1 - -1 = 0',function(){
    expect(minus(1,-1)).toBe(2);
  })
  
  