import numpy as np

# Part 1
zerod_array = np.array(24)
print(zerod_array)
oned_array = np.arange(6)
print(oned_array)
twod_array = np.arange(6).reshape(2,3)
print(twod_array)
threed_array = np.arange(8).reshape(2,2,2)
print(threed_array)

print(threed_array.shape)
print(threed_array.ndim)

# Part 2
numpy_arr = np.array([x for x in range (1,10)])
print(numpy_arr)

print(numpy_arr.reshape(3,3))

numpy_arr = np.array([x for x in range (1,13)])
print(numpy_arr.reshape(2,2,3))

print(numpy_arr.reshape(2,2,-1))