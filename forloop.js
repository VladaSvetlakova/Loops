let fruit = ["apple", "pear", "kiwi", "plum"];
let colors = ["red", "blue", "pink"];
let sizes = ["fineboi", "hefty Chonk", "oh lawd", "goodness gracious"];

for (s = sizes.length-1; s >= 0; s--) {
    for (i = 0; i < colors.length; i++) {
        for (p = 0; p < fruit.length; p++) {
            let theColor = colors[i];
            let theFruit = fruit[p];
            let theSize = sizes[s];
            console.log(theSize + " " + theColor + " " + theFruit);
        }
    }
}