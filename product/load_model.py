
# from django.conf import settings
import tensorflow as tf
import numpy as np
import os
# model = load_model('model.h5')



IMAGE_WIDTH=192
IMAGE_HEIGHT=128
IMAGE_SIZE=(IMAGE_WIDTH, IMAGE_HEIGHT)
IMAGE_CHANNELS=3


# # self.image = image
# self.image="media/mypicture2/DF326e.JPG"
# dirs = self.image.split("/")
# imgs= dirs[-1]
# # print(self.image)
# img_address=os.path.join(settings.MEDIA_ROOT,"mypicture2",imgs)
# model_address=os.path.join(settings.MEDIA_ROOT,"mypicture2","model.h5")
model_address="../media/mypicture2/model.h5"
model = tf.keras.models.load_model(model_address)

print(model.summary())