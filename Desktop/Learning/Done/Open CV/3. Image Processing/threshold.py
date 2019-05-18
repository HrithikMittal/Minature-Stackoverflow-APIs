import cv2
import numpy as np 
pic = cv2.imread('image.jpg',0)

threshold_value = 200
(T_value,binarythreshold) = cv2.threshold(pic,threshold_value,255,cv2.THRESH_BINARY)
#nverse is white to black and vice versa
cv2.imshow('binary',binarythreshold)

cv2.waitKey(0)
cv2.destroyAllWindows()