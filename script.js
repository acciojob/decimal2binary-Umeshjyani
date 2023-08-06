function decimalToBinary(num) {
  //Write you code here
	let ans="";
	while(num!=0){
		let r=num%2;
		ans=r+ans;
		nums=nums/2;
	}
	// return ans;
	// console.log(ans);
	const ans2 = Number(str);
  return ans2;
}

window.decimalToBinary = decimalToBinary;
