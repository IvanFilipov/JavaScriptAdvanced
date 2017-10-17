function qsort(arr,l,r){
    
        if(l >= r)
            return;
    
        if(r - l == 1){
    
            if(arr[r] < arr[l])
            [arr[l],arr[r]] = [arr[r],arr[l]];
            
            return;
        } 
    
        let down = l;
        let up = r;
    
        let med = arr[Math.floor((l+r)/2)];
    
        while(down < up){
    
            while(arr[down] < med)
                down++;
    
            while(arr[up] > med)
                up--;
    
            if(down < up)
                [arr[down],arr[up]] = [arr[up],arr[down]];
    
        }
    
        qsort(arr,l,Math.floor((l+r)/2)-1);
        qsort(arr,Math.floor((l+r)/2)+1,r);
}

let arr = [1,10,7,14,3,25];
let arr1 = [1,2,3,4,5,6,7,8];
let arr2 = [8,7,6,5,4,3,2,1];

qsort(arr,0,arr.length-1);
console.log(arr);

qsort(arr1,0,arr1.length-1);
console.log(arr1);


qsort(arr2,0,arr2.length-1);
console.log(arr2);
