import NodeRSA from 'node-rsa'

export const _encryptSecretKeyRSA = (secretKey, rsaPublicKey) => {
  const rsa = NodeRSA()
  rsa.importKey(rsaPublicKey)
  return rsa.encrypt(secretKey, 'hex')
}

export const _decryptSecretKeyRSA = (secretKey, rsaPrivateKey) => {
  const rsa = NodeRSA()
  rsa.importKey(rsaPrivateKey)
  const secretBuffer = Buffer.from(secretKey, 'hex')
  return rsa.decrypt(secretBuffer)
}
