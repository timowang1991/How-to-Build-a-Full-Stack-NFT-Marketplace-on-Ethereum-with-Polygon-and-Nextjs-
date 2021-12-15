# How to run
* start up web app
```shell
docker-compose up
```

* start up localhost blockchain
```shell
docker exec -it nft-app sh
npx hardhat node
```

* compile and deploy contract
```shell
docker exec -it nft-app sh
npx hardhat compile
npx hardhat run scripts/deploy.js --network localhost

# if you want to deploy to mumbai
npx hardhat run scripts/deploy.js --network localhost
```

# How to create a new hardhat project from scratch?
```shell
docker-compose up
```

```shell
docker exec -it nft-app sh
npx hardhat
```