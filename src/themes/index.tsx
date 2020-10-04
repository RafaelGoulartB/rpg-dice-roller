export interface Theme {
  background: string
  headerColor: string
  primaryColor: string
  secondaryColor: string
  label: string
  primaryText: string
  secondaryText: string
  coinBcg: string
  coinBorder: string
}

export const light: Theme = {
  background: '#fff',
  headerColor: '#6200ee',
  primaryColor: '#fff',
  secondaryColor: '#6200ee',
  label: '#000',
  primaryText: '#000',
  secondaryText: '#fff',
  coinBcg: '#c4c4c4',
  coinBorder: '#a7a7a7'
}

export const dark: Theme = {
  background: '#121212',
  headerColor: '#1d1d1d',
  primaryColor: '#1d1d1d',
  secondaryColor: '#6200ee',
  label: '#fff',
  primaryText: '#fff',
  secondaryText: '#fff',
  coinBcg: '#555555',
  coinBorder: '#a7a7a7'
}
