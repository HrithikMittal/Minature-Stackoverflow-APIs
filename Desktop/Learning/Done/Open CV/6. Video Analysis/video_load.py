import cv2
import numpy

cap = cv2.VideoCapture('video.mp4')
fourcc = cv2.VideoWriter_fourcc(*'XVID')
fps = 30
framesize = (720,480)
out = cv2.VideoWriter('sample.avi',fourcc,fps,framesize)

while(cap.isOpened()):
    ret, frame = cap.read()
    cv2.imshow('frame',frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
cap.release()
cap.release()
cv2.destroyAllWindows()