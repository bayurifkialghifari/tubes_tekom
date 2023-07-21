const conditionIf = require('../../../lib/logics/parser/conditionIf')
const getJsFormat = require('../test-parser-helper')

describe('Test Condition If', () => {
  it('Should parse string correctly', () => {
    const test1 = conditionIf("jika foo itu 'bar'")
    expect(test1.exp).toBe(`if (foo  ==  'bar')`)
  })

  it('Should parse number correctly', () => {
    const test1 = conditionIf("jika foo itu 123")
    expect(test1.exp).toBe(`if (foo  ==  123)`)
  })

  it('Should return null if not match', () =>{
    const test1 = conditionIf("kal foo itu 123")
    const test2 = conditionIf("kaloo foo i 123")
    expect(test1).toBe(null)
    expect(test2).toBe(null)
  })

  it('Should return correctly flexing', () => {
    const jsFormat = getJsFormat(`
      jika foo itu 123
        tampilkan "its 123"
      dahan
    `)
    expect(jsFormat).not.toBeNull()
    let shouldMatch = [
      'if (foo  ==  123) {',
      'console.log("its 123")',
      '}'
    ]
    jsFormat.split("\n").every((v, i) => {
      if(!shouldMatch[i]) return true;
      return expect(v).toContain(shouldMatch[i])
    })
  })
})