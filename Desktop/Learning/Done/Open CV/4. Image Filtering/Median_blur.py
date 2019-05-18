import cv2
import numpy
pic = cv2.imread('image.jpg')

kernal = 3 # It means a matrix of 3X3
median = cv2.medianBlur(pic,kernal)

cv2.imshow('median',median)
cv2.waitKey(0)
cv2.destroyAllWindows()