const creative = require('../public/creative');

test('simple test', () => {
    expect(creative(4, 6)).toBe(24);
});
