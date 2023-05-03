import pandas as pd

s = pd.Series([x for x in range(1,11)])

print(s)

#Return element on the index send as parameter
print(s.iloc[0])
print(s.iat[5])

#Slice series
print(s[5:9])
print(s[-4:-1])

#where - if condition is true returns the value, if not a NaN
print(s.where(s%2==0))

#where - with an specific return in false case
print(s.where(s%2==0,'Odd Number'))

# where - with specific not Nan values
print(s.where(s%2==0, inplace=True))
print(s.dropna())
print(s.fillna('Filled Value'))
 
