import numpy as np

# np_sqrt = np.sqrt([2,4,9,16])
# print(np_sqrt)

# cos = np.cos(0)
# print(cos)

# sin = np.sin(np.pi/2)
# print(sin)

# floor = np.floor([1.5,1.6,2.7,3.3,1.1,-0.3,-1.4])
# print(floor)

# exp = np.exp([0,1,5])
# print(exp)

# # Array Shape
# narray = np.array([[10,15,17,26,13,19],[12,11,21,24,14,23]])

# print(narray.ravel())
# print(narray.reshape(3,4))
# print(narray.resize(2,6))

# new_array = np.hsplit(narray,2)
# print(new_array)

# new_array = np.hstack(new_array)
# print(new_array)

first_numpy_array = np.array([1,2,3,4])
print(first_numpy_array)

array_with_zeros = np.zeros((3,3))
print(array_with_zeros)

array_with_ones = np.ones((3,3))
print(array_with_ones)

array_with_empty = np.empty((3,3))
print(array_with_empty)

np_arange = np.arange(12)
print(np_arange)

print(np_arange.reshape(3,4))

np_linspace = np.linspace(1,6,5)
print(np_linspace)

oneD_array = np.arange(15)
print(oneD_array)

twoD_array = oneD_array.reshape(3,5)
print(twoD_array)

threeD_array = np.arange(27).reshape(3,3,3)
print(threeD_array)
print(threeD_array.shape)

