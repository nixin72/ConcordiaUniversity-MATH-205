let aprxeq = (a, b, m) => Math.abs(a - b) <= m;
let sqrt = x => Math.sqrt(x);
let cos = x => Math.cos(x);
let sin = x => Math.sin(x);
let tan = x => Math.tan(x);

let lim = (f, x) => {
    let l = f(x - 0.00001);
    let r = f(x + 0.00001);
    let y = f(x);

    if (aprxeq(l, r, .01)) {
        return y;
    }
    else if (Math.abs(l) == Math.abs(r)) {
        return Infinity;
    }
    else {
        return [l, r];
    }
}

let f = new Function("x", `return -1*((x**2)/3)+6`);
console.log(f(10));
function anonymous(x) { return -1 * ((x ** 2) / 3) + 6 }

console.log(lim(x => 1 / Math.sqrt(x), 0));