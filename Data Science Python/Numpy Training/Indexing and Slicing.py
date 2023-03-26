import numpy as np  

array_1d = np.array([1,2,3,4,5,6])
array_2d = np.array([[1,2,3],[4,5,6]])
array_3d = np.array([[[1,2,3],[4,5,6],[7,8,9],[10,11,12]]])

'''
print(array_1d[0])

print(array_1d[-3])

print(array_2d[0,0])

print(array_2d[0,1])

print(array_2d[1,-1])

print(array_3d[0,1,2])

print(array_3d[0,-1,-1])'''


print(array_1d[1:])

print(array_1d[3:5])

print(array_1d[-3:-1])

print(array_2d[1,1:])

print(array_2d[-2:-3:-1])

print(array_3d[0,1:,1:])