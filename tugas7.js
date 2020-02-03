var arr = [150,155,164,178,159,185,145,169,179,175];

for (var i = 0; i < arr.length; i++) {
    
    console.log("Tinggi ke ",i+1 ,": ", arr[i]);
}

console.log("");

for (var x of arr) {
    
    console.log(x);
}

// perbedaan dari for dan for/of
// 1. Deklarasi for/of lebih pendek dan efesien dari for.
// 2. Perulangan for dapat mengakses isi dari array secara index, sedangkan for/of tidak bisa.