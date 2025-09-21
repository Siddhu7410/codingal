def intro():
        print("Centum in physics")
        print("I am the king")
        return'This is certainly possible'

b= intro()
print(b)

def kinematics(a,b,c,d):
            result=a-b+c*d
            return result

res= kinematics(455,6666,374.79,66)
print(res)

res2=kinematics(111,222,333,444)
print(res2)

def printincreasing(n):
        if n == 0:
                return
        printincreasing(n+1)
        print(n)

        printincreasing(1)