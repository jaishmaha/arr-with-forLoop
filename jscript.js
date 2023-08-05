//1.Array increment and multiply
var arr=[1,2,3,4,5];
console.log(arr);
for(let i=0;i<arr.length;i++)
{
	console.log((arr[i]+2)*2);
}

// 2.Print Array Reverse Order
var myarr=["red","green","blue","orange"];
console.log(arr);
for(let i=myarr.length;i>=0;i--)
{
	console.log(myarr[i]);
}

// 3.Two array concat and print reverse
var arr1=["red","green","blue","orange"];
var arr2=["black","white"];
var res=arr1.concat(arr2);
console.log(res);
for(let i=res.length;i>=0;i--)
{
	console.log(res[i]);
}