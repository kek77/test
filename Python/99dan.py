import random as r
while True:
  a = r.randrange(1, 9)
  b = r.randrange(1, 9)
  print(f"{a} * {b} = ?")
  c = int(input())
  if c != 0:
    if c % a == 0 and c % b == 0:
      print("맞습니다!")
    else:
      print("틀렸습니다!")
