import { AdMobInterstitial } from 'expo-ads-admob'

export function DrawNumber(
  minNumber: number,
  maxNumber: number,
  numResult: number,
  setNumResult
) {
  if (numResult < 1) {
    numResult = 1
    setNumResult(1)
  }

  let drawNumberResults: Array<number> = []

  for (let i = 0; i < numResult; i++) {
    const min = Math.ceil(minNumber)
    const max = Math.floor(maxNumber) + 1
    const randomNumber = Math.floor(Math.random() * (max - min)) + min

    drawNumberResults = [...drawNumberResults, randomNumber]
  }

  return drawNumberResults
}

export function RollDice(
  maxNumber: number,
  modifier: number = 0,
  numResult: number,
  setNumResult
) {
  if (numResult < 1) {
    numResult = 1
    setNumResult('1')
  }
  let diceRollResults: Array<number> = []

  for (let i = 0; i < numResult; i++) {
    const randomNumber = Math.floor(Math.random() * Math.floor(maxNumber))
    const diceNumber = randomNumber + 1 + Number(modifier)

    diceRollResults = [...diceRollResults, diceNumber]
  }

  return diceRollResults
}

export function FlipCoin() {
  const randomNumber = Math.round(Math.random() * Math.floor(1))
  const resultFlip = randomNumber ? 'Tails' : 'Heads'

  return resultFlip
}

export async function openInterstitialAd(adId: string) {
  await AdMobInterstitial.setAdUnitID(adId)
  await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true })
  await AdMobInterstitial.showAdAsync()
}
