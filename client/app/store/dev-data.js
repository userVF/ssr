import data from  '../../../server/utils/data.js'

const lang = 'en'

export default {
  config: {
    lang,
    view: 'Home',
    path: `/${lang}`,
  },
  data: {
    header: data[lang]['header'],
    ...data[lang]['home'], // api/home call on mount is disabled
    footer: data[lang]['footer'],        
  },  
}
