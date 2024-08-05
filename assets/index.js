window.onload = function () {
  initResumeHTML()
  setResumeFile()
};
function setResumeFile() {
  generateDownloadLink('./files/resume.pdf')
  generateDownloadLink('./files/resume.md')
}

function generateDownloadLink(href) {
  const link = document.createElement('a');
  link.href = href;

  const fileType = href.slice(href.lastIndexOf('.') + 1)

  link.download = `康佳-后端-18232110170.${fileType}`;
  link.className = `pin ${fileType}_downloader`;
  link.innerText = fileType.toUpperCase();

  document.getElementsByTagName('body')[0].appendChild(link);
}

function initResumeHTML() {
  setFavicon();
  setTitle();
}
function setFavicon() {
  const link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = './assets/favicon.png';
  document.getElementsByTagName('head')[0].appendChild(link);
}

function setTitle() {
  document.title = '康佳的简历';
}
