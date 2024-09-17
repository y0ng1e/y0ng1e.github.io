# hw2

## Part A

### 1. digitCount(n) [2 pts]

> Write the function digitCount(n) that takes a possibly-negative int and returns the number of digits in it. So, digitCount(12323) returns 5, digitCount(0) returns 1, and digitCount(-111) returns 3. One way you could do this would be to return len(str(abs(n))), but you cannot do that, since you may not use strings here! This can be solved with logarithms, but seeing as this is "loops week", you should instead simply repeatedly remove the ones digit until you cannot.

```python
def digitCount(n):
    if n==0:
        return 1
    elif n<0:
        n=-n
    t=0
    while n>0:
        n//=10
        t+=1
    return t
```

### 2. gcd(m, n) [2 pts]

> [Note: to receive any credit, you must solve this problem using Euclid's algorithm, and by no other means. In particular, do not just loop through all integers less than min(m,n) and find the common factors that way -- it is much too slow!]

> According to Euclid, the greatest common divisor, or gcd, can be found like so:

```
gcd(x,y) == gcd(y, x%y)
```
> We can use that to quickly find gcd's. For example:

```
gcd(270,250) == gcd(250, 20) # 270 % 250 == 20
             == gcd(20, 10) # 250 % 20 == 10
             == gcd(10, 0) # 20 % 10 == 0
```

> When we get to gcd(x,0), the answer is x. So gcd(270, 250) is 10. With this in mind, write the function gcd(x,y) that takes two positive integers x and y and returns their gcd using Euclid's gcd algorithm.

```python
def gcd(m, n):
    if n==0:
        return m
    else:
        return gcd(n,m%n)
```

### 3. hasConsecutiveDigits(n) [2 pts]

> Write the function hasConsecutiveDigits(n) that takes a possibly- negative int value n and returns True if that number contains two consecutive digits that are the same, and False otherwise.

```python
def hasConsecutiveDigits(n):
    if n<0:
        n=-n
    if n<11:
        return False
    while n>10:
        if n%10==int(n/10)%10:
            return True
        n//=10
    return False
```

### 4. nthAdditivePrime(n) [2 pts]

> Write the function nthAdditivePrime(n) that takes a non-negative int n and returns the nth Additive Prime, which is a prime number such that the sum of its digits is also prime. For example, 113 is prime and 1+1+3==5 and 5 is also prime, so 113 is an Additive Prime.

```python
import math

def isPrime(num):
    if num < 2:
        return False
    for i in range(2, int(math.sqrt(num)) + 1):
        if num % i == 0:
            return False
    return True

def nthAdditivePrime(n):
    cnt=0
    num=2
    while True:
        alt=num
        digit_sum=0
        while alt>0:
            digit_sum+=alt%10
            alt//=10
        if isPrime(num) and isPrime(digit_sum):
            cnt+=1
            if cnt==n:
                return num
        num+=1
```

### 5. mostFrequentDigit(n) [4 pts]

> Write the function mostFrequentDigit(n), that takes a possibly-negative integer n and returns the digit from 0 to 9 that occurs most frequently in it, with ties going to the smaller digit. 

```python
def mostFrequentDigit(n):
    a=[0,0,0,0,0,0,0,0,0,0]
    while n>0:
        a[n%10]+=1
        n//=10
    max=0
    ans=0
    for i in range(10):
        if a[i]>max:
            max=a[i]
            ans=i
    return ans
```

### 6. isRotation(x, y) [4 pts]

> Write the function isRotation(x, y) that takes two non-negative integers x and y, both guaranteed to not contain any 0's, and returns True if x is a rotation of the digits of y and False otherwise. For example, 3412 is a rotation of 1234. Any number is a rotation of itself. 

```python
def isRotation(x, y):
    x_str=str(x)
    y_str=str(y)
    return len(x_str)==len(y_str) and y_str in (x_str+x_str)
```

### 7. integral(f, a, b, N) [4 pts]

> Background: in calculus, we use the integral of a function f from x=a to x=b to compute the area under the curve between those points (or the negative area if the function is below the x-axis). One way to approximate this area (that is, to find it without doing any actual calculus!) is by replacing the smooth function with a collection of N trapezoids, as shown in this image (from here, with N=5):

As in that image, here we will only use uniform widths, so each of the trapezoids has a width of (b - a)/N, so that all N of them together span the width of (b - a).

In any case, the larger N is, the more trapezoids you use, the more accurate your approximation becomes. You can read more here about this so-called trapezoidal rule.

With this in mind, write the function integral(f, a, b, N) that takes a Python function f (that itself takes one value x, a float, and returns a float), and two floats a and b, where a<=b, and a positive int N, and uses the trapezoidal rule with N trapezoids to return the approximate area under the curve of f(x) where a <= x <= b. To be clear, in the case where N=1, this uses just one trapezoid, where the left edge is at (a, f(a)) and the right edge is at (b, f(b)), so the result is (b - a) * (f(a) + f(b))/2 (the width times the average height of the trapezoid).

Hint: you should use almostEqual if you have your own tests or add any to our test function. Also, you'll probably want to use some very simple curves for testing, as we did in the test function, such as f(x)=x, f(x)=2*x+3, and f(x)=2*x**2, and then in ranges (a,b) with values of N such that you can fairly easily compute the expected answer by hand.

Another hint: here is a basic example showing how functions work as parameters to other functions:

```
def f1(x): return x+1
def f2(x): return x+2
def h(f): return f(10)
print(h(f1)) # calls f1(10), prints 11
print(h(f2)) # calls f2(10), prints 12
```

```python
def integral(f, a, b, N):
    width=(b-a)/N
    total_area=0.5*(f(a)+f(b))
    for i in range(1,N):
        x=a+i*width
        total_area+=f(x)
    total_area*=width
    return total_area
```

## Part B

### 9. findZeroWithBisection [15 pts]

```
Aside: as we will cover more carefully later in the course, a function may take another function as an argument.  For example, consider this code:
def h(n):
    return n+5
def f(g, x):
    return 2*g(x)
print f(h,3) # prints 16
Here, we define a function f whose first argument is another function.  On the last line, we call f providing the function h, which is bound in f to the parameter g.  Hence, calls to g in f are really calls to h.  Play around with the sample code to get the hang of this idea.  Then, read the next preliminary topic...

In mathematics, one way to numerically (as opposed to algebraically) find a zero of a function f(x) is to use what amounts to binary search.  To start, we need to know two values, x0 and x1, with x0<x1, where f(x0) and f(x1) have different signs (so one is positive and the other is negative).  Hence, by the Intermediate Value Theorem, we know there is some value x in the range [x0,x1] such that f(x)=0.  It is that value of x that we are seeking.  How?  First, try the value xmid, which is the midpoint between x0 and x1.  If f(xmid) is exactly 0, we are done!  Otherwise, we can divide our range in half as such:  if f(xmid) and f(x0) are the same sign, use the range [xmid, x1].  Otherwise, f(xmid) and f(x1) must share the same sign, so use the range [x0, xmid].  We repeat this in a loop until x0 and x1 are within some suitably small epsilon.
 
With this in mind, write the function findZeroWithBisection that takes a function f, a float x0, a float x1, and a float epsilon, and returns an approximate value x in [x0,x1] where f(x) is approximately zero.  Your function should stop when x0 and x1 are within epsilon, and at that time should return the midpoint of that range.  Note that if it is not true that exactly one of f(x0) and f(x1) is negative, your function should return the Python value None, signifying that the bisection method cannot be used on the given range.

Let's see this in action!  First, we'll use it to approximate the square root of 2 without the ** operator:

print "use bisection to approximate sqrt(2):"
def f1(x): return x*x - 2 # root at x=sqrt(2)
x = findZeroWithBisection(f1, 0, 2, 0.000000001)
print " x =", x                # prints  x = 1.41421356192
print " check: x**2 =", (x*x)  # prints  check: x**2 = 1.99999999871 (really close!)

Next, let's use it to approximate phi (the golden ratio), without using the closed-form solution ((1 + sqrt(5))/2), instead using the interesting property of phi that adding one to it is the same as squaring it.  That is, ((phi + 1) == phi**2).  How do use that?  Simple, convert it into an equation equal to 0:  phi**2 - (phi + 1) == 0.  Now we're set!  (Of course, we could just use the Quadratic Formula here, but it's more interesting to use bisection, now that we have it!).

print "use bisection to approximate phi (the golden ratio):"
def f2(x): return x**2 - (x + 1) # root at x=phi
x = findZeroWithBisection(f2, 0, 2, 0.000000001)
print " x =", x                  # prints x = 1.61803398887
phi = (1 + 5**0.5)/2             # the actual value (to within Python's floating point accuracy)
print " check: x/phi =", (x/phi) # prints check: check: x/phi = 1.00000000007 (nice!)

The previous two examples are nice, but simpler techniques than bisection would have worked as well.  So let's solve a problem that would be hard to solve without bisection (or some other numeric approximation algorithm).  Specifically, find a number x such that x5 == 2x:

print "use bisection to approximate x where x**5 == 2**x"
def f3(x): return x**5 - 2**x # f(1)<0, f(2)>0
x = findZeroWithBisection(f3, 1, 2, 0.000000001)
print " x =", x                              # prints x = 1.17727855081
print " check: x**5 - 2**x =", (x**5 - 2**x) # prints check: x**5 - 2**x = 3.63570817896e-09 (great!)

Hopefully this bisection excursion helps you appreciate the awesome computational power that about 10 lines of Python can have!
```

```python
def findZeroWithBisection(f, x0, x1, epsilon):
    if f(x0)*f(x1)>=0:
        return None
    while (x1-x0)>epsilon:
        xmid=(x0+x1)/2.0
        fmid=f(xmid)
        if abs(fmid)<epsilon:
            return xmid
        if fmid*f(x0)<0:
            x1=xmid
        else:
            x0=xmid
    return (x0+x1)/2.0
```

### 10. 