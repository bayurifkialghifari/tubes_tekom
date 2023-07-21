const loopForOf = require('../../../lib/logics/parser/loopForOf');
const getJsFormat = require('../test-parser-helper');

describe('Test var assign', () => {
	it('Should return null if not match', () => {
		const test1 = loopForOf('untuk semu foo dari bar');
		const test2 = loopForOf('untuk smua foo dar bar');
		expect(test1).toBe(null);
		expect(test2).toBe(null);
	});

	it('Should return correctly flexing', () => {
		const jsFormat = getJsFormat(`
			untuk semua foo dari bar
        tampilkan foo
      dahan
    `);
		expect(jsFormat).not.toBeNull();
		let shouldMatch = ['for (const foo of bar) {', 'console.log(foo)', '}'];
		jsFormat.split('\n').every((v, i) => {
			if (!shouldMatch[i]) return true;
			return expect(v).toContain(shouldMatch[i]);
		});
	});
});
