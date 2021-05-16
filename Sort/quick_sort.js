let partition = async function (data, l, r) {
    let i = l, j = r, value = data[l];
    while (i < j) {
        while(i < j && data[j] > value ) j --;
        if (i < j) data[i++] = data[j]; // 此时后半部分有个空位
        while(i < j && data[i] < value) i ++;
        if (i < j)  data[j --] = data[i];  // 此时后前部分有个空位
    }
    data[i] = value;
    return i;
}
let quickSort = async function(data, l, r) {
    if (l >= r) return;
    let pos = await partition(data, l, r);
    await quickSort(data, l, pos-1);
    await quickSort(data, pos+1, r);
}
let data = [10,3,5,1,6,8,7,9,2,4];
async function go () {
    await quickSort(data, 0, data.length-1);
    console.log(data);
}
go();