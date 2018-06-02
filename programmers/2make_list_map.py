#12345 -> [5, 4, 3, 2, 1]

def digit_reverse(n):
    ls = list(str(n))
    ls.reverse()
    result = []
    for i in range(len(ls)):
        result.append(int(ls[i]))
    return result

print("result : {}".format(digit_reverse(12345)));

#best practice
def digit_reverse2(n):
    return list(map(int, reversed(str(n))))
#map function : map(<function>, <sequence iterable>)

print("result : {}".format(digit_reverse2(12345)))
        
#map 함수 활용
def Add(a):
    return a + a

d1 = {1:'one', 2:'two', 3:'three', 4:'four'}

re1 = list(map(Add, [1, 2, 3])
re2 = list(map(Add, [d1[i] for i in d1]))

print(re1)
print(re2)
