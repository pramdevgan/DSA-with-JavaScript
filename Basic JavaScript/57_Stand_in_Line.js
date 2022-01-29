                                            /*
    In Computer Science a queue is an abstract Data Structure where items are kept in order. 
    New items can be added at the back of the queue and old items are taken off from the front of the queue. 
                                            */

function nextInLine(arr, item) {
    var queue = arr.push(item);
    var removeItem = arr.shift();
    return removeItem;
  }

  const testArr = [1, 2, 3, 4, 5];
  console.log("Before:" + JSON.stringify(testArr));
  console.log (nextInLine(testArr,6));
  console.log("After:" + JSON.stringify(testArr));

