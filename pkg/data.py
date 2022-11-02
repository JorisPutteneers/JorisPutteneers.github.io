

import os
# loop over all folders insode of data and store images, text in a js file
path = "data"
with open("./src/data.js", "w", encoding="utf8") as f:
    items = os.listdir(f"./src/{path}")
    
    foo = []
    for item in items:
        if os.path.isdir(f"./src/{path}/{item}") == True:
            
            # print(f'{item} is a folder')
            content = os.listdir(f"./src/{path}/{item}")

            item_no_space = item.replace(" ","_")
            foo.append(item_no_space)
            f.write(f"var {item_no_space} = {{\n")
            f.write(f"'folder_name':'{item}',\n")
            f.write(f"'images': [")

            header_index = 0
            for i,image in enumerate(content):
                if image.endswith((".png", ".jpg", "jpeg")):
                        f.write(f"'./{path}/{item}/{image}', ")
                        if image.split('.')[0] == "header":
                            header_index=i


            f.write(f"],\n")
            for image in content:
                if image.endswith((".txt")):
                        f.write(f"'text':'./{path}/{item}/{image}',\n")
            f.write(f"'header_index': {header_index}\n")
            f.write(f"}}")
            f.write(f"\n\n")

    f.write(f"var objects = {foo}")

    print("github check")