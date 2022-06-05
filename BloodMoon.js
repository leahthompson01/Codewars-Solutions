// https://www.codewars.com/kata/5cba04533e6dce000eaf6126/javascript
// Three semicircles are drawn on AB, AD, and AF. Here CD is perpendicular to AB and EF is perpendicular to AD.

// Task
// Given the radius of the semicircle ADBCA, find out the area of the lune AGFHA (the shaded area).
function bloodMoon(r){
    const areaAGF = 1/2*Math.PI*Math.pow(r,2)
     const areaofAEF = 1/4 * Math.pow(r ,2)
     //this gives area of small semicircle AHF
     const areaAHF = areaAGF - areaofAEF
     //subtract whole semicircle AGF - areaAHF
     return areaAGF - areaAHF 
     // areaAGF - (areaAGF - areaofAEF) = areaofAEF
   }