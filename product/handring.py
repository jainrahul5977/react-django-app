import cv2
from django.conf import settings
import os
class imageappend:
    
    
    def __init__(self , ring_address , finger=1):
        self.ring_address =ring_address
        self.finger = finger
        dirs = ring_address.split("/")
        ring= dirs[-1]
        base_address=os.path.join(settings.MEDIA_ROOT,"mypicture2","hand.jpg")
        ring_address=os.path.join(settings.MEDIA_ROOT,"mypicture2",ring)
        # base_add='D:rahul\Rahul_Jain\user\media\mypicture\'
        # ring_address=base_add + ring_address
        # base_address=os.path.join(settings.MEDIA_ROOT,"hand.jpg")
        # base_address=base_add+"hand.jpg"
        base=cv2.imread(base_address)
        top=cv2.imread(ring_address)     #"ring_top_view.png"
        # print(ring_address)
        top_resized=cv2.resize(top,(80,40))
        if finger == 1:
            x_offset = 390
            y_offset = 490
            x_end = x_offset+top_resized.shape[1]
            y_end = y_offset + top_resized.shape[0]
            roi = base[y_offset:530, x_offset:470]
        elif finger is 2:
            x_offset = 468
            y_offset = 490
            x_end = x_offset+top_resized.shape[1]
            y_end = y_offset + top_resized.shape[0]
            roi = base[y_offset:530, x_offset:548]
        else :
            x_offset = 547
            y_offset = 490
            x_end = x_offset+top_resized.shape[1]
            y_end = y_offset + top_resized.shape[0]
            roi = base[y_offset:530, x_offset:627]

        alpha=0.4
        beta =alpha+0.3
        dst = cv2.addWeighted(top_resized, alpha, roi, beta, 0.0)

        base[y_offset : y_offset + top_resized.shape[0], x_offset : x_offset + top_resized.shape[1]]= dst
        dummy=base_address.split(".")[0]+ring
        dummy1="media/mypicture2/hand"+ring
        # base_address=os.path.join(settings.MEDIA_ROOT,"mypicture","hand.jpg")

        if finger:
                ring = dirs[-1]
                ring_part=ring.split(".")
                dummy=base_address.split(".")[0]+ring_part[0]+str(finger)+"."+ring_part[1]
        else:
            ring = dirs[-1]
            ring_part=ring.split(".")
            dummy=base_address.split(".")[0]+ring_part[0]+str(1)+"."+ring_part[1]
            # dummy1="/media/mypicture2/hand"+ring


        # cv2.imshow
        cv2.imwrite(dummy,base)
        cv2.destroyAllWindows()
        # return dummy1

