const rectangle = require('./rectangle');
var rect = require('./rectangle')

function solveRect(l,b){
    console.log("Solving for rectangle with l = "+l+" b = "+b);

    // if(l<=0 || b<=0)
    // {
    //     console.log("Rectangle dimension should greater than l="+l+"from b= "+b);

    // }

    // else{
    //     console.log("The area of rectangle is "+rect.area(l,b));
    //     console.log("The perimer of rectangle is "+rect.perimeter(l,b));
    // }


    rect(l,b ,(err,rectangle) => {
           if(err){
               console.log("ERROR",err.message);
           }
           else{
               console.log("The area of rectangle of dimensions of l = "+l+" and b = "+b
               +" is "+ rectangle.area())

               console.log("The perimeter of rectangle of dimensions of l = "+l+" and b = "+b
               +" is "+ rectangle.perimeter())
           }
    });

    console.log("this statement is after the call to rectangle")
}

solveRect(2,4);
solveRect(3,5);
solveRect(-3,5);
