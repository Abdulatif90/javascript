/* variables*/
/* variable larni ikki attribute mavjud 
1. let
2. const 
 let - bu berilgan qiymatlarni o`zgartirish imkoniyatini beradi va bu qiymatni qayta qayta o`zgartirishimiz mumkin bo`ladi.
const - bu o`zgarmas qiymatlarni foydalanishda "const" variabledan foydalanamiz, bunda qiymat o`garmas va bu qiymatdan faqat bir marta foydalanish uchun ishlatiladi - misol*/


// let a = 25;
// console.log("the value of a :", a);
// a=20 ;
// console.log("a:", a);



/*functions - 2 ta attribute mavjud
1. define 
2. call 
functionning define qismi- bu qismda Bu bosqichda funksiyani yaratish yoki aniqlash (definition) amalga oshiriladi. Funksiya aniqlanganda, unga nom beriladi va funksiyaning ichida bajariladigan kod bloklari yoziladi. Funksiyani aniqlash faqat uning tuzilmasini yaratadi,*/


//  function greetings() {
//    console.log("hi, everybody!!!!");
//  }
// greetings()


    /* bu esa functionning call qismi - Funksiyani chaqirish bosqichida u bajariladi. Ya'ni, call bu funksiyani ishga      tushirishni anglatadi. Funksiyani chaqirganda, unga kerakli parametrlar beriladi (agar mavjud bo'lsa), va funksiyada aniqlangan kodlar bajariladi. */

/* Function criteries: structure and returning, execution lar 
Structures : regular,expression, arrow and Auto invoke ;
1. Regular functions:*/

// function greetings() {
//   console.log("Hello, Abdulatif!!!");
// }
//  greetings();


/* 2. Expression functions : - Anonymous va Named fucntionlarni o`z ichiga oladi. Ko`pro Anonymous functionlar amaliyotda ko`pro foydalanadi, shuning uchun bu funksiyani Anonym function deb ham yuritiladi*/
/* anonymous (structture)*/


// const abs=function (){
//   console.log('Welcome, Abdulatif!!!');
// }
// abs();


/* arrow (structure ) - bunda Function ni o`ringa '=>'  belgisidan fotdalaniladi*/


// const xyz=() => {
//   console.log('Nice to meet you brother!!!');
// }
// xyz();

/* consolega chiqariladigan natijalarni bir joyga yig`ish mnumkin */

// greetings();
// abs();
// xyz();

/* invoke (structure) */

// (function() {
//   console.log('The God always save us');
// })
// (); 


/* returning function - bu funksiyaning natija sifatida qiymat qaytarishidir. Buning yordamida funksiya o'z bajarilishidan keyin biror ma'lumotni tashqi dunyoga uzatishi mumkin. Funksiya ichida return kalit so'zi ishlatiladi va bu bilan funksiyaning bajarilishi to'xtatiladi, so'nggi natija funksiyaning chaqiruvchisiga qaytariladi.*/

// function calculate() {
//   const a=10;
//   const b=15;
//   return a+b;
   
// }
// const result = calculate();
// console.log(" the result is " ,result );

/*return yozilganda, funksiya shu nuqtada bajarilishini to'xtatadi va qiymatni tashqi chaqiruvchi kodga uzatadi.
Funksiya return kalit so'zisiz chaqirilsa, u undefined qiymatini qaytaradi.*/

/*void  function -bu natija qaytarmaydigan funksiya, ya'ni return bilan hech qanday qiymat yoki natija qaytarilmaydi. Bunday funksiyalar oddiygina ba'zi amallarni bajarish uchun ishlatiladi va ular bajarilganidan so'ng hech qanday qiymat yoki natija qaytarmaydi. Funksiya ichida return ishlatilmasa yoki bo'sh return yozilsa, funksiyaning natijasi undefined bo'ladi.
1.Natija qaytarmaydi: Funksiya ichida return ishlatilmaydi yoki bo'sh bo'ladi.
2.Amallarni bajaradi: Bunday funksiyalar faqat biror amalni bajarish uchun chaqiriladi, lekin ular qiymat qaytarmaydi.
Natijada ular undefined qiymatini qaytaradi yoki hech qanday natija bermaydi.*/

// function calculateVoid() {
//   const a = 10;
//   const b = 15;
//   console.log(a+b);
// }
// const result = calculateVoid();
// console.log(result);

/*Function larning argument va parametrlari mavjud 
-Parametrlar — bu funksiya e'lon qilinishida ishlatiladigan o'zgaruvchilar bo'lib, ular funksiyaga beriladigan qiymatlarni belgilash uchun ishlatiladi. Funksiya chaqirilganda bu parametrlar argumentlar yordamida qiymatga ega bo'ladi
Argumentlar:
Argumentlar — bu funksiyani chaqirganingizda parametrlar o'rniga berilgan real qiymatlar. Argumentlar funksiya chaqirilganda parametrlar orqali funksiyaga uzatiladi.
Funksiya ichida bu argumentlar parametr sifatida foydalaniladi.*/


// function add (x,y) {
//   return x+y;
// }
// const result= add( 3,5);  /* demak, x va y - bu parametr , 3 va 5 - bu argumentlar*/
// console.log(result);  


/*Function priority- steplarni bajarilish tartibi*/

/*1 - chisida return qiymatini chiqarishda x va y larni qiymatini function ichida berilgan qiymatdan foyladalanadi*/

// function add (x,y) {
//   x=20;
//   return x+y;
// }
// const result= add( 3,5);  /* demak, x va y - bu parametr , 3 va 5 - bu argumentlar*/
// console.log(result);  

/*2- chi . bunda function ning parametralari ichida berilgan qiymatdan foydalanadi */

// const x=5;
// function add (y) {
//   return x+y;
// }
// const result= add(5);  /* demak, x va y - bu parametr , 3 va 5 - bu argumentlar*/
// console.log(result);  


/*3- chi . bunda function ning parametralari ichida berilgan qiymatlar yetarli bo`lmasa uning tashqarida berilgan qiymatlardan foydalanadi */

// const x=5;
// function add (x,y) {
//   return x+y;
// }
// const result= add(3,5);  /* demak, x va y - bu parametr , 3 va 5 - bu argumentlar*/
// console.log(result);  





