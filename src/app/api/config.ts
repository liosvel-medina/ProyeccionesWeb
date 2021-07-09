const server = 'https://proyecciones.pythonanywhere.com/api/v1/';
const urls = {
  prayingMotives: 'praying-motives/',
  prayingMotivesByDate: 'by-date/',
};

export const config = {
  server: server,
  urls: {
    prayingMotives: `${server}${urls.prayingMotives}`,
    prayingMotivesByDate: `${server}${urls.prayingMotives}${urls.prayingMotivesByDate}`,
  },
};
