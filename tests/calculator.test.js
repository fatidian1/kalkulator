const {calculator} = require('../calculator');
test('2+2*4', () => expect(calculator('2+2*4')).toBe("10"));
test('2+2**3*2', () => expect(calculator('2+2**3*2')).toBe("18"))
