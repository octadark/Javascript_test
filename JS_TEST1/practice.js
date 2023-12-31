//Tarea 1
/*
function a(){
    return 35;
}
console.log(a())
    =35
*/

//tarea 2
/*
function a(){
    return 4;
}
console.log(a()+a());
    =8
*/

//Tarea 3 
/*
function a(b){
    return b;
}
console.log(a(2)+a(4));
    =6
*/

//tarea 4
/*
function a(b){
        console.log(b);
        return b*3;
    }
    console.log(a(3));
    =3
    =9
*/

//Tarea 5
/*
function a(b){
    return b*4;
    console.log(b);
 }
 console.log(a(10));
 =40
*/

//Tarea 6
/*
function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    // El siguiente console.log(b) nunca se ejecutará, ya que está después del return
    console.log(b);
}
console.log(a(15));
=4
*/

//Tarea 7 
/*
function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );
=10 3
=30
*/

//Tarea 8
/*
function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);
=3
=4
*/

//Tarea 9
/*
function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();
=2
=5
=8
=11
*/

//Tarea 10
/*
function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));
*/

//Tarea 11
/*
function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}
*/

//tarea 12
/*
function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}
a();
*/

//tarea 13
/*
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);
=10
*/

//tarea 14
/*
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);
=15
=10
*/

//tarea 15
/*
var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
=15
=15
*/