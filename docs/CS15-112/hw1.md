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
        result = -result
    return result
```