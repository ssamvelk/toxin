function importAll(r) {
  r.keys().forEach(r);
}


importAll(require.context('../scss/utils', true, /\.scss$/));
importAll(require.context('../blocks', true, /\.scss$|\.css$|\.js$/));
importAll(require.context('../pages', true, /\.scss$|\.css$|\.js$/));
