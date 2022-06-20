import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'

import { ethers } from 'hardhat'
import lossless from '../../configs/lossless.json'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments } = hre
  const { deploy } = deployments
  const [deployer] = await ethers.getSigners()

  const timelockPeriod = 10000

  await deploy('Thougthz', {
    from: deployer.address,
    args: [lossless.bsc_mainnet.controller, timelockPeriod],
    log: true,
  })
}
export default func

func.tags = ['Thougthz.deploy']
func.skip = async (hre) => !hre.network.tags.mainnet
