# Docker – Parar / Remover todos os containers Docker

### docker stop $(docker ps -a -q)
### docker rm $(docker ps -a -q)
### docker image rm $(docker image ls -a -q)
### docker volume prune

ou

### docker rmi $(docker images -a -q)