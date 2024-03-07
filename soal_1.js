function Prima(n) {
    if (n < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
        return false;
      }
    }
    return true;
  }
  
  console.log("Bilangan prima dari 1 hingga 1.000:");
  for (let bil= 1; bil <= 1000; bil++) {
    if (Prima(bil))
  }