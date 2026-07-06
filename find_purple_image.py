import os
from PIL import Image

image_dir = 'public/images/'
images = [f for f in os.listdir(image_dir) if f.startswith('img-') and f.endswith('.png')]

# Target color is roughly #5700FF (87, 0, 255) -> Purple
def color_distance(c1, c2):
    return sum((a - b) ** 2 for a, b in zip(c1, c2))

best_match = None
best_score = 0

for img_name in images:
    try:
        img_path = os.path.join(image_dir, img_name)
        with Image.open(img_path) as img:
            img = img.convert('RGB')
            # Check the center pixel or average color
            img = img.resize((50, 50))
            pixels = list(img.getdata())
            
            # Count pixels close to purple
            purple_pixels = 0
            for p in pixels:
                if p[0] < 120 and p[1] < 100 and p[2] > 200:
                    purple_pixels += 1
            
            if purple_pixels > best_score:
                best_score = purple_pixels
                best_match = img_name
                
    except Exception as e:
        pass

print(f"Best match for purple image: {best_match} with score {best_score}")
