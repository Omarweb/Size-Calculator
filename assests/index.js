const modelBtn = document.querySelector('.btn-calc');
const form = document.querySelector('.size-form');
const heightInput = document.getElementById("height");
const chestInput = document.getElementById("chest");
const waistInput = document.getElementById("waist");
const hipInput = document.getElementById("hip");
const sizecontainer = document.querySelector('.size');
const sizes = {
    M: {
        height: [171, 179],
        chest: [96, 100],
        waist: [84, 88],
        hip: [96, 100]
    },
    L: {
        height: [179, 185],
        chest: [100, 104],
        waist: [88, 92],
        hip: [100, 104]
    }
}


// 180, 100, 84, 92






function getMaxPart(obj) {

    const max = [sizes.L.height[1], sizes.L.chest[1], sizes.L.waist[1], sizes.L.hip[1]];


    const cal = Object.keys(obj).map((key, index) => [key, Math.abs(obj[key] - max[index])]);


    const numbers = cal.map(num => num[1]);



    const min = Math.min(...numbers);


    const index = numbers.indexOf(min);

    return cal[index][0];
}



function getSize(biggestPart, input) {


    Object.entries(sizes).forEach(entry => {
        const [key, value] = entry;

        // console.log('Entry ', entry);
        // console.log('Object', input[biggestPart]);
        // console.log('Compare', value[biggestPart][0] <= input[biggestPart]);

        if (value[biggestPart][0] <= input[biggestPart] && value[biggestPart][1] > input[biggestPart]) printSize(key);
    })

}

function printSize(size) {
    console.log(size);
    if (!size) sizecontainer.textContent = 'No size for you';
    if (size === 'L') sizecontainer.textContent = 'Your size is Large';
    if (size === 'M') sizecontainer.textContent = 'Your size is Medium';


}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const obj = {
        height: Number(heightInput.value),
        chest: Number(chestInput.value),
        waist: Number(waistInput.value),
        hip: Number(hipInput.value)
    }

    const biggestPart = getMaxPart(obj);

    getSize(biggestPart, obj);
})










modelBtn.addEventListener('click', (e) => {
    e.preventDefault();

});


