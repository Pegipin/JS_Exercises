const events = [
  {
  performer: 'Joe kelly',
  title: 'Nirvana of 21'
  },
  {
  performer: 'Misa Ro',
  title: 'Days Go By'
  }
]
 
function extractValuesFromArrayByField(array, field) {

  return Array.from(array, (item) => item[`${field}`]);
}


const result = extractValuesFromArrayByField(events,'performer');
console.log(result);

const result2 = extractValuesFromArrayByField(events,'title');
console.log(result2);

module.exports = extractValuesFromArrayByField;