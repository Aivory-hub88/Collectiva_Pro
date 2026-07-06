import urllib.request

req_coke = urllib.request.Request(
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/800px-Coca-Cola_logo.svg.png',
    headers={'User-Agent': 'Mozilla/5.0'}
)
with urllib.request.urlopen(req_coke) as response, open('public/images/logo-coca-cola.png', 'wb') as out_file:
    out_file.write(response.read())

req_heinz = urllib.request.Request(
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Heinz_logo.svg/800px-Heinz_logo.svg.png',
    headers={'User-Agent': 'Mozilla/5.0'}
)
with urllib.request.urlopen(req_heinz) as response, open('public/images/logo-heinz.png', 'wb') as out_file:
    out_file.write(response.read())

print("Downloaded successfully.")
