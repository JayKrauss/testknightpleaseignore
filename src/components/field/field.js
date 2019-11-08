import React from 'react';
import './field.css';
import $ from 'jquery';

class Field extends React.Component {

componentDidMount(){
let map;
let currentPOS;

function createArray(num, dimensions) {
    var array = [];
    for (var i = 0; i < dimensions; i++) {
      array.push([]);
      for (var j = 0; j < dimensions; j++) {
        array[i].push(num);
      }
    }
    return array;
  }

function  createMap() {
    // let dimensions = 9, // width and height of the map
    //   maxTunnels = 10, // max number of tunnels possible
    //   maxLength = 100, // max length each tunnel can have
    //   map = createArray(1, dimensions), // create a 2d array full of 1's
    //   currentRow = Math.floor(Math.random() * dimensions), // our current row - start at a random spot
    //   currentColumn = Math.floor(Math.random() * dimensions), // our current column - start at a random spot
    //   directions = [[-1, 0], [1, 0], [0, -1], [0, 1]], // array to get a random direction from (left,right,up,down)
    //   lastDirection = [], // save the last direction we went
    //   randomDirection; // next turn/direction - holds a value from directions

    // // lets create some tunnels - while maxTunnels, dimentions, and maxLength  is greater than 0.
    // while (maxTunnels && dimensions && maxLength) {

    //   // lets get a random direction - until it is a perpendicular to our lastDirection
    //   // if the last direction = left or right,
    //   // then our new direction has to be up or down,
    //   // and vice versa
    //   do {
    //      randomDirection = directions[Math.floor(Math.random() * directions.length)];
    //   } while ((randomDirection[0] === -lastDirection[0] && randomDirection[1] === -lastDirection[1]) || (randomDirection[0] === lastDirection[0] && randomDirection[1] === lastDirection[1]));

    //   var randomLength = Math.ceil(Math.random() * maxLength), //length the next tunnel will be (max of maxLength)
    //     tunnelLength = 0; //current length of tunnel being created

    //     // lets loop until our tunnel is long enough or until we hit an edge
    //   while (tunnelLength < randomLength) {

    //     //break the loop if it is going out of the map
    //     if (((currentRow === 0) && (randomDirection[0] === -1)) ||
    //         ((currentColumn === 0) && (randomDirection[1] === -1)) ||
    //         ((currentRow === dimensions - 1) && (randomDirection[0] === 1)) ||
    //         ((currentColumn === dimensions - 1) && (randomDirection[1] === 1))) {
    //       break;
    //     } else {
    //       map[currentRow][currentColumn] = 0; //set the value of the index in map to 0 (a tunnel, making it one longer)
    //       currentRow += randomDirection[0]; //add the value from randomDirection to row and col (-1, 0, or 1) to update our location
    //       currentColumn += randomDirection[1];
    //       tunnelLength++; //the tunnel is now one longer, so lets increment that variable
    //     }
    //   }

    //   if (tunnelLength) { // update our variables unless our last loop broke before we made any part of a tunnel
    //     lastDirection = randomDirection; //set lastDirection, so we can remember what way we went
    //     maxTunnels--; // we created a whole tunnel so lets decrement how many we have left to create
    //   }
    // }

    map =  [[0,0,0,0,0,0,0,0,0,0],
            [0,1,3,3,1,8,1,1,7,0],
            [0,1,3,2,3,1,0,0,0,0],
            [0,1,3,3,1,9,1,1,1,0],
            [0,8,8,10,10,10,10,1,1,0],
            [0,6,1,1,1,7,10,1,5,0],
            [0,0,0,0,0,0,0,10,0,0]];
         
    return map; 
}

function mapGenerate(){
    var map = createMap();  
        for(var i = 0; i < map.length; i++) {
            var innerArrayLength = map[i].length;
            for(var j = 0; j<innerArrayLength; j++){

                let coordY = [i]
                let coordX = [j]
                let coord = coordY + '-' + coordX;
                console.log('COORD : ' + coord);
                switch (map[i][j]){
                case 0:
                    map[i][j]=`<div id=${coord} class='badge outer'>`;
                    break;
                case 2:
                    map[i][j]=`<div id=${coord} class='badge tile local'><img src=${require('../../images/knight.png')}></div>`;
                    break;
                case 3:
                    map[i][j]=`<div id=${coord} class='badge option tile'>`;
                    break;
                case 5:
                    map[i][j]=`<div id=${coord} class='badge castle tile'><img src=${require('../../images/castle.png')}></div>`;
                    break;
                case 53:
                    map[i][j]=`<div id=${coord} class='badge castle tile option'><img src=${require('../../images/castle.png')}></div>`;
                    break;    
                case 6:
                    map[i][j]=`<div id=${coord} class='badge cave tile'><img src=${require('../../images/cave.png')}></div>`;
                    break;
                case 63:
                    map[i][j]=`<div id=${coord} class='badge cave tile option'><img src=${require('../../images/cave.png')}></div>`;
                    break;
                case 7:
                    map[i][j]=`<div id=${coord} class='badge chest tile'><img src=${require('../../images/chest.png')}></div>`;
                    break;
                case 73:
                    map[i][j]=`<div id=${coord} class='badge chest tile option'><img src=${require('../../images/chest.png')}></div>`;
                    break;
                case 8:
                    map[i][j]=`<div id=${coord} class='badge ruins tile'><img src=${require('../../images/ruins.png')}></div>`;
                    break;
                case 83:
                    map[i][j]=`<div id=${coord} class='badge ruins tile option'><img src=${require('../../images/ruins.png')}></div>`;
                    break;
                case 9:
                    map[i][j]=`<div id=${coord} class='badge gate tile'><img src=${require('../../images/gate.png')}></div>`;
                    break;
                case 93:
                    map[i][j]=`<div id=${coord} class='badge gate tile option'><img src=${require('../../images/gate.png')}></div>`;
                    break;
                case 10:
                    map[i][j]=`<div id=${coord} class='badge water tile'>`;
                    break;
                default:
                    map[i][j]=`<div id=${coord} class='badge tile'>`;
                    break;
                }
                ;
            }
          $("#play-field").append(map[i])
        }  
}

function handleMove(currentPos, chosenPos){

};

mapGenerate(); 

$('.option').on('click', function(){

});

}

render() {
    return (
<center>
    <br/><br/><br/>
<div id='main-area'>
    <br/><br/>
    <div className="hexagon-grid-container" id='play-field'></div>
</div>
</center>
    )
    }

}

export default Field;