var expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage',()=>{
  it('should generate the correct message object',()=>{
    var fromText = 'Joe';
    var text = 'test text';
    var result = generateMessage(fromText,text);
    expect(result.from).toEqual(fromText);
    expect(result.text).toEqual(text);
    expect(result.createdAt).toBeA('number');
  });
});
