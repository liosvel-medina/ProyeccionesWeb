const server = 'https://proyecciones.pythonanywhere.com/api/v1/';
const urls = {
  prayingMotives: 'praying-motives/'
};

export const config = {
  server: server,
  urls: {
    prayingMotives: `${server}${urls.prayingMotives}`
  },
};
