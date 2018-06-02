def caesar(s, n):
    num = list(range(1, 54))
    aph = list("abcdefghijklmnopqrstuvwxyz ")
    APH = list("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    APH = APH+aph
    dic = dict(zip(APH, num))
    result = []
    for i in s:
        aph_num = (dic[i] + n - 1)%26
        if dic[i] <= 26 :
            result.append(APH[aph_num])
        elif dic[i] > 26 and dic[i] < 53:
            result.append(aph[aph_num])
        else:
            result.append(" ")
    result = "".join(result)
   
    return result
  

print('s는 "a B z", n은 4인 경우: ' + caesar("a B z", 4))

#other practice
def caesar(s, n):
    eng = "abcdefghijklmnopqrstuvwxyz"
    new = ""
    for i in s :
        if i == " " :
            new += " "
        for j in range(len(eng)) :
            if eng[j] == i.lower() :
                if i.isupper() == True :
                    new += eng[(j+n) % len(eng)].upper()
                else :
                    new += eng[(j+n) % len(eng)]
    return new

print('s는 "a B z", n은 4인 경우: ' + caesar("a B z", 4))
