// we want to see array element by loop

// 1.

var numbers = [45, 86, 34, 87, 12, 98, 82];

for (i = 0; i < 7; i++) {
    var element = numbers[i]; // "i" is the index number of 'numbers'.
    console.log(element);
}

// after adding elements in array we can't see the added numbers by loop for the condition so here we use "numbers.length" in condition.


numbers = [45, 86, 34, 87, 12, 98, 82, 33, 44];

for (i = 0; i < numbers.length; i++) {
    var element = numbers[i];
    console.log(element);
}


// 2.

var items = ['bottle', 'mug', 'paper', 'book', 'pen'];

for (i = 0; i < items.length; i++) {
    var item = items[i];
    console.log(item);
}