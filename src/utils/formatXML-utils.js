function loopNestedObj (obj) {
  var gesmes = obj["gesmes:Envelope"];
  var outterCubeArray = gesmes.Cube;
  var outterCubes = outterCubeArray[0];
  var innerCubes = outterCubes.Cube;
  var innerCubesArray = innerCubes[0];
  var Cubes = innerCubesArray.Cube;
  return Cubes;
}

export { loopNestedObj }