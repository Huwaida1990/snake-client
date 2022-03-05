const IP = 'localhost';
const PORT = 50541;

const MOVEMENT = {
  UP:'w',
  LEFT:'a',
  DOWN:'s',
  RIGHT:'d'
}
const MESSAGES = {
  '1': 'Say: SsSssSs',
  '2': 'Say: I can\'t be defeated!',
  '3': 'Say: nom nom nom',
  '4': 'Say: ❤️❤️❤️',
  '5': 'Say: HAHA you died!'
};

//EXPORT
module.exports = {
  IP,
  PORT,
  MOVEMENT ,
  MESSAGES
};