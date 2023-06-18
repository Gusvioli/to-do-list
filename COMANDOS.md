# Docker – Parar / Remover todos os containers Docker

<br />

#### <https://emersonbarros.com.br/docker-parar-remover-todos-os-containers-docker/>

- docker stop $(docker ps -a -q)

- docker rm $(docker ps -a -q)

- docker image rm $(docker image ls -a -q)

- docker volume prune

<br />

#### <https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes-pt>

- docker rmi $(docker images -a -q)
