import pandas as pd

l = [x for x in range(5)]
#Serie
s = pd.Series(l)

# print(s)

# print(s[3])

#Serie indexada
s = pd.Series(l, index=['a','b','c','d','e'])

# print(s)
# print(s['e'])

#Serie con diccionario
data = {'a':1, 'b':2, 'c':3, 'd':4,'e':5}

s = pd.Series(data)
print(s)

#Serie con diccionario filtrado

s = pd.Series(data, index=['a','b'])

print(s)

#Serie con diccionario filtrado elemento inexistente
s = pd.Series(data, index=['a','b','c','f'])

print(s)