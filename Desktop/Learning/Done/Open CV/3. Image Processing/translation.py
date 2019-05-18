import cv2
import numpy as np 

pic = cv2.imread('image.jpg')
cols = pic.shape[1]
rows = pic.shape[0]

M = np.float32([[1,0,-150],[0,1,70]])

shifted = cv2.warpAffine(pic,M,(cols,rows))
cv2.imshow('shifted',shifted)

cv2.waitKey(0)
cv2.destroyAllWindows()