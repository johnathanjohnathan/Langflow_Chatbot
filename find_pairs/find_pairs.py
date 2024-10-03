def find_pairs(arr, target):
    indices_map = {}
    for index, num in enumerate(arr):
        complement = target - num
        if complement in indices_map:
            print(f"Pair found at {indices_map[complement]} and {index} ({complement} + {num})")
        indices_map[num] = index

# Sample input
arr = [1, 3, 5, 7, 2, 4]
target = 8
find_pairs(arr, target)
