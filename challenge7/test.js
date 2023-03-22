function extent(nums) {
   let arr = undefined
   for (const num of nums) {
      if (!arr) {
         arr = [num, num]
      } else {
         arr = [Math.min(arr[0], num), Math.max(arr[1], num)]
      }
   }
   return arr
}

function extent2(nums){
	let min, max; 
	for(const num of nums){
		if(min == undefined){
			min = num;
			max = num;
		}
		else{
			min = Math.min(min, num)
			max = Math.max(max, num);
		}
	}
	return [min, max]
}
console.log(extent2([0, 2, 3, 210]))