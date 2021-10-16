const extractValuesFromArrayByField = require('./extractArray');

describe('return the field value', () => {
  let events = [];
  beforeEach(() => {
    events = [
      {
        performer: 'Joe kelly',
        title: 'Nirvana'
      },
      {
        performer: 'Misa Ro',
        title: 'Days'
      }
    ]
  });


  test('return the field value', () => {
  
    const result = extractValuesFromArrayByField(events, 'performer');
    
  
    expect(result[0]).toBe('Joe kelly');
  });

});