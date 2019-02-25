function getPrimeNumber(num){
	var flg = 0;
	for(var i=2; i<=num -1; i++){
		if(num % i === 0){
			flg = i;
			break;
		}
	}
	if(flg === 0){
		return true;
	}
	else{
		return false;
	}
}
