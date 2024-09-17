def findZeroWithBisection(f, x0, x1, epsilon):
    if f(x0)*f(x1)>=0:
        return None
    while (x1-x0)>epsilon:
        xmid=(x0+x1)/2.0
        fmid=f(xmid)
        if abs(fmid)<epsilon:
            return xmid
        if fmid*f(x0)<0:
            x1=xmid
        else:
            x0=xmid
    return (x0+x1)/2.0