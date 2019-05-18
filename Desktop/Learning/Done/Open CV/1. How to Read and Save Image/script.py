import numpy as np
import cv2

img = cv2.imread('image.jpg',-1)  #0 => if the image you want to be black-white and 1 for colored
#Save image in different Format
img = cv2.imwrite('image.png',img)

cv2.imshow('Original',img)
cv2.waitKey(0)
cv2.destoryAllWindow()