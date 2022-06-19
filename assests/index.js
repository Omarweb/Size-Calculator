const modelBtn = document.querySelector('.btn-calc');
const form = document.querySelector('.size-form');
const heightInput = document.getElementById("height");
const chestInput = document.getElementById("chest");
const waistInput = document.getElementById("waist");
const hipInput = document.getElementById("hip");
const sizecontainer = document.querySelector('.size');
const sizeModel = document.querySelector('.size-model');
const closeBtn = document.querySelector('.close-size');
const sizes = {
    M: {
        height: [171, 179],
        chest: [96, 100],
        waist: [84, 88],
        hip: [96, 100]
    },
    L: {
        height: [179, 185],
        chest: [101, 104],
        waist: [89, 92],
        hip: [101, 104]
    },
    XL: {
        height: [183, 190],
        chest: [105, 108],
        waist: [93, 96],
        hip: [105, 108]
    },
    XXL: {
        height: [191, 195],
        chest: [109, 112],
        waist: [97, 100],
        hip: [109, 112]
    },
    XXXL: {
        height: [196, 200],
        chest: [113, 118],
        waist: [101, 106],
        hip: [113, 118]
    },
    XXXXL: {
        height: [201, 205],
        chest: [119, 124],
        waist: [107, 112],
        hip: [119, 124]
    },

}

function onlyNumbers(array) {
    return array.every(element => {
        return typeof element === 'number' && element > 0;
    });
}


// 180, 100, 84, 92







function getMaxPart(obj) {

    const max = [sizes.XXXXL.height[1], sizes.XXXXL.chest[1], sizes.XXXXL.waist[1], sizes.XXXXL.hip[1]];


    const cal = Object.keys(obj).map((key, index) => [key, Math.abs(obj[key] - max[index])]);


    const numbers = cal.map(num => num[1]);

    //console.log('Numbers',numbers);

    const min = Math.min(...numbers);

    //console.log('MIN',min);
    const index = numbers.indexOf(min);

    return cal[index][0];
}



function getSize(biggestPart, input) {


    Object.entries(sizes).forEach(entry => {
        const [key, value] = entry;

        // console.log('Entry ', entry);
        // console.log('Object', input[biggestPart]);
        // console.log('Compare', value[biggestPart][0] <= input[biggestPart]);

        if (value[biggestPart][0] <= input[biggestPart] && value[biggestPart][1] >= input[biggestPart]) printSize(false, key);
    })

}

function printSize(error = false, size) {
    if (error) {
        sizecontainer.innerHTML = "<span>Values shouldn't be empty and numbers only</span";
        //console.log(error);
        return;
    }

    sizecontainer.textContent = '';
    setTimeout(() => {
        if (!size) sizecontainer.innerHTML = '<span>No size for you</span>';
        if (size === 'M') sizecontainer.innerHTML = '<span>Your size is Medium</span>';
        if (size === 'L') sizecontainer.innerHTML = '<span>Your size is Large</span>';
        if (size === 'XL') sizecontainer.innerHTML = '<span>Your size is XL</span>';
        if (size === 'XXL') sizecontainer.innerHTML = '<span>Your size is XXL</span>';
        if (size === 'XXXL') sizecontainer.innerHTML = '<span>Your size is 3XL</span>';
        if (size === 'XXXXL') sizecontainer.innerHTML = '<span>Your size is 4XL</span>';
    }, 500);


}

function checkVal(inputs) {
    const check = onlyNumbers(inputs);
    console.log(check);
    if (!check) {
        printSize(true, '');
        return false
    }
    return true;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = Number(heightInput.value);
    const chest = Number(chestInput.value);
    const waist = Number(waistInput.value);
    const hip = Number(hipInput.value);

    if (!checkVal([height, chest, waist, hip])) return;


    const obj = {
        height: height,
        chest: chest,
        waist: waist,
        hip: hip
    }

    const biggestPart = getMaxPart(obj);

    getSize(biggestPart, obj);
})










modelBtn.addEventListener('click', (e) => {
    e.preventDefault();
    sizeModel.classList.toggle("hide");
});

closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    sizeModel.classList.toggle("hide");
});
sizeModel.addEventListener('click', (e) => {
    if (e.target.classList.contains('size-model')) sizeModel.classList.toggle("hide");

})

