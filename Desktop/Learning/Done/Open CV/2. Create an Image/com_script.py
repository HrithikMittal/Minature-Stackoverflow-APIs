import numpy as np 
import cv2 

pic = np.zeros((500,500,3),dtype='int8')

cv2.rectangle(pic,(0,0),(150,150),(123,200,98),3,lineType=8,shift=0)
cv2.line(pic,(0,150),(150,150),(123,200,98),3,lineType=8,shift=0)


font = cv2.FONT_HERSHEY_DUPLEX
cv2.putText(pic,'I am Adhikansh',(100,100),font,3,(255,255,255),4,cv2.LINE_8)

cv2.imshow('dark',pic)
cv2.waitKey(0)
cv2.destroyAllWindows()