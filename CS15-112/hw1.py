import math

def setKthDigit(n, k, d):
    # Handle negative numbers
    is_negative = n < 0
    n = abs(n)

    # Convert number to string for easy manipulation
    n_str = str(n)

    # If k is greater than or equal to the length of the string, we need to add leading zeros
    if k >= len(n_str):
        n_str = '0' * (k - len(n_str) + 1) + n_str

    # Replace the kth digit
    n_str = n_str[::-1]  # Reverse the string for right-to-left indexing
    n_str = n_str[:k] + str(d) + n_str[k+1:]  # Replace the kth digit
    n_str = n_str[::-1]  # Reverse back to normal

    # Convert back to integer
    result = int(n_str)

    # Restore the negative sign if necessary
    if is_negative:
        result = -result

    return result

# Test cases
print(setKthDigit(468, 0, 1))  # Output: 461
print(setKthDigit(468, 1, 1))  # Output: 418
print(setKthDigit(468, 2, 1))  # Output: 168
print(setKthDigit(468, 3, 1))  # Output: 1468
