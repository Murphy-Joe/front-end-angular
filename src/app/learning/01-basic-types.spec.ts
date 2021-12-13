describe('basic data types', () => {

  it('is easy to declare a variable', () => {

    let a = 10, b = 20;

    let answer = a + b;

    expect(answer).toBe(30);
  });

  describe('declaring variables', () => {

    it('untyped variables', () => {
      let a;

      a = 19;

      expect(a).toBe(19);

      a = 'tacos';

      expect(a).toBe('tacos');

      a = function (x: number) {
        return x * 2;
      }

      expect(typeof (a)).toBe('function');

      expect(a(10)).toBe(20);
    });
    it('setting data types for a variable', () => {

      let x: number | string; // Union.

      x = 12;


      x = 'tacos';

    });

    it('initializing a variable', () => {
      let x: number | string = 12;
      let y = 18;


      x = 'Tacos';
    });

    it('declaring constants', () => {
      const x = 12; // you cannot reassign a new value to this name.

      // x = 13;

      const jobs = ['Developer', 'QA', 'STE'];

      // jobs = ['Fry Cook'];

      jobs[0] = 'Fry Cook';

      // jobs = [...jobs, 'Scrum Master']
      jobs.push('Scrum Master');

      expect(jobs).toEqual(['Fry Cook', 'QA', 'STE', 'Scrum Master']);


      const book = { title: 'War and Piece', author: 'Tolstoy' };

      book.title = 'War and Peace';


    });
  });
  describe('built-in types', () => {

    it('numbers', () => {
      // 64 bit floating point numbers.

      let n1 = 12;
      let n2 = 3.1415;
      let n3 = 0xFFF; // Base 16.
      let n4 = 0o111; // base 8 - octal.
      let n5 = 0b11011; // base 2 - binary.
      let lindsayPay = 13_393_892_893; // thousands place thing.

    });
    describe('strings', () => {

      it('standard string delimiters', () => {
        let s1 = "dog";
        let s2 = 'dog';
        expect(s1).toBe(s2);

        let story = "She said \"Hello\" to him";
        let story2 = 'She said "Hello" to him';
        expect(story).toBe(story2);
      });
      it('literal or format strings', () => {
        let s1 = `dog`;
        let s2 = 'dog';
        expect(s1).toBe(s2);

        let story = `Chapter 1.

It was a dark and stormy night.

The End`;
        console.log(story);

        let name = 'Earl', pay = 120_000;

        let message = 'The customer\'s name is ' + name + ' and they are paid ' + pay + ' a year';
        let message2 = `The customer's name is ${name} and they are paid ${pay} a year`;
        console.log(message, message2);

      });
    });
  });
});
