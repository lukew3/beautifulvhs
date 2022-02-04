lastIndex = 55

lines = ['const tape = require("../textures/tape.png");\n']

for i in range(1, lastIndex+1):
    lines.append(f'const front{i} = require("../textures/{i}/front.jpg");\n')
    lines.append(f'const spine{i} = require("../textures/{i}/spine.jpg");\n')
    lines.append(f'const back{i} = require("../textures/{i}/back.jpg");\n')
    lines.append(f'const top{i} = require("../textures/{i}/top.jpg");\n')
    lines.append(f'const bottom{i} =  require("../textures/{i}/bottom.jpg");\n')

lines.append('module.exports = { tape,\n')

for i in range(1, lastIndex+1):
    lines.append(f'front{i}, spine{i}, back{i}, top{i}, bottom{i},\n')

lines.append('};\n')

f = open("src/images.js", "w")
f.writelines(lines)
f.close()
