import { ethers, run, network } from 'hardhat'
import fs from 'fs'

async function main() {
  const address = JSON.parse(fs.readFileSync('./address.json').toString()) as any

  console.log(address)
  await run('verify:verify', {
    address: address.Token,
    network: network.name,
    contract: 'contracts/Token.sol:Token',
  })
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
