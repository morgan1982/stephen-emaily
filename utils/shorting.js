const nums = [2, 4, 1, 7, 4, 9, 7, 4, 13, 56, 43, 32, 98, 45]


const bubble = (data) => {
    let len = data.length;

    do{
        for (let i = 0; i < len -1; i++) {
            if (data[i] > data[i + 1]) {
                swap(data, i, i+1);
            }
        }
    } while (len --);
    return data;
}

const swap = (arr, indexA, indexB) => {
    let tmp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = tmp;
}

let short = bubble(nums);
console.log(short);
