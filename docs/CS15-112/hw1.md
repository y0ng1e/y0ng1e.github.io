# hw1

## Part A

### 1. distance(x1, y1, x2, y2) [2 pts]

> Write the function distance(x1, y1, x2, y2) that takes four int or float values x1, y1, x2, y2 that represent the two points (x1, y1) and (x2, y2), and returns the distance between those points as a float.

```python3
import math

def distance(x1, y1, x2, y2):
    print(math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2)))
```

### 2. circlesIntersect(x1, y1, r1, x2, y2, r2) [2 pts]

> Write the function circlesIntersect(x1, y1, r1, x2, y2, r2) that takes 6 numbers (ints or floats) -- x1, y1, r1, x2, y2, r2 -- that describe the circle centered at (x1,y1) with radius r1, and the circle centered at (x2,y2) with radius r2, and returns True if the two circles intersect and False otherwise.

```python3
import math

def circlesIntersect(x1, y1, r1, x2, y2, r2):
    dis=math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2))
    if dis>(r1+r2):
        return False
    return True
```

### 3. getInRange(x, bound1, bound2) [2 pts] 

> Write the function getInRange(x, bound1, bound2) which takes 3 int or float values -- x, bound1, and bound2, where bound1 is not necessarily less than bound2. If x is between the two bounds, just return it unmodified. Otherwise, if x is less than the lower bound, return the lower bound, or if x is greater than the upper bound, return the upper bound.

```python3
import math

def getInRange(x, bound1, bound2):
    if bound1>bound2: # Switch
        t=bound1
        bound1=bound2
        bound2=t
    if x<bound1:
        return bound1
    elif x>bound2:
        return bound2
    return x
```

### 4. eggCartons(eggs) [2 pts]

> Write the function eggCartons(eggs) that takes a non-negative integer number of eggs, and returns the smallest integer number of cartons required to hold that many eggs, where a carton may hold up to 12 eggs.

```python3
import math

def eggCartons(eggs):
    if int(eggs/12.0)!=eggs/12.0:
        return int(eggs/12.0)+1
    return int(eggs/12.0)
```

### 5. pascalsTriangleValue(row, col) [2 pts]

> Write the function pascalsTriangleValue(row, col) that takes int values row and col, and returns the value in the given row and column of Pascal's Triangle where the triangle starts at row 0, and each row starts at column 0. If either row or col are not legal values, return None, instead of crashing. Hint: math.factorial may be helpful! *Also: it may help to read [MathIsFun's Pascal's Triangle page](https://www.mathsisfun.com/pascals-triangle.html), which includes a general discussion, some nice applications, and further down the page a helpful formula.*

```python3
import math

def pascalsTriangleValue(row, col):
    return math.factorial(row)/(math.factorial(col)*math.factorial(row-col))
```

### 6. getKthDigit(n, k) [5 pts]
> Write the function getKthDigit(n, k) that takes a possibly-negative int n and a non-negative int k, and returns the kth digit of n, starting from 0, counting from the right.

```python3
import math

def getKthDigit(n, k):
    while k>0:
        n=math.floor(n/10)
        k-=1
    return n%10
```

### 7. setKthDigit(n, k, d) [5 pts]

> Write the function setKthDigit(n, k, d) that takes three integers -- n, k, and d -- where n is a possibly-negative int, k is a non-negative int, and d is a non-negative single digit (between 0 and 9 inclusive). This function returns the number n with the kth digit replaced with d. Counting starts at 0 and goes right-to-left, so the 0th digit is the rightmost digit.

```python3
import math

def setKthDigit(n, k, d):
    is_negative=n<0
    n=abs(n)
    n_str=str(n)
    if k>=len(n_str):
        n_str='0'*(k-len(n_str)+1)+n_str
    # Replace the kth digit
    n_str=n_str[::-1]  # Reverse the string for right-to-left indexing
    n_str=n_str[:k]+str(d)+n_str[k+1:]  # Replace the kth digit
    n_str=n_str[::-1]  # Reverse back to normal

    result=int(n_str)
    if is_negative:
        return -result
    return result
```

## Part B

### 9. nearestOdd(n) [10 pts]
> Write the function nearestOdd(n) that takes an int or float n, and returns as an int value the nearest odd number to n. In the case of a tie, return the smaller odd value. Note that the result must be an int, so nearestOdd(13.0) is the int 13, and not the float 13.0.

```python3
import math

def nearestOdd(n):
    if int(n)==n:
        if n%2==0:
            return int(n-1)
        else:
            return int(n)
    else:
        if int(n)%2==1:
            return int(n)
        else:
            if n>int(n):
                return int(n)+1
            else:
                return int(n)-1
```

### 10. numberOfPoolBalls(rows) [10 pts]

> Pool balls are arranged in rows where the first row contains 1 pool ball and each row contains 1 more pool ball than the previous row. Thus, for example, 3 rows contain 6 total pool balls (1+2+3). With this in mind, write the function numberOfPoolBalls(rows) that takes a non-negative int value, the number of rows, and returns another int value, the number of pool balls in that number of full rows. For example, numberOfPoolBalls(3) returns 6. We will not limit our analysis to a "rack" of 15 balls. Rather, our pool table can contain an unlimited number of rows. For this problem and the next, you should research [Triangular Numbers](https://en.wikipedia.org/wiki/Triangular_number). 

```python3
import math

def numberOfPoolBalls(rows):
    tot=0
    for i in range(0, rows+1):
        tot+=i
    return tot
```

### 11. numberOfPoolBallRows(balls) [25 pts]

> This problem is the inverse of the previous problem. Write the function numberOfPoolBallRows(balls) that takes a non-negative int number of pool balls, and returns the smallest int number of rows required for the given number of pool balls. Thus, numberOfPoolBallRows(6) returns 3. Note that if any balls must be in a row, then you count that row, and so numberOfPoolBallRows(7) returns 4 (since the 4th row must have a single ball in it). 

```python3
import math

def numberOfPoolBallRows(balls):
    t=0
    counter=0
    while(counter<balls):
        t+=1
        counter+=t
    return t
```

### 12. colorBlender(rgb1, rgb2, midpoints, n) [25 pts]

> This problem implements a color blender, inspired by this tool. In particular, we will use it with integer RGB values (it also does hex values and RGB% values, but we will not use those modes). Note that RGB values contain 3 integers, each between 0 and 255, representing the amount of red, green, and blue respectively in the given color, where 255 is "entirely on" and 0 is "entirely off".

> There are 5 colors in the palette because the first color is crimson, the last color is mint, and the middle 3 colors are equally spaced between them.

> So we could ask: if we start with crimson and go to mint, with 3 midpoints, what is color #1? The answer then would be rgb(212, 78, 95).

> One last step: we need to represent these RGB values as a single integer. To do that, we'll use the first 3 digits for red, the next 3 for green, the last 3 for blue, all in base 10 (decimal, as you are accustomed to). Hence, we'll represent crimson as the integer 220020060, and mint as the integer 189252201.

> With all that in mind, write the function colorBlender(rgb1, rgb2, midpoints, n), which takes two integers representing colors encoded as just described, a non-negative integer number of midpoints, and a non-negative integer n, and returns the nth color in the palette that the tool creates between those two colors with that many midpoints. If n is out of range (too small or too large), return None.

> For example, following the case above: colorBlender(220020060, 189252201, 3, 1) returns 212078095

```python3
def roundHalfUp(n):
    import math
    return int(math.floor(n+0.5))

def colorBlender(rgb1, rgb2, midpoints, n):
    if n<0 or n>midpoints+1:
        return None
    
    r1=rgb1//1000000
    g1=(rgb1//1000)%1000
    b1=rgb1%1000

    r2=rgb2//1000000
    g2=(rgb2//1000)%1000
    b2=rgb2%1000

    steps=midpoints+1

    rstep=(r2-r1)/steps
    gstep=(g2-g1)/steps
    bstep=(b2-b1)/steps

    rn=roundHalfUp(r1+rstep*n)
    gn=roundHalfUp(g1+gstep*n)
    bn=roundHalfUp(b1+bstep*n)

    return rn*1000000+gn*1000+bn
```