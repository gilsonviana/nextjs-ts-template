export interface IConfig {
  domain: string
  social: ConfigSocialKeys<ConfigSocialOptions>
}

type ConfigSocialOptions = {
  facebook: string
  instagram: string
  linkedin: string
}

type ConfigSocialKeys<Options> = {
  [Properties in keyof Options]: string
}

const Config: IConfig = {
  domain: 'https://www.google.com',
  social: {
    facebook: '',
    instagram: '',
    linkedin: ''
  }
}

export default Config