class Actors:
        def __init__(self,n,m,w):
                self.name=n
                self.movies=m
                self.networth=w

        def intro(self):
                print(f"Hi i am {self.name},my most popular movie is{self.movies}and my net worth is {self.networth}")
                
        def __del__(self):
         print('deleting the object')
a1 = Actors('Sivakarthikeyan','Amaran',700000000)
a2 = Actors('SUPERSTAR RAJINI','BAASHA',90000900)

a1.intro()

         
         