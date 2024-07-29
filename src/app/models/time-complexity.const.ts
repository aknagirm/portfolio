export const timeComplexity = [
  {
    code: `
    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + Math.random();
    }
    for (j = 0; j < M; j++) {
        b = b + Math.random();
    }`,
    answer: `O(N + M)`,
    explaination: `The first loop is O(N) and the second loop is O(M). Since N and M are independent variables, so we can’t say which one is the leading term. Therefore Time complexity of the given problem will be O(N+M).`,
  },
  {
    code: `let i=0, j=0, k = 0;
    for (i = Math.floor(n / 2); i <= n; i++) {
    for (j = 2; j <= n; j = j * 2) {
        k = k + Math.floor(n / 2);
    }`,
    answer: `O(nLogn)`,
    explaination: `If you notice, j keeps doubling till it is less than or equal to n. Several times, we can double a number till it is less than n would be log(n).
    Let’s take the examples here.
    for n = 16, j = 2, 4, 8, 16
    for n = 32, j = 2, 4, 8, 16, 32
    So, j would run for O(log n) steps.
    i runs for n/2 steps.
    So, total steps = O(n/ 2 * log (n)) = O(n*logn)`,
  },
  {
    code: `
    let a = 0;
    for (i = 0; i < N; i++) {
      for (j = N; j > i; j--) {
        a = a + i + j;
      }
    }`,
    answer: `O(N*N)`,
    explaination: `The above code runs total no of times <br>
= N + (N – 1) + (N – 2) + … 1 + 0 <br>
= N * (N + 1) / 2 <br>
= 1/2 * N^2 + 1/2 * N <br>
O(N^2) times.`,
  },
  {
    code: `
    let a = 0, i = N;
    while (i > 0) {
      a += i;
      i = Math.floor(i/2);
    }`,
    answer: `O(log N)`,
    explaination: `We have to find the smallest x such that ‘(N / 2^x )< 1 OR  2^x > N’  x = log(N)`,
  },
  {
    code: `
    for(var i=1;i<n;i++)
    i*=k`,
    answer: '\\( O(\\log_k n) \\)',
    explaination: `Because the loop will run kc-1 times, where c is the number of times i can be multiplied by k before i reaches n. Hence, kc-1=n. Now to find the value of c we can apply log and it becomes logkn`,
  },
  {
    code: `
    function function(int n)
    {
        var i = 1;
        var s = 1;
        while (s < n) {
            s = s + i;
            i++;
        }
    }`,
    answer: '\\( O(\\sqrt{n}) \\)',
    explaination: `
    S = x
    S = x + 1 // i = 1
    S = x + 1 + 2 // i = 2
    ........
    S = x + 1 + 2 + 3.....k // i < n
    x + k(k+1)/2 < n
    Hence, the time complexity is O(√n).
    `,
  },
  {
    code: `
    function fun(n)
    {
      for(let i = 0; i*i < n; i++)
        console.log("GeeksforGeeks");
    }`,
    answer: '\\( O(\\sqrt{n}) \\)',
    explaination: `
   The loop will stop when i * i >=n
   lets consider at kth iteration the loop will end, where the value of i is k
   so k * k = n
   k = \\( \\sqrt{n} \\)
   Hence, the time complexity is O(√n).
   `,
  },
  {
    code: `
    function fun(n, x)
    {
        for(let i = 1; i < n; i = i * x) //or for(let i = n; i >=1; i = i / x)
            document.write("GeeksforGeeks");
    }`,
    answer: '\\( O(\\log_x n) \\)',
    explaination: `
   The loop will stop when i * \\( x^k \\)>n
   k = \\(\\log_x n\\)
   Hence, the time complexity is \\( O(\\log_x n) \\).
   `,
  },
  {
    code: `
    function fun(n)
    {
    for (let i = 0; i < Math.floor(n / 2); i++)
        for (let j = 1; j + Math.floor(n / 2) <= n; j++)
            for (let k = 1; k <= n; k = k * 2)
                console.log("GeeksforGeeks");
    }`,
    answer: '\\( O(n^2log_x 2) \\)',
    explaination: `
   Time complexity of 1st for loop = O(n/2) ⇒ O(n).
Time complexity of 2nd for loop = O(n/2) ⇒ O(n).
Time complexity of 3rd for loop = \\( O(log_x 2) \\).
Hence, the time complexity of function will become \\( O(n^2log_x 2) \\)
   `,
  },
  {
    code: `
    function fun(n)
    {
    for (let i = 1; i <= n; i++)
        for (let j = 1; j <= n; j = j + i)
            console.log("GeeksforGeeks");
    }`,
    answer: 'O(nlogn)',
    explaination: `
   Time complexity of 1st for loop = O(n). 2nd loop executes n/i times for each value of i.
    n = x + x/2 + x/3 + x/4 .... x/k
    k = logn
    Hence, the time complexity of function will become O(nlogn)
   `,
  },
];
