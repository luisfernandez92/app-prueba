export const environment = {
  production: false,
  carsApiUrl: 'https://qa.n8n.dalton.com.mx/webhook/dsn/cars',
  /**
   * El webhook responde 401 sin encabezado de autenticación.
   * El valor real NO se versiona: se inyecta localmente o por pipeline.
   */
  carsApiAuthHeaderName: 'Authorization',
  carsApiAuthHeaderValue: 'xTA'
};
