import numpy as np

x = np.array([i for i in range(10)])

print(np.where(x%2==0,'Even','Odd'))

condlist = [x<5, x>5]
choicelist= [x**2, x**3]

print(np.select(condlist, choicelist,default=x))