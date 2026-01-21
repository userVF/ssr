const langSchema = {
  params: {
    type: 'object',
    properties: {
      lang: { type: 'string', enum: ['ru', 'en', 'kz'] },      
    }
  }
}

export { langSchema }