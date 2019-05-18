import numpy as np 
import cv2 

pic = np.zeros((1000,1000,3),dtype='int8')

font = cv2.FONT_HERSHEY_DUPLEX
cv2.putText(pic,'I am Adhikansh',(100,100),font,3,(255,255,255),4,cv2.LINE_8)


cv2.imshow('dark',pic)

cv2.waitKey(0)
cv2.destroyAllWindows()