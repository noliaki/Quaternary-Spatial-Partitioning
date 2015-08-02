"use strict";

const NODE_LENGTH:number = 1000;

// ------------------------
// define class
// 
class Node {
  constructor(_x:number, _y:number) {
    this.x = _x;
    this.y = _y;
  }
}

var partition = {

  childLen: 3,

  getBitSeparate( num:number ) {
    num = ( num | num << 8 ) & 0x00ff00ff;
    num = ( num | num << 4 ) & 0x0f0f0f0f;
    num = ( num | num << 2 ) & 0x33333333;
    return ( num | num << 1 ) & 0x55555555;
  },

  getMortonNumber( x:number, y:number ) {
    return (this.getBitSeparate(x) | (this.getBitSeparate(y) << 1));
  }
}


var canvas:object = document.querySelector("#field");
    // context:object = canvas.getContext("2d");


console.log(partition.getMortonNumber(3, 6));