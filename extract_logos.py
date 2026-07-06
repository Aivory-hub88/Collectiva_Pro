from PIL import Image

# Load the page 31 image
img = Image.open('/Users/ireichmann/Documents/Collectiva Pro/public/images/roster-31.png').convert('RGBA')
pixels = list(img.getdata())

new_pixels = []
for r, g, b, a in pixels:
    brightness = (r + g + b) / 3
    if brightness < 200:
        new_pixels.append((255, 255, 255, 255))
    else:
        new_pixels.append((255, 255, 255, 0))

out_img = Image.new('RGBA', img.size)
out_img.putdata(new_pixels)

# Cropping regions based on 1500x844 page size
bboxes = {
    'aivory': (100, 380, 480, 500),
    'nuitree': (480, 380, 800, 500),
    'fifae': (800, 380, 1030, 620),
    'asean': (1000, 380, 1450, 550),
    'artifisial': (100, 500, 480, 620)
}

for name, box in bboxes.items():
    cropped = out_img.crop(box)
    cropped.save(f'/Users/ireichmann/Documents/Collectiva Pro/public/images/logo-{name}.png')
print("Extracted successfully!")

for name, box in bboxes.items():
    cropped = out_img.crop(box)
    cropped.save(f'/Users/ireichmann/Documents/Collectiva Pro/public/images/logo-{name}.png')
print("Extracted successfully!")
