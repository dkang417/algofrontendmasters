// call stack game 
// 1.push called fn on stack
// 2.execute fn body.
// until..
// ..another fn is called;
//     pause the current execution and start at step1
// .. a return is hit:
//     pop the current fn off the stack.
//     resume executing the previous fn.

// val callMe = function( ) {
//     callMe( );
//     callMe( );
//     callMe(‘anytime’);
// };

// factorial with loop

function computeFactorial(num) {
    var result = 1;
    
    for (var i = 2; i <= num; i++) {
        console.log(`result = ${result} * ${i} (${result * i})`);
        result *= i;
    }
    return result;
}
