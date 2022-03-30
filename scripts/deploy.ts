import { ethers } from 'hardhat'
import fs from 'fs'

async function main() {
  const Token = await ethers.getContractFactory('Token')
  const token = await Token.deploy()

  fs.writeFileSync('./address.json', JSON.stringify({ Token: token.address }))
  console.log('Deployed: ', token.address)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
