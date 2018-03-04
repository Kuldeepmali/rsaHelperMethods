import NodeRSA from 'node-rsa'

export const createRSAKeyPair = () => {
  const key = new NodeRSA({ b: 2048 })
  return {
    privateKey: key.exportKey('pkcs1-private'),
    publicKey: key.exportKey('pkcs1-public')
  }
}
