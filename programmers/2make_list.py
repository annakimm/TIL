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
