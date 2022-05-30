lastIndex = 86

lines = ['import tape from "../textures/tape.png";\n']

for i in range(1, lastIndex+1):
    lines.append(f'import front{i} from "../textures/{i}/front.jpg";\n')
    lines.append(f'import spine{i} from "../textures/{i}/spine.jpg";\n')
    lines.append(f'import back{i} from "../textures/{i}/back.jpg";\n')
    lines.append(f'import top{i} from "../textures/{i}/top.jpg";\n')
    lines.append(f'import bottom{i} from "../textures/{i}/bottom.jpg";\n')

lines.append('export { tape,\n')

for i in range(1, lastIndex+1):
    lines.append(f'front{i}, spine{i}, back{i}, top{i}, bottom{i},\n')

lines.append('};\n')

f = open("src/images.js", "w")
f.writelines(lines)
f.close()
