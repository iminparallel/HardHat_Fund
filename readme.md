<ul>
<li> 
SEPOLIA_RPC_URL= </br>
PRIVATE_KEY= </br>
ETHERSCAN_API_KEY= </br>
COINMARKETCAP_API_KEY= </br>
</li>
<li> yarn init </li>

<li> yarn add --dev hardhat </li>

<li> yarn hardhat </li>

<li> yarn add --dev prettier prettier-plugin-solidity </li>

<li> add .prettierrc at root with content of 
          {
           "tabWidth": 4,
           "useTabs": false,
           "semi": false,  
           "singleQuote": false
          }</li>

<li>yarn hardhat run scripts/deploy.js, on ethers above v6 don't need the deployed function, and contract.address got changed to contract.target
</li>

<li>yarn hardhat run scripts/deploy.js --network hardhat , to run on a hardhat network</li>

<li>add new network in hardhat.config 
yarn hardhat run scripts/deploy.js --network sepolia -> to deploy to a testnet</li>

<li>yarn add --dev @nomicfoundation/hardhat-verify -> add it in hardhat.config</li>

<li>get etherscan api key, add it in hardhat.config, copy the utils/verify.js file, import verify in deploy script</li>

<li>await simpleStorage.deploymentTransaction().wait(6) -> to wait for 6 blocks to be mined
</li>

<li>create new folder tasks
write a task 
import the task in hardhat.config 
run yarn hardhat -> new task should be listed now
yarn hardhat new-task --network network-name</li>

<li>yarn hardhat node</li>

<li>hardhat network is separate from local network 
</li>

<li>create a localhost network in hardhat.config like          
localhost: {
            url: "http://localhost:8545",
            chainId: 31337,
        },
</li>

<li>while running node, yarn hardhat run scripts/deploy.js --network localhost
</li>

<li>this should result in some logging activity on the running node 
</li>

<li>yarn hardhat console --network localhost</li>

<li>yarn hardhat clean -> deletes artifacts and cache</li>

<li> yarn hardhat test --> to run tests</li>
<li>yarn hardhat test --grep</li>
<li>it.only() --> only runs a single test</li>
<li>yan add --dev hardhat-gas-reporter</li>
<li>
add this in hardhat config
require("hardhat-gas-reporter")

  gasReporter: {
    enabled: true,
    currency: "USD",
    outputFile: "gas-report.txt",
    noColors: true,
    coinmarketcap: COINMARKETCAP_API_KEY,
  },
</li>
<li>yarn add --dev solidity-coverage -> add it to hardhat config as well </li>
<li>yarn hardhat coverage</li>
</ul>