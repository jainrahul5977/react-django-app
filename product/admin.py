from django.contrib import admin
from .models import Product , ProductAttributes , ProductImage,ProductCompairImage




# Register your models here.
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name','sku','type','price','style','metal','size','available']


admin.site.register(Product,ProductAdmin)



class ProductAttributesnAdmin(admin.ModelAdmin):
    list_display = ['product','base_thickness','base_width','shoulder_width','top_height','stone_shape','dimensions','clairity','top_dimensions','stone_type','metal_weight','discription','avaliable']



admin.site.register(ProductAttributes,ProductAttributesnAdmin)



class ProductImageAdmin(admin.ModelAdmin):
    list_display = ['id','product','picture']


admin.site.register(ProductImage,ProductImageAdmin)


class ProductCompairImageAdmin(admin.ModelAdmin):
    list_display = ['id','picture']


admin.site.register(ProductCompairImage,ProductCompairImageAdmin)

    