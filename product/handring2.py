import cv2
from PIL import Image
import os
from django.conf import settings

class imageappend2:
    
    
    def __init__(self , ring_address , finger=1):
        self.ring_address = ring_address
        self.finger = finger
        dirs = ring_address.split("/")
        ring= dirs[-1]
        base_address=os.path.join(settings.MEDIA_ROOT,"mypicture2","hand.png")
        ring_address=os.path.join(settings.MEDIA_ROOT,"mypicture2",ring)


        base=Image.open(base_address)
        top=Image.open(ring_address) 
        if finger == 1:
            x_offset = 390
            y_offset = 490
            top_resized=top.resize((round(78), round(40)))
        elif finger == 2:
            x_offset = 466
            y_offset = 490
            top_resized=top.resize((round(80), round(40)))
        else :
            x_offset = 544
            y_offset = 490
            top_resized=top.resize((round(87), round(40)))

        base.paste(top_resized, (x_offset,y_offset), mask = top_resized)

# Displaying the image

        if finger:
                ring = dirs[-1]
                ring_part=ring.split(".")
                dummy=base_address.split(".")[0]+ring_part[0]+str(finger)+"."+ring_part[1]
        else:
            ring = dirs[-1]
            ring_part=ring.split(".")
            dummy=base_address.split(".")[0]+ring_part[0]+str(1)+"."+ring_part[1]
            # dummy1="/media/mypicture2/hand"+ring

        # base.show()
        base.save(dummy, 'png')
        print("hi")
        
