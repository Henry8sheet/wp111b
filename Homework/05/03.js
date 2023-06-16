function truthTable(n) 
 {
    if (n <= 0) 
    {
      console.log("請輸入正整數 n。");
      return;
    }
    for (let i = 0; i < Math.pow(2, n); i++) {
      const binaryString = i.toString(2).padStart(n, "0");
      console.log(binaryString.split("").join(", "));
    }
  }
  