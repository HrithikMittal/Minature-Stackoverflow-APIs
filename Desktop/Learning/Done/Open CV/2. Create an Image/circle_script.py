import numpy as np 
import cv2 

pic = np.zeros((500,500,3),dtype='int8')

cv2.circle(pic,(250,250),100,(123,200,98),3,lineType=8,shift=0)

cv2.imshow('dark',pic)
cv2.waitKey(0)
cv2.destroyAllWindows()