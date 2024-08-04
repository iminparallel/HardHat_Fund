const { ethers, run, network } = require("hardhat")
const { verify } = require("../utils/verify")

async function main() {
    const chainId = network.config.chainId

    const SimpleStorageFactory = await ethers.getContractFactory(
        "SimpleStorage"
    )

    console.log("Deploying contract...")
    const simpleStorage = await SimpleStorageFactory.deploy()
    // Not functionable in version 6^ ethers ----->
    console.log(`Deployed contract to: ${simpleStorage.target}`)
    if (chainId == 11155111) {
        //await simpleStorage.waitForDeployment("6")
        await simpleStorage.deploymentTransaction().wait(6)
        await verify(simpleStorage.target, [])
    }

    const currentValue = await simpleStorage.retrieve()
    console.log(`Current Value is: ${currentValue}`)

    // Update the current value
    const transactionResponse = await simpleStorage.store(7)
    await transactionResponse.wait(1)

    const updatedValue = await simpleStorage.retrieve()
    console.log(`Updated Value is: ${updatedValue}`)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
