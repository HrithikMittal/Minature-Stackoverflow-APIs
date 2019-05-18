import cv2
import numpy
pic = cv2.imread('image.jpg')

matrix = (7,7)

blur = cv2.GaussianBlur(pic,matrix,0)

cv2.imshow('blurred',blur)
cv2.waitKey(0)
cv2.destroyAllWindows()