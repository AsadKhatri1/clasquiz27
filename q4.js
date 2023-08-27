// Check if a triangle is equilateral, scalene, or isosceles.

function triangle(a, b, c) {
    if (a == b && a == c) {
        console.log('The triangle is equilateral')
    }
    else if (a == b || a == c || b == c) {
        console.log("The triangle is isosceless")
    }
    else {
        console.log('The triangle is scalene')
    }
}

triangle(3, 4, 4)