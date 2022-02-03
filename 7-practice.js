// ============================================
//           Module Practice Challenge
// =============================================

/*
প্রাকটিস চ্যালেঞ্জ-১

প্রতিদিন তোমার কাজ কি?

১) রাত ৮ টা বাজে মডিউল আনলক করো

২) ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো

৩) ভিডিও দেখতে দেখতে নোটস নাও

৪) মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো

৫) কোন কিছু বুঝতে না পারলে (চিন্তা করে দেখো এইখানে কিন্তু একটা
শর্ত আছে), সাপোর্ট সেশনে জয়েন করো




এখন তোমার কাজ হচ্ছে একটা for লুপ ১০ বার চালিয়ে উপরের জিনিসগুলা
আউটপুট হিসেবে দেখানো। আবার একই জিনিস while লুপ চালিয়ে ১০ বার দেখানো।
*/

// 1. Unlock module on 08:00 pm.

var unlockModule = 1;

while (unlockModule <= 10) {
    console.log(unlockModule);
    console.log('Unlock module on 08:00 pm.');
    unlockModule++;
}

// i = unlockModule;

for (i = 1; i <= 10; i++) {
    console.log(i);
    console.log('Unlock module on 08:00 pm.');
}


// 2. Practicing with Jhankar Mahbub

var practice = 1;

while (practice <= 10) {
    console.log(practice);
    console.log('Practicing with Jhankar Mahbub');
    practice++;
}

// i = practice;

for (i = 1; i <= 10; i++) {
    console.log(i);
    console.log('Practicing with Jhankar Mahbub');
}

// 3. Take Notes with watching Video

var noteTaking = 1;

while (noteTaking <= 10) {
    console.log(noteTaking);
    console.log('Take Notes with watching Video');
    noteTaking++;
}

// i = noteTaking

for (i = 1; i <= 10; i++) {
    console.log(i);
    console.log('Take Notes with watching Video');
}

// 4. Try to practice thyself.

var ownPractice = 1;

while (ownPractice <= 10) {
    console.log(ownPractice);
    console.log('Try to practice thyself');
    ownPractice++;
}

// i = ownPractice

for (i = 1; i <= 10; i++) {
    console.log(i);
    console.log('Try to practice thyself');
}

// 5. Join support session if can not understand

var joinSupport = 1;

while (joinSupport <= 10) {
    console.log(joinSupport);
    console.log('Join support session if can not understand');
    joinSupport++;
}

// i = joinSupport

for (i = 1; i <= 10; i++) {
    console.log(i);
    console.log('Join support session if can not understand');
}






//=================================
//           array-loop
//==================================


// 6. array-loop


var workPlan = ['Unlock Module', 'Practice', 'Note Taking', 'Own Practice', 'Join Support Session']
var i = 0; // index is starting from 0

while (i < workPlan.length) {
    var works = workPlan[i]; // index of workplan
    // console.log(i);
    console.log(works);
    i++;
}

// for

workPlan = ['Unlock Module', 'Practice', 'Note Taking', 'Own Practice', 'Join Support Session']

for (i = 0; i < workPlan.length; i++) {
    var routineWork = workPlan[i];
    // console.log(i);
    console.log(routineWork);
}





//=================================
//           if-else
//==================================

// 7. if-else

// if have no confusion

var confusion = false;

if (confusion == true) {
    console.log('Join Support Session');
}

else {
    console.log('Continue Practice'); // output: show this result
}



// if have confusion

var confusion = true;

if (confusion == true) {
    console.log('Join Support Session'); // output: show this result
}

else {
    console.log('Continue Practice');
}








//=====================================
//           Extra-practice
//=====================================

// Extra-practice


// 8.

/* ৭.১: ধর তোর টিচার তোকে আরেকটা শাস্তি দিছে। একশবার লিখবি- 
“আমি আর কলম দিয়ে কাউকে খোঁচা দিবো না”। 
এখন একশবার লিখার এই প্রোগ্রামটা while লুপ দিয়ে লিখ। */

var kotoBar = 1;

while (kotoBar <= 100) {
    // console.log(kotoBar);
    console.log('ami ar kolom diye kauke khocha dibo na');
    kotoBar++;
}

// i = kotoBar

for (var i = 1; i <= 100; i++) {
    console.log(i);
    console.log('ami ar kolom diye kauke khocha dibo na');
}


// 9.

/* ৭.২: ‘ঈদ মোবারক’ কথাটা তোর চৌদ্দজন ফ্রেন্ডকে এসএমএস করে পাঠাতে হবে। 
সেই প্রোগ্রামটা লিখে ফেল।  */

var sms = 1;

while (sms <= 14) {
    // console.log(sms);
    console.log('Eid Mubarak');
    sms++;
}


// i = sms

for (i = 1; i <= 14; i++) {
    // console.log(i);
    console.log('Eid Mubarak');
}


// 10.

/* ৮.১: for লুপ দিয়ে 1 থেকে 20 পর্যন্ত সবগুলো সংখ্যা আউটপুট হিসেবে  */

// i = numbers

for (var i = 1; i <= 20; i++) {
    console.log(i);
}

// while

var numberOutput = 1;

while (numberOutput <= 20) {
    console.log(numberOutput);
    numberOutput++;
}


// 11.

// ৮.২: for লুপ দিয়ে 36 থেকে 63 পর্যন্ত সবগুলো সংখ্যা আউটপুট হিসেবে দেখা। 

// i = numbers

for (var i = 36; i <= 63; i++) {
    console.log(i);
}

// while

var randomNumbers = 36;

while (randomNumbers <= 63) {
    console.log(randomNumbers);
    randomNumbers++;
}








// =========================================
//             Make addition
//==========================================

// 12.

// Make addition of chronolgical Number by for loop

var sum = 0;

for (var i = 1; i <= 10; i++) {
    // console.log(i); [it's optional]
    sum = sum + i;
    // console.log(sum); [if here console it then the sum will appear 10 times]
}
console.log(sum); // output: 55 [if console here then the sum will show in one time and show total value.]


// while

var chronology = 1;
var sum = 0;

while (chronology <= 10) {
    sum = sum + chronology;
    chronology++;
}
console.log(sum);


// 13.

// ৮.৩: এখন 1 থেকে 100 পর্যন্ত সব সংখ্যার যোগ করার জন্য একটা for লুপ লিখ। 

var summation = 0;

for (var i = 1; i <= 100; i++) {
    summation = summation + i;
}
console.log(summation);

// while

var summation = 0;
var chorono = 1; // choronology

while (chorono <= 100) {
    summation = summation + chorono;
    chorono++;
}
console.log(summation);




//==================================================
//               array-loop : Practice
//==================================================

// 14.

var girls = ['amina', 'jamina', 'kamina', 'pabina']

for (var i = 0; i < 4; i++) {
    var girl = girls[i];
    console.log(girl);
    console.log('propose a girl');
}

// Here need to use "girls.length" instead of '4' in condition


// while

girls = ['amina', 'jamina', 'kamina', 'pabina']
var i = 0;

while (i < 4) {
    var girl = girls[i];
    console.log(girl);
    console.log('propose a girl');
    i++;
}


// 15.

girls = ['amina', 'jamina', 'kamina', 'pabina', 'lamina', 'samina'];

for (var i = 0; i < girls.length; i++) {
    var sundori = girls[i];
    console.log(sundori);
    console.log('propose a girl');
}

// if we here use '4' in condition then the last two elements of girls are not shown.


// while

girls = ['amina', 'jamina', 'kamina', 'pabina', 'lamina', 'samina'];
var i = 0;

while (i < girls.length) {
    var sundoris = girls[i];
    console.log(sundoris);
    console.log('propose a girl');
    i++;
}


// 16.

var girls = ['amina', 'jamina', 'kamina', 'pabina']

for (i = 0; i < girls.length; i++) {
    var aGirl = girls[i];
    console.log(aGirl, 'you are beautiful');
}

// while

var girls = ['amina', 'jamina', 'kamina', 'pabina']
var i = 0;

while (i < girls.length) {
    var aGirl = girls[i];
    console.log(aGirl, 'you are so beautiful');
    i++;
}


// 17.

/* ৯.১: প্রপোজ করার আগে ভালো রেস্টুরেন্টে খাওয়াতে পারলে চান্স বাড়ে। 
তবে এতে খরচাপাতির ব্যাপার আছে। নিচে তোর ফ্রেন্ডদের নিয়ে ‘firends’ 
নামে একটা array লিখ। তারপর এক এক করে সব ফ্রেন্ডদের কাছে 
টাকা ধার চাওয়ার জন্য একটা for লুপ লিখ।  */


var friends = ['elu', 'ashu', 'mitu', 'any', 'mona'];

for (i = 0; i < friends.length; i++) {
    var perF = friends[i];
    console.log(perF, 'Taka deo!!');
}

// while

var friends = ['elu', 'ashu', 'mitu', 'any', 'mona'];
var i = 0;

while (i < friends.length) {
    var perF = friends[i];
    console.log(perF, 'Obosshoi Taka diba!!');
    i++;
}


// 18.

/* ৯.২:তোর বাসায় যেসব বই আছে সেখান থেকে পাঁচটি বইয়ের নাম নিয়ে books 
নাম দিয়ে একটা array লিখ। এখন একটা for লুপ দিয়ে books নামক array 
এর সব বইয়ের নাম আউটপুট হিসেবে দেখা।  */


var books = ['ICT', 'Bangla', 'English', 'Math', 'History', 'Economics', 'Management'];

for (i = 0; i < books.length; i++) {
    var book = books[i];
    console.log(book);
}


// while

var books = ['ICT', 'Bangla', 'English', 'Math', 'History', 'Economics', 'Management'];
var i = 0;

while (i < books.length) {
    var book = books[i];
    console.log(book);
    i++;
}





