import cv2
import numpy
pic = cv2.imread('image.jpg')

dimpixel = 7
color = 100
space = 100

filter = cv2.bilateralFilter(pic,dimpixel,color,space)

cv2.imshow('filter',filter)
cv2.waitKey(0)
cv2.destroyAllWindows()