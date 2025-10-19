class Circle:
    def _init__(self,r):
        self.r=r
        self.__magic="hahaha"

    def area(self):
        print(f'The area is{3.14*self.r*self.r}')

    def domagic(self):
        print(self.__magic)




class Square:
    def _init__(self,r):
        self.r=r

    def area(self):
        print(f'The area is{self.r*self.r}')


c1=Circle(5)
s1=Square(5)

c1.area()
c1.domagic()
s1.area()
