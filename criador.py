import shutil
import os

current_dir = os.getcwd()

nome_entidade_origem = input('Qual o nome da entidade de origem? ')
nome_entidade_destino = input('Qual o nome da entidade de destino? ')
nome_rota = input('Qual o nome da rota? ')
nome_controller = nome_entidade_destino + 'Controller'
nome_router_origem = nome_entidade_origem + 'Router'
nome_router_destino = nome_entidade_destino + 'Router'

original_file = current_dir + '/src/routes/'

index = 'C:/repositorio/marvel_snap/backend/src/index.js'
original_file_correct = 'C:/repositorio/marvel_snap/backend/src/routes/' + str(nome_router_origem) + '.js'
original_file_correct_destino = 'C:/repositorio/marvel_snap/backend/src/routes/' + str(nome_router_destino) + '.js'
original_file_correct_destino_controller = 'C:/repositorio/marvel_snap/backend/src/controller/' + str(nome_controller) + '.js'

# caminhos
source_routes = os.listdir('C:/repositorio/marvel_snap/backend/src/routes/')
source_controller = os.listdir('C:/repositorio/marvel_snap/backend/src/controller/')

for file in source_routes:
    shutil.copy(os.path.join('C:/repositorio/marvel_snap/backend/src/routes/', file), original_file_correct_destino)

with open(original_file_correct_destino, 'w') as file:
    file.write("const express = require('express');\n"
            "const router = express.Router();\n"
            "const "+ str(nome_controller) +" = require('../controller/"+ str(nome_controller) +"');\n\n"

            "router.get('/login/:user/:pass' , "+ str(nome_controller) +".login);\n\n"
            "module.exports = router;\n")

for file in source_controller:
    shutil.copy(os.path.join('C:/repositorio/marvel_snap/backend/src/controller/', file), original_file_correct_destino_controller)
# Controller
with open(original_file_correct_destino_controller, 'r') as file:
    lines = file.readlines()

lines[2] = 'class '+ str(nome_controller) +' {\n'
lines[21] = 'module.exports = new '+ str(nome_controller) +'();'

with open(original_file_correct_destino_controller, 'w') as file:
    file.writelines(lines)

# Index
with open(index, 'r') as file:
    lines = file.readlines()

lines[7] = 'const '+nome_router_destino+' = require("./routes/'+nome_router_destino+'");\n'
lines[25] = "server.use('/"+nome_rota+"' , "+ nome_router_destino +");\n"

with open(index, 'w') as file:
    file.writelines(lines)
    

print('File duplicated successfully!')
