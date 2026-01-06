import data from  '../../../server/etc/data.js'

const lang = 'en'

export default {
  config: {
    lang,
    view: 'Home',
    path: `/${lang}`,
  },
  data: {
    header: data[lang]['header'],
    // ...data[lang]['home'],
    footer: data[lang]['footer'],        
  },  
}
