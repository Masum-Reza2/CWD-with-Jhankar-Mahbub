console.log('Hello world');
        //sum of n
        function sumOfN(n){
            if(n===1){
                return 1;
            }
            else{
                return n + sumOfN(n-1);
            }
        }
        let n = 5;
        console.log(sumOfN(n));