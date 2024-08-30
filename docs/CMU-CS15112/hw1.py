def roundHalfUp(n):
    import math
    return int(math.floor(n+0.5))

def colorBlender(rgb1, rgb2, midpoints, n):
    if n<0 or n>midpoints+1:
        return None
    
    r1=rgb1//1000000
    g1=(rgb1//1000)%1000
    b1=rgb1%1000

    r2=rgb2//1000000
    g2=(rgb2//1000)%1000
    b2=rgb2%1000

    steps=midpoints+1

    rstep=(r2-r1)/steps
    gstep=(g2-g1)/steps
    bstep=(b2-b1)/steps

    rn=roundHalfUp(r1+rstep*n)
    gn=roundHalfUp(g1+gstep*n)
    bn=roundHalfUp(b1+bstep*n)

    return rn*1000000+gn*1000+bn
