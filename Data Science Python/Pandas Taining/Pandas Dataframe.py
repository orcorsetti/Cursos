import pandas as pd

df = pd.DataFrame()
print(type(df))

df = pd.read_csv('Pandas Taining\PandasExample.csv')
print(df)

#Print first and last elements
print(df.head(3))

print(df.tail(3))

#print one element
print(df.iloc[0])

#Return Dataframe as list of arrays
print(df.values)

#split the read in chunks of N rows depending on the parameter
df = pd.read_csv('Pandas Taining\PandasExample.csv', chunksize=2)
for chunk in df:
    print(chunk)
    print('--')

#get filtered dataframe
df = pd.read_csv('Pandas Taining\PandasExample.csv')
print(df.columns)
df = df[df['Age']>25]
print(df)