export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;
  
if (trueOrFalse) {
  task = true; // Modificando directamente la variable existente
  task2 = false; // Modificando directamente la variable existente
}
  
  return [task, task2];
}