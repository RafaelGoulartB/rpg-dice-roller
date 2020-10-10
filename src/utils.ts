import { AdMobInterstitial } from 'expo-ads-admob'

interface DrawNumbersProps {
  minNumber: number
  maxNumber: number
  modifier: number
  numResult: number
  setNumResult: (num: number) => void
}

interface DiceRollProps {
  maxNumber: number
  modifier: number
  numResult: number
  setNumResult: (num: number) => void
}

export const DrawNumber = ({ minNumber, maxNumber, modifier, numResult, setNumResult }: DrawNumbersProps) => {
  if (numResult < 1) {
    numResult = 1
    setNumResult(1)
  }

  let drawNumberResults: Array<number> = []

  for (let i = 0; i < numResult; i++) {
    const min = Math.ceil(minNumber)
    const max = Math.floor(maxNumber) + 1
    const randomNumber = (Math.floor(Math.random() * (max - min)) + min) + modifier

    drawNumberResults = [...drawNumberResults, randomNumber]
  }

  return drawNumberResults
}

export const RollDice = ({ maxNumber, modifier, numResult, setNumResult }: DiceRollProps) => {
  if (numResult < 1) {
    numResult = 1
    setNumResult(1)
  }
  let diceRollResults: Array<number> = []

  for (let i = 0; i < numResult; i++) {
    const randomNumber = Math.floor(Math.random() * Math.floor(maxNumber))
    const diceNumber = randomNumber + 1 + modifier

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
